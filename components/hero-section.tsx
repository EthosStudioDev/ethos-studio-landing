export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-24">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block mb-6 animate-fade-in-up">
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Developer & Architect</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-tight animate-fade-in-up-delay-1">
          Full-stack Developer & AI Solutions Architect:{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Delivering Business Value at AI Speed
          </span>
          .
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
          Engineering high-performance AI agents and scalable full-stack architectures that turn technical complexity into competitive advantages.
        </p>
      </div>

      {/* Subtle bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  )
}
