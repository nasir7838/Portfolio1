"use client"

import Link from "next/link"
import { Menu, X, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

type NavLink = { href: string; label: string }

export default function SiteHeader({
  name = "Your Name",
  githubUrl = "https://github.com/yourusername",
  navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
}: {
  name?: string
  githubUrl?: string
  navLinks?: NavLink[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="#" className="font-semibold tracking-tight">
          {name}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
            <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="Open GitHub">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden border-t transition-all",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground"
            onClick={() => setOpen(false)}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
