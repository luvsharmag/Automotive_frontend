import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Share2,
  Phone,
  MapPin,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  Users,
  Car,
  Check,
  User,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { getVehicleById } from "@/services/vehicleService";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const VehicleDetail = () => {
  const [vehicle, setVehicle] = useState({});
  const Navigate = useNavigate();
  const { id } = useParams();
  const fetchVehicle = async (id) => {
    try {
      const data = await getVehicleById(id);
      console.log("object", data);
      if (data) {
        setVehicle(data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch vehicle. Please try again later.");
    }
  };

  useEffect(() => {
    fetchVehicle(id);
  }, [id]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  // const vehicle = {
  //   title: "2023 Tesla Model 3 Long Range",
  //   price: "$42,990",
  //   mileage: "8,450 miles",
  //   location: "San Francisco, CA",
  //   postedDate: "2 days ago",
  //   images: [
  //     "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7",
  //     "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
  //     "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
  //     "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d",
  //   ],
  //   overview:
  //     "This 2023 Tesla Model 3 Long Range comes with Full Self-Driving capability, premium interior, and only one owner. Never been in any accidents and always garage kept.",
  //   features: [
  //     "Full Self-Driving Capability",
  //     "Premium Interior",
  //     "Dual Motor All-Wheel Drive",
  //     '18" Aero Wheels',
  //     "All Black Premium Interior",
  //     '15" Touchscreen Display',
  //   ],
  //   specifications: {
  //     make: "Tesla",
  //     model: "Model 3",
  //     year: "2023",
  //     trim: "Long Range",
  //     bodyStyle: "Sedan",
  //     transmission: "Automatic",
  //     drivetrain: "AWD",
  //     engine: "Dual Electric Motor",
  //     fuelType: "Electric",
  //     mileage: "8,450",
  //     exteriorColor: "Midnight Silver Metallic",
  //     interiorColor: "Black",
  //     vin: "5YJ3E1EAXPF123456",
  //     stockNumber: "T12345",
  //   },
  // };

  return (
    <Layout>
      {vehicle && (
        <div className="container p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-lg overflow-hidden bg-gray-100">
                <Carousel className="w-full">
                  <CarouselContent>
                    {vehicle?.images &&
                      vehicle.images.length > 0 &&
                      vehicle.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-video">
                            <img
                              src={`${image}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`}
                              alt={`${vehicle.title} - ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{vehicle.overview}</p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {vehicle?.features?.length &&
                      vehicle?.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Badge variant="outline" className="px-2 py-1">
                            <Check className="w-4 h-4 mr-1" />
                            {feature}
                          </Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Detailed Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {vehicle?.specifications &&
                      Object.entries(vehicle?.specifications).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between py-2 border-b"
                          >
                            <span className="font-medium text-gray-600 capitalize">
                              {key.replace(/([A-Z])/g, " $1")}
                            </span>
                            <span className="text-gray-800">{value}</span>
                          </div>
                        )
                      )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="sticky top-6">
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h1 className="text-2xl font-bold">{vehicle.title}</h1>
                      <p className="text-xl font-semibold text-primary mt-2">
                        {vehicle.price}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Gauge className="h-4 w-4" />
                      <span>{vehicle.mileage}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{vehicle.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Posted: {vehicle.postedDate}</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <Button
                      className="w-full"
                      size="lg"
                      onClick={() =>
                        Navigate(`/inquiry?title=${vehicle.title}`)
                      }
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Contact Seller
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      Schedule Test Drive
                    </Button>
                  </div>

                  <Separator />

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium mb-2">Seller Information</h3>
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-200 rounded-full p-4">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium">Premium Auto Sales</p>
                        <p className="text-sm text-gray-600">
                          Certified Dealer
                        </p>
                      </div>
                    </div>
                    <Button variant="link" className="mt-3 pl-0 text-primary">
                      View all listings from this seller
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default VehicleDetail;
