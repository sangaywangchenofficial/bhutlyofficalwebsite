'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    ArrowRight, Compass, Rocket, Calendar, Clock,
    User, Tag, Search, X, Sparkles, BookOpen,
    Heart, Eye, MessageCircle, Award, Zap
} from 'lucide-react'

import { AnimatedBackground } from '@/animationbackground/page'

// ─── Blog Post Data ────────────────────────────────────────
const blogPosts = [
    {
        id: 1,
        title: 'The Future of Digital Transformation in Bhutan',
        excerpt: 'How Bhutanese businesses are embracing technology to compete globally while preserving their unique cultural identity.',
        category: 'Digital Transformation',
        tags: ['Technology', 'Bhutan', 'Business'],
        date: 'June 15, 2026',
        readTime: '5 min read',
        author: 'Sonam Dorji',
        image: '',
        featured: true,
    },
    {
        id: 2,
        title: 'AI for Agriculture: A Game Changer for Bhutanese Farmers',
        excerpt: 'How machine learning and computer vision are helping farmers detect crop diseases early and increase yields.',
        category: 'AI & ML',
        tags: ['Artificial Intelligence', 'Agriculture', 'Machine Learning'],
        date: 'May 28, 2026',
        readTime: '7 min read',
        author: 'Pema Yangchen',
        image: '',
        featured: true,
    },
    {
        id: 3,
        title: 'Building a Startup-Friendly Ecosystem in Thimphu',
        excerpt: 'Exploring the challenges and opportunities for tech startups in Bhutan\'s capital city.',
        category: 'Startups',
        tags: ['Entrepreneurship', 'Ecosystem', 'Thimphu'],
        date: 'May 10, 2026',
        readTime: '6 min read',
        author: 'Tenzin Wangchuk',
        image: '🏔️',
        featured: false,
    },
    {
        id: 4,
        title: 'The Art of Minimalist Web Design',
        excerpt: 'Why simplicity is key to creating memorable digital experiences that convert visitors into customers.',
        category: 'Web Design',
        tags: ['UX/UI', 'Design', 'Minimalism'],
        date: 'April 22, 2026',
        readTime: '4 min read',
        author: 'Pema Yangchen',
        image: '🎨',
        featured: false,
    },
    {
        id: 5,
        title: 'How Bhutanese SMEs Can Leverage E-commerce',
        excerpt: 'A practical guide to launching an online store for small and medium enterprises in Bhutan.',
        category: 'E-commerce',
        tags: ['E-commerce', 'SMEs', 'Digital Payments'],
        date: 'April 5, 2026',
        readTime: '8 min read',
        author: 'Sonam Dorji',
        image: '🛒',
        featured: false,
    },
    {
        id: 6,
        title: 'The Rise of Remote Work in the Himalayas',
        excerpt: 'How Bhutan\'s digital nomad community is growing and what it means for the local economy.',
        category: 'Remote Work',
        tags: ['Remote Work', 'Work Culture', 'Himalayas'],
        date: 'March 18, 2026',
        readTime: '5 min read',
        author: 'Tenzin Wangchuk',
        image: '💻',
        featured: false,
    },
    {
        id: 7,
        title: 'Building Responsive Apps with Next.js and Tailwind',
        excerpt: 'A technical deep dive into our development stack and why we chose it for modern web applications.',
        category: 'Technology',
        tags: ['Next.js', 'Tailwind', 'React'],
        date: 'March 2, 2026',
        readTime: '6 min read',
        author: 'Sonam Dorji',
        image: '⚛️',
        featured: false,
    },
    {
        id: 8,
        title: 'Understanding the Bhutanese Consumer: A Digital Perspective',
        excerpt: 'Insights into how Bhutanese consumers interact with digital platforms and what drives their purchasing decisions.',
        category: 'Research',
        tags: ['Consumer Behavior', 'Digital Marketing', 'Bhutan'],
        date: 'February 15, 2026',
        readTime: '7 min read',
        author: 'Pema Yangchen',
        image: '📊',
        featured: false,
    },
]

const categories = [
    'All',
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
]

const CATEGORY_ICONS: Record<string, string> = {
    'All': '📌',
    'Digital Transformation': '🚀',
    'AI & ML': '🧠',
    'Startups': '💡',
    'Web Design': '🎨',
    'E-commerce': '🛒',
    'Remote Work': '💻',
    'Technology': '⚛️',
    'Research': '📊',
    'Security': '🔒',
}

