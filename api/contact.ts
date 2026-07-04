import type { VercelRequest, VercelResponse } from '@vercel/node'

interface ContactPayload {
  name: string
  email: string
  message: string
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body as ContactPayload

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const recipient = process.env.CONTACT_EMAIL
  const apiKey = process.env.RESEND_API_KEY

  if (!recipient || !apiKey) {
    return res.status(503).json({ error: 'Contact service not configured' })
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Loftsy <onboarding@resend.dev>',
        to: [recipient],
        subject: `Loftsy Contact: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    })

    if (!response.ok) {
      throw new Error('Email delivery failed')
    }

    return res.status(200).json({ success: true })
  } catch {
    return res.status(500).json({ error: 'Failed to send message' })
  }
}
