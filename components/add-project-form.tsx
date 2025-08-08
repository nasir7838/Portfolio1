"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Project } from "@/types/project"

function parseTags(input: string): string[] {
  return input
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
}

export default function AddProjectForm({
  onAdd = (p: Project) => {
    console.log("Added project:", p)
  },
}: {
  onAdd?: (project: Project) => void
}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [url, setUrl] = useState("")
  const [tags, setTags] = useState("")
  const [submitting, setSubmitting] = useState(false)

  function reset() {
    setTitle("")
    setDescription("")
    setImage("")
    setUrl("")
    setTags("")
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim() || !description.trim()) return
    setSubmitting(true)
    const newProject: Project = {
      id: crypto.randomUUID(),
      title: title.trim(),
      description: description.trim(),
      image: image.trim() || "/project-management-dashboard.png",
      url: url.trim(),
      tags: parseTags(tags),
    }
    onAdd(newProject)
    // simulate network delay
    await new Promise((r) => setTimeout(r, 250))
    setSubmitting(false)
    reset()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Add a project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="My Awesome App"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="What it does, why you built it..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="url">Project URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image URL</Label>
              <Input
                id="image"
                type="url"
                placeholder="https://..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              placeholder="React, Tailwind, API"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={submitting}>
              {submitting ? "Adding..." : "Add Project"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
