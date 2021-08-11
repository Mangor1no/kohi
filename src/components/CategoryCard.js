import React from 'react';

const CategoryCard = ({ image, text }) => {
  return (
    <div className="h-[350px] md:h-[500px] xl:h-[400px] 2xl:h-[500px] relative flex items-center justify-center bg-[#EBEBF0]">
      <img src={image} alt="category" />
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <button
          type="button"
          className="w-[180px] h-[50px] text-center bg-primary text-white uppercase text-lg"
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
