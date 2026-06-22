'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    Mail, Phone, MapPin, Clock, Send,
    CheckCircle, MessageSquare, User, AtSign, AlertCircle, Rocket
} from 'lucide-react'

import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa'

import { AnimatedBackground } from '@/animationbackground/page'
import { sendMessage } from './contact.action'

// ─── Hero ──────────────────────────────────────────────────
function ContactHero() {
    return (
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#0A0A0A]">
            <AnimatedBackground particleCount={6} colors={['#F9C81B', '#3b82f6']} />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Get in Touch
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        Let's Build Something <br />
                        <span className="bg-gradient-to-r from-[#F9C81B] via-yellow-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Amazing Together
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60 text-balance">
                        Have a project in mind, a question, or just want to say hello? We'd love
                        to hear from you. Reach out and we'll respond within 24 hours.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Contact Section ──────────────────────────────────────
function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [serverError, setServerError] = useState('')

    const validate = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
        if (!formData.message.trim()) newErrors.message = 'Message is required'
        return newErrors
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
        setServerError('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setStatus('loading')
        setServerError('')

        try {
            const result = await sendMessage({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
            })

            if (result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setStatus('idle'), 5000)
            } else {
                setStatus('error')
                setServerError(result.error || 'Failed to send message. Please try again.')
                setTimeout(() => setStatus('idle'), 5000)
            }
        } catch {
            setStatus('error')
            setServerError('Something went wrong. Please try again later.')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    // ─── Clean Contact Information (no steps or descriptions) ──
    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'hello@bhutly.com',
            href: 'mailto:hello@bhutly.com',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+975 17 123 456',
            href: 'tel:+97517123456',
        },
        {
            icon: FaWhatsapp,
            label: 'WhatsApp',
            value: '+975 17 123 456',
            href: 'https://wa.me/97517123456',
        },
        {
            icon: MapPin,
            label: 'Address',
            value: 'Thimphu, Bhutan 🇧🇹',
            href: '#',
        },
        {
            icon: Clock,
            label: 'Business Hours',
            value: 'Mon – Fri, 9:00 AM – 5:00 PM',
            href: '#',
        },
    ]

    return (
        <section className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#8b5cf6', '#f472b6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left Column: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-white">Contact Information</h2>
                            <p className="mt-2 text-white/50 text-sm">
                                Reach out through any of the channels below, or fill out the form.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#F9C81B]/30 transition-all duration-300 group"
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F9C81B]/10 flex items-center justify-center group-hover:bg-[#F9C81B]/20 transition-colors">
                                        <item.icon className="h-5 w-5 text-[#F9C81B]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/40">{item.label}</p>
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="text-white hover:text-[#F9C81B] transition-colors font-medium"
                                            >
                                                {item.value}
                                            </Link>
                                        ) : (
                                            <p className="text-white font-medium">{item.value}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                                Follow Us
                            </h4>
                            <div className="flex gap-3">
                                <Link
                                    href="#"
                                    className="text-white/40 hover:text-white transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10"
                                    aria-label="Facebook"
                                >
                                    <FaFacebook className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white/40 hover:text-white transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white/40 hover:text-white transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="h-5 w-5" />
                                </Link>
                                <Link
                                    href="#"
                                    className="text-white/40 hover:text-white transition-colors bg-white/5 p-2.5 rounded-full hover:bg-white/10"
                                    aria-label="Whatsapp"
                                >
                                    <FaWhatsapp className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Form (unchanged) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl shadow-black/20">
                            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>

                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3"
                                >
                                    <CheckCircle className="h-5 w-5" />
                                    <span>Message sent successfully! We'll get back to you soon.</span>
                                </motion.div>
                            )}

                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3"
                                >
                                    <AlertCircle className="h-5 w-5" />
                                    <span>{serverError || 'Something went wrong. Please try again.'}</span>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/60 mb-1.5">
                                        Full Name *
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full bg-white/5 backdrop-blur-sm border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors`}
                                            placeholder="Your name"
                                        />
                                    </div>
                                    {errors.name && (
                                        <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1.5">
                                        Email Address *
                                    </label>
                                    <div className="relative">
                                        <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full bg-white/5 backdrop-blur-sm border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors`}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-white/60 mb-1.5">
                                        Subject *
                                    </label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className={`w-full bg-white/5 backdrop-blur-sm border ${errors.subject ? 'border-red-500/50' : 'border-white/10'} rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors`}
                                            placeholder="What's this about?"
                                        />
                                    </div>
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-400">{errors.subject}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-1.5">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 backdrop-blur-sm border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors resize-y`}
                                        placeholder="Tell us about your project or question..."
                                    />
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <span className="animate-spin h-4 w-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send className="h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// ─── Map Section ──────────────────────────────────────────
function MapSection() {
    return (
        <section className="relative overflow-hidden py-12 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={3} colors={['#F9C81B', '#3b82f6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <div className="relative aspect-[16/6] min-h-[300px] w-full">
                        <iframe
                            src="https://www.openstreetmap.org/export/embed.html?bbox=89.55%2C27.35%2C89.75%2C27.55&layer=mapnik&marker=27.4728%2C89.6399"
                            className="absolute inset-0 w-full h-full border-0"
                            loading="lazy"
                            allowFullScreen
                            title="Bhutly office location in Thimphu, Bhutan"
                            style={{ filter: 'invert(1) hue-rotate(180deg) brightness(0.9)' }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── CTA ────────────────────────────────────────────────────
function ContactCTA() {
    return (
        <section className="relative overflow-hidden py-16 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#F9C81B']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F9C81B]/10 rounded-full border border-[#F9C81B]/20 mb-6">
                        <Rocket className="h-4 w-4 text-[#F9C81B]" />
                        <span className="text-xs text-[#F9C81B] font-medium">Let's start something great</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Prefer to Talk Directly?
                    </h2>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance">
                        Give us a call or drop by our office. We'd love to meet you in person.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="tel:+97517123456"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 hover:scale-105"
                        >
                            <Phone className="h-4 w-4" />
                            Call Us
                        </Link>
                        <Link
                            href="mailto:hello@bhutly.com"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                        >
                            <Mail className="h-4 w-4" />
                            Email Us
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Main Page ────────────────────────────────────────────
export default function ContactPage() {
    return (
        <main>
            <ContactHero />
            <ContactSection />
            <MapSection />
            <ContactCTA />
        </main>
    )
}