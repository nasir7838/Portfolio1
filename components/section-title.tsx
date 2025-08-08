export default function SectionTitle({
  title = "Section",
  subtitle = "",
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  )
}
