"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { Project } from "@/types/project"

type Props = {
  onAdd?: (project: Project) => void
}

type GitHubRepo = {
  id: number
  name: string
  full_name: string
}

function parseGitHubRepo(input: string): { owner: string; repo: string } | null {
  const trimmed = input.trim()
  // Accept owner/repo
  const simple = trimmed.match(/^([\w.-]+)\/([\w.-]+)$/)
  if (simple) return { owner: simple[1], repo: simple[2] }

  // Accept https://github.com/owner/repo(/...optional)
  try {
    const url = new URL(trimmed)
    if (url.hostname !== "github.com") return null
    const parts = url.pathname.split("/").filter(Boolean)
    if (parts.length < 2) return null
    return { owner: parts[0], repo: parts[1] }
  } catch {
    return null
  }
}

export default function AddFromGitHub({ onAdd = () => {} }: Props) {
  const [value, setValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const parsed = parseGitHubRepo(value)
    if (!parsed) {
      setError("Enter a valid GitHub link or owner/repo")
      return
    }
    setLoading(true)
    try {
      const repoRes = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, {
        headers: { Accept: "application/vnd.github+json" },
      })
      if (!repoRes.ok) throw new Error("Repository not found")
      const repo = await repoRes.json() as GitHubRepo

      const image = `https://opengraph.githubassets.com/1/${parsed.owner}/${parsed.repo}`
      const id = `gh-${parsed.owner}-${parsed.repo}`

      const project: Project = {
        id,
        title: repo?.name || parsed.repo,
        description: repo?.description || "GitHub project",
        image,
        url: repo?.homepage || repo?.html_url || `https://github.com/${parsed.owner}/${parsed.repo}`,
        tags: [repo?.language].filter(Boolean),
      }

      onAdd(project)
      setValue("")
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch repository';
      setError(errorMessage);
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-white/[0.04] border-white/10 text-white">
      <CardHeader>
        <CardTitle className="text-base">Add from GitHub</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="gh">GitHub URL or owner/repo</Label>
            <Input
              id="gh"
              placeholder="https://github.com/owner/repo or owner/repo"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
            />
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700" disabled={loading}>
              {loading ? "Adding..." : "Add project"}
            </Button>
            {error ? <p className="text-sm text-red-400">{error}</p> : null}
          </div>
          <p className="text-xs text-white/50">
            Tip: paste from your repos page: https://github.com/nasir7838?tab=repositories
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
