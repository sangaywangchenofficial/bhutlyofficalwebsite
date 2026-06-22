"use client";

import Link from "next/link";
import {
    LayoutDashboard,
    FolderKanban,
    FileText,
    Sparkles,
    Users,
    MessageSquare,
    Settings,
    LogOut,
} from "lucide-react";

import { logout } from "@/app/adminlogoutactions/auth";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-black text-white flex">
            <aside className="w-64 border-r border-white/5 bg-white/5 backdrop-blur-sm p-4 flex flex-col fixed h-full overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">
                        Bhutly<span className="text-yellow-400">.</span>
                    </h1>
                    <p className="text-xs text-gray-400 mt-1">Admin Panel</p>
                </div>

                <nav className="flex-1 space-y-1">
                    <NavLink href="/admin" icon={<LayoutDashboard className="h-5 w-5" />}>
                        Dashboard
                    </NavLink>
                    <NavLink href="/admin/projects" icon={<FolderKanban className="h-5 w-5" />}>
                        Projects
                    </NavLink>
                    <NavLink href="/admin/blogs" icon={<FileText className="h-5 w-5" />}>
                        Blogs
                    </NavLink>
                    <NavLink href="/admin/messages" icon={<MessageSquare className="h-5 w-5" />}>
                        Messages
                    </NavLink>
                    <NavLink href="/admin/skills" icon={<Sparkles className="h-5 w-5" />}>
                        Skills
                    </NavLink>
                    <NavLink href="/admin/users" icon={<Users className="h-5 w-5" />}>
                        Users
                    </NavLink>
                    <NavLink href="/admin/settings" icon={<Settings className="h-5 w-5" />}>
                        Settings
                    </NavLink>

                    {/* ─── Logout Button (Server Action) ─── */}
                    <form action={logout}>
                        <button
                            type="submit"
                            className="flex w-full items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-gray-300 hover:text-white"
                        >
                            <LogOut className="h-5 w-5" />
                            <span className="text-sm">Logout</span>
                        </button>
                    </form>
                </nav>

                <div className="border-t border-white/5 pt-4">
                    <p className="text-xs text-gray-400 text-center">Admin Panel v1.0</p>
                </div>
            </aside>

            <main className="ml-64 flex-1 p-6">
                <div className="max-w-6xl mx-auto">{children}</div>
            </main>
        </div>
    );
}

function NavLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-white/5 transition-colors text-gray-300 hover:text-white"
        >
            {icon}
            <span className="text-sm">{children}</span>
        </Link>
    );
}