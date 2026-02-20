'use client'

import { useState } from 'react'

type InquiryFormProps = {
  sourcePage: string
}

const initialState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  inquiryType: 'General Inquiry',
  message: ''
}

export function InquiryForm({ sourcePage }: InquiryFormProps) {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [note, setNote] = useState('')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setNote('')

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, sourcePage })
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Unable to submit your inquiry.')
      }
      setStatus('success')
      setNote(data.message || 'Inquiry submitted successfully.')
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
      <button type="submit" className="primary-btn" disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending...' : 'Send Inquiry'}
      </button>
      <p className="text-sm text-muted">We respond to all inquiries within 24 hours. Your information is kept confidential.</p>
      {note ? (
        <p className={status === 'success' ? 'text-sm text-accent' : 'text-sm text-[#f29a9a]'}>{note}</p>
      ) : null}
    </form>
  )
}
