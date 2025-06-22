import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import img1 from "@/assets/users/img1.jpg";
import img2 from "@/assets/users/img2.jpg";
import img3 from "@/assets/users/img3.jpg";

export function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Interior Designer",
      rating: 5,
      comment:
        "The quality of service exceeded my expectations. My car was handled with care and the team was extremely professional.",
      image: img1,
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      rating: 4,
      comment:
        "Quick turnaround time and fair pricing. Will definitely use their services again for my next vehicle purchase.",
      image: img2,
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      rating: 5,
      comment:
        "Exceptional customer service from start to finish. Made the entire car buying process stress-free!",
      image: img3,
    },
  ];

  return (
    <section className="w-full py-8 md:py-12 bg-[#F9FBFC]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">What our customers say</h2>
          <div className="text-left md:text-right">
            <p className="text-xs md:text-sm text-gray-600">
              Rated 4.7 / 5 Based on 28,370 reviews <br className="md:hidden" />Showing our 4 & 5 star
              reviews
            </p>
          </div>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent className="-ml-1">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/1">
                <div className="p-1">
                  <div className="flex flex-col md:flex-row h-full">
                    {/* <div className="w-1/3">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-l-lg"
                        />
                      </div> */}

                    <div className="w-full md:w-1/3 flex items-center justify-center p-4 pl-0">
                      <div className="rounded-lg overflow-hidden ">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-auto max-h-[400px] object-cover"
                          style={{ aspectRatio: "1/1" }}
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-2/3 p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-6">
                        {/* <div className="w-16 h-16 rounded-full overflow-hidden">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div> */}
                        <div>
                          <div className="flex items-center gap-1 mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-2 h-2 ${
                                  i < testimonial.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                            <span className="bg-yellow-400 text-white text-xs px-1.5 py-0.5 rounded-full ml-1">
                              {testimonial.rating.toFixed(1)}
                            </span>
                          </div>
                          <h3 className="text-lg font-medium">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-2xl text-[#050B20]">
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-8" />
        </Carousel>
      </div>
    </section>
  );
}
