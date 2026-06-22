"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FolderKanban,
    FileText,
    Sparkles,
    Users,
    MessageSquare,
    PlusCircle,
    ArrowRight,
} from "lucide-react";

const stats = [
    { label: "Projects", value: "12", icon: FolderKanban, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Blogs", value: "8", icon: FileText, color: "text-green-400", bg: "bg-green-500/10" },
    { label: "Skills", value: "15", icon: Sparkles, color: "text-yellow-400", bg: "bg-yellow-500/10" },
    { label: "Messages", value: "8", icon: MessageSquare, color: "text-amber-400", bg: "bg-amber-500/10" },
    { label: "Users", value: "5", icon: Users, color: "text-purple-400", bg: "bg-purple-500/10" },
];

const quickActions = [
    { label: "New Project", href: "/admin/projects/new", icon: PlusCircle },
    { label: "New Blog", href: "/admin/blogs/new", icon: FileText },
    { label: "Add Skill", href: "/admin/skills/new", icon: Sparkles },
    { label: "View Messages", href: "/admin/messages", icon: MessageSquare },
];

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white">Welcome to the Admin Dashboard 👋</h1>
                <p className="text-gray-400 mt-1">Here's what's happening with your content</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {stats.map((stat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className={`${stat.bg} backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/5`}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-400">{stat.label}</p>
                                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
                            </div>
                            <stat.icon className={`h-8 w-8 ${stat.color}`} />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions – Full width now */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2 mb-4">
                    <PlusCircle className="h-5 w-5 text-yellow-400" />
                    Quick Actions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {quickActions.map((action, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <Link
                                href={action.href}
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-yellow-400/20 transition-all group"
                            >
                                <action.icon className="h-5 w-5 text-yellow-400" />
                                <span className="text-sm text-gray-300 group-hover:text-white transition">
                                    {action.label}
                                </span>
                                <ArrowRight className="h-4 w-4 text-yellow-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stats Summary Footer */}
            <div className="mt-6 text-xs text-gray-500 text-center border-t border-white/5 pt-4">
                <p suppressHydrationWarning>Data updated in real-time. Last refresh: {new Date().toLocaleString()}</p>
            </div>
        </div>
    );
}