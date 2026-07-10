import { categoryData } from '@/constant/category-data';
import Image from 'next/image';

const Category = () => {
  return (
    <div className='flex-between custom-container h-16 md:h-21'>
      {/* category */}
      <section className='hidden lg:block' aria-label='Primary Navigation'>
        <ul className='flex items-center justify-center gap-8'>
          {categoryData.map((data) => (
            <li key={data.title} className='flex flex-col items-center'>
              <Image
                src={`/images/${data.image}`}
                alt='category'
                width={161}
                height={138}
                className='max-md:h-8 max-md:w-35.25'
              />
              {data.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Category;
