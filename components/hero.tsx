export default function Hero({
  name = "TAMAL SEN",
  tagline = "SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.",
  imageSrc = "https://images.unsplash.com/photo-1639762681057-1e7ca5641e53?q=80&w=1200&auto=format&fit=crop",
}: {
  name?: string
  tagline?: string
  imageSrc?: string
}) {
  return (
    <div className="relative min-h-[82vh] md:min-h-[92vh] overflow-hidden bg-gradient-to-b from-[#0b1220] to-[#070b12]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,200,120,0.25), rgba(255,200,120,0.12) 40%, transparent 70%)",
          filter: "blur(4px)",
        }}
      />
      {/* 3D cubes image on the right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[52%] max-w-[780px] opacity-90">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt="Abstract 3D cubes with glowing sphere"
          className="w-full h-auto object-contain select-none pointer-events-none"
        />
      </div>

      {/* Centered name + tagline */}
      <div className="container mx-auto px-4 relative py-36 md:py-48">
        <div className="max-w-6xl">
          <h1 className="text-center md:text-left text-[44px] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
            {name}
          </h1>
          <p className="mt-6 text-center md:text-left text-xs sm:text-sm md:text-base tracking-[0.22em] uppercase text-white/80">
            {tagline}
          </p>
        </div>
      </div>

      {/* Subtle bottom vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
    </div>
  )
}
