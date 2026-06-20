'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    ArrowRight, Compass, Rocket, Users, Award, Clock,
    Heart, Shield, Sparkles, Briefcase, Code, Palette,
    Cpu, Globe, Zap, CheckCircle, Coffee, Gift, Star,
    Wifi, Calendar, Camera, BookOpen, Music, Monitor
} from 'lucide-react'

import { AnimatedBackground } from '@/animationbackground/page'

// ─── Job Openings Data ─────────────────────────────────────
const jobs = [
    {
        id: 1,
        title: 'Full Stack Developer',
        department: 'Engineering',
        location: 'Thimphu, Bhutan (Hybrid)',
        type: 'Full-time',
        description: 'Build web applications using React, Next.js, and Node.js. Work on impactful projects for local businesses.',
        requirements: ['3+ years experience', 'React/Next.js', 'Node.js/Express', 'PostgreSQL or MongoDB', 'English proficiency'],
        posted: '2 days ago',
    },
    {
        id: 2,
        title: 'UI/UX Designer',
        department: 'Design',
        location: 'Thimphu, Bhutan (Hybrid)',
        type: 'Full-time',
        description: 'Design beautiful, user-centric interfaces for web and mobile applications. Collaborate with developers to bring designs to life.',
        requirements: ['3+ years experience', 'Figma / Adobe XD', 'User research & testing', 'Design systems', 'Portfolio required'],
        posted: '5 days ago',
    },
    {
        id: 3,
        title: 'Machine Learning Engineer',
        department: 'AI & ML',
        location: 'Thimphu, Bhutan (Hybrid)',
        type: 'Full-time',
        description: 'Develop and deploy AI models for agriculture, computer vision, and predictive analytics. Work on cutting-edge solutions.',
        requirements: ['3+ years experience', 'Python', 'TensorFlow/PyTorch', 'Computer vision', 'Data engineering'],
        posted: '1 week ago',
    },
    {
        id: 4,
        title: 'Software Engineering Intern',
        department: 'Engineering',
        location: 'Thimphu, Bhutan (On-site)',
        type: 'Internship',
        description: 'Join our team as an intern to learn the ropes of professional software development. Work on real projects with mentorship.',
        requirements: ['Bachelors (or final year)', 'Basic web development', 'Eagerness to learn', 'Team player'],
        posted: '3 days ago',
    },
]

// ─── Benefits Data ─────────────────────────────────────────
const benefits = [
    {
        icon: Heart,
        title: 'Health & Wellness',
        description: 'Comprehensive health insurance and wellness programs.',
    },
    {
        icon: Gift,
        title: 'Competitive Salary',
        description: 'Fair compensation with performance bonuses and profit sharing.',
    },
    {
        icon: Clock,
        title: 'Flexible Hours',
        description: 'Work-life balance with flexible schedules and remote options.',
    },
    {
        icon: Rocket,
        title: 'Growth Opportunities',
        description: 'Professional development, courses, and conference budgets.',
    },
    {
        icon: Coffee,
        title: 'Office Perks',
        description: 'Snacks, beverages, and a comfortable workspace in Thimphu.',
    },
    {
        icon: Users,
        title: 'Great Culture',
        description: 'A supportive, collaborative, and fun team environment.',
    },
]

// ─── Culture Values ────────────────────────────────────────
const values = [
    {
        icon: Heart,
        title: 'Passion',
        desc: 'We love what we do and it shows in our work.',
    },
    {
        icon: Shield,
        title: 'Integrity',
        desc: 'Honesty and transparency are non-negotiable.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        desc: 'We achieve more together than alone.',
    },
    {
        icon: Sparkles,
        title: 'Innovation',
        desc: 'We embrace new ideas and technologies.',
    },
]

// ─── Hero ──────────────────────────────────────────────────
function CareersHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0A0A0A]">
            <AnimatedBackground particleCount={6} colors={['#F9C81B', '#8b5cf6']} />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Join Our Team
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        Build the Future of <br />
                        <span className="bg-gradient-to-r from-[#F9C81B] via-yellow-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Digital in Bhutan
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60 text-balance">
                        We're looking for passionate people to join our team. If you want to make
                        an impact and grow with us, we'd love to hear from you.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="#openings"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-6 py-3 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors shadow-lg shadow-[#F9C81B]/20 hover:shadow-[#F9C81B]/40"
                        >
                            View Openings
                            <Briefcase className="h-4 w-4" />
                        </Link>
                        <Link
                            href="#culture"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            Our Culture
                            <Users className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Open Positions ──────────────────────────────────────
