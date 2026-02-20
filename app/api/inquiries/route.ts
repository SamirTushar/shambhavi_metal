import { NextResponse } from 'next/server'
import { sendInquiryEmail } from '../../../lib/email'
import { appendInquiry } from '../../../lib/inquiry-store'

export const runtime = 'nodejs'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = String(body.name || '').trim()
    const company = String(body.company || '').trim()
    const email = String(body.email || '').trim()
    const phone = String(body.phone || '').trim()
    const inquiryType = String(body.inquiryType || '').trim()
    const message = String(body.message || '').trim()
    const sourcePage = String(body.sourcePage || 'website').trim()

    if (!name || !company || !email || !inquiryType || !message) {
      return NextResponse.json(
        { success: false, message: 'Please complete all required fields.' },
        { status: 400 }
      )
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: 'Please enter a valid email address.' }, { status: 400 })
    }

    const payload = {
      name,
      company,
      email,
      phone,
      inquiryType,
      message,
      sourcePage,
      createdAt: new Date().toISOString()
    }

    const submissionId = await appendInquiry(payload)

    try {
      const emailResult = await sendInquiryEmail(payload)
      if (!emailResult.sent) {
        return NextResponse.json({
          success: true,
          submissionId,
          message: 'Inquiry stored successfully. Email notification is not configured yet.'
        })
      }
    } catch {
      return NextResponse.json({
        success: true,
        submissionId,
        message: 'Inquiry stored successfully. Email send failed; please verify SMTP credentials.'
      })
    }

    return NextResponse.json({
      success: true,
      submissionId,
      message: 'Inquiry submitted successfully. We will respond within 24 hours.'
    })
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request payload.' }, { status: 400 })
  }
}
