"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string }

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>({ type: "idle" })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus({ type: "loading" })
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (!res.ok) throw new Error("Failed")
      setStatus({ type: "success", message: "Thanks! Your message has been sent." })
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." })
    }
  }

  return (
    <Card className="max-w-2xl bg-white/[0.04] border-white/10 text-white">
      <CardHeader>
        <CardTitle className="text-base">Send a message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Jane Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="name"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="jane@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/40"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Sending..." : "Send"}
            </Button>
            <p
              role="status"
              aria-live="polite"
              className={
                status.type === "success"
                  ? "text-sm text-emerald-400"
                  : status.type === "error"
                  ? "text-sm text-red-400"
                  : "text-sm text-white/60"
              }
            >
              {status.message}
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
