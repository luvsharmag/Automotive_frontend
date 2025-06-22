import React, { useState, useRef } from "react";
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
import carImg from "@/assets/filip.jpg"; // replace with your real image

const PopularMakers = () => {
  const [activeTab, setActiveTab] = useState("stock");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollRef = useRef(null);
  const scroll = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const cars = [
    {
      title: "Audi A4 2023",
      desc: "Luxury Sedan with advanced features",
      mileage: "12,000 km",
      fuel: "Diesel",
      transmission: "Manual",
      price: "$45,000",
    },
    {
      title: "BMW X5",
      desc: "Spacious SUV for family trips",
      mileage: "8,000 km",
      fuel: "Petrol",
      transmission: "Automatic",
      price: "$65,000",
    },
    {
      title: "Honda Civic",
      desc: "Fuel efficient city car",
      mileage: "10,000 km",
      fuel: "Petrol",
      transmission: "Manual",
      price: "$25,000",
    },
    {
      title: "Ford Mustang",
      desc: "High performance muscle car",
      mileage: "15,000 km",
      fuel: "Petrol",
      transmission: "Manual",
      price: "$55,000",
    },
    {
      title: "Toyota Fortuner",
      desc: "Strong SUV with off-road features",
      mileage: "20,000 km",
      fuel: "Diesel",
      transmission: "Automatic",
      price: "$60,000",
    },
  ];

  const makers = [
    { value: "audi", label: "Audi" },
    { value: "ford", label: "Ford" },
    { value: "mercedes", label: "Mercedes Benz" },
  ];
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
  return (
    <section className="bg-[#050B20] py-10 px-4 md:px-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-between items-start mb-11">
          <h2 className="text-2xl font-semibold text-white">Popular Makes</h2>
          <button className="text-sm text-white flex items-center gap-1 hover:underline">
            View All <MoveUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="w-full border-b border-gray-700 mb-6 flex gap-6 text-sm font-medium">
          {makers.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`pb-2 relative transition-colors duration-200 text-white hover:text-gray-300 ${
                activeTab === tab.value ? "border-b-2 border-white" : ""
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

          {cars.map((car, index) => (
            <Card
              key={index}
              className="flex flex-row w-full max-w-xl shadow-sm border-none rounded-lg bg-[#070f2c] "
            >
              <div className="relative w-44 h-44 flex-shrink-0 overflow-hidden rounded-l-lg">
                <img
                  src={carImg}
                  alt={car.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#405FF2] text-white text-xs px-2 py-0.5 rounded-full">
                  sale
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/80 hover:bg-white"
                >
                  <Heart className="w-3 h-3 text-red-500" />
                </Button>
              </div>

              <CardContent className="w-72 p-3 flex flex-col justify-between flex-grow ">
                <div>
                  <h3 className="font-semibold text-white line-clamp-1">
                    {car.title}
                  </h3>
                  <p className="text-xs text-white line-clamp-2 mt-1">
                    {car.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1  gap-y-1 text-xs text-white mt-2">
                  <div className="flex items-center gap-1">
                    <Gauge className="w-3 h-3" />
                    <span className="truncate">{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="w-3 h-3" />
                    <span className="truncate">{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings className="w-3 h-3" />
                    <span className="truncate">{car.transmission}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-2 ">
                  <p className="text-sm font-semibold text-white">
                    {car.price}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-white h-6 px-2 flex items-center gap-1"
                  >
                    View Details <MoveUpRight className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="flex-shrink-0 w-[5vw] md:w-0" />
        </div>
        <div className="sm:mx-5 container md:mx-auto px-4 max-w-5xl">
          <div className="flex justify-start gap-2 mt-6">
            <Button
              onClick={() => scroll(300)}
              variant="outline"
              className="rounded-full bg-transparent hover:bg-gray-200 group transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-[#405FF2]" />
            </Button>
            <Button
              onClick={() => scroll(-300)}
              variant="outline"
              className="rounded-full bg-transparent hover:bg-gray-200 group transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white group-hover:text-[#405FF2]" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularMakers;
