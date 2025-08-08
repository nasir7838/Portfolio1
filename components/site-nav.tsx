"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Github } from 'lucide-react'

type LinkItem = { href: string; label: string }

export default function SiteNav({
  brand = "YourName._",
  links = [
    { href: "#home", label: "home" },
    { href: "#expertise", label: "expertise" },
    { href: "#work", label: "work" },
    { href: "#experience", label: "experience" },
    { href: "#contact", label: "contact" },
  ],
  github = "https://github.com/yourusername",
}: {
  brand?: string
  links?: LinkItem[]
  github?: string
}) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (href: string) => {
    const id = href.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">
          <span className="text-cyan-300">{brand.split("._")[0]}</span>
          <span className="text-fuchsia-300">._</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-[13px] uppercase tracking-wider text-white/70">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(l.href);
              }}
              className="hover:text-white transition-colors"
            >
              {i === 0 ? "" : "// "}{l.label}
            </a>
          ))}
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="ml-4 inline-flex items-center gap-2 hover:text-white"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </a>
        </nav>
        <button
          className="md:hidden rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile */}
      <div
        className={cn(
          "md:hidden bg-[#0a0f1a]/95 backdrop-blur border-t border-white/10 transition-all",
          open ? "max-h-72" : "max-h-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col gap-3 text-sm uppercase tracking-wider text-white/90">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(l.href);
              }}
            >
              {i === 0 ? "" : "// "}{l.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
