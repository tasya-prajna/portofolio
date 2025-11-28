"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TypingTitle() {
  const titles = ["UI/UX Designer", "Frontend Developer"]
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = titles[index % titles.length]
    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      )

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1200)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setIndex((prev) => prev + 1)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index, titles])

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-center px-4 text-center">
      <motion.span
        key={text}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-muted-foreground text-xs tracking-widest md:text-base"
      >
        {text}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.9, repeat: Infinity }}
        >
          |
        </motion.span>
      </motion.span>
    </section>
  )
}
