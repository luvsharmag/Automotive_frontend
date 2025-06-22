
import { Card, CardContent } from "@/components/ui/card"
import audi from "@/assets/brands/audi.png"
import bmw from "@/assets/brands/bmw.svg"
import mercedes from "@/assets/brands/mercedes.png"
import kia from "@/assets/brands/kia.png"
import hyundai from "@/assets/brands/hyundai.png"
import honda from "@/assets/brands/honda.png"
import { MoveUpRight } from 'lucide-react';
const brands = [
  { name: "Audi", img: audi },
  { name: "BMW", img: bmw },
  { name: "Mercedes", img: mercedes },
  { name: "Kia", img: kia },
  { name: "Hyundai", img: hyundai },
  { name: "Honda", img: honda },
]

const PremiumBrands = () => {
  return (
    <section className="bg-lightgray py-10 px-4 md:px-10 rounded-t-lg">
   <div className="container mx-auto px-4 max-w-5xl">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Explore Our Premium Brands</h2>
        <button className="text-sm text-primary flex items-center gap-1 hover:underline">
          See More <MoveUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Card key={brand.name} className="text-center shadow-sm hover:shadow-md transition">
            <CardContent className="p-4 flex flex-col items-center">
              <img
                src={brand.img}
                alt={brand.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm font-medium text-gray-700">{brand.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </section>
  )
}

export default PremiumBrands
