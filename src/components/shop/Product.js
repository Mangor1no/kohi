import { IconStar } from 'constants/Icons';
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="w-full h-[500px]">
      <div className="w-full h-[400px] md:px-9 md:py-[70px] bg-[#F2F2F2] flex items-center justify-center">
        <img
          src={product?.image?.[0]}
          alt={product?.name}
          className="md:w-full h-full object-cover"
        />
      </div>
      <p className="font-poppins font-semibold mt-2">{product?.name}</p>
      <div className="flex items-center mt-2">
        {Array(product?.rating).fill(
          <span className="mr-[5px]">
            <IconStar />
          </span>
        )}
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <p className="mr-2 text-lg">${product?.price}</p>
          {product?.oldPrice && (
            <p className="text-sm text-[#B1B1B1] line-through">${product?.oldPrice}</p>
          )}
        </div>
        <div className="flex items-center">
          {product?.variations?.map((color) => (
            <div className="w-5 h-5 ml-2 rounded-full" style={{ background: color }} key={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
