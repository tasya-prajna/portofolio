"use client"

import { useRouter } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export default function MenuOverlay({
  open,
  onClose,
  items = [],
}: {
  open: boolean
  onClose?: () => void
  items?: { label: string; href: string }[]
}) {
  const router = useRouter()
  const nav = items.length
    ? items
    : [
        { label: "Home", href: "/" },
        { label: "Work", href: "/work" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ]

  const handleNav = (href: string) => {
    onClose?.()
    router.push(href)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.26 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
        >
          <motion.nav
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="mx-auto w-full max-w-lg rounded-2xl bg-card/80 p-8 text-center shadow-lg"
          >
            <ul className="space-y-6">
              {nav.map((it) => (
                <li key={it.href}>
                  <button
                    onClick={() => handleNav(it.href)}
                    className="text-2xl font-medium tracking-wide text-foreground/90 transition hover:text-primary"
                  >
                    {it.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                onClick={() => onClose?.()}
                className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
              >
                Close
              </button>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
