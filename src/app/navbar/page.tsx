'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: 'services' },
    { name: 'Projects', href: 'projects' },
    { name: 'Blogs', href: 'blogs' },
    { name: 'Careers', href: 'careers' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="fixed top-0 z-50 w-full bg-[#0A0A0A]/60 backdrop-blur-lg border-b border-white/10 shadow-lg shadow-black/20">
            <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold tracking-tight text-[#F9C81B] hover:opacity-80 transition-opacity">
                        Bhutly
                    </Link>

                    {/* Desktop Navigation — centred between logo and CTA */}
                    <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-white/70 hover:text-white transition-colors group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F9C81B] transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* Get Started CTA */}
                    <Link
                        href="/contact"
                        className="hidden md:inline-block rounded-full bg-[#F9C81B] px-5 py-2 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors"
                    >
                        Get Started
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Navigation (Dropdown) */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 py-4 space-y-3 bg-[#0A0A0A]/80 backdrop-blur-lg rounded-b-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block text-white/70 hover:text-white transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="inline-block rounded-full bg-[#F9C81B] px-5 py-2 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>
                    </motion.div>
                )}
            </div>
        </header>
    )
}