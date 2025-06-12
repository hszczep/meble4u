import { Link } from 'react-router';
import baner from '~/assets/home/baner.svg';

export default function Baner() {
  return (
    <section className='flex justify-center relative h-[calc(100vh-80px)]'>
      <img 
        src={baner} 
        alt="baner" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center md:justify-end md:items-start md:pt-[150px] md:pr-[60px]">
        <article className="bg-amber-50 max-w-md w-full mx-4 p-6 md:p-10 rounded shadow-md">
          <header className="mb-4">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
              New Arrival
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-yellow-800 leading-snug">
              Discover Our <br />
              New Collection
            </h1>
          </header>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Explore our latest furniture collection, where modern design meets everyday comfort. Create a stylish and functional home that reflects your unique taste.        
          </p>

          <Link to="/shop?label=new" className="bg-yellow-800 text-white text-sm px-6 py-3 rounded hover:bg-yellow-700 transition cursor-pointer">
            BUY NOW
          </Link>
        </article>
      </div>
    </section>
  )
}