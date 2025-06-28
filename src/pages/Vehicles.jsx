import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  MoveUpRight,
  Gauge,
  Fuel,
  Settings,
  ChevronDown,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getVehicles } from "@/services/vehicleService";
import toast from "react-hot-toast";
import { VehicleCardSkeleton } from "@/components/layout/VehicleCardSkeleton";
const cars = [
  {
    title: "Toyota Camry 2023",
    desc: "Sedan, Automatic, 2.5L",
    mileage: "25,000 mi",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$28,500",
  },
  {
    title: "Honda Civic 2022",
    desc: "Sedan, CVT, 1.8L",
    mileage: "18,000 mi",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "$22,300",
  },
  {
    title: "Ford Mustang 2021",
    desc: "Coupe, Manual, 5.0L",
    mileage: "12,000 mi",
    fuel: "Petrol",
    transmission: "Manual",
    price: "$35,200",
  },
  {
    title: "Tesla Model 3 2023",
    desc: "Sedan, Automatic, Electric",
    mileage: "8,000 mi",
    fuel: "Electric",
    transmission: "Automatic",
    price: "$42,000",
  },
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

const carImg =
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

const categories = ["Sedan", "SUV", "Truck", "Coupe", "Convertible", "Minivan"];
const brands = ["Toyota", "Honda", "Ford", "Tesla", "BMW", "Mercedes"];
const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid"];
const transmissions = ["Automatic", "Manual", "CVT"];

const Vehicles = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalVehicles, setTotalVehicles] = useState(0);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState({
    search: "",
    category: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100000,
    fuelType: [],
    transmission: [],
    sort: "",
  });
  const Navigate = useNavigate();
  const fetchVehicles = async (pageNumber, filters) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: pageNumber,
        limit,
        ...(filters.search && { search: filters.search }),
        ...(filters.category.length > 0 && {
          category: filters.category.join(","),
        }),
        ...(filters.brand.length > 0 && { brand: filters.brand.join(",") }),
        ...(filters.minPrice > 0 && { minPrice: filters.minPrice }),
        ...(filters.maxPrice < 100000 && { maxPrice: filters.maxPrice }),
        ...(filters.fuelType.length > 0 && {
          fuelType: filters.fuelType.join(","),
        }),
        ...(filters.transmission.length > 0 && {
          transmission: filters.transmission.join(","),
        }),
        ...(filters.sort && { sort: filters.sort }),
      });

      const { data } = await getVehicles(params);

      if (data && data.data) {
        setVehicles(data.data);
        setTotalPages(data.pagination.totalPages);
        setTotalVehicles(data.pagination.total);
        setPage(data.pagination.currentPage);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch vehicles. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters };

    if (filterType === "search") {
      newFilters.search = value;
    } else if (filterType === "price") {
      newFilters.minPrice = value[0];
      newFilters.maxPrice = value[1];
    } else if (filterType === "sort") {
      newFilters.sort = value;
    } else {
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        newFilters[filterType] = [...newFilters[filterType], value];
      }
    }

    setFilters(newFilters);
    setPage(1);
    fetchVehicles(1, newFilters);
  };
  const resetFilters = () => {
    const newFilters = {
      search: "",
      category: [],
      brand: [],
      minPrice: 0,
      maxPrice: 100000,
      fuelType: [],
      transmission: [],
      sort: "",
    };
    setFilters(newFilters);
    setPage(1);
    fetchVehicles(1, newFilters);
  };
  useEffect(() => {
    fetchVehicles(page, filters);
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);
  const getPageNumbers = () => {
    const pages = [];
    // const maxVisiblePages = 5;

    // Always show first page
    pages.push(1);

    // Calculate range of pages to show
    let start = Math.max(2, page - 2);
    let end = Math.min(totalPages - 1, page + 2);

    // Adjust if we're near the start or end
    if (page <= 3) {
      end = Math.min(5, totalPages - 1);
    } else if (page >= totalPages - 2) {
      start = Math.max(totalPages - 4, 2);
    }

    // Add ellipsis if needed
    if (start > 2) {
      pages.push("...");
    }

    // Add middle pages
    for (let i = start; i <= end; i++) {
      if (i > 1 && i < totalPages) {
        pages.push(i);
      }
    }

    // Add ellipsis if needed
    if (end < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page if there is more than one page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Layout>
      <div className="container p-8">
        <h1 className="text-3xl font-bold mb-6">Browse Vehicles</h1>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4 space-y-6">
            <div className="space-y-2">
              <h2 className="font-semibold text-lg">Search</h2>
              <Input
                placeholder="Search by make, model..."
                value={filters.search}
                onChange={(e) => handleFilterChange("search", e.target.value)}
              />
            </div>

            <Accordion type="multiple" className="w-full">
              <AccordionItem value="category">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">Category</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`cat-${category}`}
                          checked={filters.category.includes(category)}
                          onCheckedChange={() =>
                            handleFilterChange("category", category)
                          }
                        />
                        <Label htmlFor={`cat-${category}`}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="brand">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">Brand</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={`brand-${brand}`}
                          checked={filters.brand.includes(brand)}
                          onCheckedChange={() =>
                            handleFilterChange("brand", brand)
                          }
                        />
                        <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="price">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">Price Range</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 100000]}
                      max={100000}
                      step={1000}
                      minStepsBetweenThumbs={1}
                      value={[filters.minPrice, filters.maxPrice]}
                      onValueChange={(value) =>
                        handleFilterChange("price", value)
                      }
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>${filters.minPrice.toLocaleString()}</span>
                      <span>${filters.maxPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fuel">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">Fuel Type</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {fuelTypes.map((fuel) => (
                      <div key={fuel} className="flex items-center space-x-2">
                        <Checkbox
                          id={`fuel-${fuel}`}
                          checked={filters.fuelType.includes(fuel)}
                          onCheckedChange={() =>
                            handleFilterChange("fuelType", fuel)
                          }
                        />
                        <Label htmlFor={`fuel-${fuel}`}>{fuel}</Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="transmission">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">Transmission</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    {transmissions.map((transmission) => (
                      <div
                        key={transmission}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={`trans-${transmission}`}
                          checked={filters.transmission.includes(transmission)}
                          onCheckedChange={() =>
                            handleFilterChange("transmission", transmission)
                          }
                        />
                        <Label htmlFor={`trans-${transmission}`}>
                          {transmission}
                        </Label>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Button variant="outline" className="w-full" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>

          <div className="w-full md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Showing {totalVehicles} vehicles</p>
              <div className="flex items-center gap-2">
                <Label htmlFor="sort">Sort by:</Label>
                <select
                  id="sort"
                  className="bg-background border rounded-md px-3 py-2 text-sm"
                  value={filters.sort}
                  onChange={(e) => handleFilterChange("sort", e.target.value)}
                >
                  <option value="">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="mileage-asc">Mileage: Low to High</option>
                  <option value="year-desc">Year: Newest</option>
                </select>
              </div>
            </div>
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <VehicleCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {vehicles.length > 0 &&
                    vehicles.map((car, index) => (
                      <Card
                        key={index}
                        className="min-w-[300px] max-w-sm flex-shrink-0 shadow-sm border hover:shadow-md transition-shadow"
                      >
                        <div className="relative">
                          <img
                            loading="lazy"
                            src={car.images[0] || carImg}
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
                              {car.desc}
                            </p>
                          </div>

                          <Separator />

                          <div className="flex justify-between text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Gauge className="w-4 h-4" /> {car.mileage}
                            </div>
                            <div className="flex items-center gap-1">
                              <Fuel className="w-4 h-4" />{" "}
                              {car.specifications.fuelType}
                            </div>
                            <div className="flex items-center gap-1">
                              <Settings className="w-4 h-4" />{" "}
                              {car.specifications.transmission}
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
                </div>
                <div className="mt-6 flex justify-center">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page - 1);
                          }}
                          isActive={page > 1}
                        />
                      </PaginationItem>

                      {getPageNumbers().map((pageNum, index) => (
                        <PaginationItem key={index}>
                          {pageNum === "..." ? (
                            <PaginationEllipsis />
                          ) : (
                            <PaginationLink
                              href="#"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(pageNum);
                              }}
                              isActive={pageNum === page}
                            >
                              {pageNum}
                            </PaginationLink>
                          )}
                        </PaginationItem>
                      ))}

                      <PaginationItem>
                        <PaginationNext
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page + 1);
                          }}
                          isActive={page < totalPages}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vehicles;
