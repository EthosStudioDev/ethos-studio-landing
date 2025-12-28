import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  showText?: boolean
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-10 w-10",
  }

  const textSizeClasses = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
  }

  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 group transition-opacity hover:opacity-80 ${className}`}
    >
      <div className={`relative ${sizeClasses[size]} shrink-0`}>
        <Image
          src="/EthosLogo.png"
          alt="Ethos Studio Logo"
          width={size === "sm" ? 24 : size === "md" ? 32 : 40}
          height={size === "sm" ? 24 : size === "md" ? 32 : 40}
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <span
          className={`font-bold tracking-tight ${textSizeClasses[size]} bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary/70 transition-all`}
        >
          Ethos Studio
        </span>
      )}
    </Link>
  )
}

