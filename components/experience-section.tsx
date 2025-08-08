import { Calendar } from 'lucide-react'

type Item = { period: string; role: string; company: string; summary: string }

const items: Item[] = [
  {
    period: "2025 — Present",
    role: "fresher",
    company: "",
    summary: "Leading UI architecture, performance and accessibility initiatives.",
  },
  
]

export default function ExperienceSection() {
  return (
    <ol className="relative border-l border-white/10">
      {items.map((item, idx) => (
        <li key={idx} className="mb-10 ml-6">
          <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20">
            <Calendar className="h-3.5 w-3.5 text-white/80" />
          </span>
          <h3 className="font-semibold">
            {item.role} · <span className="text-white/80">{item.company}</span>
          </h3>
          <time className="text-xs text-white/60">{item.period}</time>
          <p className="mt-2 text-sm text-white/70">{item.summary}</p>
        </li>
      ))}
    </ol>
  )
}
