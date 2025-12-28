"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ArrowUpRight, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Enterprise AI Agent Integration",
    description:
      "Developed custom AI agents that automate complex document processing and customer support workflows. Integrated LLMs with internal databases to reduce manual effort by 60%. Built with a focus on high availability and multi-tenant scalability. Delivered a production-ready MVP in 4 weeks.",
    tags: ["OpenAI/Anthropic", "LangChain", "Vector Databases", "Workflow Automation"],
    demoLink: "#",
    caseStudyLink: "#",
  },
  {
    title: "Legacy Java to Modern Web Transformation",
    description:
      "Architected the seamless migration of enterprise Java backends to a high-performance Next.js frontend. Built robust API layers to bridge legacy stability with modern user experiences. Focused on scalability and zero-downtime deployment strategies.",
    tags: ["Java", "Spring Boot", "Next.js", "Microservices", "Architecture Design"],
    demoLink: "#",
    caseStudyLink: "#",
  },
  {
    title: "AI-Powered Analytics Platform",
    description:
      "Enterprise-grade dashboard utilizing RAG (Retrieval-Augmented Generation) to transform raw data into actionable predictive insights. Optimized for high-concurrency environments with multi-tenant scalability. Delivered scalable solution in 6 weeks.",
    tags: ["Next.js", "RAG", "LLM"],
    demoLink: "#",
    caseStudyLink: "#",
  },
  {
    title: "Real-time Collaboration Tool",
    description:
      "High-availability platform powered by WebSockets and Redis, featuring ultra-low latency document synchronization and military-grade encryption. Built for enterprise-scale deployment with focus on horizontal scalability.",
    tags: ["WebSockets", "Redis", "Node.js"],
    demoLink: "#",
    caseStudyLink: "#",
  },
  {
    title: "E-commerce Optimization System",
    description:
      "AI-driven recommendation engine that boosted conversion rates by 40%. Leveraged vector databases to provide hyper-personalized user journeys. Designed for high-traffic scalability and rapid deployment.",
    tags: ["Vector DB", "AI/ML", "Python"],
    demoLink: "#",
    caseStudyLink: "#",
  },
  {
    title: "Cloud Infrastructure Automation",
    description:
      "Infrastructure-as-Code (IaC) solution that reduced deployment cycles by 70%. Seamlessly scaling across AWS and multi-cloud environments. Built with enterprise-grade scalability and rapid provisioning capabilities.",
    tags: ["IaC", "AWS", "Kubernetes"],
    demoLink: "#",
    caseStudyLink: "#",
  },
]

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ProjectsSection() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance scroll-fade-in">My Projects</h2>
        <p className="text-muted-foreground mb-16 text-lg scroll-fade-in-delay-1">
          A selection of recent work showcasing full-stack development and AI integration
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const delayClass = index === 0 ? 'scroll-fade-in' : index === 1 ? 'scroll-fade-in-delay-1' : 'scroll-fade-in-delay-2'
            return (
            <Card
              key={index}
              className={`group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 [perspective:1000px] flex flex-col h-full ${delayClass}`}
              style={{
                transform: "translateZ(0)",
                transition: "transform 0.3s ease-out, box-shadow 0.3s ease-out",
              }}
              onMouseMove={(e) => {
                const card = e.currentTarget
                const rect = card.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                const centerX = rect.width / 2
                const centerY = rect.height / 2
                const rotateX = (y - centerY) / 20
                const rotateY = (centerX - x) / 20
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
              }}
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
                <CardDescription className="text-base leading-relaxed mt-3 project-description">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-accent/50 text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-2 border-t border-border/50 mt-auto">
                  <div className="flex gap-2">
                    {project.demoLink === "#" ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-1 text-xs btn-ghost-glow"
                            onClick={() => {
                              const event = new CustomEvent("requestDemo", {
                                detail: { projectName: project.title },
                              })
                              window.dispatchEvent(event)
                            }}
                          >
                            <ExternalLink className="w-3 h-3 mr-1.5" />
                            View Demo
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Demo is being prepared for the public. For a private walkthrough, please contact me directly.</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-xs btn-ghost-glow"
                        onClick={() => {
                          window.open(project.demoLink, "_blank")
                        }}
                      >
                        <ExternalLink className="w-3 h-3 mr-1.5" />
                        View Demo
                      </Button>
                    )}
                    {project.caseStudyLink === "#" ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex-1 text-xs btn-ghost-glow"
                            onClick={() => {
                              const event = new CustomEvent("requestDemo", {
                                detail: { projectName: project.title, type: "caseStudy" },
                              })
                              window.dispatchEvent(event)
                            }}
                          >
                            Case Study
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <p>Detailed case study is available upon request under NDA (Non-Disclosure Agreement). Please contact me to see the full architectural breakdown and performance metrics.</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 text-xs btn-ghost-glow"
                        onClick={() => {
                          window.open(project.caseStudyLink, "_blank")
                        }}
                      >
                        Case Study
                      </Button>
                    )}
                  </div>
                  {project.demoLink === "#" && (
                    <p className="text-[10px] text-muted-foreground/70 text-center mt-1">
                      Available upon request for verified inquiries.
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
