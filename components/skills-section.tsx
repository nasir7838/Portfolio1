import { Badge } from "@/components/ui/badge"

const defaultSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "REST APIs",
  "Prisma",
  "PostgreSQL",
  "Playwright",
  "CI/CD",
]

export default function SkillsSection({ skills = defaultSkills }: { skills?: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((s) => (
        <Badge
          key={s}
          variant="secondary"
          className="rounded-md bg-white/10 text-white border-white/10 hover:bg-white/20"
        >
          {s}
        </Badge>
      ))}
    </div>
  )
}
