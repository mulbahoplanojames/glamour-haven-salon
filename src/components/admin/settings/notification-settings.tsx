"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    reviewNotifications: true,
    appointmentReminders: true,
    reminderTiming: "24 hours",
    adminEmail: "admin@elegancehairsalon.com",
    smsProvider: "twilio",
    emailProvider: "sendgrid",
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setSettings((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Configure how you receive notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="emailNotifications">Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications via email</p>
            </div>
            <Switch
              id="emailNotifications"
              checked={settings.emailNotifications}
              onCheckedChange={(checked) => handleInputChange("emailNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="smsNotifications">SMS Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
            </div>
            <Switch
              id="smsNotifications"
              checked={settings.smsNotifications}
              onCheckedChange={(checked) => handleInputChange("smsNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="reviewNotifications">Review Notifications</Label>
              <p className="text-sm text-muted-foreground">Get notified when new reviews are posted</p>
            </div>
            <Switch
              id="reviewNotifications"
              checked={settings.reviewNotifications}
              onCheckedChange={(checked) => handleInputChange("reviewNotifications", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="appointmentReminders">Appointment Reminders</Label>
              <p className="text-sm text-muted-foreground">Send reminders to customers</p>
            </div>
            <Switch
              id="appointmentReminders"
              checked={settings.appointmentReminders}
              onCheckedChange={(checked) => handleInputChange("appointmentReminders", checked)}
            />
          </div>

          {settings.appointmentReminders && (
            <div>
              <Label htmlFor="reminderTiming">Reminder Timing</Label>
              <Select
                value={settings.reminderTiming}
                onValueChange={(value) => handleInputChange("reminderTiming", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1 hour">1 hour before</SelectItem>
                  <SelectItem value="2 hours">2 hours before</SelectItem>
                  <SelectItem value="24 hours">24 hours before</SelectItem>
                  <SelectItem value="48 hours">48 hours before</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <Label htmlFor="adminEmail">Admin Email</Label>
            <Input
              id="adminEmail"
              type="email"
              value={settings.adminEmail}
              onChange={(e) => handleInputChange("adminEmail", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Service Providers</CardTitle>
          <CardDescription>Configure notification service providers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="emailProvider">Email Provider</Label>
            <Select value={settings.emailProvider} onValueChange={(value) => handleInputChange("emailProvider", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sendgrid">SendGrid</SelectItem>
                <SelectItem value="mailgun">Mailgun</SelectItem>
                <SelectItem value="ses">Amazon SES</SelectItem>
                <SelectItem value="smtp">Custom SMTP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="smsProvider">SMS Provider</Label>
            <Select value={settings.smsProvider} onValueChange={(value) => handleInputChange("smsProvider", value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="twilio">Twilio</SelectItem>
                <SelectItem value="nexmo">Nexmo</SelectItem>
                <SelectItem value="aws-sns">AWS SNS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
