import React from "react";

const AdditionalBookingInfo = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            What to Expect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here&apos;s what you can expect when you visit Elegance Salon
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Consultation</h3>
            <p className="text-muted-foreground">
              Your appointment begins with a thorough consultation to understand
              your goals and preferences.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Service</h3>
            <p className="text-muted-foreground">
              Relax and enjoy your service performed by our skilled
              professionals using premium products.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="font-bold text-xl mb-2">Aftercare</h3>
            <p className="text-muted-foreground">
              Receive personalized advice on how to maintain your new look and
              product recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalBookingInfo;
