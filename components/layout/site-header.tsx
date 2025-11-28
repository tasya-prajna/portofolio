import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons/icons"
import { ThemeToggle } from "@/components/layout/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-16 z-10 w-full">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo />
            <span className="text-foreground inline-block font-serif font-medium tracking-wider">
              {siteConfig.name}
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <Link href={siteConfig.links.menu} target="_blank" rel="noreferrer">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.menu className="size-5" />
                <span className="sr-only">Menu</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