// ─── Hero ──────────────────────────────────────────────────
function BlogsHero() {
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
                        Our Blog
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        Insights & <br />
                        <span className="bg-gradient-to-r from-[#F9C81B] via-yellow-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                            Digital Stories
                        </span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-white/60 text-balance">
                        Thoughts, insights, and stories from the heart of Bhutan's digital
                        transformation journey.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="#blog-grid"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-6 py-3 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors shadow-lg shadow-[#F9C81B]/20 hover:shadow-[#F9C81B]/40"
                        >
                            Read Articles
                            <BookOpen className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Blog Grid with Category Filter & Search ─────────────
function BlogGrid() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

    // Filter posts
    const filteredPosts = blogPosts
        .filter((post) =>
            activeCategory === 'All' ? true : post.category === activeCategory
        )
        .filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )

    // Featured post
    const featuredPosts = filteredPosts.filter((p) => p.featured)
    const regularPosts = filteredPosts.filter((p) => !p.featured)

    return (
        <section id="blog-grid" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#f472b6', '#06b6d4']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
                        Latest Articles
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
                        Stories from the Digital Frontier
                    </h2>
                </motion.div>

                {/* Search Bar */}
                <div className="mt-10 max-w-md mx-auto relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-12 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>

                {/* Category Filters */}
                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${activeCategory === cat
                                ? 'bg-[#F9C81B] text-[#0A0A0A] shadow-lg shadow-[#F9C81B]/20'
                                : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            <span>{CATEGORY_ICONS[cat] || '📄'}</span>
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <div className="mt-12 grid gap-8 md:grid-cols-2">
                        {featuredPosts.map((post, idx) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-gradient-to-br from-[#F9C81B]/10 to-white/5 backdrop-blur-sm rounded-2xl border border-[#F9C81B]/20 hover:border-[#F9C81B]/50 hover:shadow-2xl hover:shadow-[#F9C81B]/10 transition-all duration-300 p-6 col-span-full"
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="text-5xl flex-shrink-0">{post.image}</div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 text-xs text-white/40 mb-2">
                                            <span className="px-2 py-0.5 bg-[#F9C81B]/10 rounded-full text-[#F9C81B] font-medium">
                                                ⭐ Featured
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" /> {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" /> {post.readTime}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white group-hover:text-[#F9C81B] transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="mt-2 text-white/60">{post.excerpt}</p>
                                        <div className="mt-4 flex flex-wrap items-center gap-4">
                                            <span className="flex items-center gap-1 text-sm text-white/40">
                                                <User className="h-3.5 w-3.5" /> {post.author}
                                            </span>
                                            <div className="flex gap-1.5">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 bg-white/5 rounded-full text-white/30 text-[10px]"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <Link
                                            href={`/blogs/1`}
                                            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#F9C81B] hover:underline group/link"
                                        >
                                            Read Full Article
                                            <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Regular Posts */}
                {regularPosts.length > 0 && (
                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {regularPosts.map((post, idx) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#F9C81B]/30 hover:shadow-2xl hover:shadow-[#F9C81B]/10 transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                {/* Card header with emoji */}
                                <div className="relative h-32 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-5xl group-hover:from-[#F9C81B]/10 group-hover:to-transparent transition-colors duration-300">
                                    {post.image}
                                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white/50 text-[10px] px-2 py-0.5 rounded-full">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-xs text-white/40 mb-2">
                                        <Calendar className="h-3 w-3" />
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <Clock className="h-3 w-3" />
                                        <span>{post.readTime}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white group-hover:text-[#F9C81B] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="mt-2 text-sm text-white/50 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {post.tags.slice(0, 3).map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-0.5 bg-white/5 rounded-full text-white/30 text-[10px]"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="flex items-center gap-1 text-xs text-white/40">
                                            <User className="h-3 w-3" /> {post.author}
                                        </span>
                                        <Link
                                            href={`/blogs/${post.id}`}
                                            className="text-sm font-medium text-[#F9C81B] hover:underline group/link flex items-center gap-1"
                                        >
                                            Read
                                            <ArrowRight className="h-3 w-3 group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                )}

                {/* Empty State */}
                {filteredPosts.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-white">No posts found</h3>
                        <p className="text-white/40 mt-2">Try adjusting your search or category filter.</p>
                        <button
                            onClick={() => {
                                setActiveCategory('All')
                                setSearchQuery('')
                            }}
                            className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                        >
                            Reset filters
                            <X className="h-3.5 w-3.5" />
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

// ─── Blog Stats ────────────────────────────────────────────
function BlogStats() {
    const stats = [
        { number: '9', label: 'Articles Published' },
        { number: '15+', label: 'Topics Covered' },
        { number: '5+', label: 'Team Writers' },
        { number: '12k+', label: 'Total Reads' },
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
function BlogCTA() {
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
                        <span className="text-xs text-[#F9C81B] font-medium">Stay updated</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        Want to Contribute?
                    </h2>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance">
                        We're always looking for fresh perspectives on technology, innovation,
                        and Bhutan's digital future. Pitch us your idea.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 hover:scale-105"
                        >
                            Write for Us
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Main Page ────────────────────────────────────────────
export default function BlogsPage() {
    return (
        <>
            <main>
                <BlogsHero />
                <BlogGrid />
                <BlogStats />
                <BlogCTA />
            </main>
        </>
    )
}