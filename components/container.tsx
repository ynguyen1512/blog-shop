import type React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mx-auto max-w-6xl">{children}</div>
      </div>
    </div>
  )
}
