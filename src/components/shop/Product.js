import { IconStar } from 'constants/Icons';
import { categories } from 'data/constants';
import React from 'react';

const Product = ({ product }) => {
  const renderCategory = (category, subCategory) => {
    return categories
      .filter((cat) => cat.category === category)?.[0]
      ?.subCategory?.filter((subcat) => subcat.slug === subCategory)?.[0]?.name;
  };

  return (
    <div
      className="w-full h-full border border-[#7F7F7F20] rounded-md group"
      style={{ boxShadow: '6px 12px 61px rgba(43, 43, 53, 0.05)' }}
    >
      <div className="w-full md:px-[45px] md:py-[50px] bg-[#F2F2F2] flex items-center justify-center rounded-t-md rounded-b-2xl relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center p-8 z-0">
          <div className="relative w-full h-full">
            <div className="rounded-full mix-blend-normal filter blur-lg absolute w-3/4 h-3/4 bottom-4 right-[2px] bg-[#14131345]" />
          </div>
        </div>
        <img
          src={product?.image?.[0]}
          alt={product?.name}
          className="md:w-full h-full object-cover z-10 transition duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="m-6">
        <p className="font-semibold mb-1 text-base uppercase line-clamp-1">{product?.name}</p>
        <div className="flex items-center mb-2">
          <p className="font-poppins text-sm text-[#7F7F7F] line-clamp-1">
            {renderCategory(product?.category, product?.subCategory)}
          </p>
        </div>
        <div className="flex items-center mb-4">
          {Array(product?.rating).fill(
            <span className="mr-[5px]">
              <IconStar />
            </span>
          )}
        </div>
        {product?.oldPrice ? (
          <p className="text-xs text-[#B1B1B1] line-through">${product?.oldPrice}</p>
        ) : (
          <div className="h-[18px]" />
        )}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="mr-2 text-lg">${product?.price}</p>
          </div>
          <div className="flex items-center justify-end max-w-[60px] flex-wrap">
            {product?.variations?.map((color) => (
              <div
                className="w-4 h-4 2xl:w-5 2xl:h-5 m-1 rounded-full"
                style={{ background: color }}
                key={color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
