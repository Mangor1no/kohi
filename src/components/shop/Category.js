import { Disclosure } from '@headlessui/react';
import { categories } from 'data/constants';
import React from 'react';

const Category = ({ currentSubCategory, handleSelectCategory }) => {
  return (
    <div className="w-full">
      <p className="text-lg uppercase font-bold">Category</p>
      <div className="h-px w-[90px] bg-primary mt-2 mb-4" />
      {categories.map((category) => {
        return (
          <Disclosure
            as="div"
            className={`font-poppins font-semibold ${category.id === 0 ? '' : 'mt-2'}`}
            key={category.id}
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center">
                  {open ? <div className="w-[10px] h-px bg-bgPrimary" /> : <span>+</span>}

                  <span className="uppercase ml-4 text-base">{category.name}</span>
                </Disclosure.Button>
                <div className="h-px w-[90px] bg-[#F2F2F2] mt-4 mb-2" />
                {category.subCategory.map((sub) => (
                  <Disclosure.Panel className={`w-full pl-[26px] pr-4 py-2 `} key={sub.id}>
                    <button
                      type="button"
                      className={`text-sm text-left ${
                        currentSubCategory === sub.name && 'text-primary'
                      }`}
                      onClick={() => handleSelectCategory(sub.name)}
                    >
                      {sub.name}
                    </button>
                  </Disclosure.Panel>
                ))}
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default Category;
