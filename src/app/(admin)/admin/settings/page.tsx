"use client";

import { TabsContent } from "@/components/ui/tabs";
import { TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@/components/ui/tabs";
import { Tabs } from "@/components/ui/tabs";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import GeneralSettings from "@/components/admin/settings/general-settings";
import BusinessSettings from "@/components/admin/settings/business-settings";
import BookingSettings from "@/components/admin/settings/booking-settings";
import NotificationSettings from "@/components/admin/settings/notification-settings";
import { toast } from "sonner";

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast("Settings saved", {
        description: "Your settings have been updated successfully.",
      });
    } catch (error) {
      toast("Error", {
        description: "Failed to save settings. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">Configure your salon settings</p>
      </div>

      <Card>
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
              <TabsTrigger value="booking">Booking</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              <GeneralSettings />
            </TabsContent>
            <TabsContent value="business">
              <BusinessSettings />
            </TabsContent>
            <TabsContent value="booking">
              <BookingSettings />
            </TabsContent>
            <TabsContent value="notifications">
              <NotificationSettings />
            </TabsContent>
          </Tabs>
          <div className="flex justify-end mt-6">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Save Settings"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
