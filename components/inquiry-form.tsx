'use client'

import { useState } from 'react'

type InquiryFormProps = {
  sourcePage: string
  showEmailButton?: boolean
}

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  inquiryType: 'General Inquiry',
  message: ''
}

export function InquiryForm({ sourcePage, showEmailButton = false }: InquiryFormProps) {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [note, setNote] = useState('')

  function buildWhatsAppMessage() {
    return [
      'New Inquiry - Shambhavi Metal Alloys',
      '',
      `Source: ${sourcePage}`,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Inquiry Type: ${form.inquiryType}`,
      '',
      'Message:',
      form.message
    ].join('\n')
  }

  function buildEmailBody() {
    return [
      'New Inquiry - Shambhavi Metal Alloys',
      '',
      `Source: ${sourcePage}`,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Inquiry Type: ${form.inquiryType}`,
      '',
      'Message:',
      form.message
    ].join('\n')
  }

  function onEmailClick() {
    if (!form.name || !form.company || !form.email || !form.inquiryType || !form.message) {
      setStatus('error')
      setNote('Please complete all required fields before sending on email.')
      return
    }

    const subject = encodeURIComponent(`[${form.inquiryType}] ${form.company} - Website Inquiry`)
    const body = encodeURIComponent(buildEmailBody())
    window.location.href = `mailto:info@shambhavimetal.com?subject=${subject}&body=${body}`
    setStatus('success')
    setNote('Email draft opened. Please send it to complete submission.')
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setNote('')

    try {
      const whatsappText = encodeURIComponent(buildWhatsAppMessage())
      const whatsappUrl = `https://wa.me/919891047155?text=${whatsappText}`
      const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      if (!popup) throw new Error('Please allow popups to continue to WhatsApp.')

      setStatus('success')
      setNote('WhatsApp opened with your inquiry details. Please send the message to complete submission.')
      setForm(initialState)
    } catch (err) {
      setStatus('error')
      setNote(err instanceof Error ? err.message : 'Submission failed. Please try again.')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="form-field"
          placeholder="Full Name"
          value={form.name}
          required
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          className="form-field"
          placeholder="Company/Organization"
          value={form.company}
          required
          onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          className="form-field"
          placeholder="Email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        <input
          className="form-field"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
        />
      </div>
      <select
        className="form-field"
        value={form.inquiryType}
        onChange={(e) => setForm((f) => ({ ...f, inquiryType: e.target.value }))}
      >
        <option>General Inquiry</option>
        <option>Request for Quote</option>
        <option>Grade Recommendation</option>
        <option>Bulk Order</option>
        <option>Partnership</option>
      </select>
      <textarea
        className="form-field min-h-[140px]"
        placeholder="Message"
        required
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
      />
      <div className="flex flex-wrap gap-3">
        <button type="submit" className="primary-btn" disabled={status === 'loading'}>
          {status === 'loading' ? 'Opening...' : 'Send on WhatsApp'}
        </button>
        {showEmailButton ? (
          <button type="button" onClick={onEmailClick} className="outline-btn">
            Send on Email
          </button>
        ) : null}
      </div>
      <p className="text-sm text-muted">
        Your inquiry details will open in WhatsApp for direct submission to our team.
      </p>
      {note ? (
        <p className={status === 'success' ? 'text-sm text-accent' : 'text-sm text-[#f29a9a]'}>{note}</p>
      ) : null}
    </form>
  )
}
