"use client"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            // 只触发一次，然后停止观察
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // 当元素 10% 可见时触发
        rootMargin: "0px 0px -50px 0px", // 提前一点触发
      }
    )

    // 观察 section 本身
    observer.observe(element)

    // 观察 section 内所有带有 scroll-fade-in 类的子元素
    const animatedElements = element.querySelectorAll(
      ".scroll-fade-in, .scroll-fade-in-delay-1, .scroll-fade-in-delay-2"
    )
    animatedElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      if (element) {
        observer.unobserve(element)
        animatedElements.forEach((el) => {
          observer.unobserve(el)
        })
      }
    }
  }, [])

  return ref
}

