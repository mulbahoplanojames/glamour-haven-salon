import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AdditionalSalonInfo from "@/components/contact/additional-salon-info";
import Hero from "@/components/hero";
import ContactForm from "@/components/contact/contact-form";
import ContactFAQ from "@/components/contact/contact-faq";

export const metadata = {
  title: "Contact Us -Prince Hair Salon",
  description: "Get in touch with our team for inquiries or support",
};

export default function ContactPage() {
  return (
    <main>
      <Hero
        title="Contact Us"
        description="Have questions or need assistance? We're here to help. Reach out to our team for appointments, inquiries, or feedback."
        image="/bg_1.jpg"
      />
      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Our Location</h3>
                      <p className="text-muted-foreground">
                        KG 7 Ave, Kigali, Rwanda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-muted-foreground">
                        (250) 791 937 849{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-muted-foreground">
                        info@glamoursalon.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Hours</h3>
                      <div className="text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Find Us</h2>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  {/* Replace with actual Google Maps embed */}
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                    {/* <p className="text-muted-foreground">Google Maps Embed</p> */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7313.254795994849!2d30.053396262142712!3d-1.9190688144095234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca3f75b7b8b91%3A0xc9ab953c704fa9d3!2sKigali%20Independent%20University!5e0!3m2!1sen!2srw!4v1744965870176!5m2!1sen!2srw"
                      width="600"
                      height="450"
                      allowFullScreen
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <AdditionalSalonInfo />
      <ContactFAQ />
    </main>
  );
}