function OpenPositions() {
    const [expanded, setExpanded] = useState<number | null>(null)

    return (
        <section id="openings" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#3b82f6', '#f472b6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Current Openings
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        Join Our Growing Team
                    </h2>
                    <p className="mt-4 text-white/50 text-balance">
                        We're always looking for talented individuals who share our passion for
                        technology and innovation.
                    </p>
                </motion.div>

                <div className="mt-12 space-y-4">
                    {jobs.map((job, idx) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#F9C81B]/30 transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => setExpanded(expanded === job.id ? null : job.id)}
                                className="w-full text-left p-6 hover:bg-white/5 transition-colors"
                            >
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#F9C81B] transition-colors">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-white/40">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="h-3.5 w-3.5" />
                                                {job.department}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Globe className="h-3.5 w-3.5" />
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3.5 w-3.5" />
                                                {job.type}
                                            </span>
                                            <span className="px-2 py-0.5 bg-[#F9C81B]/10 rounded-full text-[#F9C81B] text-xs">
                                                {job.posted}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-[#F9C81B] font-medium">
                                            {expanded === job.id ? 'Hide details' : 'View details'}
                                        </span>
                                        <ArrowRight className={`h-4 w-4 text-[#F9C81B] transition-transform duration-300 ${expanded === job.id ? 'rotate-90' : ''}`} />
                                    </div>
                                </div>
                            </button>

                            {/* Expanded details */}
                            {expanded === job.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="px-6 pb-6 pt-2 border-t border-white/10"
                                >
                                    <p className="text-white/70 text-sm">{job.description}</p>
                                    <div className="mt-4">
                                        <h4 className="text-sm font-semibold text-white/60 mb-2">Requirements:</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                            {job.requirements.map((req, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                                                    <CheckCircle className="h-3.5 w-3.5 text-[#F9C81B] flex-shrink-0" />
                                                    {req}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link
                                        href="/contact?subject=Job%20Application"
                                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-6 py-2.5 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors shadow-lg shadow-[#F9C81B]/20"
                                    >
                                        Apply Now
                                        <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── Benefits ──────────────────────────────────────────────
function Benefits() {
    return (
        <section className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#10b981']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Why Work Here
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        Perks & Benefits
                    </h2>
                    <p className="mt-4 text-white/50 text-balance">
                        We believe in taking care of our team so you can do your best work.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#F9C81B]/30 hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="inline-flex rounded-xl bg-[#F9C81B]/10 p-3">
                                <benefit.icon className="h-6 w-6 text-[#F9C81B]" />
                            </div>
                            <h3 className="mt-4 font-semibold text-white group-hover:text-[#F9C81B] transition-colors">
                                {benefit.title}
                            </h3>
                            <p className="mt-1 text-sm text-white/60">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── Culture ──────────────────────────────────────────────
function Culture() {
    return (
        <section id="culture" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#8b5cf6', '#f59e0b']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Our Culture
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        What We Stand For
                    </h2>
                </motion.div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {values.map((value, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-center group"
                        >
                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#F9C81B]/10 backdrop-blur-sm border border-white/10 group-hover:border-[#F9C81B]/30 group-hover:shadow-lg group-hover:shadow-[#F9C81B]/20 transition-all duration-300">
                                <value.icon className="h-8 w-8 text-[#F9C81B]" />
                            </div>
                            <h3 className="mt-4 font-bold text-white group-hover:text-[#F9C81B] transition-colors">
                                {value.title}
                            </h3>
                            <p className="mt-1 text-sm text-white/60">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Culture description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 max-w-3xl mx-auto text-center"
                >
                    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                        <p className="text-white/70 leading-relaxed text-lg">
                            At Bhutly, we're building more than just software — we're building a
                            community. We value creativity, collaboration, and a sense of purpose.
                            We work hard, but we also make time to enjoy the journey.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Stats ──────────────────────────────────────────────────
function CareersStats() {
    const stats = [
        { number: '4', label: 'Open Positions' },
        { number: '5+', label: 'Team Members' },
        { number: '3', label: 'Departments' },
        { number: '100%', label: 'Satisfaction' },
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
function CareersCTA() {
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F9C81B]/10 rounded-full border border-[#F9C81B]/20 mb-6">
                        <Sparkles className="h-4 w-4 text-[#F9C81B]" />
                        <span className="text-xs text-[#F9C81B] font-medium">Let's build together</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Ready to Join Us?
                    </h2>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance">
                        We're always looking for passionate people. If you don't see an exact fit,
                        send us your CV anyway — we'd love to keep you in mind.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact?subject=Job%20Application"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 hover:scale-105"
                        >
                            Send Your Application
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                        >
                            Ask a Question
                            <Compass className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Main Page ────────────────────────────────────────────
export default function CareersPage() {
    return (
        <>
            <main>
                <CareersHero />
                <OpenPositions />
                <Benefits />
                <Culture />
                <CareersStats />
                <CareersCTA />
            </main>
        </>
    )
}