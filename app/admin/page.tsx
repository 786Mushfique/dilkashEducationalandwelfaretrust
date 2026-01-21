"use client";

import { useState, useEffect } from "react";
import type { AdmissionForm } from "@/lib/types";
import { useRouter } from "next/navigation";
import { storageUtils } from "@/lib/storage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Trash2, Eye, ArrowLeft, Lock, Unlock } from "lucide-react";
import { toast } from "sonner";

const ADMIN_PASSWORD = "admin123"; // Simple admin password (change this in production)

export default function AdminDashboard() {
  const router = useRouter();
  const [forms, setForms] = useState<AdmissionForm[]>([]);
  const [filterStatus, setFilterStatus] = useState<
    "all" | "pending" | "approved" | "rejected"
  >("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  useEffect(() => {
    const adminAuth = localStorage.getItem("adminAuthenticated");
    setIsAdminLoggedIn(!!adminAuth);

    setForms(storageUtils.getAllForms());
  }, []);

  const handleAdminLogin = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuthenticated", "true");
      setIsAdminLoggedIn(true);
      setPasswordInput("");
      toast.success("Admin access granted");
    } else {
      toast.error("Invalid admin password");
      setPasswordInput("");
    }
  };

 const handleAdminLogout = () => {
  // 1️⃣ Clear admin session
  localStorage.removeItem("adminAuthenticated");

  // 2️⃣ Show toast (component still mounted)
  toast.success("Logged out successfully");

  // 3️⃣ Redirect after toast renders
  setTimeout(() => {
    router.push("/");
  }, 800);
};

  if (!isAdminLoggedIn) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="text-center mb-8">
            <Lock className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Portal</h1>
            <p className="text-gray-600 mt-2">
              Enter password to access admin dashboard
            </p>
          </div>

          <div className="space-y-4">
            <Input
              type="password"
              placeholder="Enter admin password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAdminLogin()}
              className="w-full"
            />
            <Button
              onClick={handleAdminLogin}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Unlock className="mr-2 h-4 w-4" /> Login
            </Button>
          </div>
        </Card>
      </main>
    );
  }

  // ... existing code for rest of admin dashboard ...

  const filteredForms = forms.filter((form) => {
    const matchesStatus =
      filterStatus === "all" || form.status === filterStatus;
    const matchesSearch = form.studentName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this application?")) {
      storageUtils.deleteForm(id);
      setForms(storageUtils.getAllForms());
      toast.success("Application deleted");
    }
  };

  const handleStatusChange = (
    id: string,
    status: "approved" | "rejected" | "pending",
  ) => {
    storageUtils.updateForm(id, { status });
    setForms(storageUtils.getAllForms());
    toast.success(`Application marked as ${status}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <Button variant="outline" className="bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Form
            </Button>
          </Link>
          <Button variant="destructive" onClick={handleAdminLogout}>
            <Unlock className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Admin Dashboard
        </h1>

        {/* Filters & Search */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search by Name
              </label>
              <Input
                placeholder="Search applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <Select
                value={filterStatus}
                onValueChange={(value: any) => setFilterStatus(value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Applications</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button variant="outline" className="w-full bg-transparent">
                Total: {filteredForms.length}
              </Button>
            </div>
          </div>
        </div>

        {/* Applications Table */}
        {filteredForms.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-gray-500 text-lg">No applications found</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredForms.map((form) => (
              <Card key={form.id} className="p-6 border-l-4 border-l-blue-500">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {form.studentName}
                      </h3>
                      <Badge className={getStatusColor(form.status)}>
                        {form.status.charAt(0).toUpperCase() +
                          form.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium text-gray-700">
                          Father Name:
                        </span>{" "}
                        {form.fatherName}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Age:</span>{" "}
                        {form.age} years
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Email:
                        </span>{" "}
                        {form.email}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Phone:
                        </span>{" "}
                        {form.phone}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Course:
                        </span>{" "}
                        {form.course}
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Submitted:
                        </span>{" "}
                        {new Date(form.submittedAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Change Status
                      </label>
                      <Select
                        value={form.status}
                        onValueChange={(value: any) =>
                          handleStatusChange(form.id, value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="approved">Approve</SelectItem>
                          <SelectItem value="rejected">Reject</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-3">
                      <Link href={`/admin/${form.id}`} className="flex-1">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">
                          <Eye className="mr-2 h-4 w-4" /> View Details
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        onClick={() => handleDelete(form.id)}
                        className="flex-1"
                      >
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
