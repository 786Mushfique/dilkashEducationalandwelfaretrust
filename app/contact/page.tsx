"use client";

import type React from "react";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch with Darul Uloom Dilkash Lil Banath",
      form: "Contact Form",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Message",
      send: "Send Message",
      sending: "Sending...",
      contactInfo: "Contact Information",
      address: "Our Address",
      addressValue:
        "Darul Uloom Dilkash Lil Banath, Islamic Educational Institute for Girls, Bihar",
      phone_label: "Phone",
      phoneValue: "+92-XXX-XXXXXXX",
      email_label: "Email",
      emailValue: "info@dilkash.edu.pk",
      hours: "Office Hours",
      hoursValue: "Monday - Friday: 9:00 AM - 4:00 PM",
      followUs: "Follow Us",
      successMsg: "Thank you for your message! We will get back to you soon.",
    },
    ur: {
      title: "ہم سے رابطہ کریں",
      subtitle: "دارالعلوم دلکش لل بنات سے رابطہ میں رہیں",
      form: "رابطہ فارم",
      name: "مکمل نام",
      email: "ای میل پتہ",
      phone: "فون نمبر",
      subject: "موضوع",
      message: "پیغام",
      send: "پیغام بھیجیں",
      sending: "بھیجا جا رہا ہے...",
      contactInfo: "رابطے کی معلومات",
      address: "ہمارا پتہ",
      addressValue:
        "دارالعلوم دلکش لل بنات، لڑکیوں کے لیے اسلامی تعلیمی ادارہ، پاکستان",
      phone_label: "فون",
      phoneValue: "+92-XXX-XXXXXXX",
      email_label: "ای میل",
      emailValue: "info@dilkash.edu.pk",
      hours: "دفتری اوقات",
      hoursValue: "پیر - جمعہ: 9:00 صبح - 4:00 شام",
      followUs: "ہمیں فالو کریں",
      successMsg: "آپ کے پیغام کے لیے شکریہ! ہم جلد آپ سے رابطہ کریں گے۔",
    },
  };

  const text = content[language];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className={language === "ur" ? "rtl" : "ltr"}>
      <Header language={language} setLanguage={setLanguage} />

      <main className="pt-24 pb-12">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-teal-50 via-blue-50 to-green-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-teal-900 text-center mb-2">
              {text.title}
            </h1>
            <p className="text-center text-gray-600">{text.subtitle}</p>
          </div>
        </div>

        {/* Contact Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-teal-600">
                <h2 className="text-2xl font-bold text-teal-900 mb-6">
                  {text.contactInfo}
                </h2>

                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <MapPin className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {text.address}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {text.addressValue}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="mb-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {text.phone_label}
                      </h3>
                      <p className="text-gray-600 text-sm">{text.phoneValue}</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {text.email_label}
                      </h3>
                      <p className="text-gray-600 text-sm">{text.emailValue}</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-2">{text.hours}</h3>
                  <p className="text-gray-600 text-sm">{text.hoursValue}</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  {text.followUs}
                </h3>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center text-white"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-sky-400 hover:bg-sky-500 transition-colors flex items-center justify-center text-white"
                  >
                    𝕏
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 transition-colors flex items-center justify-center text-white"
                  >
                    📷
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-teal-900 mb-6">
                  {text.form}
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 font-medium">
                      {text.successMsg}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {text.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
                      placeholder={text.name}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {text.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
                      placeholder={text.email}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {text.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
                      placeholder={text.phone}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {text.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors"
                      placeholder={text.subject}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {text.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors resize-none"
                      placeholder={text.message}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {text.send}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
         {/* Embedded Google Map */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#8BC34A]">
            {language === "ur" ? "نقشہ" : "Location Map"}
          </h3>

          <div className="rounded-xl overflow-hidden border-2 border-[#8BC34A]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14581.931838176423!2d87.4917045!3d25.7344023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1705672213000!5m2!1sen!2sin"
              width="100%"
              height="220"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
        
      </main>

      <Footer language={language} />
    </div>
  );
}
