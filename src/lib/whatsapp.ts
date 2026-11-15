const WHATSAPP_NUMBER = '5592992258412'

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type ContactFormData = {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
}

export function buildContactWhatsAppMessage(data: ContactFormData) {
  const lines = [
    'Olá Édipo, vim pelo site e quero conversar sobre um sistema.',
    '',
    `Nome: ${data.name.trim()}`,
    `E-mail: ${data.email.trim()}`,
  ]

  if (data.phone?.trim()) {
    lines.push(`WhatsApp: ${data.phone.trim()}`)
  }
  if (data.company?.trim()) {
    lines.push(`Empresa: ${data.company.trim()}`)
  }

  lines.push('', `Mensagem: ${data.message.trim()}`)
  return lines.join('\n')
}
