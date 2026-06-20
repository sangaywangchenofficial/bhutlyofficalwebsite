'use client'

import Link from 'next/link'
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp, FaTelegram } from 'react-icons/fa'
import { AnimatedBackground } from '@/animationbackground/page';

const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
]

export function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-[#0A0A0A] py-12">
            <AnimatedBackground particleCount={3} colors={['#F9C81B', '#F9C81B']} />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                {/* ... existing footer content ... */}
                <div className="grid gap-10 md:grid-cols-4">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-[#F9C81B] hover:opacity-80 transition-opacity">
                            Bhutly
                        </Link>
                        <p className="mt-3 text-sm text-white/40 max-w-xs">
                            Building modern digital products for businesses in Bhutan and beyond.
                        </p>
                        <div className="mt-5 flex gap-3">
                            <Link
                                href="#"
                                className="text-white/40 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                                aria-label="GitHub"
                            >
                                <FaFacebook className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="text-white/40 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="text-white/40 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="text-white/40 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                                aria-label="Whatsapp"
                            >
                                <FaWhatsapp className="h-4 w-4" />
                            </Link>
                            <Link
                                href="#"
                                className="text-white/40 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                                aria-label="Telegram"
                            >
                                <FaTelegram className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Quick Links</h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-white/40 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (sub-links) */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Services</h4>
                        <ul className="mt-4 space-y-2.5 text-sm">
                            <li>
                                <Link href="#services" className="text-white/40 hover:text-white transition-colors">
                                    Website Development
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-white/40 hover:text-white transition-colors">
                                    Custom Software
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-white/40 hover:text-white transition-colors">
                                    UI/UX Design
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-white/40 hover:text-white transition-colors">
                                    Maintenance & Support
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Contact</h4>
                        <ul className="mt-4 space-y-2.5 text-sm text-white/40">
                            <li className="flex items-center gap-2">
                                <span>🏢</span>
                                <span>
                                    <Link href="/" className="hover:text-white transition-colors" aria-label="Bhutly">Bhutly</Link>
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📧</span>
                                <a href="mailto:hello@bhutly.com" className="hover:text-white transition-colors">
                                    hello@bhutly.com
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📍</span>
                                <span>Thimphu, Bhutan 🇧🇹</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a href="tel:+97517123456" className="hover:text-white transition-colors">
                                    +975 17 123 456
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
                    <p>
                        © {new Date().getFullYear()} Bhutly. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacypolicy" className="hover:text-white/60 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/termofservice" className="hover:text-white/60 transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}