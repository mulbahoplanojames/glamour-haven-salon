"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingSettings() {
  const [settings, setSettings] = useState({
    allowOnlineBooking: true,
    requireDeposit: true,
    depositAmount: 25,
    cancellationPolicy: "24 hours",
    maxAdvanceBooking: 30,
    minAdvanceBooking: 2,
    allowSameDayBooking: true,
    autoConfirmBookings: false,
  });

  const handleInputChange = (
    field: string,
    value: string | number | boolean
  ) => {
    setSettings((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Booking Configuration</CardTitle>
          <CardDescription>
            Configure appointment booking options
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="allowOnlineBooking" className="pb-2">
                Allow Online Booking
              </Label>
              <p className="text-sm text-muted-foreground">
                Enable customers to book appointments online
              </p>
            </div>
            <Switch
              id="allowOnlineBooking"
              checked={settings.allowOnlineBooking}
              onCheckedChange={(checked) =>
                handleInputChange("allowOnlineBooking", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="requireDeposit" className="pb-2">
                Require Deposit
              </Label>
              <p className="text-sm text-muted-foreground">
                Require a deposit for appointments
              </p>
            </div>
            <Switch
              id="requireDeposit"
              checked={settings.requireDeposit}
              onCheckedChange={(checked) =>
                handleInputChange("requireDeposit", checked)
              }
            />
          </div>

          {settings.requireDeposit && (
            <div>
              <Label htmlFor="depositAmount" className="pb-2">
                Deposit Amount ($)
              </Label>
              <Input
                id="depositAmount"
                type="number"
                value={settings.depositAmount}
                onChange={(e) =>
                  handleInputChange(
                    "depositAmount",
                    Number.parseFloat(e.target.value)
                  )
                }
              />
            </div>
          )}

          <div>
            <Label htmlFor="cancellationPolicy" className="pb-2">
              Cancellation Policy
            </Label>
            <Select
              value={settings.cancellationPolicy}
              onValueChange={(value) =>
                handleInputChange("cancellationPolicy", value)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24 hours">24 hours</SelectItem>
                <SelectItem value="48 hours">48 hours</SelectItem>
                <SelectItem value="72 hours">72 hours</SelectItem>
                <SelectItem value="1 week">1 week</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="maxAdvanceBooking" className="pb-2">
                Max Advance Booking (days)
              </Label>
              <Input
                id="maxAdvanceBooking"
                type="number"
                value={settings.maxAdvanceBooking}
                onChange={(e) =>
                  handleInputChange(
                    "maxAdvanceBooking",
                    Number.parseInt(e.target.value)
                  )
                }
              />
            </div>
            <div>
              <Label htmlFor="minAdvanceBooking" className="pb-2">
                Min Advance Booking (hours)
              </Label>
              <Input
                id="minAdvanceBooking"
                type="number"
                value={settings.minAdvanceBooking}
                onChange={(e) =>
                  handleInputChange(
                    "minAdvanceBooking",
                    Number.parseInt(e.target.value)
                  )
                }
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="allowSameDayBooking" className="pb-2">
                Allow Same Day Booking
              </Label>
              <p className="text-sm text-muted-foreground">
                Allow customers to book appointments for today
              </p>
            </div>
            <Switch
              id="allowSameDayBooking"
              checked={settings.allowSameDayBooking}
              onCheckedChange={(checked) =>
                handleInputChange("allowSameDayBooking", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Label htmlFor="autoConfirmBookings" className="pb-2">
                Auto-Confirm Bookings
              </Label>
              <p className="text-sm text-muted-foreground">
                Automatically confirm new bookings
              </p>
            </div>
            <Switch
              id="autoConfirmBookings"
              checked={settings.autoConfirmBookings}
              onCheckedChange={(checked) =>
                handleInputChange("autoConfirmBookings", checked)
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
