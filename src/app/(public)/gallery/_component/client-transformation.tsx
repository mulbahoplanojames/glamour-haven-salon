import Image from "next/image";
import React from "react";

const ClientTransformation = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Client Transformations
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            See the dramatic before and after results our stylists have achieved
            for real clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Transformation 1 */}
          <div className="bg-background rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-2">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Before transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black/60 text-white px-3 py-1">
                  Before
                </div>
              </div>
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="After transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary/60 text-white px-3 py-1">
                  After
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                Color Correction & Styling
              </h3>
              <p className="text-muted-foreground">
                Our client wanted to transition from box-dyed dark hair to a
                natural-looking balayage. After a color correction process and
                precision cut, we achieved this stunning transformation.
              </p>
            </div>
          </div>

          {/* Transformation 2 */}
          <div className="bg-background rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-2">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Before transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-black/60 text-white px-3 py-1">
                  Before
                </div>
              </div>
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="After transformation"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary/60 text-white px-3 py-1">
                  After
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">
                Curly Hair Transformation
              </h3>
              <p className="text-muted-foreground">
                This client came in with unmanageable curly hair that lacked
                definition. We used our specialized curly cutting technique and
                recommended a personalized care routine for these beautiful
                results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTransformation;
