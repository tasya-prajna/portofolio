"use client"

import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { Icons } from "../icons/icons"

type Props = {
  durationMs: number
  onContinue?: () => void
}

export default function SplashScreen({ durationMs, onContinue }: Props) {
  useEffect(() => {
    const start = performance.now()
    const raf = (t: number) => {
      const elapsed = t - start
      const pct = Math.min(100, (elapsed / durationMs) * 100)
      if (pct < 100) requestAnimationFrame(raf)
      else {
        onContinue?.()
      }
    }
    const id = requestAnimationFrame(raf)
    return () => cancelAnimationFrame(id)
  }, [durationMs, onContinue])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="splash"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45 }}
        className="bg-background fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="absolute left-1/2 w-full max-w-52 -translate-x-1/2 px-6 md:max-w-[480px] md:px-6">
          <motion.p
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.45 }}
            className="text-muted-foreground mb-2 text-xs uppercase tracking-[0.3em] md:text-xl"
          >
            Prologue
          </motion.p>

          <div className="flex justify-center">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.18, duration: 0.55 }}
              className="relative inline-block"
            >
              <Icons.portofolio className="text-primary" />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.45, duration: 0.35 }}
            className="text-right text-xs font-bold md:text-xl"
          >
            {new Date().getFullYear()}
          </motion.p>
        </div>

        <div className="absolute bottom-6 left-1/2 w-36 -translate-x-1/2 md:w-[240px]">
          <span className="bg-muted text-muted-foreground inline-flex items-center justify-center rounded-full px-4 py-2 text-[10px] shadow-inner md:px-8 md:text-base">
            crafted calm by Prj.
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
