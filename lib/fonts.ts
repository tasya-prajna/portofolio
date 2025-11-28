import { Allura, Inter } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans  ",
  display: "swap",
})

export const fontSubs = Allura({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-subs",
})

export const fontSerif = localFont({
  src: [
    {
      path: "../public/fonts/PlayfairDisplay-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PlayfairDisplay-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/PlayfairDisplay-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/PlayfairDisplay-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/PlayfairDisplay-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/PlayfairDisplay-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/PlayfairDisplay-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/PlayfairDisplay-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/PlayfairDisplay-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/PlayfairDisplay-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/PlayfairDisplay-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/PlayfairDisplay-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
})
