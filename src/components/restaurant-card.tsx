import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

type RestaurantCardProps = {
  name: string;
  image: string;
  rating: number;
  location: string;
  distance: number;
};

export default function RestaurantCard({
  name,
  image,
  rating,
  location,
  distance,
}: RestaurantCardProps) {
  return (
    <Card className='rounded-3xl border-0 shadow-md hover:shadow-xl transition'>
      <CardContent className='flex items-center gap-5 p-5'>
        <Image
          src={image}
          alt={name}
          width={120}
          height={120}
          className='rounded-2xl bg-orange-50 p-2'
        />

        <div>
          <h3 className='text-xl font-bold'>{name}</h3>

          <div className='mt-2 flex items-center gap-2'>
            <Star className='fill-yellow-400 text-yellow-400' size={18} />
            <span>{rating}</span>
          </div>

          <p className='mt-2 text-gray-600'>
            {location} · {distance} km
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
