import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ArrowRight,
  Fuel,
  Gauge,
  Settings,
  ChevronLeft,
  ChevronRight,
  MoveUpRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

import { useNavigate } from "react-router-dom";
import { getVehicles } from "@/services/vehicleService";
import toast, { Toaster } from "react-hot-toast";
const ExploreVehicles = () => {
  const [activeTab, setActiveTab] = useState("stock");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cars, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const Navigate = useNavigate();
  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  // const cars = [
  //   {
  //     title: "Audi A4 2023",
  //     desc: "Luxury Sedan with advanced features",
  //     mileage: "12,000 km",
  //     fuel: "Diesel",
  //     transmission: "Manual",
  //     price: "$45,000",
  //   },
  //   {
  //     title: "BMW X5",
  //     desc: "Spacious SUV for family trips",
  //     mileage: "8,000 km",
  //     fuel: "Petrol",
  //     transmission: "Automatic",
  //     price: "$65,000",
  //   },
  //   {
  //     title: "Honda Civic",
  //     desc: "Fuel efficient city car",
  //     mileage: "10,000 km",
  //     fuel: "Petrol",
  //     transmission: "Manual",
  //     price: "$25,000",
  //   },
  //   {
  //     title: "Ford Mustang",
  //     desc: "High performance muscle car",
  //     mileage: "15,000 km",
  //     fuel: "Petrol",
  //     transmission: "Manual",
  //     price: "$55,000",
  //   },
  // ];

  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Only left mouse button
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
    e.currentTarget.style.cursor = "grabbing";
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollRef.current.style.cursor = "grab";
  };
  const fetchVehicles = async () => {
    setLoading(true);
    try {
      const { data } = await getVehicles({
        page: 1,
        limit: 6,
      });
      console.log("object", data);
      if (data && data.data) {
        setVehicles(data.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch vehicles. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchVehicles();
  }, []);
  return (
    <section className="bg-[#FFF] py-10 md:px-10">
          <Toaster position="top-center" />
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Explore All Vehicles
          </h2>
          <button
            className="text-sm text-primary flex items-center gap-1 hover:underline"
            onClick={() => Navigate("/vehicles")}
          >
            View All <MoveUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full border-b border-gray-300 mb-6 flex gap-6 text-sm font-medium">
          {[
            { label: "In Stock", value: "stock" },
            { label: "New Cars", value: "new" },
            { label: "Used Cars", value: "used" },
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
      </div>
      <div className="relative w-screen left-[49.4%] -translate-x-1/2 overflow-x-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 pl-[calc(50vw-514px)] pb-4 overflow-x-auto scroll-smooth select-none cursor-grab"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex-shrink-0 w-[5vw] md:w-0" />
          {cars.length > 0 &&
            cars?.map((car, index) => (
              <Card
                key={index}
                className="min-w-[300px] max-w-sm flex-shrink-0 shadow-sm border"
              >
                <div className="relative">
                  <img
                    src={car.images?.[0]}
                    alt={car.title}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    New
                  </span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-2 right-2 rounded-full"
                  >
                    <Heart className="w-4 h-4 text-red-500" />
                  </Button>
                </div>

                <CardContent className="p-4 space-y-2">
                  <div>
                    <h3 className="font-semibold text-lg truncate">
                      {car.title}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {car.overview}
                    </p>
                  </div>

                  <Separator />

                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Gauge className="w-4 h-4" />
                      {car.mileage}
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel className="w-4 h-4" />
                      {car.specifications?.fuelType}
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings className="w-4 h-4" />
                      {car.specifications?.transmission}
                    </div>
                  </div>

                  <Separator />

                  <div className="flex justify-between items-center mt-2">
                    <p className="text-lg font-semibold text-gray-800">
                      {car.price}
                    </p>
                    <Button
                      variant="ghost"
                      className="text-links text-sm flex items-center gap-1"
                      onClick={() => Navigate(`/vehicles/${car._id}`)}
                    >
                      View Details <MoveUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          <div className="flex-shrink-0 w-[5vw] md:w-0" />
        </div>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-start gap-2 mt-6">
            <Button
              onClick={() => scroll(300)}
              variant="outline"
              className="rounded-full hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </Button>
            <Button
              onClick={() => scroll(-300)}
              variant="outline"
              className="rounded-full hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreVehicles;
