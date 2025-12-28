"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const sectionRef = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  useEffect(() => {
    const handleDemoRequest = (e: CustomEvent) => {
      const projectName = e.detail?.projectName
      const requestType = e.detail?.type || "demo"
      
      if (projectName) {
        let message = ""
        if (requestType === "caseStudy") {
          message = `I'm interested in viewing the detailed case study for ${projectName}. I understand it's available under NDA and would like to discuss the architectural breakdown and performance metrics.`
        } else {
          message = `I'm interested in a live demo of the ${projectName}. Please let me know when we can connect.`
        }
        
        setFormData((prev) => ({
          ...prev,
          message,
        }))
        // Scroll to contact section
        setTimeout(() => {
          const contactSection = document.getElementById("contact")
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
            // Focus on message textarea after scroll
            setTimeout(() => {
              const messageTextarea = document.getElementById("message") as HTMLTextAreaElement
              if (messageTextarea) {
                messageTextarea.focus()
                messageTextarea.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            }, 500)
          }
        }, 100)
      }
    }

    window.addEventListener("requestDemo" as any, handleDemoRequest as EventListener)
    return () => {
      window.removeEventListener("requestDemo" as any, handleDemoRequest as EventListener)
    }
  }, [])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance scroll-fade-in">Contact Me</h2>
        <p className="text-muted-foreground mb-12 text-lg scroll-fade-in-delay-1">
          Let's discuss how we can work together to bring your ideas to life
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-base">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-base">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="min-h-32 resize-none"
            />
          </div>

          {submitStatus && (
            <div
              className={`p-4 rounded-md ${
                submitStatus.type === 'success'
                  ? 'bg-green-500/10 text-green-500 border border-green-500/20'
                  : 'bg-red-500/10 text-red-500 border border-red-500/20'
              }`}
            >
              {submitStatus.message}
            </div>
          )}
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto gap-2"
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4" />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}
