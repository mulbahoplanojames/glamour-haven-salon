import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Car, CreditCard, Smile } from "lucide-react";

const AdditionalSalonInfo = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Salon Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before your visit
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">Parking</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Free parking is available in our dedicated lot behind the salon.
                Street parking is also available with a 2-hour limit.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">Payment Options</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We accept all major credit cards, cash, and mobile payment
                options including Apple Pay and Google Pay.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Smile className="h-5 w-5 text-primary" />
                <CardTitle className="text-xl">First Visit</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                New clients should arrive 15 minutes early to complete a
                consultation form. Receive 10% off your first service!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdditionalSalonInfo;
