import DiningPng from '~/assets/home/dining.svg';
import ShareIcon from '~/assets/home/share.svg';
import CompareIcon from '~/assets/home/compare.svg';
import LikeIcon from '~/assets/home/like.svg';
import { useCartStore } from '~/store/useCartStore';

type ProductProps = {
  product: {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    label?: string;
  }
}

export default function Product({ product }: ProductProps) {
  const { addToCart } = useCartStore();

  return (
    <article key={product.id} className='relative group rounded overflow-hidden'>
      <figure className="relative">
        <img alt={`Product-${product.name}`} src={product.image} className="w-full object-cover h-64"/>
        {product?.label && 
          <span className={
            `absolute top-3 right-3 text-white text-xs w-[48px] h-[48px] rounded-full flex items-center justify-center
            ${ product.label === 'New' ? 'bg-emerald-500' : 'bg-red-300' }
          `}>
            {product.label}
          </span>
        }
        <div className='absolute inset-0 bg-black/40 flex flex-col gap-2 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <button onClick={() => addToCart(product)} className='bg-white text-[#B88E2F] text-sm px-4 py-1 rounded mb-2 cursor-pointer'>Add to cart</button>
          <div className='text-sm flex gap-4'>
            <span className='flex gap-2'>
              <img alt="ShareIcon" src={ShareIcon} />
              Share
            </span>
            <span className='flex gap-2'>
              <img alt="CompareIcon" src={CompareIcon} />
              Compare
            </span>
            <span className='flex gap-2'>
              <img alt="LikeIcon" src={LikeIcon} />
              Like
            </span>
          </div>
        </div>
      </figure>
      
      <figcaption className='p-4 bg-gray-200'>
        <h3 className='font-semibold text-2xl'>{product.name}</h3>
        <p className='text-base font-medium text-gray-400'>{product.category}</p>
        <p className='font-semibold text-xl'>{product.price}</p>
      </figcaption>
    </article>
  )
}