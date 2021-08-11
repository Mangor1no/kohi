import Layout from 'components/Layout';
import React, { Fragment, useEffect, useState } from 'react';
import banner from 'public/images/allmachines.jpg';
import { useRouter } from 'next/router';
import Category from 'components/shop/Category';
import { categories, products } from 'data/constants';
import Product from 'components/shop/Product';
import { Popover, Transition } from '@headlessui/react';

const Shop = () => {
  const { query } = useRouter();
  const [currentSubCategory, setCurrentSubCategory] = useState('');

  const CATEGORY = {
    COFFEE_MACHINE: 'coffee-machine',
    BARISTA_TOOLS: 'barista-tools',
    ACCESSORIES: 'accessories',
    COFFEE_BEANS: 'coffee-beans',
  };

  const sortFilter = [
    {
      id: 0,
      name: 'Low to high',
    },
    {
      id: 1,
      name: 'High to low',
    },
    {
      id: 2,
      name: 'A - Z',
    },
    {
      id: 3,
      name: 'Z - A',
    },
  ];

  useEffect(() => {
    const current = categories.filter((cat) => cat.category === query.category)[0];
    setCurrentSubCategory(current?.subCategory[0]?.name);
  }, [query]);

  const handleSelectCategory = (subCategory) => {
    setCurrentSubCategory(subCategory);
  };

  return (
    <Layout>
      <div className="h-[500px] min-h-[500px] w-full relative">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3560] z-10 flex items-center justify-center">
          <p className="text-2xl text-[#F2F2F2] font-bold uppercase">All machines</p>
        </div>
      </div>
      <div className="mt-[176px] px-6 lg:px-[80px] xl:px-[255px] flex justify-between">
        <div className="max-w-[262px]">
          <Category
            currentSubCategory={currentSubCategory}
            handleSelectCategory={handleSelectCategory}
          />
        </div>
        <div className="flex-1 md:ml-6 xl:ml-16 2xl:ml-[173px]">
          <input
            type="text"
            placeholder="Search for product"
            className="border border-[2E2D39]/25 focus:outline-none px-4 py-[10px] w-[330px] mb-7 font-poppins text-sm"
          />
          <div className="flex items-center font-poppins mb-[30px]">
            <span className="text-base font-semibold">Sort by</span>
            <Popover className="relative w-[172px] ml-5">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`${
                      open ? '' : 'text-opacity-90'
                    } w-full border border-[#DCDDDE] group bg-orange-700 px-4 py-2 inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="text-sm">Select</span>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-2"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-2"
                  >
                    <Popover.Panel className="absolute z-10 w-[172px] px-4 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden">
                        <div className="relative bg-white">
                          {sortFilter.map((item) => (
                            <div
                              key={item.name}
                              className="flex items-center px-4 py-2 transition duration-150 ease-in-out border border-[#DCDDDE] border-t-0 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                            >
                              <p className="text-sm">{item.name}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <div className="grid grid-cols-2 2xl:grid-cols-3 w-full gap-8">
            {products.map((product) => (
              <Fragment key={product.id}>
                <Product product={product} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
