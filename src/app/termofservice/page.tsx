"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedBackground } from "@/animationbackground/page";
import Link from "next/link";
import { Shield, ArrowRight } from "lucide-react";

export default function TermsOfService() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    // ─── Sections Data ──────────────────────────────────
    const sections = [
        {
            id: "introduction",
            title: "1. Introduction",
            content:
                "Welcome to Bhutly. These Terms of Service govern your use of our website and the services we provide. By accessing or using this site, you agree to comply with and be bound by these Terms. If you do not agree, please do not use the site.",
        },
        {
            id: "acceptance",
            title: "2. Acceptance of Terms",
            content:
                "By using this website and engaging our services, you accept these Terms in full. If you are using the site on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
        },
        {
            id: "services",
            title: "3. Services",
            content:
                "Bhutly offers full‑stack development, AI/ML solutions, computer vision applications, and backend system design. All services are provided on a project basis unless otherwise agreed. Scope, deliverables, timelines, and fees will be outlined in a separate agreement or proposal.",
            list: [
                "All project work is performed to the highest professional standards.",
                "Custom quotes and timelines are provided upon request.",
                "We reserve the right to refuse service to anyone for any reason.",
            ],
        },
        {
            id: "user-obligations",
            title: "4. User Obligations",
            content: "You agree to use the website and services only for lawful purposes. You must not:",
            list: [
                "Violate any applicable laws or regulations.",
                "Infringe on intellectual property rights.",
                "Transmit harmful or malicious code.",
                "Interfere with the security or performance of the site.",
                "Provide false or misleading information.",
            ],
        },
        {
            id: "intellectual-property",
            title: "5. Intellectual Property",
            content:
                "All content on this website, including text, graphics, logos, images, and code, is the property of Bhutly unless otherwise credited. You may not reproduce, distribute, or create derivative works without explicit permission.",
            extra:
                "For custom development projects, intellectual property rights will be defined in the project agreement. Typically, final deliverables become the client's property upon full payment, while we retain the right to use code snippets and libraries in future projects.",
        },
        {
            id: "limitation",
            title: "6. Limitation of Liability",
            content:
                "To the fullest extent permitted by law, we are not liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or our services. We do not guarantee that the website will be error‑free or uninterrupted.",
            extra:
                "Our total liability for any claim related to our services is limited to the amount you paid for the specific service giving rise to the claim.",
        },
        {
            id: "disclaimer",
            title: "7. Disclaimer",
            content:
                "The information on this website is provided on an \"as is\" and \"as available\" basis. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, or availability of the information, products, services, or related graphics.",
            extra: "Any reliance you place on such information is strictly at your own risk.",
        },
        {
            id: "governing-law",
            title: "8. Governing Law",
            content:
                "These Terms are governed by and construed in accordance with the laws of the Kingdom of Bhutan. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Bhutan.",
        },
        {
            id: "changes",
            title: "9. Changes to Terms",
            content:
                "We reserve the right to update these Terms at any time without prior notice. Changes will be effective immediately upon posting. Your continued use of the website constitutes acceptance of the updated Terms.",
        },
        {
            id: "contact",
            title: "10. Contact Us",
            content: "If you have any questions about these Terms, please contact us via the ",
            link: {
                text: "Contact page",
                href: "/contact",
            },
            email: "info@bhutly.com",
        },
    ];

    // ─── Animation Variants ─────────────────────────────
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.06, delayChildren: 0.2 },
        },
    };

    const itemFadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    // ─── Table of Contents ──────────────────────────────
    function TableOfContents() {
        return (
            <div className="sticky top-20 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">
                    Table of Contents
                </h3>
                <ul className="space-y-2 text-sm text-left">
                    {sections.map((section) => (
                        <li key={section.id}>
                            <Link
                                href={`#${section.id}`}
                                className="text-white/40 hover:text-[#ef4444] transition-colors block py-0.5"
                            >
                                {section.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white">
            {/* ─── Hero ───────────────────────────────────── */}
            <section className="relative overflow-hidden border-b border-white/5 py-20 sm:py-24">
                <AnimatedBackground particleCount={6} colors={['#ef4444', '#a855f7']} />
                <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                                Legal
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            Terms of{" "}
                            <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">
                                Service
                            </span>
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                            Last updated: June 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ─── Content + ToC ───────────────────────────── */}
            <section ref={sectionRef} className="relative overflow-hidden py-16 border-b border-white/5">
                <AnimatedBackground particleCount={3} colors={['#ef4444', '#f59e0b']} />
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-4 gap-8">
                        {/* Sidebar - Table of Contents */}
                        <div className="lg:col-span-1 hidden lg:block">
                            <TableOfContents />
                        </div>

                        {/* Main Content */}
                        <div className="lg:col-span-3 space-y-6 pt-4">
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                className="space-y-6"
                            >
                                {sections.map((section, idx) => (
                                    <motion.div
                                        key={idx}
                                        id={section.id}
                                        variants={itemFadeInUp}
                                        whileHover={{ scale: 1.01, y: -2 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                        className="group rounded-xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-red-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-red-500/5"
                                    >
                                        <h2 className="text-xl font-semibold text-white group-hover:text-red-400 transition-colors text-left">
                                            {section.title}
                                        </h2>
                                        <p className="mt-2 text-sm text-gray-300 leading-relaxed text-justify">
                                            {section.content}
                                            {section.link && (
                                                <>
                                                    <a
                                                        href={section.link.href}
                                                        className="text-red-400 hover:text-red-300 transition-colors font-medium"
                                                    >
                                                        {section.link.text}
                                                    </a>
                                                    .
                                                </>
                                            )}
                                            {section.email && (
                                                <>
                                                    {" "}
                                                    or email{" "}
                                                    <a
                                                        href={`mailto:${section.email}`}
                                                        className="text-red-400 hover:text-red-300 transition-colors font-medium"
                                                    >
                                                        {section.email}
                                                    </a>
                                                    .
                                                </>
                                            )}
                                        </p>
                                        {section.list && (
                                            <ul className="mt-3 space-y-1 text-sm text-gray-400 list-disc pl-5 text-left">
                                                {section.list.map((item, i) => (
                                                    <li key={i} className="text-justify">
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                        {section.extra && (
                                            <p className="mt-3 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-3 text-justify">
                                                {section.extra}
                                            </p>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Footer note */}
                            <div className="pt-8 border-t border-white/10 mt-8">
                                <div className="flex items-center gap-3 text-sm text-white/30 text-left">
                                    <Shield className="h-5 w-5 text-red-400" />
                                    <p>
                                        <strong className="text-white/50">Effective Date:</strong> June 18, 2026
                                        &nbsp;•&nbsp;
                                        <strong className="text-white/50">Last Updated:</strong> June 18, 2026
                                    </p>
                                </div>
                                <p className="mt-4 text-xs text-white/20 leading-relaxed text-justify">
                                    These Terms of Service are designed to protect both you and Bhutly. They
                                    are reviewed annually to ensure compliance with current laws and best
                                    practices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CTA Section ──────────────────────────────── */}
            <section className="relative overflow-hidden py-16 bg-[#0A0A0A] border-t border-white/5">
                <AnimatedBackground particleCount={4} colors={['#ef4444', '#ef4444']} />
                <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40 text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 rounded-full border border-red-500/20 mb-6">
                            <Shield className="h-4 w-4 text-red-400" />
                            <span className="text-xs text-red-400 font-medium">Questions?</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Need Clarification?
                        </h2>
                        <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance text-justify">
                            If you have any questions about our Terms of Service, please reach out.
                        </p>
                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-yellow-500 px-8 py-4 text-sm font-medium text-white hover:bg-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-105"
                            >
                                Contact Us
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                            >
                                Return Home
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}