'use client'

import Image from "next/image";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight, CheckCircle,
  Globe, Settings, Palette, Wrench,
  Search, Compass, Layout, Sparkles, Code,
  Users, Clock, DollarSign, Star, Rocket,
  Cpu
} from 'lucide-react'

import { Navbar } from './navbar/page'

// ─── Reusable Animated Background ────────────────────────
function AnimatedBackground({
  colors = ['#F9C81B', '#3b82f6', '#F9C81B'],
  particleCount = 6,
  className = '',
}: {
  colors?: string[]
  particleCount?: number
  className?: string
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Glowing blobs */}
      {colors.map((color, i) => {
        const size = i === 0 ? '60%' : i === 1 ? '50%' : '100%'
        const top = i === 0 ? '-20%' : i === 1 ? '80%' : '50%'
        const left = i === 0 ? '60%' : i === 1 ? '-10%' : '50%'
        const transform = i === 2 ? 'translate(-50%, -50%)' : 'none'
        return (
          <div
            key={i}
            className="absolute rounded-full blur-3xl animate-pulse"
            style={{
              backgroundColor: color + '20',
              width: size,
              height: size,
              top,
              left,
              transform,
            }}
          />
        )
      })}

      {/* Floating particles */}
      {mounted &&
        Array.from({ length: particleCount }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#F9C81B]/20 backdrop-blur-sm border border-white/10"
            style={{
              width: Math.random() * 100 + 40,
              height: Math.random() * 100 + 40,
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
    </div>
  )
}

// ─── Hero ──────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      <AnimatedBackground particleCount={6} />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F9C81B] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F9C81B]" />
              </span>
              <span className="text-xs text-white/60">Trusted by businesses in Bhutan</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-5xl font-semibold tracking-tight text-balance text-white"
            >
              Discover{' '}
              <span className="bg-gradient-to-r from-[#F9C81B] via-yellow-400 to-yellow-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Authentic Digital
              </span>{' '}
              Solutions in Bhutan with Bhutly
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm sm:text-xl text-white/60 max-w-xl text-balance"
            >
              Find your perfect website or software solution anywhere in the country.
              Discover authentic digital experiences with confidence and ease.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-lg"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-2 text-sm text-white/60"
            >
              <span className="text-white/30 mr-1 text-xs">Popular:</span>
              {['Website', 'E‑commerce', 'AI Solutions', 'Dashboard'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/5 hover:border-[#F9C81B]/30 hover:bg-white/10 transition-all duration-300 cursor-default text-xs text-white/50"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-6 py-3 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/20 hover:shadow-[#F9C81B]/40 hover:scale-105"
              >
                Start Exploring
                <Compass className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Need a Custom Solution?
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-[#F9C81B]/10 rounded-full blur-3xl" />
              <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl shadow-black/40 p-6 flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
                    backgroundSize: '30px 30px',
                  }} />
                </div>
                <div className="relative z-10 w-full space-y-3">
                  <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
                    <span className="text-[#F9C81B]">✦</span> building modern digital products
                  </div>
                  <div className="bg-black/30 rounded-lg p-4 border border-white/5 font-mono text-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-pink-400">const</span>
                      <span className="text-blue-400">bhutly</span>
                      <span className="text-white/40">=</span>
                      <span className="text-yellow-400">new</span>
                      <span className="text-emerald-400">SoftwareCompany</span>
                      <span className="text-white/40">();</span>
                    </div>
                    <div className="text-white/40 pl-2">
                      <span className="text-blue-400">bhutly</span>
                      <span className="text-white/40">.build(</span>
                      <span className="text-emerald-400">'websites'</span>
                      <span className="text-white/40">,</span>
                      <span className="text-emerald-400">'AI'</span>
                      <span className="text-white/40">,</span>
                      <span className="text-emerald-400">'software'</span>
                      <span className="text-white/40">);</span>
                    </div>
                    <div className="text-emerald-400 animate-pulse">▌ Ready to deploy</div>
                  </div>
                  <div className="flex gap-6 pt-2">
                    <div>
                      <div className="text-[#F9C81B] font-bold text-lg">15+</div>
                      <div className="text-white/30 text-xs">Projects</div>
                    </div>
                    <div>
                      <div className="text-[#F9C81B] font-bold text-lg">100%</div>
                      <div className="text-white/30 text-xs">Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-[#F9C81B] font-bold text-lg">5+</div>
                      <div className="text-white/30 text-xs">Years</div>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/10"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Layout className="h-5 w-5 text-[#F9C81B]" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/10"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Sparkles className="h-5 w-5 text-blue-400" />
                </motion.div>
                <motion.div
                  className="absolute top-1/2 -right-6 bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/10"
                  animate={{ x: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Code className="h-4 w-4 text-emerald-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
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

// ─── Services ──────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Business websites, portfolios, landing pages',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      hoverBg: 'group-hover:bg-blue-500/20',
    },
    {
      icon: Settings,
      title: 'Custom Software',
      description: 'Dashboards, internal tools, automation systems',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      hoverBg: 'group-hover:bg-purple-500/20',
    },
    {
      icon: Cpu,
      title: 'AI Solutions',
      description: 'Machine learning, automation, and intelligent systems',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      hoverBg: 'group-hover:bg-emerald-500/20',
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Updates, fixes, performance optimization',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      hoverBg: 'group-hover:bg-orange-500/20',
    },
  ]

  return (
    <section id="services" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
      <AnimatedBackground particleCount={4} colors={['#F9C81B', '#3b82f6', '#8b5cf6']} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
            What We Build
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
            Services that drive real results
          </h2>
          <p className="mt-4 text-white/50 text-balance">
            From websites to AI-powered systems — we build digital products that help
            businesses in Bhutan grow and thrive.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#F9C81B]/50 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#F9C81B]/10 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#F9C81B]/5 to-transparent" />
              <div className={`inline-flex rounded-xl ${svc.bg} p-3 ${svc.hoverBg} transition-colors duration-300 relative z-10`}>
                <svc.icon className={`h-6 w-6 ${svc.color}`} />
              </div>
              <h3 className="mt-4 font-semibold text-white relative z-10">{svc.title}</h3>
              <p className="mt-1 text-sm text-white/60 relative z-10">{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── About ──────────────────────────────────────────────────
function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [12, -12]);
  const rotateY = useTransform(x, [-100, 100], [-12, 12]);

  const springConfig = { damping: 25, stiffness: 350 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const glowConfig = {
    x: useSpring(x, { damping: 30, stiffness: 400 }),
    y: useSpring(y, { damping: 30, stiffness: 400 }),
  };
  const glowX = useTransform(glowConfig.x, [-100, 100], [-20, 20]);
  const glowY = useTransform(glowConfig.y, [-100, 100], [-20, 20]);

  return (
    <section id="about" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
      <AnimatedBackground particleCount={3} colors={['#F9C81B', '#10b981']} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">
              Building the future of digital in Bhutan
            </h2>
            <p className="mt-4 text-lg text-white/70 text-balance">
              We are a team of software engineers based in Bhutan, focused on building modern digital products for local businesses and startups. We specialize in full-stack development and scalable web systems.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:scale-105 transition-all duration-300 glow">
                <div className="text-[#F9C81B] font-bold text-2xl">3+</div>
                <div className="text-white/40 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:scale-105 transition-all duration-300 glow">
                <div className="text-[#F9C81B] font-bold text-2xl">15+</div>
                <div className="text-white/40 text-sm">Projects Delivered</div>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-6 py-3 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-colors shadow-lg shadow-[#F9C81B]/20 hover:shadow-[#F9C81B]/40"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div
              className="relative w-80 h-80 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl shadow-black/40 flex items-center justify-center"
              style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                x.set(e.clientX - centerX);
                y.set(e.clientY - centerY);
              }}
              onMouseLeave={() => {
                x.set(0);
                y.set(0);
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(249, 200, 27, 0)",
                    "0 0 60px 20px rgba(249, 200, 27, 0.08)",
                    "0 0 0 0 rgba(249, 200, 27, 0)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute w-32 h-32 rounded-full bg-[#F9C81B] opacity-10 blur-3xl pointer-events-none"
                style={{
                  x: glowX,
                  y: glowY,
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, rgba(249, 200, 27, 0.04), transparent 40%, rgba(249, 200, 27, 0.04), transparent)",
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="relative z-10"
                whileHover={{
                  scale: 1.04,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Bhutly Logo – building the future of digital in Bhutan"
                  width={250}
                  height={250}
                  priority
                  className="object-contain"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none opacity-0"
                whileHover={{
                  opacity: 1,
                  x: ["-150%", "150%"],
                  transition: {
                    duration: 1.2,
                    ease: "easeInOut",
                  },
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ──────────────────────────────────────────────
function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      desc: 'Clean personal portfolio for a local artist.',
      stack: 'React, Tailwind',
      link: 'https://sangaywangchen.vercel.app/',
      tags: ['Web', 'Design'],
      image: '/portfoliowebsite.png',
    },
    {
      title: 'AI Crop Disease Detection',
      desc: 'Web app using computer vision for farmers.',
      stack: 'Python, TensorFlow, Next.js',
      link: '#',
      tags: ['AI', 'Python'],
      image: '/detection.png',
    },
    {
      title: 'Random Joke Generator',
      desc: 'Random joke generator with AI.',
      stack: 'Next.js, Sanity',
      link: 'https://randomjokegeneratorproject.vercel.app/',
      tags: ['CMS', 'Next.js'],
      image: '/randomjoke.png',
    },
  ]

  return (
    <section id="projects" className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
      <AnimatedBackground particleCount={4} colors={['#F9C81B', '#ec4899', '#3b82f6']} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Recent Projects</h2>
          <p className="mt-4 text-white/50 text-balance">
            Each project is built with care, precision, and a deep understanding of
            our clients' needs.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {projects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:border-[#F9C81B]/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#F9C81B]/10 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video rounded-lg bg-white/5 overflow-hidden mb-4 relative group-hover:bg-[#F9C81B]/5 transition-colors">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              <div className="flex flex-wrap gap-1.5 mb-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-[#F9C81B]/10 rounded-full text-[#F9C81B] text-[10px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-white font-semibold group-hover:text-[#F9C81B] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-white/60 mt-1">{item.desc}</p>
              <div className="mt-2 text-xs text-white/40">{item.stack}</div>
              <Link
                href={item.link}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#F9C81B] hover:underline group"
              >
                Live Link
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Choose Us ─────────────────────────────────────────
function WhyChoose() {
  const points = [
    { icon: Users, text: 'Local understanding of the Bhutanese market and business culture' },
    { icon: Users, text: 'Direct communication — no agency layers, you talk to the builders' },
    { icon: Palette, text: 'Clean and modern UI/UX design' },
    { icon: Clock, text: 'Fast delivery with agile development' },
    { icon: DollarSign, text: 'Affordable pricing tailored to local budgets' },
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
            Why Work With Us
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">Built for Bhutan. Built for you.</h2>
        </motion.div>

        <div className="mt-16 max-w-3xl mx-auto space-y-4">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-xl border border-white/10 hover:border-[#F9C81B]/30 hover:shadow-lg hover:shadow-[#F9C81B]/5 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#F9C81B]/10 flex items-center justify-center group-hover:bg-[#F9C81B]/20 transition-colors">
                <point.icon className="h-5 w-5 text-[#F9C81B]" />
              </div>
              <span className="text-white/80 text-sm sm:text-base">{point.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process ───────────────────────────────────────────────
function Process() {
  const steps = [
    { number: '01', title: 'Discuss Requirements', desc: 'Free consultation to understand your goals' },
    { number: '02', title: 'Design & Planning', desc: 'Wireframes and mockups before any coding' },
    { number: '03', title: 'Development', desc: 'Building with modern, scalable tech' },
    { number: '04', title: 'Review & Delivery', desc: 'You test, we refine, then we launch' },
    { number: '05', title: 'Support & Maintenance', desc: 'Ongoing care and updates' },
  ]

  return (
    <section className="relative overflow-hidden py-24 bg-[#0A0A0A] border-t border-white/5">
      <AnimatedBackground particleCount={4} colors={['#F9C81B', '#06b6d4']} />
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">A clear path to your digital product</h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative text-center group"
            >
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/10 -translate-y-1/2" />
              )}
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#F9C81B]/10 backdrop-blur-sm border border-white/10 group-hover:border-[#F9C81B]/30 group-hover:shadow-lg group-hover:shadow-[#F9C81B]/20 transition-all duration-300 text-2xl font-bold text-[#F9C81B]">
                {step.number}
              </div>
              <h3 className="mt-4 font-semibold text-white text-sm group-hover:text-[#F9C81B] transition-colors">{step.title}</h3>
              <p className="mt-1 text-xs text-white/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ──────────────────────────────────────────
function Testimonials() {
  const testimonials = [
    {
      quote: "Bhutly transformed our online presence. Our bookings increased by 40% within the first month!",
      name: "Karma Dorji",
      title: "Hotel Owner, Paro",
      avatar: "🏨",
    },
    {
      quote: "The team built a custom dashboard that streamlined our entire inventory management. Highly recommended.",
      name: "Tashi Wangmo",
      title: "Operations Manager, Thimphu",
      avatar: "📊",
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
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">What Our Clients Say</h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-[#F9C81B]/30 hover:shadow-xl hover:shadow-[#F9C81B]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-1 text-[#F9C81B] mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#F9C81B]" />
                ))}
              </div>
              <p className="text-white/80 text-lg leading-relaxed italic">"{item.quote}"</p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold">{item.name}</p>
                  <p className="text-white/40 text-sm">{item.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Call to Action ────────────────────────────────────────
function CTA() {
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
            <span className="text-xs text-[#F9C81B] font-medium">Start your journey today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ready to Build Your Digital Presence?
          </h2>

          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance">
            Let's create a website or software solution that grows your business and
            helps you stand out in Bhutan.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact?consultation=true"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Free Consultation
              <Compass className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/30">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-3 w-3 text-[#F9C81B]" />
              No hidden fees
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-3 w-3 text-[#F9C81B]" />
              100% satisfaction
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-3 w-3 text-[#F9C81B]" />
              Local support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Main Page ────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Projects />
        <WhyChoose />
        <Process />
        <Testimonials />
        <CTA />
      </main>
    </>
  )
}