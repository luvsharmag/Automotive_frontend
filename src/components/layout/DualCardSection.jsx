import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MoveUpRight } from "lucide-react";
import React from "react";
import car1 from "@/assets/section/car.svg.png"; // replace with your real image
import car2 from "@/assets/section/car2.svg.png"; // replace with your real image
const DualCardSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto my-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card - Looking for a Car */}
        <Card className="bg-[#E9F2FF] border-0 rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#050B20]">
                Are You Looking<br/> For a Car?
              </h2>
              <p className="text-[#050B20] text-sm">
                We are committed to providing our customers with <br/> exceptional
                service.
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-8 pt-0 flex justify-between items-center">
            <Button className="px-6 py-3 bg-[#405FF2] hover:bg-[#405FF2]/90 text-white">
              Get Started
              <MoveUpRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex justify-start mb-4">
              <img
                src={car1}
                alt="Financing"
                className="w-25 h-25 object-contain"
              />
            </div>
          </CardFooter>
        </Card>

        {/* Right Card - Want to Sell a Car */}
        <Card className="bg-[#FFE9F3] border-0 rounded-xl overflow-hidden">
          <CardContent className="p-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#050B20]">
                Do You Want to <br/>Sell a Car?
              </h2>
              <p className="text-[#050B20] text-sm">
                We are committed to providing our customers with<br/>exceptional
                service.
              </p>
            </div>
           
          </CardContent>
          <CardFooter className="p-8 pt-0 flex justify-between items-center">
            <Button className="px-6 py-3 bg-[#050B20] hover:bg-[#070f2c] text-white">
              Get Started
              <MoveUpRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex justify-start mb-4">
                <img
                  src={car2}
                  alt="Financing"
                  className="w-25 h-25 object-contain"
                />
              </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default DualCardSection;
