"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function GeneralSettings() {
  const [settings, setSettings] = useState({
    siteName: "Elegance Hair Salon",
    siteDescription: "Premium hair salon offering cutting-edge styles and treatments",
    contactEmail: "info@elegancehairsalon.com",
    contactPhone: "(555) 123-4567",
    address: "123 Beauty Street, Style City, SC 12345",
    facebookUrl: "https://facebook.com/elegancehairsalon",
    instagramUrl: "https://instagram.com/elegancehairsalon",
    twitterUrl: "https://twitter.com/elegancehairsalon",
  })

  const handleInputChange = (field: string, value: string) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>General Information</CardTitle>
          <CardDescription>Basic information about your salon</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="siteName">Salon Name</Label>
              <Input
                id="siteName"
                value={settings.siteName}
                onChange={(e) => handleInputChange("siteName", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                id="contactEmail"
                type="email"
                value={settings.contactEmail}
                onChange={(e) => handleInputChange("contactEmail", e.target.value)}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="siteDescription">Description</Label>
            <Textarea
              id="siteDescription"
              value={settings.siteDescription}
              onChange={(e) => handleInputChange("siteDescription", e.target.value)}
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactPhone">Phone Number</Label>
              <Input
                id="contactPhone"
                value={settings.contactPhone}
                onChange={(e) => handleInputChange("contactPhone", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={settings.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Social Media</CardTitle>
          <CardDescription>Your salon's social media presence</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="facebookUrl">Facebook URL</Label>
            <Input
              id="facebookUrl"
              value={settings.facebookUrl}
              onChange={(e) => handleInputChange("facebookUrl", e.target.value)}
              placeholder="https://facebook.com/yoursalon"
            />
          </div>
          <div>
            <Label htmlFor="instagramUrl">Instagram URL</Label>
            <Input
              id="instagramUrl"
              value={settings.instagramUrl}
              onChange={(e) => handleInputChange("instagramUrl", e.target.value)}
              placeholder="https://instagram.com/yoursalon"
            />
          </div>
          <div>
            <Label htmlFor="twitterUrl">Twitter URL</Label>
            <Input
              id="twitterUrl"
              value={settings.twitterUrl}
              onChange={(e) => handleInputChange("twitterUrl", e.target.value)}
              placeholder="https://twitter.com/yoursalon"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
