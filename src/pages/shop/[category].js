import Layout from 'components/Layout';
import React, { Fragment, useEffect, useState } from 'react';
import banner from 'public/images/allmachines.jpg';
import { useRouter } from 'next/router';
import Category from 'components/shop/Category';
import { categories, products } from 'data/constants';
import Product from 'components/shop/Product';
import { Popover, Transition } from '@headlessui/react';
import Filter from 'components/shop/Filter';
import { IconDropdown, IconPaginateNext, IconPaginatePrev } from 'constants/Icons';
import ReactPaginate from 'react-paginate';
import { chunk } from 'utils/helpers';

const Shop = () => {
  const { query } = useRouter();
  const [currentSubCategory, setCurrentSubCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

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
    setPageCount(products.length % 9);
  }, [query]);

  const handleSelectCategory = (subCategory) => {
    setCurrentSubCategory(subCategory);
  };

  const handlePageClick = async (page) => {
    await setCurrentPage(page.selected);
  };

  return (
    <Layout>
      <div className="h-[500px] min-h-[500px] w-full relative">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        <div className="absolute inset-0 w-full h-full bg-[#2B2B3560] z-10 flex items-center justify-center">
          <p className="text-2xl text-[#F2F2F2] font-bold uppercase">All machines</p>
        </div>
      </div>
      <div className="pt-[176px] px-6 lg:px-[80px] xl:px-40 2xl:px-[255px] flex justify-between shop-main">
        <div className="hidden md:block max-w-[262px]">
          <Category
            currentSubCategory={currentSubCategory}
            handleSelectCategory={handleSelectCategory}
          />
          <div className="mt-11">
            <Filter />
          </div>
        </div>
        <div className="flex-1 md:ml-12 xl:ml-28 2xl:ml-[173px] w-full">
          <input
            type="text"
            placeholder="Search for product"
            className="border border-[2E2D39]/25 focus:outline-none px-4 py-[10px] w-full md:w-[330px] mb-7 font-poppins text-sm"
          />
          <div className="flex items-center font-poppins mb-[30px]">
            <span className="text-base font-semibold">Sort by</span>
            <Popover className="relative w-[172px] ml-5">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`${
                      open ? '' : 'text-opacity-90'
                    } w-full border border-[#DCDDDE] group bg-orange-700 px-4 py-2 inline-flex items-center justify-between text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="text-sm">Select products</span>
                    <span>
                      <IconDropdown />
                    </span>
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
                    <Popover.Panel className="absolute z-10 w-[172px] transform -translate-x-1/2 left-1/2 sm:px-0">
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
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full gap-5">
            {chunk(products, 9)?.[currentPage]?.map((product) => (
              <Transition
                as="div"
                key={product.id}
                show
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
              >
                <Product product={product} />
              </Transition>
            ))}
          </div>
          <div className="flex items-center justify-center mt-24 mb-64">
            <ReactPaginate
              previousLabel={<IconPaginatePrev active={currentPage !== 0} />}
              nextLabel={<IconPaginateNext active={currentPage !== pageCount - 1} />}
              breakLabel="..."
              breakClassName="break-me"
              pageCount={products.length % 9}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName="flex flex-row items-center text-sm font-poppins font-semibold"
              activeClassName="bg-primary box-border px-[10px] py-[10px] w-[40px] h-[40px] text-center"
              activeLinkClassName="text-white"
              pageClassName="box-border px-[10px] py-[10px] w-[40px] h-[40px] text-center"
              nextClassName="ml-[24px]"
              previousClassName="mr-[24px]"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
