import { Link } from 'react-router';

import Product from '../shop/Product';

type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  label?: string;
}

const products: Product[] = [
  { id: 1, name: 'Alvara', category: 'living', price: 'Rp 3.200.000', image: '/image1.svg', label: '-20%' },
  { id: 2, name: 'Baristo', category: 'dining', price: 'Rp 850.000', image: '/image2.svg' },
  { id: 3, name: 'ComfyLuxe', category: 'living', price: 'Rp 4.700.000', image: '/image3.svg', label: '-15%' },
  { id: 4, name: 'Dwell', category: 'bedroom', price: 'Rp 2.950.000', image: '/image4.svg', label: 'New' },
  { id: 5, name: 'Eris', category: 'dining', price: 'Rp 6.100.000', image: '/image5.svg' },
  { id: 6, name: 'Forma', category: 'living', price: 'Rp 1.400.000', image: '/image6.svg', label: '-10%' },
  { id: 7, name: 'Groove', category: 'living', price: 'Rp 3.750.000', image: '/image7.svg' },
  { id: 8, name: 'Haven', category: 'bedroom', price: 'Rp 5.000.000', image: '/image8.svg', label: 'New' },
];

export default function Products() {
  return (
    <section className='my-12 mx-[110px]'>
      <header className='text-center mb-8'>
        <h2>Our Prodycts</h2>
      </header>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 8).map((product) => (
          <Product product={product}/>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          className="cursor-pointer border rounded border-[#B88E2F] px-20 py-2 hover:bg-[#B88E2F] hover:text-white transition"
          to='/shop'
        >
          Show more
        </Link>
      </div>
    </section>
  )
}