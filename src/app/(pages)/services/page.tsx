'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    ArrowRight, CheckCircle, Globe, Settings, Palette, Wrench, Cpu,
    Compass, Rocket, Clock, Users, Award, Sparkles, Zap,
    Shield, BarChart, Smartphone, Database
} from 'lucide-react'
import { AnimatedBackground } from '@/animationbackground/page'

// ─── Hero ──────────────────────────────────────────────────
function ServicesHero() {
    return (
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#0A0A0A]">
            <AnimatedBackground particleCount={6} colors={['#F9C81B', '#3b82f6']} />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Our Services
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        What We Build for You
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60 text-balance">
                        From websites to AI-powered systems — we craft digital solutions that
                        help Bhutanese businesses grow, innovate, and thrive.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="#services-list"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-6 py-3 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors shadow-lg shadow-[#F9C81B]/20 hover:shadow-[#F9C81B]/40"
                        >
                            Explore Services
                            <Compass className="h-4 w-4" />
                        </Link>
                        <Link
                            href="#process"
                            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors"
                        >
                            How We Work
                            <Zap className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Services Detail ──────────────────────────────────────
function ServicesList() {
    const services = [
        {
            icon: Globe,
            title: 'Website Development',
            description: 'Custom websites, landing pages, portfolios, and e-commerce stores that are fast, responsive, and beautifully designed.',
            features: ['Responsive design', 'SEO-optimised', 'CMS integration', 'Fast load times'],
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
            delay: 0,
        },
        {
            icon: Settings,
            title: 'Custom Software',
            description: 'Tailored dashboards, internal tools, automation systems, and business management platforms built to fit your unique workflows.',
            features: ['Scalable architecture', 'API integration', 'User management', 'Data analytics'],
            color: 'text-purple-400',
            bg: 'bg-purple-500/10',
            delay: 0.1,
        },
        {
            icon: Palette,
            title: 'UI/UX Design',
            description: 'Human-centred interface design that combines aesthetics with usability, ensuring your users have a seamless experience.',
            features: ['Wireframing', 'Prototyping', 'User testing', 'Design systems'],
            color: 'text-pink-400',
            bg: 'bg-pink-500/10',
            delay: 0.2,
        },
        {
            icon: Cpu,
            title: 'AI & Machine Learning',
            description: 'Intelligent systems for automation, predictive analytics, computer vision, and natural language processing to supercharge your business.',
            features: ['Chatbots', 'Recommendation engines', 'Image recognition', 'Predictive models'],
            color: 'text-emerald-400',
            bg: 'bg-emerald-500/10',
            delay: 0.3,
        },
        {
            icon: Wrench,
            title: 'Maintenance & Support',
            description: 'Ongoing monitoring, updates, bug fixes, and performance optimisation to keep your digital products running smoothly.',
            features: ['24/7 monitoring', 'Regular updates', 'Security patches', 'Performance tuning'],
            color: 'text-orange-400',
            bg: 'bg-orange-500/10',
            delay: 0.4,
        },
        {
            icon: Database,
            title: 'Data Solutions',
            description: 'Database design, migration, and management, plus data visualisation and reporting tools to turn your data into actionable insights.',
            features: ['Data modelling', 'ETL pipelines', 'Business dashboards', 'Data warehousing'],
            color: 'text-cyan-400',
            bg: 'bg-cyan-500/10',
            delay: 0.5,
        },
    ]

    return (
        <section id="services-list" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#8b5cf6', '#f472b6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        What We Offer
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        Comprehensive Digital Services
                    </h2>
                    <p className="mt-4 text-white/50 text-balance">
                        Each service is delivered with the same commitment to quality, transparency, and local understanding.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((svc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: svc.delay }}
                            className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#F9C81B]/40 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F9C81B]/10 transition-all duration-300 flex flex-col"
                        >
                            <div className={`inline-flex rounded-xl ${svc.bg} p-3 w-fit`}>
                                <svc.icon className={`h-6 w-6 ${svc.color}`} />
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-white group-hover:text-[#F9C81B] transition-colors">
                                {svc.title}
                            </h3>
                            <p className="mt-2 text-sm text-white/60 leading-relaxed flex-1">
                                {svc.description}
                            </p>
                            <ul className="mt-4 space-y-1.5">
                                {svc.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-white/40">
                                        <CheckCircle className="h-3.5 w-3.5 text-[#F9C81B] flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#F9C81B] hover:underline group/btn"
                            >
                                Learn More
                                <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── Process ──────────────────────────────────────────────
function Process() {
    const steps = [
        {
            number: '01',
            title: 'Discovery',
            desc: 'We listen to your goals, challenges, and ideas. Free consultation to align on vision.',
        },
        {
            number: '02',
            title: 'Strategy & Design',
            desc: 'We create wireframes, mockups, and a clear roadmap before any code is written.',
        },
        {
            number: '03',
            title: 'Development',
            desc: 'Our engineers build your product using modern, scalable technologies with regular updates.',
        },
        {
            number: '04',
            title: 'Review & Launch',
            desc: 'You test, we refine, then we deploy. We ensure everything is polished and performant.',
        },
        {
            number: '05',
            title: 'Support & Grow',
            desc: 'We provide ongoing maintenance, updates, and support to help your business evolve.',
        },
    ]

    return (
        <section id="process" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#06b6d4']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        How We Work
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        A Clear Path to Your Digital Product
                    </h2>
                    <p className="mt-4 text-white/50 text-balance">
                        We keep you involved at every stage, so there are no surprises — only results.
                    </p>
                </motion.div>

                <div className="mt-16 relative">
                    {/* Desktop line */}
                    <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-white/10" />

                    <div className="grid gap-8 md:grid-cols-5 relative">
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative text-center group"
                            >
                                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#F9C81B]/10 backdrop-blur-sm border border-white/10 group-hover:border-[#F9C81B]/30 group-hover:shadow-lg group-hover:shadow-[#F9C81B]/20 transition-all duration-300 text-2xl font-bold text-[#F9C81B] relative z-10">
                                    {step.number}
                                </div>
                                <h3 className="mt-4 font-semibold text-white text-sm group-hover:text-[#F9C81B] transition-colors">
                                    {step.title}
                                </h3>
                                <p className="mt-1 text-xs text-white/60 max-w-[140px] mx-auto">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── Why Choose Us ─────────────────────────────────────────
function WhyChoose() {
    const points = [
        {
            icon: Users,
            text: 'Local understanding of the Bhutanese market and business culture',
        },
        {
            icon: Shield,
            text: 'Transparent communication — you talk directly to the builders',
        },
        {
            icon: Award,
            text: 'Modern, clean design with a focus on user experience',
        },
        {
            icon: Clock,
            text: 'Fast delivery with agile development methodology',
        },
        {
            icon: BarChart,
            text: 'Scalable solutions that grow with your business',
        },
        {
            icon: Smartphone,
            text: 'Mobile-first, responsive designs for all devices',
        },
    ]

    return (
        <section className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={3} colors={['#F9C81B', '#f59e0b']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Why Bhutly
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        Built for Bhutan. Built for you.
                    </h2>
                </motion.div>

                <div className="mt-16 max-w-4xl mx-auto grid gap-4 sm:grid-cols-2">
                    {points.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#F9C81B]/30 hover:shadow-lg hover:shadow-[#F9C81B]/5 transition-all duration-300 group"
                        >
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F9C81B]/10 flex items-center justify-center group-hover:bg-[#F9C81B]/20 transition-colors">
                                <point.icon className="h-5 w-5 text-[#F9C81B]" />
                            </div>
                            <span className="text-white/80 text-sm">{point.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ─── CTA ────────────────────────────────────────────────────
function ServicesCTA() {
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
                        <Rocket className="h-4 w-4 text-[#F9C81B]" />
                        <span className="text-xs text-[#F9C81B] font-medium">Start building today</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Ready to Bring Your Idea to Life?
                    </h2>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance">
                        Whether you need a website, a custom dashboard, or an AI-powered solution,
                        we’re here to help.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 hover:scale-105"
                        >
                            Get a Free Consultation
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Main Page ────────────────────────────────────────────
export default function ServicesPage() {
    return (
        <>
            <main>
                <ServicesHero />
                <ServicesList />
                <Process />
                <WhyChoose />
                <ServicesCTA />
            </main>
        </>
    )
}