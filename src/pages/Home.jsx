import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import bgImage from "@/assets/jon.jpg";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import {
  Car,
  Search,
  CarFront,
  CarIcon,
  Truck,
  ArrowRight,
} from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import PremiumBrands from "@/components/layout/PremiumBrands";
import ExploreVehicles from "@/components/layout/Explore";
import PopularMakers from "@/components/layout/PopularMakers";
import { CheckCircle2, MoveUpRight } from "lucide-react";
import carSellImg from "@/assets/Background.jpg";
import { Separator } from "@/components/ui/separator";
import f1 from "@/assets/section/f1.svg.png";
import f2 from "@/assets/section/f2.svg.png";
import f3 from "@/assets/section/f3.svg.png";
import f4 from "@/assets/section/f4.svg.png";
import { TestimonialCarousel } from "@/components/layout/TestimonialCarousel";
import BlogPost from "@/components/layout/BlogPost";
import DualCardSection from "@/components/layout/DualCardSection";
import Footer from "@/components/layout/Footer";

const Home = () => {
  const [activeTab, setActiveTab] = useState("new");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative">
      <div className="relative">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <Header className="relative z-10" />

           <section className="relative z-10 h-[90vh] flex items-center justify-center text-center px-4">
      <div className="w-full max-w-4xl space-y-6 text-white">
        <p className="text-md tracking-wide text-white/80">
          Find cars for sale and for rent near you
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
          Find Your Perfect Car
        </h1>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mx-auto bg-white/20 backdrop-blur-md p-1 rounded-full gap-2">
            <TabsTrigger
              value="all"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black px-4 py-1 rounded-full transition"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="new"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black px-4 py-1 rounded-full transition"
            >
              New
            </TabsTrigger>
            <TabsTrigger
              value="used"
              className="text-white data-[state=active]:bg-white data-[state=active]:text-black px-4 py-1 rounded-full transition"
            >
              Used
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="flex justify-center mt-6">
          <div className="relative flex bg-white rounded-full shadow-md w-full max-w-sm md:max-w-2xl overflow-hidden">
            {/* Select Inputs */}
            <div className="flex flex-1 items-center pl-5 pr-1 py-2 gap-1">
              <Select>
                <SelectTrigger className="min-w-[60px] md:min-w-[120px] border-none bg-transparent shadow-none focus:ring-0 px-3">
                  <SelectValue placeholder="Any Make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toyota">Toyota</SelectItem>
                  <SelectItem value="honda">Honda</SelectItem>
                  <SelectItem value="ford">Ford</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="min-w-[60px] md:min-w-[120px] border-none bg-transparent shadow-none focus:ring-0 px-3">
                  <SelectValue placeholder="Any Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corolla">Corolla</SelectItem>
                  <SelectItem value="civic">Civic</SelectItem>
                  <SelectItem value="mustang">Mustang</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="min-w-[60px] md:min-w-[120px] border-none bg-transparent shadow-none focus:ring-0 px-3">
                  <SelectValue placeholder="Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Below ₹10L</SelectItem>
                  <SelectItem value="mid">₹10L – ₹25L</SelectItem>
                  <SelectItem value="high">Above ₹25L</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:pr-1.5 md:py-1.5 mr-1 flex items-center justify-center">
              <Button
                className="rounded-full h-10 w-10 md:h-auto md:w-auto md:px-5 text-white"
                style={{ backgroundColor: "#405FF2" }}
              >
                <Search className="w-4 h-4" />
                <span className="hidden md:inline ml-1">Search Car</span>
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-6 text-white/80">Or browse featured model</p>

        <div className="flex flex-wrap justify-center gap-3 mt-2">
          <Button
            variant="outline"
            className="backdrop-blur-md bg-white/10 border-white/20 text-white rounded-full px-4 py-2 flex items-center gap-2"
          >
            <Car className="w-4 h-4" />
            SUV
          </Button>
          <Button
            variant="outline"
            className="backdrop-blur-md bg-white/10 border-white/20 text-white rounded-full px-4 py-2 flex items-center gap-2"
          >
            <CarFront className="w-4 h-4" />
            Sedan
          </Button>
          <Button
            variant="outline"
            className="backdrop-blur-md bg-white/10 border-white/20 text-white rounded-full px-4 py-2 flex items-center gap-2"
          >
            <Truck className="w-4 h-4" />
            Truck
          </Button>
          <Button
            variant="outline"
            className="backdrop-blur-md bg-white/10 border-white/20 text-white rounded-full px-4 py-2 flex items-center gap-2"
          >
            <Car className="w-4 h-4" />
            Coupe
          </Button>
          <Button
            variant="outline"
            className="backdrop-blur-md bg-white/10 border-white/20 text-white rounded-full px-4 py-2 flex items-center gap-2"
          >
            <CarFront className="w-4 h-4" />
            Hatchback
          </Button>
        </div>
      </div>
    </section>
      </div>

      <PremiumBrands />
      <ExploreVehicles />
      <section className="w-full max-w-6xl mx-auto my-16 rounded-xl overflow-hidden bg-white shadow-md flex flex-col md:flex-row">
        <div className="md:w-1/2 w-full h-[300px] md:h-auto">
          <img
            src={carSellImg}
            alt="Sell Your Car"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full p-8 flex flex-col justify-between bg-[#EEF1FB]">
          <div>
            <h2 className="text-3xl font-bold text-[#050B20]">
              Get A Fair Price For Your Car
              <br />
              Sell To Us Today
            </h2>
            <p className="text-sm text-[#050B20] mt-2">
              We are committed to providing our customers with exceptional
              service, competitive pricing, and a wide range of support.
            </p>

            <ul className="mt-6 space-y-4">
              {[
                "We are the UK’s largest provider, with more patrols in more places",
                "You get 24/7 roadside assistance",
                "We fix 4 out of 5 cars at the roadside",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5 bg-white rounded-full" />
                  </div>
                  <span className="text-[#050B20] mt-0.5 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Button */}
          <div className="mt-6">
            <Button className="px-6 py-3 rounded-sm bg-[#405FF2] text-white hover:bg-primary/90">
              Get Started
              <MoveUpRight />
            </Button>
          </div>
        </div>
      </section>
      <section className="w-full my-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="bg-white p-6 rounded-xl  text-center">
              <h3 className="text-3xl font-bold text-[#050B20]">836</h3>
              <p className="text-[#050B20] mt-2">Cars for Sale</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-[#050B20]">738</h3>
              <p className="text-[#050B20] mt-2">Dealers Review</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-[#050B20]">100M</h3>
              <p className="text-[#050B20] mt-2">Visitors Daily</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <h3 className="text-3xl font-bold text-[#050B20]">238M</h3>
              <p className="text-[#050B20] mt-2">Verified Dealers</p>
            </div>
          </div>
        </div>
      </section>
      <Separator />

      <section className="w-full  my-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-start text-[#050B20] mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-start">
            <div className="bg-white p-6 pl-0 rounded-xl text-start">
              <div className="flex justify-start mb-4">
                <img
                  src={f1}
                  alt="Financing"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#050B20] mb-2">
                Special Financing Offers
              </h3>
              <p className="text-gray-600 text-sm">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>

            <div className="bg-white p-6 pl-0 rounded-xl text-start">
              <div className="flex justify-start mb-4">
                <img
                  src={f2}
                  alt="Trusted Dealership"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#050B20] mb-2">
                Trusted Car Dealership
              </h3>
              <p className="text-gray-600 text-sm">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>

            <div className="bg-white p-6 pl-0 rounded-xl text-start">
              <div className="flex justify-start mb-4">
                <img
                  src={f3}
                  alt="Transparent Pricing"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#050B20] mb-2">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-sm">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>

            <div className="bg-white p-6 pl-0 rounded-xl text-start">
              <div className="flex justify-start mb-4">
                <img
                  src={f4}
                  alt="Expert Service"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#050B20] mb-2">
                Expert Car Service
              </h3>
              <p className="text-gray-600 text-sm">
                Our stress-free finance department that can find financial
                solutions to save you money.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PopularMakers />
      {/* <section className="bg-[#FFF] py-10 px-4 md:px-10">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Shop BoxCar Your Way
          </h2>
          <button className="text-sm text-primary flex items-center gap-1 hover:underline">
            View All <MoveUpRight className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full border-b border-gray-300 mb-6 flex gap-6 text-sm font-medium">
          {[
            { label: "New Cars For Sale", value: "new" },
            { label: "Used Cars For Sale", value: "used" },
            { label: "Browse By Type", value: "type" },
            { label: "Browse By Brand", value: "brand" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pb-2 relative transition-colors duration-200 text-gray-700 hover:text-primary ${
                activeTab === tab.value ? "border-b-2 border-primary" : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section> */}

      <section className="bg-white py-10 my-16 px-4 md:px-10">
  <div className="container mx-auto px-4 max-w-5xl">
    <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
        Shop BoxCar Your Way
      </h2>
      <button className="text-sm text-primary flex items-center gap-1 hover:underline self-start md:self-auto">
        View All <MoveUpRight className="w-4 h-4" />
      </button>
    </div>

    {/* Tabs - Horizontal scroll on mobile */}
    <div className="w-full border-b border-gray-300 mb-6 overflow-x-auto">
      <div className="flex gap-6 text-sm font-medium min-w-max pb-2">
        {[
          { label: "New Cars For Sale", value: "new" },
          { label: "Used Cars For Sale", value: "used" },
          { label: "Browse By Type", value: "type" },
          { label: "Browse By Brand", value: "brand" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`whitespace-nowrap pb-2 relative transition-colors duration-200 text-gray-700 hover:text-primary ${
              activeTab === tab.value
                ? "text-primary border-b-2 border-primary"
                : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>

    {/* Responsive Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {getBrandsByTab(activeTab).map((brand, index) => (
        <div 
          key={index} 
          className="p-3 text-start rounded-md hover:bg-gray-50 transition-colors border border-gray-100"
        >
          <div className="flex flex-col items-center text-center">
            {/* Brand logo would go here */}
            <div className="w-12 h-12 bg-gray-200 rounded-full mb-2 flex items-center justify-center">
              <Car className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm font-medium text-gray-800">{brand}</span>
            <span className="text-xs text-gray-500 mt-1">
              {/* Optional: Number of models */}
              {Math.floor(Math.random() * 50) + 10} models
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      <TestimonialCarousel />
      <BlogPost />
      <DualCardSection />
      <Footer />
      {isVisible ? (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-[#405FF2] hover:bg-[#304ac1] flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105"
            aria-label="Go to top"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Home;

function getBrandsByTab(tab) {
  const allBrands = [
    "Toyota",
    "Honda",
    "Ford",
    "BMW",
    "Mercedes",
    "Nissan",
    "Chevrolet",
    "Audi",
    "Hyundai",
    "Kia",
    "Subaru",
    "Jeep",
    "Volkswagen",
    "Lexus",
    "Mazda",
    "Dodge",
    "Tesla",
    "Volvo",
    "GMC",
    "Buick",
    "Acura",
    "Infiniti",
    "Chrysler",
    "Lincoln",
    "Mini",
    "Porsche",
    "Land Rover",
    "Jaguar",
    "Mitsubishi",
    "Fiat",
  ];

  const brandCategories = {
    all: allBrands,
    japanese: [
      "Toyota",
      "Honda",
      "Nissan",
      "Subaru",
      "Mazda",
      "Mitsubishi",
      "Acura",
      "Lexus",
      "Infiniti",
    ],
    american: [
      "Ford",
      "Chevrolet",
      "Dodge",
      "Tesla",
      "GMC",
      "Buick",
      "Chrysler",
      "Lincoln",
      "Jeep",
    ],
    german: ["BMW", "Mercedes", "Audi", "Volkswagen", "Porsche", "Mini"],
  };

  return brandCategories[tab]?.slice(0, 30) || allBrands.slice(0, 30);
}
