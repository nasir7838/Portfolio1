import SiteNav from "@/components/site-nav"
import Hero from "@/components/hero"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ExperienceSection from "@/components/experience-section"
import ContactForm from "@/components/contact-form"

export default function Page() {
  return (
    <div className="bg-[#0a0f1a] text-white">
      {/* Top overlay nav like the reference */}
      <SiteNav
        brand="Nasir._"
        links={[
          { href: "#home", label: "home" },
          { href: "#expertise", label: "expertise" },
          { href: "#work", label: "work" },
          { href: "#experience", label: "experience" },
          { href: "#contact", label: "contact" },
        ]}
        github="https://github.com/nasir7838?tab=repositories"
      />

      <main>
        <section id="home" className="scroll-mt-24">
          <Hero
            name="MD NASIR ALAM"
            tagline="SOFTWARE ENGINEER, FRONT END & APP DEVELOPER."
            imageSrc="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1200&auto=format&fit=crop"
          />
        </section>

        <section id="expertise" className="py-16 md:py-24 bg-[#0b1220] scroll-mt-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Skills</h2>
            <p className="mt-2 text-sm text-white/60">Tools and technologies I use</p>
            <div className="mt-8">
              <SkillsSection skills={[
                "React",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "REST APIs",
                "Git & GitHub",
                "PostgreSQL",
              ]}/>
            </div>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24 bg-[#0a0f1a] scroll-mt-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-sm text-white/60">Paste a GitHub repo link to add a project</p>
            <div className="mt-8">
              <ProjectsSection />
            </div>
          </div>
        </section>

        <section id="experience" className="py-16 md:py-24 bg-[#0b1220] scroll-mt-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
            <p className="mt-2 text-sm text-white/60">A brief timeline</p>
            <div className="mt-8">
              <ExperienceSection />
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24 bg-[#0a0f1a] scroll-mt-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-sm text-white/60">Send me a message</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4 py-8 text-sm text-white/60">
          {new Date().getFullYear()} Md Nasir Alam. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
