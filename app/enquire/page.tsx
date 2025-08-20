"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Phone, Globe } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  company: string
  designation: string
  email: string
  phone: string
  city: string
  state: string
  country: string
  website: string
  industry: string
  products: string
  source: string
  message: string
  consent: boolean
}

export default function EnquiryPage() {

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)

  try {
    const res = await fetch("/api/v1/enquire", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      throw new Error("Failed to submit")
    }

    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      designation: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      country: "India",
      website: "",
      industry: "",
      products: "",
      source: "",
      message: "",
      consent: true,
    })
  } catch (error) {
    console.error("Error submitting form:", error)
  } finally {
    setIsSubmitting(false)
  }
}

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    designation: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "India",
    website: "",
    industry: "",
    products: "",
    source: "",
    message: "",
    consent: true,
  })

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-6">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Get in Touch</h1>
        <p className="text-muted-foreground">
          Fill in your details below and our team will get back to you shortly.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg font-semibold">
              <User className="h-5 w-5" />
              Enquiry Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
                <Input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                />
              </div>

              <Input
                placeholder="Company or Brand Name"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
              />
              <Input
                placeholder="Designation"
                value={formData.designation}
                onChange={(e) => handleInputChange("designation", e.target.value)}
              />

              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                />
                <Input
                  placeholder="State / Province"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                />
              </div>

              <Select
                value={formData.country}
                onValueChange={(value) => handleInputChange("country", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="USA">United States</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                  <SelectItem value="Australia">Australia</SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Website"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
              />

              <Select
                value={formData.industry}
                onValueChange={(value) => handleInputChange("industry", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose your Industry Segment" />
                </SelectTrigger>
                <SelectContent>
<SelectItem value="petfood">Pet Food Startups</SelectItem>
<SelectItem value="entrepreneurs">Entrepreneurs & Private Investors</SelectItem>
<SelectItem value="fmcg">FMCG Companies</SelectItem>
<SelectItem value="agriculture">Agricultural & Animal Feed Companies</SelectItem>
<SelectItem value="petproducts">Pet Product & Accessory Brands</SelectItem>
<SelectItem value="vethospitals">Veterinary Hospital Chains & Large Clinics</SelectItem>
<SelectItem value="groomingchains">Professional Pet Grooming Chains</SelectItem>
<SelectItem value="breeders">Large-Scale Dog & Cat Breeders</SelectItem>
<SelectItem value="kennels">Kennel & Boarding Facilities</SelectItem>
<SelectItem value="others">others</SelectItem>
<SelectItem value="Petpreneur">Petpreneur</SelectItem>


                </SelectContent>
              </Select>

              <Input
                placeholder="Select Products of Interest"
                value={formData.products}
                onChange={(e) => handleInputChange("products", e.target.value)}
              />

              <Select
                value={formData.source}
                onValueChange={(value) => handleInputChange("source", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="How did you find us?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google Search</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="event">Event/Conference</SelectItem>
                  <SelectItem value="referral">Referral</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Your Message (max 500 characters)"
                className="min-h-[120px]"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
              />

              <div className="flex items-center gap-2">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(val) =>
                    handleInputChange("consent", Boolean(val))
                  }
                />
                <Label htmlFor="consent" className="text-sm text-gray-600">
                  I allow SalPets and its representatives to contact me.
                </Label>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
