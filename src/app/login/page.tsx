'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
    ArrowRight, Mail, Lock, Eye, EyeOff,
    CheckCircle, AlertCircle
} from 'lucide-react'

import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa'

import { AnimatedBackground } from '@/animationbackground/page'

// ─── Hero ──────────────────────────────────────────────────
function LoginHero() {
    return (
        <section className="relative min-h-[30vh] flex items-center overflow-hidden bg-[#0A0A0A]">
            <AnimatedBackground particleCount={6} colors={['#F9C81B', '#3b82f6']} />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider pt-20">
                        Welcome Back
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
                        Sign In to Your Account
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-white/60 text-balance">
                        Access your dashboard, manage projects, and stay connected with the
                        Bhutly community.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Login Form ────────────────────────────────────────────
function LoginForm() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<Record<string, string>>({})

    const validate = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
        if (!formData.password) newErrors.password = 'Password is required'
        return newErrors
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setStatus('loading')

        // Simulate login (replace with actual authentication)
        try {
            // Simulate API call returning user role
            const response = await new Promise<{ role: string }>((resolve) =>
                setTimeout(() => resolve({ role: 'admin' }), 1500)
            )
            // In a real app, you'd receive the user role from the backend.
            // For demo, we'll mock a role based on email (just for demonstration)
            // You can replace with actual backend response.
            const userRole = formData.email.includes('admin') ? 'admin' : 'editor'

            setStatus('success')

            // Redirect after a short delay
            setTimeout(() => {
                if (userRole === 'admin') {
                    router.push('/admin')
                } else {
                    router.push('/editor')
                }
            }, 1000)

        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 5000)
        }
    }

    return (
        <section className="relative overflow-hidden py-16 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#8b5cf6']} />
            <div className="relative z-10 mx-auto max-w-md px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 shadow-2xl shadow-black/20"
                >
                    {status === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-3"
                        >
                            <CheckCircle className="h-5 w-5 flex-shrink-0" />
                            <span>Login successful! Redirecting to your dashboard...</span>
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3"
                        >
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <span>Invalid email or password. Please try again.</span>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-1.5">
                                Email Address *
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-white/5 backdrop-blur-sm border ${errors.email ? 'border-red-500/50' : 'border-white/10'
                                        } rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors`}
                                    placeholder="you@example.com"
                                />
                            </div>
                            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label htmlFor="password" className="block text-sm font-medium text-white/60">
                                    Password *
                                </label>
                                <Link href="/forgot-password" className="text-xs text-[#F9C81B] hover:underline">
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full bg-white/5 backdrop-blur-sm border ${errors.password ? 'border-red-500/50' : 'border-white/10'
                                        } rounded-xl pl-10 pr-12 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                checked={formData.remember}
                                onChange={handleChange}
                                className="w-4 h-4 bg-white/5 border border-white/10 rounded focus:ring-[#F9C81B] focus:ring-1 transition-colors"
                            />
                            <label htmlFor="remember" className="text-sm text-white/60">
                                Remember me
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F9C81B] px-8 py-3.5 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <>
                                    <span className="animate-spin h-4 w-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full" />
                                    Signing In...
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-white/40">
                            Don't have an account?{' '}
                            <Link href="/register" className="text-[#F9C81B] hover:underline font-medium">
                                Create Account
                            </Link>
                        </p>
                    </div>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-[#0A0A0A] px-4 text-white/30">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2.5 transition-colors">
                            <FaGithub className="h-5 w-5 text-white/60" />
                            <span className="text-xs text-white/60">GitHub</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2.5 transition-colors">
                            <FaLinkedin className="h-5 w-5 text-white/60" />
                            <span className="text-xs text-white/60">LinkedIn</span>
                        </button>
                        <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2.5 transition-colors">
                            <FaGoogle className="h-5 w-5 text-white/60" />
                            <span className="text-xs text-white/60">Google</span>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Main Page ────────────────────────────────────────────
export default function LoginPage() {
    return (
        <>
            <main>
                <LoginHero />
                <LoginForm />
            </main>
        </>
    )
}