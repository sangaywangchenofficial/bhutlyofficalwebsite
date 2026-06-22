"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Hide Navbar and Footer on login, register, and admin pages
  const hideNavAndFooter =
    pathname.startsWith("/login") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/admindashboard") ||
    pathname.startsWith("/admin");

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {!hideNavAndFooter && <Footer />}
    </>
  );
}
