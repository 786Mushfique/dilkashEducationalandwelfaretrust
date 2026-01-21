"use client"

import { useState } from "react"
import Header from "@/components/header"
import About from "@/components/about"
import Footer from "@/components/footer"

export default function AboutPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en")

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />
      <div className="pt-24">
        <About language={language} />
      </div>
      <Footer language={language} />
    </div>
  )
}
