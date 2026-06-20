'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    ArrowRight, Compass, Rocket, Code, Palette, Cpu,
    Globe, Layout, Sparkles, BarChart, Smartphone,
    Zap, CheckCircle, Users, Award
} from 'lucide-react'

import { AnimatedBackground } from '@/animationbackground/page'

// ─── Project Data ──────────────────────────────────────────
const projectsData = [
    {
        id: 1,
        title: 'Portfolio Website',
        description: 'A clean, minimalist portfolio for a local artist showcasing their work.',
        category: 'Web Development',
        tags: ['React', 'Tailwind', 'Framer Motion'],
        image: '/portfoliowebsite.png', // 👈 place in /public
        link: 'https://portfolio-website-rho-tawny-63.vercel.app/',
    },
    {
        id: 2,
        title: 'AI Crop Disease Detection',
        description: 'Computer vision web app that identifies crop diseases from smartphone photos.',
        category: 'AI & ML',
        tags: ['Python', 'TensorFlow', 'Next.js'],
        image: '/detection.png',          // 👈 place in /public
        link: '#',
    },
    {
        id: 3,
        title: 'Random Joke Generator',
        description: 'Modern startup landing page with CMS integration and lead capture.',
        category: 'Web Development',
        tags: ['Next.js', 'Sanity', 'Tailwind'],
        image: '/randomjoke.png',         // 👈 place in /public
        link: 'https://randomjokegeneratorproject.vercel.app/',
    },
]

const categories = ['All', 'Web Development', 'Custom Software', 'AI & ML']

// ─── Hero ──────────────────────────────────────────────────
function ProjectsHero() {
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
                        Our Work
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        Projects That <br />
                        <span className="bg-gradient-to-r from-[#F9C81B] via-yellow-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Make a Difference
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60 text-balance">
                        Each project is a testament to our commitment to quality, creativity, and
                        local understanding. Explore our work below.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="#projects-grid"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-6 py-3 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors shadow-lg shadow-[#F9C81B]/20 hover:shadow-[#F9C81B]/40"
                        >
                            View Projects
                            <Compass className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Projects Grid with Filter ────────────────────────────
function ProjectsGrid() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects =
        activeCategory === 'All'
            ? projectsData
            : projectsData.filter((p) => p.category === activeCategory)

    return (
        <section id="projects-grid" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#8b5cf6', '#f472b6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Portfolio
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-white/50 text-balance">
                        A selection of our recent work. Each project is built with care and precision.
                    </p>
                </motion.div>

                {/* Category Filters */}
                <div className="mt-10 flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                ? 'bg-[#F9C81B] text-[#0A0A0A] shadow-lg shadow-[#F9C81B]/20'
                                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#F9C81B]/40 hover:shadow-2xl hover:shadow-[#F9C81B]/10 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 bg-gradient-to-br from-white/10 to-white/5 overflow-hidden group-hover:from-[#F9C81B]/10 group-hover:to-transparent transition-colors duration-300">
                                {project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-white/20">
                                        <Layout className="h-12 w-12" />
                                    </div>
                                )}
                                {/* Category badge */}
                                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white/70 text-xs px-2 py-1 rounded-full">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white group-hover:text-[#F9C81B] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-white/60 leading-relaxed flex-1">
                                    {project.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-0.5 bg-[#F9C81B]/10 rounded-full text-[#F9C81B] text-[10px] font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={project.link}
                                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#F9C81B] hover:underline group/link"
                                >
                                    View Project
                                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12 text-white/40">No projects in this category yet.</div>
                )}
            </div>
        </section>
    )
}

// ─── Stats ──────────────────────────────────────────────────
function ProjectStats() {
    const stats = [
        { number: '15+', label: 'Projects Delivered' },
        { number: '100%', label: 'Client Satisfaction' },
        { number: '5+', label: 'Years Experience' },
        { number: '9', label: 'Featured Projects' },
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
function ProjectsCTA() {
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
                        <span className="text-xs text-[#F9C81B] font-medium">Let's build together</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Have a Project in Mind?
                    </h2>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance">
                        We'd love to hear about your idea. Let's discuss how we can bring it to life.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 hover:scale-105"
                        >
                            Start Your Project
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Main Page ────────────────────────────────────────────
export default function ProjectsPage() {
    return (
        <>
            <main>
                <ProjectsHero />
                <ProjectsGrid />
                <ProjectStats />
                <ProjectsCTA />
            </main>
        </>
    )
}