"use client"

import { useEffect, useMemo, useState } from "react"

import {
  SPLASH_AUTO_CLOSE_MS,
  SPLASH_ENABLED,
  SPLASH_HOLD,
} from "@/config/flags"
import SplashScreen from "@/components/splash/splash-screen"

type Props = {
  children: React.ReactNode
}

export default function SplashGate({ children }: Props) {
  const [show, setShow] = useState(false)
  const [ready, setReady] = useState(false)

  const enabled = SPLASH_ENABLED === true

  useEffect(() => {
    if (!enabled) {
      setShow(false)
      setReady(true)
      return
    }

    if (!SPLASH_HOLD && SPLASH_AUTO_CLOSE_MS > 0) {
      const t = setTimeout(() => {
        setShow(false)
        setReady(true)
      }, SPLASH_AUTO_CLOSE_MS)
      return () => clearTimeout(t)
    }
    setShow(true)
  }, [enabled])

  const handleFinish = () => {
    setShow(false)
    setReady(true)
  }

  if (show) {
    return (
      <SplashScreen
        durationMs={SPLASH_AUTO_CLOSE_MS}
        onContinue={handleFinish}
      />
    )
  }

  return <>{ready && children}</>
}
