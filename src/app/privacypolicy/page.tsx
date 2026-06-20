'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Shield, ArrowRight, CheckCircle } from 'lucide-react'

import { Navbar } from '@/app/navbar/page'
import { AnimatedBackground } from '@/animationbackground/page'

// ─── Hero ──────────────────────────────────────────────────
function PrivacyHero() {
    return (
        <section className="relative min-h-[40vh] flex items-center overflow-hidden bg-[#0A0A0A]">
            <AnimatedBackground particleCount={6} colors={['#F9C81B', '#3b82f6']} />

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 w-full text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F9C81B]/10 rounded-full border border-[#F9C81B]/20 mb-4">
                        <Shield className="h-4 w-4 text-[#F9C81B]" />
                        <span className="text-xs text-[#F9C81B] font-medium">Privacy Policy</span>
                    </div>
                    <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        Your Privacy Matters
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-white/60 text-balance">
                        We are committed to protecting your personal data and being transparent
                        about how we collect, use, and safeguard your information.
                    </p>
                    <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-white/30">
                        <span>📅 Effective: June 18, 2026</span>
                        <span>•</span>
                        <span>📝 Last Updated: June 18, 2026</span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ─── Table of Contents ─────────────────────────────────────
function TableOfContents() {
    const sections = [
        { id: 'introduction', label: '1. Introduction' },
        { id: 'data-collection', label: '2. What Personal Data We Collect' },
        { id: 'data-usage', label: '3. How We Use Your Personal Data' },
        { id: 'data-sharing', label: '4. How We Share Your Personal Data' },
        { id: 'data-security', label: '5. Data Security' },
        { id: 'your-rights', label: '6. Your Rights' },
        { id: 'cookies', label: '7. Cookies and Tracking Technologies' },
        { id: 'retention', label: '8. Data Retention' },
        { id: 'international-transfers', label: '9. International Data Transfers' },
        { id: 'children', label: '10. Children\'s Privacy' },
        { id: 'third-party-links', label: '11. Third-Party Links' },
        { id: 'changes', label: '12. Changes to This Privacy Policy' },
        { id: 'dpo', label: '13. Data Protection Officer' },
        { id: 'contact', label: '14. Contact Us' },
        { id: 'governing-law', label: '15. Governing Law' },
    ]

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
                            className="text-white/40 hover:text-[#F9C81B] transition-colors block py-0.5"
                        >
                            {section.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// ─── Privacy Content ──────────────────────────────────────
function PrivacyContent() {
    return (
        <section className="relative overflow-hidden py-16 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={3} colors={['#F9C81B', '#8b5cf6']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Sidebar - Table of Contents */}
                    <div className="lg:col-span-1 hidden lg:block">
                        <TableOfContents />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-12 text-white/80 prose prose-invert prose-headings:text-white prose-a:text-[#F9C81B] prose-strong:text-white max-w-none">
                        {/* ─── 1. Introduction ─── */}
                        <section id="introduction">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">1.</span> Introduction
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                <strong>Bhutly</strong> is a software development
                                company based in Thimphu, Bhutan, dedicated to building modern digital
                                products for businesses and startups across the kingdom. We respect your
                                privacy and are committed to protecting your personal data. This Privacy
                                Policy explains how we collect, use, disclose, and safeguard your
                                information when you visit our website, use our services, or interact
                                with us.
                            </p>
                            <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                                <p className="text-white/50 text-left">
                                    <strong className="text-white/70">Bhutly</strong><br />
                                    Thimphu, Bhutan<br />
                                    Email: <a href="mailto:hello@bhutly.com" className="text-[#F9C81B] hover:underline">hello@bhutly.com</a><br />
                                    Phone: <a href="tel:+97517123456" className="text-[#F9C81B] hover:underline">+975 17 123 456</a>
                                </p>
                            </div>
                            <p className="mt-4 text-white/60 text-sm text-justify">
                                This policy applies to all visitors, users, and clients of our website
                                and services. By using our website or services, you agree to the
                                collection and use of information in accordance with this policy.
                            </p>
                        </section>

                        {/* ─── 2. What Personal Data We Collect ─── */}
                        <section id="data-collection">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">2.</span> What Personal Data We Collect
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                We collect various types of personal data to provide and improve our
                                services. This includes both information you actively provide and data
                                collected automatically.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                2.1 Information You Provide to Us
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Full name, email address, and phone number</strong> – when you contact us, register for an account, or request a consultation.</li>
                                <li><strong className="text-white/70">Company name and job title</strong> – when you engage our services or sign up for business-related communications.</li>
                                <li><strong className="text-white/70">Payment and billing information</strong> – when you purchase our services (processed through secure third-party payment processors).</li>
                                <li><strong className="text-white/70">Project details and requirements</strong> – when you discuss or commission a project with us.</li>
                                <li><strong className="text-white/70">Messages and communications</strong> – when you contact us via email, forms, or other channels.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                2.2 Information Collected Automatically
                            </h3>
                            <p className="text-white/60 text-justify">When you visit our website, we automatically collect certain information about your device and usage:</p>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left mt-2">
                                <li>IP address and device identifiers</li>
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Referring URLs</li>
                                <li>Pages visited and time spent</li>
                                <li>Clickstream data and interactions</li>
                                <li>Geolocation data (approximate)</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                2.3 Information from Third Parties
                            </h3>
                            <p className="text-white/60 text-justify">
                                We may receive information about you from third-party services we use,
                                such as analytics providers, marketing platforms, and payment processors.
                            </p>
                        </section>

                        {/* ─── 3. How We Use Your Personal Data ─── */}
                        <section id="data-usage">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">3.</span> How We Use Your Personal Data
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                We use your personal data for the following purposes:
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                3.1 Core Business Operations
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Providing and delivering services</strong> – to fulfil contracts, process transactions, and deliver the digital products you request.</li>
                                <li><strong className="text-white/70">Account creation and management</strong> – to create and maintain user accounts, dashboards, and project management tools.</li>
                                <li><strong className="text-white/70">Customer support</strong> – to respond to inquiries, provide technical assistance, and resolve issues.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                3.2 Communications and Marketing
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Sending service-related communications</strong> – updates, project status, billing notifications, and security alerts.</li>
                                <li><strong className="text-white/70">Marketing communications</strong> – newsletters, promotional offers, and information about our services (you may opt out at any time).</li>
                                <li><strong className="text-white/70">Responding to inquiries</strong> – when you contact us via email, forms, or phone.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                3.3 Website Improvement and Analytics
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Analytics and performance monitoring</strong> – to understand how visitors use our website and improve user experience.</li>
                                <li><strong className="text-white/70">Security and fraud prevention</strong> – to detect and prevent malicious activity, fraud, and unauthorised access.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                3.4 Legal Compliance
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Complying with legal obligations</strong> – to meet applicable laws, regulations, and regulatory requirements.</li>
                                <li><strong className="text-white/70">Enforcing terms and policies</strong> – to protect our legal rights and interests.</li>
                            </ul>

                            <div className="mt-4 p-4 bg-[#F9C81B]/5 border border-[#F9C81B]/10 rounded-xl">
                                <p className="text-sm text-white/50 text-justify">
                                    <span className="text-[#F9C81B]">ℹ️</span> In 2026, regulations increasingly
                                    require businesses to clearly disclose whether data is used for profiling,
                                    advertising, or automated decision-making. We do <strong className="text-white/70">not</strong> use your
                                    data for automated decision-making that significantly affects you.
                                </p>
                            </div>
                        </section>

                        {/* ─── 4. How We Share Your Personal Data ─── */}
                        <section id="data-sharing">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">4.</span> How We Share Your Personal Data
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                We may share your personal data with the following categories of third parties:
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                4.1 Service Providers and Vendors
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Cloud hosting and data storage providers</strong> – to host our website and store data securely.</li>
                                <li><strong className="text-white/70">Payment processors</strong> – to handle transactions securely.</li>
                                <li><strong className="text-white/70">Analytics and marketing platforms</strong> – to understand website performance and improve our services.</li>
                                <li><strong className="text-white/70">IT and security vendors</strong> – to protect our systems and data.</li>
                                <li><strong className="text-white/70">Legal, accounting, and compliance partners</strong> – as required for professional services.</li>
                            </ul>
                            <p className="mt-2 text-sm text-white/50 text-justify">
                                All third-party providers are contractually required to follow appropriate
                                security and privacy standards when handling your data.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                4.2 Corporate Affiliates
                            </h3>
                            <p className="text-white/60 text-justify">
                                We may share data with members of our corporate family for purposes
                                described in this policy.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                4.3 Legal and Regulatory Disclosures
                            </h3>
                            <p className="text-white/60 text-justify">
                                We may disclose your data if required by law, regulation, legal process,
                                or governmental request, or to protect the rights, property, or safety of
                                Bhutly, our users, or others.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                4.4 Business Transfers
                            </h3>
                            <p className="text-white/60 text-justify">
                                In the event of a merger, acquisition, or sale of assets, your data may be
                                transferred as part of that transaction. We will notify you of any such change.
                            </p>
                        </section>

                        {/* ─── 5. Data Security ─── */}
                        <section id="data-security">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">5.</span> Data Security
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                We take the security of your personal data seriously and implement
                                appropriate technical and organisational measures to protect it:
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                5.1 Technical Measures
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Encryption</strong> – data is encrypted in transit (using TLS/SSL) and at rest where feasible.</li>
                                <li><strong className="text-white/70">Access controls</strong> – role-based access limits who can view and process personal data.</li>
                                <li><strong className="text-white/70">Secure infrastructure</strong> – we use reputable cloud providers with recognised security certifications.</li>
                                <li><strong className="text-white/70">Regular security monitoring</strong> – we actively monitor our systems for potential threats.</li>
                                <li><strong className="text-white/70">Incident response procedures</strong> – we have plans in place to respond to data breaches promptly.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                5.2 Organisational Measures
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Employee training</strong> – our team is trained on data protection and privacy best practices.</li>
                                <li><strong className="text-white/70">Vendor due diligence</strong> – we assess third-party vendors for security and privacy compliance.</li>
                                <li><strong className="text-white/70">Data minimisation</strong> – we collect only the data necessary for the purposes described.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                5.3 Breach Notification
                            </h3>
                            <p className="text-white/60 text-justify">
                                In the event of a data breach that poses a risk to your rights and freedoms,
                                we will notify affected users and relevant authorities as required by
                                applicable law.
                            </p>
                            <p className="mt-2 text-sm text-white/40 text-justify">
                                While we strive to protect your data, no method of transmission over the
                                internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* ─── 6. Your Rights ─── */}
                        <section id="your-rights">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">6.</span> Your Rights
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                Depending on your location, you may have certain rights regarding your
                                personal data. These rights commonly include:
                            </p>

                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left mt-4">
                                <li><strong className="text-white/70">Right to Access</strong> – request a copy of the personal data we hold about you.</li>
                                <li><strong className="text-white/70">Right to Correction</strong> – request correction of inaccurate or incomplete data.</li>
                                <li><strong className="text-white/70">Right to Deletion</strong> – request deletion of your personal data, subject to legal exceptions.</li>
                                <li><strong className="text-white/70">Right to Opt Out</strong> – opt out of marketing communications, sale of data, or certain processing.</li>
                                <li><strong className="text-white/70">Right to Restrict or Object</strong> – restrict or object to certain processing activities.</li>
                                <li><strong className="text-white/70">Right to Data Portability</strong> – receive your data in a structured, commonly used format.</li>
                                <li><strong className="text-white/70">Right to Withdraw Consent</strong> – withdraw consent at any time where processing is based on consent.</li>
                                <li><strong className="text-white/70">Right to File a Complaint</strong> – file a complaint with a data protection authority.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                6.1 How to Exercise Your Rights
                            </h3>
                            <p className="text-white/60 text-justify">
                                To exercise any of these rights, please contact us at:
                            </p>
                            <div className="mt-2 p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                                <p className="text-white/50 text-left">
                                    <strong className="text-white/70">Email:</strong>{' '}
                                    <a href="mailto:hello@bhutly.com" className="text-[#F9C81B] hover:underline">hello@bhutly.com</a>
                                </p>
                                <p className="text-white/50 mt-1 text-left">
                                    <strong className="text-white/70">Subject Line:</strong> Privacy Request
                                </p>
                            </div>
                            <p className="mt-3 text-white/60 text-justify">
                                We will respond to your request within <strong className="text-white/70">30 days</strong> as required by
                                applicable law. We may need to verify your identity before processing your request.
                            </p>

                            <div className="mt-4 p-4 bg-[#F9C81B]/5 border border-[#F9C81B]/10 rounded-xl">
                                <p className="text-sm text-white/50 text-justify">
                                    <span className="text-[#F9C81B]">🔒</span> <strong className="text-white/70">Important for 2026:</strong> State privacy
                                    laws now require access, deletion, correction, and opt-out rights. We have
                                    implemented a dedicated process for handling privacy requests.
                                </p>
                            </div>
                        </section>

                        {/* ─── 7. Cookies and Tracking Technologies ─── */}
                        <section id="cookies">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">7.</span> Cookies and Tracking Technologies
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                We use cookies and similar tracking technologies to enhance your experience,
                                analyse website traffic, and personalise content.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                7.1 Types of Cookies We Use
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Essential cookies</strong> – necessary for website functionality.</li>
                                <li><strong className="text-white/70">Analytics cookies</strong> – to understand how visitors interact with our site.</li>
                                <li><strong className="text-white/70">Preference cookies</strong> – to remember your settings and preferences.</li>
                                <li><strong className="text-white/70">Marketing cookies</strong> – to deliver relevant advertisements (with your consent).</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                7.2 Global Privacy Control (GPC)
                            </h3>
                            <p className="text-white/60 text-justify">
                                As of January 1, 2026, California law requires businesses to honour
                                Global Privacy Control (GPC) signals. If your browser sends a GPC signal
                                indicating you wish to opt out of the sale or sharing of your personal
                                information, we will respect that choice.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                7.3 Your Cookie Choices
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li>Our cookie consent banner (available on first visit)</li>
                                <li>Your browser settings</li>
                                <li>Global Privacy Control (GPC) signals</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                7.4 Third-Party Cookies
                            </h3>
                            <p className="text-white/60 text-justify">
                                We may use third-party services (such as analytics and marketing platforms)
                                that place their own cookies on your device. These third parties have their
                                own privacy policies and data handling practices.
                            </p>
                        </section>

                        {/* ─── 8. Data Retention ─── */}
                        <section id="retention">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">8.</span> Data Retention
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                We retain your personal data only for as long as necessary to fulfil the
                                purposes outlined in this policy, unless a longer retention period is
                                required or permitted by law.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                8.1 Retention Periods
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Client and project data</strong> – retained for the duration of our engagement and for a reasonable period afterward.</li>
                                <li><strong className="text-white/70">Contact and inquiry data</strong> – retained for as long as we have a legitimate business interest, or until you request deletion.</li>
                                <li><strong className="text-white/70">Marketing data</strong> – retained until you unsubscribe or request deletion.</li>
                                <li><strong className="text-white/70">Analytics data</strong> – retained in aggregated, anonymised form for statistical purposes.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                8.2 Data Disposal
                            </h3>
                            <p className="text-white/60 text-justify">
                                When data is no longer needed, we securely delete or anonymise it.
                            </p>
                        </section>

                        {/* ─── 9. International Data Transfers ─── */}
                        <section id="international-transfers">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">9.</span> International Data Transfers
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                Bhutly is based in Bhutan, and your data may be stored and processed in
                                Bhutan or in other countries where we or our service providers operate.
                                These countries may have different data protection laws than your country
                                of residence.
                            </p>
                            <p className="mt-3 text-white/60 text-justify">
                                Where we transfer data internationally, we implement appropriate safeguards:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left mt-2">
                                <li>Standard contractual clauses approved by relevant authorities</li>
                                <li>Ensuring our service providers have adequate security measures</li>
                                <li>Complying with applicable data protection laws</li>
                            </ul>
                            <p className="mt-3 text-sm text-white/50 text-justify">
                                Bhutan's legal landscape treats personal data as a sensitive asset that
                                requires consent, purpose limitation, and secure handling. The country is
                                also advancing its digital identity and data protection frameworks.
                            </p>
                        </section>

                        {/* ─── 10. Children's Privacy ─── */}
                        <section id="children">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">10.</span> Children's Privacy
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                Our services are not directed to children under the age of 13. We do not
                                knowingly collect personal data from children under 13.
                            </p>
                            <p className="mt-3 text-white/60 text-justify">
                                If you are a parent or guardian and believe your child has provided us with
                                personal data, please contact us, and we will take steps to delete such
                                information.
                            </p>
                        </section>

                        {/* ─── 11. Third-Party Links ─── */}
                        <section id="third-party-links">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">11.</span> Third-Party Links
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                Our website may contain links to third-party websites, services, or
                                applications. This Privacy Policy does not apply to those third parties.
                                We encourage you to review the privacy policies of any third-party sites
                                you visit.
                            </p>
                        </section>

                        {/* ─── 12. Changes to This Privacy Policy ─── */}
                        <section id="changes">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">12.</span> Changes to This Privacy Policy
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                We may update this Privacy Policy from time to time to reflect changes in
                                our practices, technologies, or legal requirements.
                            </p>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                12.1 How We Notify You
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-white/60 text-left">
                                <li><strong className="text-white/70">Material changes</strong> – we will notify you via email or through a prominent notice on our website.</li>
                                <li><strong className="text-white/70">Minor updates</strong> – we will update the "Last Updated" date at the top of this policy.</li>
                            </ul>

                            <h3 className="text-lg font-semibold text-white mt-6 mb-3 text-left">
                                12.2 Annual Review
                            </h3>
                            <p className="text-white/60 text-justify">
                                As a best practice, we review our privacy policy at least once per year to
                                ensure disclosures remain accurate, new laws are addressed, and our data
                                practices are properly described. This commitment helps reduce compliance
                                risk and demonstrates our dedication to responsible data handling.
                            </p>
                            <p className="mt-3 text-white/60 text-justify">
                                We encourage you to review this policy periodically for any changes.
                            </p>
                        </section>

                        {/* ─── 13. Data Protection Officer ─── */}
                        <section id="dpo">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">13.</span> Data Protection Officer
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                Bhutly has appointed a Data Protection Officer (DPO) to oversee our data
                                protection practices and ensure compliance with applicable privacy laws.
                            </p>
                            <div className="mt-3 p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                                <p className="text-white/50 text-left">
                                    <strong className="text-white/70">DPO Contact:</strong><br />
                                    Email: <a href="mailto:dpo@bhutly.com" className="text-[#F9C81B] hover:underline">dpo@bhutly.com</a><br />
                                    Subject Line: Data Protection Inquiry
                                </p>
                            </div>
                        </section>

                        {/* ─── 14. Contact Us ─── */}
                        <section id="contact">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">14.</span> Contact Us
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                If you have any questions, concerns, or requests regarding this Privacy
                                Policy or our data practices, please contact us:
                            </p>
                            <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10 text-sm">
                                <p className="text-white/50 text-left">
                                    <strong className="text-white/70">Bhutly</strong><br />
                                    Thimphu, Bhutan<br />
                                    Email: <a href="mailto:hello@bhutly.com" className="text-[#F9C81B] hover:underline">hello@bhutly.com</a><br />
                                    Phone: <a href="tel:+97517123456" className="text-[#F9C81B] hover:underline">+975 17 123 456</a><br />
                                    Website: <a href="/" className="text-[#F9C81B] hover:underline">bhutly.com</a>
                                </p>
                            </div>
                            <p className="mt-3 text-white/60 text-justify">
                                For privacy-specific inquiries:{' '}
                                <a href="mailto:privacy@bhutly.com" className="text-[#F9C81B] hover:underline">
                                    privacy@bhutly.com
                                </a>
                            </p>
                        </section>

                        {/* ─── 15. Governing Law ─── */}
                        <section id="governing-law">
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2 text-left">
                                <span className="text-[#F9C81B]">15.</span> Governing Law
                            </h2>
                            <p className="text-white/70 leading-relaxed text-justify">
                                This Privacy Policy is governed by the laws of Bhutan, without regard to
                                its conflict of law provisions. By using our website and services, you
                                agree to submit to the jurisdiction of the courts of Bhutan for any
                                disputes arising from this policy.
                            </p>
                        </section>

                        {/* ─── Footer Note ─── */}
                        <div className="pt-8 border-t border-white/10">
                            <div className="flex items-center gap-3 text-sm text-white/30 text-left">
                                <Shield className="h-5 w-5 text-[#F9C81B]" />
                                <p>
                                    <strong className="text-white/50">Effective Date:</strong> June 18, 2026 &nbsp;•&nbsp;
                                    <strong className="text-white/50">Last Updated:</strong> June 18, 2026
                                </p>
                            </div>
                            <p className="mt-4 text-xs text-white/20 leading-relaxed text-justify">
                                This Privacy Policy is based on 2026 industry standards and is compliant
                                with major global privacy frameworks, including GDPR principles and
                                evolving state privacy laws. We are committed to maintaining the highest
                                standards of data protection and transparency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

// ─── CTA ────────────────────────────────────────────────────
function PrivacyCTA() {
    return (
        <section className="relative overflow-hidden py-16 bg-[#0A0A0A] border-t border-white/5">
            <AnimatedBackground particleCount={4} colors={['#F9C81B', '#F9C81B']} />
            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/40 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F9C81B]/10 rounded-full border border-[#F9C81B]/20 mb-6">
                        <Shield className="h-4 w-4 text-[#F9C81B]" />
                        <span className="text-xs text-[#F9C81B] font-medium">Questions about privacy?</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white">
                        We're Here to Help
                    </h2>
                    <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto text-balance">
                        If you have any questions about our privacy practices or how we handle your
                        data, don't hesitate to reach out.
                    </p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-full bg-[#F9C81B] px-8 py-4 text-sm font-medium text-[#0A0A0A] hover:bg-[#f0b800] transition-all duration-300 shadow-lg shadow-[#F9C81B]/30 hover:shadow-[#F9C81B]/50 hover:scale-105"
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
    )
}

// ─── Main Page ────────────────────────────────────────────
export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main>
                <PrivacyHero />
                <PrivacyContent />
                <PrivacyCTA />
            </main>
        </>
    )
}