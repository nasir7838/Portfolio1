import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from 'lucide-react'
import type { Project } from "@/types/project"

export default function ProjectCard({
  project = {
    id: "1",
    title: "Showcase Project",
    description: "Brief description of the project goes here.",
    image: "/images/project-1.png",
    url: "#",
    tags: ["React", "Tailwind"],
  },
}: {
  project?: Project
}) {
  const { title, description, image, url, tags } = project
  return (
    <Card className="overflow-hidden bg-white/[0.04] border-white/10 text-white">
      <div className="relative h-44 sm:h-48 md:h-52 w-full bg-white/5">
        <img
          src={image || "/placeholder.svg?height=320&width=640&query=project%20screenshot%20ui"}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-white/70">
        <p>{description}</p>
        {tags && tags.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary" className="rounded-md bg-white/10 border-white/10 text-white">
                {t}
              </Badge>
            ))}
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="mt-auto">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200"
          >
            <ExternalLink className="h-4 w-4" />
            View project
          </a>
        ) : (
          <span className="text-sm text-white/60">No link provided</span>
        )}
      </CardFooter>
    </Card>
  )
}
