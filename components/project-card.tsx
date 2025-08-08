import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from 'lucide-react'
import { Image } from "@/components/ui/image"
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
    <Card className="overflow-hidden bg-white/[0.04] border-white/10 text-white hover:bg-white/[0.08] transition-colors duration-300">
      <div className="relative h-44 sm:h-48 md:h-52 w-full bg-white/5">
        <Image
          src={image || "/placeholder.svg"}
          alt={`${title} project screenshot`}
          width={800}
          height={450}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl md:text-2xl">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            {title}
            <ExternalLink className="w-4 h-4" />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base text-white/80 line-clamp-3">
          {description}
        </p>
      </CardContent>
      {tags && tags.length > 0 && (
        <CardFooter className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs sm:text-sm px-2 py-1 bg-white/5 text-white/80"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      )}
    </Card>
  )
}
