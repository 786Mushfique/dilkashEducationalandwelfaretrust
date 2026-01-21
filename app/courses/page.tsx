"use client"

import { useState } from "react"
import Header from "@/components/header"
import Courses from "@/components/courses"
import Footer from "@/components/footer"

export default function CoursesPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en")

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />
      <div className="pt-24">
        <Courses language={language} />
      </div>
      <Footer language={language} />
    </div>
  )
}
