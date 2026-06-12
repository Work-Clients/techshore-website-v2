import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import FadeIn from './FadeIn'
import RippleButton from './RippleButton'
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../data/images'
import { EASE_SMOOTH } from '../lib/motion'

const initialForm = { name: '', phone: '', email: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.phone.trim()) errors.phone = 'Phone is required'
  else if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim())) errors.phone = 'Enter a valid phone number'
  if (!form.email.trim()) errors.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errors.email = 'Enter a valid email'
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status) setStatus(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus('error')
      return
    }

    setErrors({})
    setStatus('success')
    setForm(initialForm)
  }

  return (
    <AnimatedSection id="contact" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-50/50 via-transparent to-royal/5 pointer-events-none" aria-hidden="true" />

      <div className="max-w-3xl mx-auto relative">
        <FadeIn className="text-center">
          <span className="text-royal font-semibold text-sm tracking-wider uppercase">Contact</span>
          <h2 className="section-title mt-2">Get Started Today</h2>
          <p className="section-subtitle mx-auto">
            Ready to find your perfect workspace? Send us a message and we&apos;ll get back to you shortly.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="mt-12 card-base p-8 sm:p-10" noValidate>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`input-field ${errors.name ? 'input-error' : ''}`}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`input-field ${errors.phone ? 'input-error' : ''}`}
                  placeholder="+91 98765 43210"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'input-error' : ''}`}
                placeholder="you@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} /> {errors.email}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                placeholder="Tell us about your workspace needs..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle size={14} /> {errors.message}
                </p>
              )}
            </div>

            <AnimatePresence mode="wait">
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: EASE_SMOOTH }}
                  className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 flex items-center gap-3 text-green-700"
                  role="status"
                >
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">Thank you! Your message has been sent. We&apos;ll be in touch soon.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <RippleButton type="submit" className="btn-primary flex-1">
                <Send size={18} />
                Submit
              </RippleButton>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-outline flex-1">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-4 text-center text-sm text-navy/50">
              Or reach us directly at{' '}
              <a href={WHATSAPP_URL} className="text-royal font-medium hover:underline">
                {WHATSAPP_DISPLAY}
              </a>
            </p>
          </form>
        </FadeIn>
      </div>
    </AnimatedSection>
  )
}
