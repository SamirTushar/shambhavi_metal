import { promises as fs } from 'fs'
import path from 'path'

export type InquiryPayload = {
  name: string
  company: string
  email: string
  phone?: string
  inquiryType: string
  message: string
  sourcePage: string
  createdAt: string
}

type StoredInquiry = InquiryPayload & { id: string }

const dataFile = path.join(process.cwd(), 'data', 'inquiries.json')

async function readInquiries(): Promise<StoredInquiry[]> {
  try {
    const raw = await fs.readFile(dataFile, 'utf8')
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export async function appendInquiry(payload: InquiryPayload): Promise<string> {
  const id = crypto.randomUUID()
  const list = await readInquiries()
  list.push({ id, ...payload })
  await fs.mkdir(path.dirname(dataFile), { recursive: true })
  await fs.writeFile(dataFile, JSON.stringify(list, null, 2), 'utf8')
  return id
}
