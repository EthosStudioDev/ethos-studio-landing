import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px] animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-pulse [animation-delay:4s]" />
      </div>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
