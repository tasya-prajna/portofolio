"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function NotFound() {
  const router = useRouter()
  const [q, setQ] = useState("")

  return (
    <div className="bg-background relative flex min-h-dvh items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl text-center"
      >
        <span className="bg-muted text-muted-foreground ring-border mb-2 inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[10px] shadow-inner ring-1 md:px-4 md:text-sm">
          Page Not Found
        </span>

        <span className="text-shadow-inner text-primary font-subs block text-7xl leading-none sm:text-9xl">
          404
        </span>

        <div className="text-foreground/40 text-[8px] md:text-xs">
          <button
            onClick={() => router.back()}
            className="hover:text-foreground/60 underline underline-offset-4"
          >
            Take me back
          </button>
        </div>
      </motion.div>
    </div>
  )
}
