"use client"

import { useEffect, useState } from "react"
import { motion, type Transition } from "framer-motion"

type Props = {
  size?: number
  className?: string
  onToggle?: (open: boolean) => void
  open?: boolean
}

export default function MenuIcon({
  size = 44,
  className = "text-foreground",
  onToggle,
  open: externalOpen,
}: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    if (typeof externalOpen === "boolean") setIsOpen(externalOpen)
  }, [externalOpen])

  const leftX = 10
  const centerX = 20
  const rightX = 30
  const baseY = 16
  const upY = 10
  const downY = 22

  const commonTransition: Transition = {
    type: "spring",
    stiffness: 320,
    damping: 28,
  }

  const handleClick = () => {
    const next = !isOpen
    setIsOpen(next)
    onToggle?.(next)
    if (next) setIsHover(false)
  }

  return (
    <button
      aria-expanded={isOpen}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          handleClick()
        }
      }}
      onMouseEnter={() => !isOpen && setIsHover(true)}
      onMouseLeave={() => !isOpen && setIsHover(false)}
      className={`text-foreground group inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-offset-2 ${className}`}
      title={isOpen ? "Close menu" : "Open menu"}
      style={{ width: size, height: size }}
    >
      <svg
        width={size}
        height={size * 0.6}
        viewBox={`0 0 40 24`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="block"
      >
        {/* LEFT */}
        <motion.circle
          cx={leftX}
          cy={baseY}
          r={3.2} // default slightly smaller than before so spacing feels tighter but not touching
          fill="currentColor"
          initial={false}
          animate={
            isOpen
              ? { cx: centerX, cy: baseY, r: 8, opacity: 1 }
              : isHover
                ? { cx: leftX, cy: upY, r: 3.6, opacity: 1 } // hover a bit larger
                : { cx: leftX, cy: baseY, r: 3.2, opacity: 1 }
          }
          transition={commonTransition}
          style={{ transformOrigin: "center" }}
        />

        {/* CENTER (a little larger by default) */}
        <motion.circle
          cx={centerX}
          cy={baseY}
          r={5} // middle slightly larger by default
          fill="currentColor"
          initial={false}
          animate={
            isOpen
              ? { cx: centerX, cy: baseY, r: 10, opacity: 1 }
              : isHover
                ? { cx: centerX, cy: downY, r: 4.6, opacity: 1 }
                : { cx: centerX, cy: baseY, r: 5, opacity: 1 }
          }
          transition={commonTransition}
          style={{ transformOrigin: "center" }}
        />

        {/* RIGHT */}
        <motion.circle
          cx={rightX}
          cy={baseY}
          r={3.2}
          fill="currentColor"
          initial={false}
          animate={
            isOpen
              ? { cx: centerX, cy: baseY, r: 8, opacity: 0 }
              : isHover
                ? { cx: rightX, cy: upY, r: 3.6, opacity: 1 }
                : { cx: rightX, cy: baseY, r: 3.2, opacity: 1 }
          }
          transition={commonTransition}
          style={{ transformOrigin: "center" }}
        />

        {/* subtle ellipse removed? kept for subtle effect, unchanged */}
        <motion.ellipse
          cx={centerX}
          cy={baseY}
          rx={isOpen ? 16 : isHover ? 12 : 0}
          ry={isOpen ? 6 : isHover ? 4 : 0}
          fill="currentColor"
          opacity={isOpen ? 0.06 : isHover ? 0.04 : 0}
          initial={false}
          transition={{ duration: 0.35 }}
        />
      </svg>
    </button>
  )
}
