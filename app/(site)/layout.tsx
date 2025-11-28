import { SiteHeader } from "@/components/layout/site-header"
import SplashGate from "@/components/splash/splash-gate"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex h-screen flex-col">
      <SplashGate devBypass>
        <div className="relative flex h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
        </div>
      </SplashGate>
    </div>
  )
}
