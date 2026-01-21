"use client"

import { useState } from "react"
import Header from "@/components/header"
import PrincipalMessage from "@/components/principal-message"
import Footer from "@/components/footer"

export default function PrincipalPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en")

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />
      <div className="pt-24">
        <PrincipalMessage language={language} />
      </div>
      <Footer language={language} />
    </div>
  )
}
