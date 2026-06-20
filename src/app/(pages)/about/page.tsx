'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowRight, Users, Target, Eye, Heart, Award,
    Clock, CheckCircle, Rocket, Sparkles, Code
} from 'lucide-react'

import AnimatedBackground from '@/animationbackground/page'

// ─── Hero ──────────────────────────────────────────────────
function AboutHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0A0A0A]">
            <AnimatedBackground particleCount={6} colors={['#F9C81B', '#3b82f6']} />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        About Bhutly
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        Building the future of <br />
                        <span className="bg-gradient-to-r from-[#F9C81B] via-yellow-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            digital in Bhutan
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60 text-balance">
                        We are a team of passionate software engineers dedicated to crafting
                        modern, reliable, and beautiful digital products for businesses and
                        startups across the kingdom.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4 pb-10">
                        <Link
                            href="#mission"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-6 py-3 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors shadow-lg shadow-[#F9C81B]/20 hover:shadow-[#F9C81B]/40"
                        >
                            Our Mission
                            <Target className="h-4 w-4" />
                        </Link>
                        <Link
                            href="#team"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            Meet the Team
                            <Users className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Mission & Vision ─────────────────────────────────────
function MissionVision() {
    return (
        <section id="mission" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#8b5cf6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#F9C81B]/30 transition-all duration-300"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F9C81B]/10 text-[#F9C81B] mb-4">
                            <Target className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                        <p className="mt-3 text-white/70 leading-relaxed">
                            To empower Bhutanese businesses and entrepreneurs with world-class digital
                            solutions that are accessible, affordable, and tailored to local needs.
                            We believe technology should be a bridge, not a barrier.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#F9C81B]/30 transition-all duration-300"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                            <Eye className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                        <p className="mt-3 text-white/70 leading-relaxed">
                            A thriving digital ecosystem in Bhutan where every organisation can
                            leverage technology to grow, innovate, and connect with the world —
                            all while preserving our unique culture and values.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// ─── Values ────────────────────────────────────────────────
function Values() {
    const values = [
        {
            icon: Heart,
            title: 'Passion for Quality',
            desc: 'We take pride in every line of code and every pixel of design.',
            color: 'text-pink-400',
            bg: 'bg-pink-500/10',
        },
        {
            icon: Users,
            title: 'Client-Centric',
            desc: 'Your goals are our goals. We listen, adapt, and deliver what you truly need.',
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
        },
        {
            icon: Award,
            title: 'Integrity & Trust',
            desc: 'We believe in transparent communication, honest timelines, and fair pricing.',
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
        },
        {
            icon: Rocket,
            title: 'Continuous Innovation',
            desc: 'We stay on top of modern technologies so your business stays ahead.',
            color: 'text-orange-400',
            bg: 'bg-orange-500/10',
        },
    ]

    return (
        <section className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={3} colors={['#F9C81B', '#f472b6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        What We Stand For
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Our Core Values</h2>
                </motion.div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {values.map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#F9C81B]/30 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className={`inline-flex rounded-xl ${val.bg} p-3`}>
                                <val.icon className={`h-6 w-6 ${val.color}`} />
                            </div>
                            <h3 className="mt-4 font-semibold text-white group-hover:text-[#F9C81B] transition-colors">
                                {val.title}
                            </h3>
                            <p className="mt-1 text-sm text-white/60">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── Team ──────────────────────────────────────────────────
function Team() {
    // Replace with real team members
    const team = [
        {
            name: 'Sonam Dorji',
            role: 'Founder & Lead Developer',
            avatar: '👨‍💻',
            bio: 'Full-stack engineer with 8+ years of experience in web and AI.',
        },
        {
            name: 'Pema Yangchen',
            role: 'UI/UX Designer',
            avatar: '🎨',
            bio: 'Passionate about creating intuitive and beautiful interfaces.',
        },
        {
            name: 'Tenzin Wangchuk',
            role: 'Software Engineer',
            avatar: '⚙️',
            bio: 'Backend specialist with a love for scalable systems and APIs.',
        },
    ]

    return (
        <section id="team" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#06b6d4']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Meet the Team
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        The People Behind Bhutly
                    </h2>
                    <p className="mt-4 text-white/50 text-balance">
                        A small but mighty team of creators, thinkers, and builders — all based in Bhutan.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#F9C81B]/30 hover:scale-[1.02] transition-all duration-300 text-center"
                        >
                            <div className="text-5xl mb-3">{member.avatar}</div>
                            <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                            <p className="text-[#F9C81B] text-sm font-medium">{member.role}</p>
                            <p className="mt-2 text-white/50 text-sm">{member.bio}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── Stats ──────────────────────────────────────────────────
function Stats() {
    const stats = [
        { number: '15+', label: 'Projects Delivered' },
        { number: '100%', label: 'Client Satisfaction' },
        { number: '5+', label: 'Years Experience' },
        { number: '4', label: 'Services Offered' },
    ]

    return (
        <section className="relative overflow-hidden py-12 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={3} colors={['#F9C81B', '#8b5cf6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-3xl font-bold text-[#F9C81B]">{stat.number}</div>
                            <div className="mt-1 text-sm text-white/40">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── CTA ────────────────────────────────────────────────────
function AboutCTA() {
    return (
        <section className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#F9C81B']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40 text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Want to be part of our journey?
                    </h2>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance">
                        Whether you have a project in mind or just want to say hello, we’d love to
                        hear from you.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 hover:scale-105"
                        >
                            Get in Touch
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Main Page ────────────────────────────────────────────
export default function AboutPage() {
    return (
        <>
            <main>
                <AboutHero />
                <MissionVision />
                <Values />
                <Team />
                <Stats />
                <AboutCTA />
            </main>
        </>
    )
}