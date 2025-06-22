import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AppleIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const FooterTopSection = () => {
  return (
    <div className="bg-[#050B20] text-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Join BoxCar</h3>
            <p className="text-muted-foreground">
              Receive pricing updates, shopping tips & more!
            </p>
          </div>

          <div className="relative w-full max-w-md">
            <Input
              type="email"
              placeholder="Your email address"
              className="rounded-full bg-white/10 pr-32 h-12 border-none shadow-md"
            />
            <Button
              type="submit"
              className="absolute right-1 top-1 rounded-full bg-[#405FF2] hover:bg-[#405FF2]/90 h-10 px-6"
            >
              Subscribe
            </Button>
          </div>
        </div>
        <div className="bg-[#050B20] text-white py-12 px-4 md:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-12">
              <div>
                <h4 className="text-lg font-semibold mb-4">Company</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Press
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Sell Your Car
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Financing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Our Brands</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      BoxCar Premium
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      BoxCar Certified
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      BoxCar Finance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      BoxCar Insurance
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Vehicle Type</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      SUVs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Sedans
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Trucks
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">
                      Electric
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-1">
                <h4 className="text-xl font-semibold mb-4">Our Mobile App</h4>
                <div className="space-y-3">
                  <Card className="bg-white/5 border-gray-700 hover:bg-white/10 transition-colors">
                    <CardContent className="p-3 flex items-center gap-3">
                      <AppleIcon className="w-8 h-8 text-white" />
                      <div>
                        <p className="text-xs text-muted-foreground text-white">
                          Download on the
                        </p>
                        <p className="font-medium text-white">App Store</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/5 border-gray-700 hover:bg-white/10 transition-colors">
                    <CardContent className="p-3  flex items-center gap-3">
                      <Play className="w-8 h-8 text-white" />
                      <div>
                        <p className="text-xs text-white text-muted-foreground">
                          Get it on
                        </p>
                        <p className="font-medium text-white">Google Play</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4">
                    Contact With Us
                  </h4>
                  <div className="flex gap-6">
                    <Facebook className="w-4 h-4" />

                    <Twitter className="w-4 h-4" />

                    <Instagram className="w-4 h-4" />
                    <Linkedin className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0">
              © 2024 exemple.com. All rights reserved.
            </div>
            <div className="flex gap-4 items-center">
              <a
                href="#"
                className="text-sm  hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
              <span className="text-2xl leading-none">·</span>
              <a
                href="#"
                className="text-sm hover:text-white transition-colors"
              >
                Privacy Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTopSection;
