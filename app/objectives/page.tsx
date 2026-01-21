"use client"

import { useState } from "react"
import Header from "@/components/header"
import Objectives from "@/components/objectives"
import Footer from "@/components/footer"

export default function ObjectivesPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en")

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />
      <div className="pt-24">
        <Objectives language={language} />
      </div>
      <Footer language={language} />
    </div>
  )
}
