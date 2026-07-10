import RestaurantCard from '@/components/restaurant-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const restaurant = {
  name: 'Burger King',
  image: '/images/burger-king.png',
  rating: 4.9,
  location: 'Jakarta Selatan',
  distance: 2.4,
};

export default function Recommended() {
  return (
    <div className='pt-42 mx-20'>
      <p className='font-bold text-4xl mb-10'>Recommended</p>
      <section className='grid grid-cols-3 gap-6 '>
        {Array.from({ length: 12 }).map((_, index) => (
          <RestaurantCard
            key={index}
            name={restaurant.name}
            image={restaurant.image}
            rating={restaurant.rating}
            location={restaurant.location}
            distance={restaurant.distance}
          />
        ))}
      </section>
      <div className='flex justify-center mt-10'>
        <Button asChild className='w-fit px-6' variant='outline'>
          <Link href='#'>Show More</Link>
        </Button>
      </div>
    </div>
  );
}
