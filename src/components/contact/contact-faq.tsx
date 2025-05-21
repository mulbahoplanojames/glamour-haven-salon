import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactFAQ = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to our most commonly asked questions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="font-bold text-lg mb-2">
              What is your cancellation policy?
            </h3>
            <p className="text-muted-foreground mb-6">
              We require 24 hours notice for cancellations. Late cancellations
              or no-shows may be subject to a fee equal to 50% of the scheduled
              service.
            </p>

            <h3 className="font-bold text-lg mb-2">Do you offer gift cards?</h3>
            <p className="text-muted-foreground mb-6">
              Yes! Gift cards are available for purchase in-store or online and
              can be used for any service or product.
            </p>

            <h3 className="font-bold text-lg mb-2">
              What if I&apos;m running late?
            </h3>
            <p className="text-muted-foreground">
              Please call us if you&apos;re running late. We&apos;ll do our best
              to accommodate you, but arrivals more than 15 minutes late may
              need to be rescheduled.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">
              Do you offer consultations?
            </h3>
            <p className="text-muted-foreground mb-6">
              Yes, we offer complimentary 15-minute consultations for new
              clients or for existing clients considering a significant change.
            </p>

            <h3 className="font-bold text-lg mb-2">
              What products do you use?
            </h3>
            <p className="text-muted-foreground mb-6">
              We use professional-grade products from brands like Aveda, Oribe,
              and Kérastase. All products used are available for purchase in our
              salon.
            </p>

            <h3 className="font-bold text-lg mb-2">
              Do you have a referral program?
            </h3>
            <p className="text-muted-foreground">
              Yes! Refer a friend and receive 15% off your next service when
              they book their first appointment.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button asChild className="text-white cursor-pointer">
            <Link href="/booking">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
