import { Card, CardContent, CardFooter } from "~/components/ui/card"
import { Button } from "~/components/ui/button"
import { Heart, Plus, Scale } from "lucide-react"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Separator } from "~/components/ui/separator"
import { SlidersHorizontal, LayoutGrid, List } from "lucide-react"
import { useState } from "react"
import Product from "./Product"
import { useLocation } from "react-router"
import FilterControls from "./FilterControls"

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  label?: string;
}

const products = [
  { id: 1, name: 'Alvara', category: 'living', price: 'Rp 3.200.000', image: '/image1.svg', label: '-20%' },
  { id: 2, name: 'Baristo', category: 'dining', price: 'Rp 850.000', image: '/image2.svg' },
  { id: 3, name: 'ComfyLuxe', category: 'living', price: 'Rp 4.700.000', image: '/image3.svg', label: '-15%' },
  { id: 4, name: 'Dwell', category: 'bedroom', price: 'Rp 2.950.000', image: '/image4.svg', label: 'New' },
  { id: 5, name: 'Eris', category: 'dining', price: 'Rp 6.100.000', image: '/image5.svg' },
  { id: 6, name: 'Forma', category: 'living', price: 'Rp 1.400.000', image: '/image6.svg', label: '-10%' },
  { id: 7, name: 'Groove', category: 'living', price: 'Rp 3.750.000', image: '/image7.svg' },
  { id: 8, name: 'Haven', category: 'bedroom', price: 'Rp 5.000.000', image: '/image8.svg', label: 'New' },
  { id: 9, name: 'Iso', category: 'bedroom', price: 'Rp 2.150.000', image: '/image9.svg' },
  { id: 10, name: 'Joy', category: 'living', price: 'Rp 1.800.000', image: '/image10.svg' },
  { id: 11, name: 'Kota', category: 'living', price: 'Rp 3.100.000', image: '/image11.svg', label: '-25%' },
  { id: 12, name: 'Luma', category: 'bedroom', price: 'Rp 7.000.000', image: '/image12.svg' },
  { id: 13, name: 'Milo', category: 'bedroom', price: 'Rp 2.300.000', image: '/image13.svg', label: '-30%' },
  { id: 14, name: 'Nesso', category: 'dining', price: 'Rp 950.000', image: '/image14.svg' },
  { id: 15, name: 'Ovo', category: 'dining', price: 'Rp 1.650.000', image: '/image15.svg', label: '-10%' },
  { id: 16, name: 'Pura', category: 'living', price: 'Rp 400.000', image: '/image16.svg', label: 'New' },
  { id: 17, name: 'Quin', category: 'living', price: 'Rp 650.000', image: '/image17.svg' },
  { id: 18, name: 'Relo', category: 'bedroom', price: 'Rp 2.800.000', image: '/image18.svg', label: '-20%' },
  { id: 19, name: 'Solace', category: 'dining', price: 'Rp 1.200.000', image: '/image19.svg' },
  { id: 20, name: 'Timo', category: 'bathroom', price: 'Rp 2.000.000', image: '/image20.svg' },
  { id: 21, name: 'Urbane', category: 'living', price: 'Rp 2.500.000', image: '/image1.svg' },
  { id: 22, name: 'Vesta', category: 'dining', price: 'Rp 1.750.000', image: '/image2.svg', label: '-5%' },
  { id: 23, name: 'Waldo', category: 'bedroom', price: 'Rp 6.200.000', image: '/image3.svg' },
  { id: 24, name: 'Xylo', category: 'bedroom', price: 'Rp 1.300.000', image: '/image4.svg', label: 'New' },
  { id: 25, name: 'Yoko', category: 'dining', price: 'Rp 2.850.000', image: '/image5.svg' },
  { id: 26, name: 'Zane', category: 'living', price: 'Rp 1.600.000', image: '/image6.svg' },
  { id: 27, name: 'Aspen', category: 'bedroom', price: 'Rp 4.000.000', image: '/image7.svg', label: '-10%' },
  { id: 28, name: 'Bruno', category: 'living', price: 'Rp 1.900.000', image: '/image8.svg' },
  { id: 29, name: 'Cali', category: 'dining', price: 'Rp 1.550.000', image: '/image9.svg' },
  { id: 30, name: 'Dion', category: 'bedroom', price: 'Rp 5.600.000', image: '/image10.svg', label: '-15%' },
  { id: 31, name: 'Echo', category: 'living', price: 'Rp 3.300.000', image: '/image11.svg' },
  { id: 32, name: 'Floyd', category: 'bathroom', price: 'Rp 2.100.000', image: '/image12.svg', label: 'New' },
  { id: 33, name: 'Gala', category: 'bedroom', price: 'Rp 3.750.000', image: '/image13.svg' },
  { id: 34, name: 'Haze', category: 'dining', price: 'Rp 1.950.000', image: '/image14.svg' },
  { id: 35, name: 'Iris', category: 'living', price: 'Rp 2.400.000', image: '/image15.svg', label: '-25%' },
  { id: 36, name: 'Juno', category: 'bedroom', price: 'Rp 4.500.000', image: '/image16.svg' },
  { id: 37, name: 'Kite', category: 'dining', price: 'Rp 1.350.000', image: '/image17.svg' },
  { id: 38, name: 'Lark', category: 'living', price: 'Rp 2.200.000', image: '/image18.svg' },
  { id: 39, name: 'Moss', category: 'bedroom', price: 'Rp 3.900.000', image: '/image19.svg', label: 'New' },
  { id: 40, name: 'Nile', category: 'bathroom', price: 'Rp 1.500.000', image: '/image20.svg' }
]

export default function Products() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const categoryFilter = params.get("category")
  const labelFilter = params.get("label")

  const filteredProducts = categoryFilter
    ? products.filter(p => p.category.toLowerCase().includes(categoryFilter.toLowerCase()))
    : labelFilter
      ? products.filter(p => p?.label?.toLowerCase() === "new")
      : products

  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState( filteredProducts.length < 12 ? filteredProducts.length : 12);
  const totalPages = Math.ceil(filteredProducts.length / perPage)
  const displayedProducts = filteredProducts.slice((page - 1) * perPage, page * perPage)

return (
    <div className="space-y-8">
      {/* Toolbar */}
      <div className="bg-[#faf6f1] px-4 py-3 flex flex-wrap md:flex-nowrap items-center justify-between gap-4 border rounded-md shadow-sm">
        <div className="flex gap-4 flex-wrap">
          <FilterControls />

          <Separator orientation="vertical" className="h-6 hidden sm:block" />
          <div className="flex items-center h-[32px]">
            <p className="text-sm text-muted-foreground">
              Showing <strong>{(page - 1) * perPage + 1}–{Math.min(page * perPage, filteredProducts.length)}</strong> of <strong>{filteredProducts.length}</strong> results
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 flex-wrap self-start">
          <div className="flex items-center gap-2 text-sm">
            <span>Show</span>
            <Input
              type="number"
              value={perPage}
              onChange={(e) => {
                const val = parseInt(e.target.value, 10)
                setPerPage(val > 0 ? val : 1)
                setPage(1)
              }}
              className="w-16 h-8 text-sm"
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span>Sort by</span>
            <Select defaultValue="default">
              <SelectTrigger className="w-32 h-8 text-sm">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-[60px]">
        {displayedProducts.map((product) => (
          <Product product={product}/>
        ))}
      </div>
    
      {/* Pagination */}
      <div className="flex justify-center gap-2 pt-6 mb-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <Button
            key={i}
            variant={page === i + 1 ? "default" : "outline"}
            size="sm"
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>
    </div>
  )
}