"use client"

import { useState, useEffect } from "react"
import type { AdmissionForm } from "@/lib/types"
import { storageUtils } from "@/lib/storage"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SubmissionsList() {
  const [submissions, setSubmissions] = useState<AdmissionForm[]>([])

  useEffect(() => {
    setSubmissions(storageUtils.getAllForms())
  }, [])

  if (submissions.length === 0) {
    return (
      <div className="mt-16 text-center py-12">
        <p className="text-gray-500 text-lg">No applications submitted yet.</p>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Submitted Applications</h2>
      <div className="grid gap-4">
        {submissions.map((submission) => (
          <Card key={submission.id} className="p-6 border-l-4 border-l-blue-500">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h3 className="text-xl font-semibold text-gray-900">{submission.studentName}</h3>
                  <Badge className={getStatusColor(submission.status)}>
                    {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mt-4">
                  <div>
                    <span className="font-medium text-gray-700">Father Name:</span>
                    <p>{submission.fatherName}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Age:</span>
                    <p>{submission.age} years</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Course:</span>
                    <p>{submission.course}</p>
                  </div>
                  <div>
                    <span className="font-medium text-gray-700">Phone:</span>
                    <p>{submission.phone}</p>
                  </div>
                </div>
              </div>
              <Link href={`/admin/${submission.id}`}>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
