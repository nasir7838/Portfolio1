"use client"

import { useEffect, useMemo, useState } from "react"
import AddFromGitHub from "@/components/add-from-github"
import ProjectCard from "@/components/project-card"
import type { Project } from "@/types/project"

const STORAGE_KEY = "portfolio.projects.v2"

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw) as Project[]
        if (Array.isArray(parsed)) {
          setProjects(parsed)
          return
        }
      }
    } catch {}
    setProjects([]) // start empty
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects))
    } catch {}
  }, [projects])

  const onAdd = (p: Project) => {
    setProjects((prev) => {
      if (prev.some((x) => x.id === p.id)) {
        return [p, ...prev.filter((x) => x.id !== p.id)]
      }
      return [p, ...prev]
    })
  }

  const countText = useMemo(
    () => `${projects.length} project${projects.length === 1 ? "" : "s"}`,
    [projects.length]
  )

  return (
    <div className="grid gap-8">
      <AddFromGitHub onAdd={onAdd} />

      {projects.length === 0 ? (
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
          No projects yet. Paste a GitHub repo URL above to add your first project.
        </div>
      ) : (
        <>
          <div className="text-sm text-white/60">{countText}</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
