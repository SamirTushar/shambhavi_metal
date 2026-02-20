import net from 'net'
import tls from 'tls'
import type { InquiryPayload } from './inquiry-store'

type EmailConfig = {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  from: string
  to: string
}

function getConfig(): EmailConfig | null {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT)
  const secure = process.env.SMTP_SECURE === 'true'
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM
  const to = process.env.SMTP_TO || 'info@shambhavimetal.com'

  if (!host || !port || !user || !pass || !from) return null
  return { host, port, secure, user, pass, from, to }
}

function waitForResponse(socket: net.Socket | tls.TLSSocket): Promise<string> {
  return new Promise((resolve, reject) => {
    const onData = (chunk: Buffer) => {
      const text = chunk.toString('utf8')
      if (/^\d{3}[\s-]/m.test(text)) {
        cleanup()
        resolve(text)
      }
    }

    const onError = (err: Error) => {
      cleanup()
      reject(err)
    }

    const onTimeout = () => {
      cleanup()
      reject(new Error('SMTP connection timed out'))
    }

    const cleanup = () => {
      socket.off('data', onData)
      socket.off('error', onError)
      socket.off('timeout', onTimeout)
    }

    socket.on('data', onData)
    socket.on('error', onError)
    socket.on('timeout', onTimeout)
  })
}

async function sendCommand(socket: net.Socket | tls.TLSSocket, command: string, expectCodes: number[]) {
  socket.write(`${command}\r\n`)
  const response = await waitForResponse(socket)
  const code = Number(response.slice(0, 3))
  if (!expectCodes.includes(code)) {
    throw new Error(`SMTP command failed: ${command} -> ${response.trim()}`)
  }
}

function buildMailText(payload: InquiryPayload) {
  return [
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Inquiry Type: ${payload.inquiryType}`,
    `Source Page: ${payload.sourcePage}`,
    `Created At: ${payload.createdAt}`,
    '',
    'Message:',
    payload.message
  ].join('\n')
}

async function sendViaSmtp(config: EmailConfig, payload: InquiryPayload) {
  const subject = `[${payload.inquiryType}] ${payload.company} - Shambhavi Website Inquiry`
  const body = buildMailText(payload)

  const socket = await new Promise<net.Socket | tls.TLSSocket>((resolve, reject) => {
    const timeoutMs = 15000
    if (config.secure) {
      const secureSocket = tls.connect(
        {
          host: config.host,
          port: config.port,
          servername: config.host,
          timeout: timeoutMs
        },
        () => resolve(secureSocket)
      )
      secureSocket.once('error', reject)
      return
    }

    const plainSocket = net.connect({ host: config.host, port: config.port }, () => resolve(plainSocket))
    plainSocket.setTimeout(timeoutMs)
    plainSocket.once('error', reject)
  })

  try {
    const greeting = await waitForResponse(socket)
    if (!greeting.startsWith('220')) {
      throw new Error(`SMTP greeting failed: ${greeting.trim()}`)
    }

    await sendCommand(socket, `EHLO shambhavimetal.com`, [250])
    await sendCommand(socket, 'AUTH LOGIN', [334])
    await sendCommand(socket, Buffer.from(config.user, 'utf8').toString('base64'), [334])
    await sendCommand(socket, Buffer.from(config.pass, 'utf8').toString('base64'), [235])
    await sendCommand(socket, `MAIL FROM:<${config.from}>`, [250])
    await sendCommand(socket, `RCPT TO:<${config.to}>`, [250, 251])
    await sendCommand(socket, 'DATA', [354])

    const message = [
      `From: ${config.from}`,
      `To: ${config.to}`,
      `Subject: ${subject}`,
      'MIME-Version: 1.0',
      'Content-Type: text/plain; charset=UTF-8',
      '',
      body,
      '.',
      ''
    ].join('\r\n')

    socket.write(message)
    const dataResponse = await waitForResponse(socket)
    if (!dataResponse.startsWith('250')) {
      throw new Error(`SMTP data failed: ${dataResponse.trim()}`)
    }

    await sendCommand(socket, 'QUIT', [221])
  } finally {
    socket.end()
  }
}

export async function sendInquiryEmail(payload: InquiryPayload): Promise<{ sent: boolean; reason?: string }> {
  const config = getConfig()
  if (!config) {
    return { sent: false, reason: 'SMTP configuration missing. Inquiry stored locally.' }
  }

  try {
    await sendViaSmtp(config, payload)
    return { sent: true }
  } catch {
    return { sent: false, reason: 'SMTP send failed. Inquiry stored locally.' }
  }
}
