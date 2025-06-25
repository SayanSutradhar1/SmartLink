import type { ReactNode } from "react"
import { Link } from "react-router-dom"

interface PlatformLinkProps {
  name: string
  icon: ReactNode
  url: string
  color: string
}

export function PlatformLink({ name, icon, url, color }: PlatformLinkProps) {
  return (
    <Link
      to={url}
      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${color}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
        {icon}
      </div>
      <span className="font-medium">{name}</span>
    </Link>
  )
}