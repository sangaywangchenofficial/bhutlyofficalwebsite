'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import {
    ArrowRight, User, Mail, Lock, Eye, EyeOff,
    CheckCircle, AlertCircle
} from 'lucide-react'
import { FaGoogle } from 'react-icons/fa'
import { signIn } from "next-auth/react"

import { AnimatedBackground } from '@/animationbackground/page'
import { registerUserAction } from '@/app/register/registration.action'

// ─── Password Strength Indicator ──────────────────────────
function PasswordStrength({ password }: { password: string }) {
    const getStrength = () => {
        let score = 0
        if (password.length >= 8) score++
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
        if (/\d/.test(password)) score++
        if (/[^a-zA-Z0-9]/.test(password)) score++
        return score
    }

    const strength = getStrength()
    const labels = ['Weak', 'Fair', 'Good', 'Strong']
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500']

    if (password.length === 0) return null

    return (
        <div className="mt-1.5">
            <div className="flex gap-1 h-1.5">
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className={`flex-1 rounded-full transition-colors ${i < strength ? colors[strength - 1] : 'bg-white/10'
                            }`}
                    />
                ))}
            </div>
            <p className={`text-xs mt-1 ${strength > 0 ? colors[strength - 1].replace('bg-', 'text-') : 'text-white/30'
                }`}>
                {strength > 0 ? labels[strength - 1] : 'Enter a password'}
            </p>
        </div>
    )
}

// ─── Hero ──────────────────────────────────────────────────
function RegisterHero() {
    return (
        <section className="relative min-h-[30vh] flex items-center overflow-hidden bg-[#0A0A0A]">
            <AnimatedBackground particleCount={6} colors={['#F9C81B', '#8b5cf6']} />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-sm font-semibold text-[#F9C81B] uppercase tracking-wider pt-24">
                        Join Us
                    </span>
                    <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
                        Create Your Account
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-white/60 text-balance">
                        Start your journey with Bhutly. Join a community of innovators and
                        builders in Bhutan.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Registration Form ─────────────────────────────────────
function RegisterForm() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: 'editor',
        terms: false,
    })
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [serverMessage, setServerMessage] = useState('')

    const validate = () => {
        const newErrors: Record<string, string> = {}
        if (!formData.name.trim()) newErrors.name = 'Full name is required'
        if (!formData.email.trim()) newErrors.email = 'Email is required'
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
        if (!formData.password) newErrors.password = 'Password is required'
        else if (formData.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match'
        if (!formData.role) newErrors.role = 'Please select a role'
        if (!formData.terms) newErrors.terms = 'You must agree to the terms'
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
        setServerMessage('')
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        setStatus('loading')
        setServerMessage('')

        const result = await registerUserAction({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            role: formData.role as 'admin' | 'editor',
        })

        if (result.success) {
            setStatus('success')
            // 👇 Redirect to login page after a short delay
            setTimeout(() => {
                router.push('/login')
            }, 1500)
        } else {
            setStatus('error')
            setServerMessage(result.message || 'Registration failed. Please try again.')
            setTimeout(() => {
                setStatus('idle')
            }, 5000)
        }
    }

    return (
        <section className="relative overflow-hidden py-16 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#f472b6']} />
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
                            <span>Account created! Redirecting to login...</span>
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center gap-3"
                        >
                            <AlertCircle className="h-5 w-5 flex-shrink-0" />
                            <span>{serverMessage}</span>
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Full Name */}
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
                                    className={`w-full bg-white/5 backdrop-blur-sm border ${errors.name ? 'border-red-500/50' : 'border-white/10'
                                        } rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors`}
                                    placeholder="Your full name"
                                />
                            </div>
                            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                        </div>

                        {/* Email */}
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

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-white/60 mb-1.5">
                                Password *
                            </label>
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
                                    placeholder="At least 8 characters"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            <PasswordStrength password={formData.password} />
                            {errors.password && <p className="mt-1 text-sm text-red-400">{errors.password}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/60 mb-1.5">
                                Confirm Password *
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
                                <input
                                    type={showConfirm ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`w-full bg-white/5 backdrop-blur-sm border ${errors.confirmPassword ? 'border-red-500/50' : 'border-white/10'
                                        } rounded-xl pl-10 pr-12 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#F9C81B]/50 transition-colors`}
                                    placeholder="Confirm your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                                >
                                    {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="mt-1 text-sm text-red-400">{errors.confirmPassword}</p>}
                        </div>

                        {/* Role Selection */}
                        <div className="text-center">
                            <label className="block text-sm font-medium text-white/60 mb-1.5">
                                Select Role *
                            </label>
                            <div className="flex gap-6 justify-center">
                                <label className="flex items-center gap-2 text-white/80 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="admin"
                                        checked={formData.role === 'admin'}
                                        onChange={handleChange}
                                        className="w-4 h-4 accent-[#F9C81B]"
                                    />
                                    <span>Admin</span>
                                </label>
                                <label className="flex items-center gap-2 text-white/80 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="editor"
                                        checked={formData.role === 'editor'}
                                        onChange={handleChange}
                                        className="w-4 h-4 accent-[#F9C81B]"
                                    />
                                    <span>Editor</span>
                                </label>
                            </div>
                            {errors.role && <p className="mt-1 text-sm text-red-400">{errors.role}</p>}
                        </div>

                        {/* Terms */}
                        <div className="flex items-start gap-3">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={formData.terms}
                                onChange={handleChange}
                                className="mt-1 w-4 h-4 bg-white/5 border border-white/10 rounded focus:ring-[#F9C81B] focus:ring-1 transition-colors"
                            />
                            <label htmlFor="terms" className="text-sm text-white/60">
                                I agree to the{' '}
                                <Link href="/termofservice" className="text-[#F9C81B] hover:underline">
                                    Terms of Service
                                </Link>
                                {' '}and{' '}
                                <Link href="/privacypolicy" className="text-[#F9C81B] hover:underline">
                                    Privacy Policy
                                </Link>
                            </label>
                        </div>
                        {errors.terms && <p className="text-sm text-red-400 -mt-2">{errors.terms}</p>}

                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#F9C81B] px-8 py-3.5 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <>
                                    <span className="animate-spin h-4 w-4 border-2 border-[#0A0A0A] border-t-transparent rounded-full" />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="h-4 w-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-white/40">
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#F9C81B] hover:underline font-medium">
                                Sign In
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

                    <div className="flex justify-center">
                        <button 
                            type="button"
                            onClick={() => signIn("google", { callbackUrl: "/admindashboard" })}
                            className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-2.5 transition-colors"
                        >
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
export default function RegisterPage() {
    return (
        <main>
            <RegisterHero />
            <RegisterForm />
        </main>
    )
}