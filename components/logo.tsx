import { ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500">
        <ShoppingBag className="h-4 w-4 text-white" />
      </div>
      <span className="hidden font-bold logo-gradient sm:inline-block">ShopSage</span>
    </Link>
  )
}
