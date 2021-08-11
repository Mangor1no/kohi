import React, { Fragment } from 'react';
import category01 from 'public/images/category-01.png';
import category02 from 'public/images/category-02.png';
import category03 from 'public/images/category-03.png';
import category04 from 'public/images/category-04.png';
import CategoryCard from '../CategoryCard';

const categoryImages = [category01, category02, category03, category04];
const categoryText = ['COFFEE MACHINE', 'barista tools', 'ACCESSORIES', 'COFFEE BEANS'];

const HomeCategory = () => {
  return (
    <div className="mt-[176px] flex flex-col items-center">
      <p className="text-lg text-primary">What We Have Here</p>
      <p className="text-xl mt-2 font-semibold">CATEGORY OF KOHI</p>
      <div className="h-px w-[150px] bg-primary mt-[10px] mb-[30px]" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-full gap-[30px]">
        {categoryImages.map((category, index) => (
          <Fragment key={index}>
            <CategoryCard image={category} text={categoryText[index]} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
