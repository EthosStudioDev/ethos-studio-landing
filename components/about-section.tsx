"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-balance scroll-fade-in">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Photo */}
          <div className="md:col-span-1 scroll-fade-in-delay-1">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
              <Image
                src="/es- avatar.png"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-6 scroll-fade-in-delay-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I bridge the gap between legacy stability and AI-driven innovation. With a deep background in Enterprise Java development and Native/Flutter mobile ecosystems, I specialize in architecting systems that are both robust and future-proof.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Whether it's building high-performance Next.js applications, maintaining mission-critical Java backends, or delivering seamless cross-platform App experiences, I focus on one goal: delivering measurable business value.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I excel at modernizing traditional architectures—transitioning complex Java environments into agile, AI-integrated solutions without compromising security or performance. At Ethos Studio, I turn technical debt into technical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
