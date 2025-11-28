"use client"

import { motion } from "framer-motion"

import TypingTitle from "@/components/text/typing-title"

export default function Home() {
  return (
    <main className="bg-background text-foreground relative h-full">
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 15%, hsl(0 0% 100% / .6), transparent 60%), radial-gradient(80% 60% at 20% 90%, hsl(210 20% 85% / .22), transparent 60%)",
          }}
        />
        <motion.div
          className="absolute left-1/2 top-[-160px] size-[420px] -translate-x-1/2 rounded-full bg-white/60 blur-3xl"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-[20px] right-[-60px] size-[320px] rounded-full bg-[hsl(355_60%_58%/.18)] blur-3xl"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-[40px] top-[40%] size-[300px] rounded-full bg-[hsl(210_20%_85%/.24)] blur-3xl"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <section className="relative z-10 mx-auto flex min-h-[78vh] max-w-[320px] flex-col items-center justify-center px-4 text-center md:max-w-2xl">
        <TypingTitle />

        <span className="font-subs text-foreground py-4 text-6xl md:text-8xl">
          Prajna Tasya
        </span>

        <span className="text-muted-foreground text-justify text-xs tracking-widest md:text-base">
          Hi! I’m a UI/UX Designer focused on crafting{" "}
          <span className="text-primary">seamless interfaces</span> and
          thoughtful details that make digital experiences feel{" "}
          <span className="text-primary">effortless</span>.
        </span>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-6 md:mt-6">
          <a
            href="#work"
            className="text-foreground group relative text-xs font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[hsl(355_60%_58%)] after:transition-all after:duration-300 hover:after:w-full md:text-base"
          >
            <span className="inline-flex items-center gap-1">
              <span className="transition-all duration-300 group-hover:text-[hsl(355_60%_58%)] group-hover:drop-shadow-[0_0_8px_hsl(355_60%_58%/.45)]">
                -&gt;
              </span>
              see my work
            </span>
          </a>

          <a
            href="#about"
            className="text-foreground/80 hover:text-foreground group relative text-xs font-medium after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-[hsl(355_60%_58%)] after:transition-all after:duration-300 hover:after:w-full md:text-base"
          >
            <span className="inline-flex items-center gap-1">
              <span className="transition-all duration-300 group-hover:text-[hsl(355_60%_58%)] group-hover:drop-shadow-[0_0_8px_hsl(355_60%_58%/.45)]">
                -&gt;
              </span>
              more about me
            </span>
          </a>
        </div>
      </section>

      <footer className="text-muted-foreground absolute bottom-4 left-1/2 z-10 w-full max-w-6xl -translate-x-1/2 px-4 text-center text-[10px] md:text-xs">
        © {new Date().getFullYear()} — Built with Next.js × Tailwind
      </footer>
    </main>
  )
}
