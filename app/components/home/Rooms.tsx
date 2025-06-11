import { Link } from 'react-router';

import DiningPng from '~/assets/home/dining.svg';
import LivingPng from '~/assets/home/living.svg';
import BedroomPng from '~/assets/home/bedroom.svg';

export default function Rooms() {
  return (
    <section className="text-center py-12">
      <header className="mb-8">
        <h2 className="text-3xl font-bold">Browse The Range</h2>
        <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </header>
      <div className='flex flex-col md:flex-row gap-8 md:gap-8 items-center justify-center'>
        <article className='space-y-2'>
          <Link to="/shop?category=dining">
            <img src={DiningPng} className='cursor-pointer transition-transform duration-300 hover:scale-102'/>
          </Link>
          <h3>Dining</h3>
        </article>
        <article className='space-y-4'>
          <Link to="/shop?category=living">
            <img src={LivingPng} className='cursor-pointer transition-transform duration-300 hover:scale-102'/>
          </Link>
          <h3>living</h3>
        </article>
        <article className='space-y-4'>
          <Link to="/shop?category=bedroom">
            <img src={BedroomPng} className='cursor-pointer transition-transform duration-300 hover:scale-102'/>
          </Link>
          <h3>bedroom</h3>
        </article>
      </div>
    </section>
  )
}