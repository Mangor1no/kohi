import { Disclosure, Transition } from '@headlessui/react';
import { IconPriceRange } from 'constants/Icons';
import { filterType, products } from 'data/constants';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { Range } from 'react-range';

const Filter = () => {
  const [priceRange, setPriceRange] = useState([0, 99999]);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(99999);

  useEffect(() => {
    const priceList = products.map((product) => product.price).sort((a, b) => a - b);
    setPriceRange([Math.floor(priceList[0]), Math.ceil(priceList[priceList.length - 1])]);
    setHighestPrice(Math.ceil(priceList[priceList.length - 1]));
    setLowestPrice(Math.floor(priceList[0]));
  }, []);

  const renderFilterPrice = useCallback(() => {
    return (
      <div className="pl-3 pb-9">
        <Range
          step={10}
          min={lowestPrice}
          max={highestPrice}
          values={priceRange}
          onChange={(values) => {
            setPriceRange(values);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '4px',
                width: '100%',
              }}
              className="bg-primary"
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div {...props} className="flex items-center justify-center">
              <div className="bg-white">
                <IconPriceRange />
              </div>
              <p className="absolute top-8 text-center font-oswald">${priceRange[index]}</p>
            </div>
          )}
        />
      </div>
    );
  }, [lowestPrice, highestPrice, priceRange]);

  const renderFilter = (type) => {
    switch (type) {
      case filterType[0]: {
        return (
          <>
            <input type="text" />
          </>
        );
      }
      case filterType[1]: {
        return renderFilterPrice();
      }
      case filterType[2]: {
        return (
          <>
            <input type="text" />
          </>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <p className="text-lg uppercase font-bold">Filter</p>
      <div className="h-px w-[90px] bg-primary mt-2 mb-4" />
      {filterType.map((filter, index) => {
        return (
          <Disclosure
            as="div"
            className={`font-poppins font-semibold ${index === 0 ? '' : 'mt-2'}`}
            key={index}
          >
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center">
                  {open ? (
                    <div className="w-[10px] h-px bg-bgPrimary" />
                  ) : (
                    <span className="w-[10px]">+</span>
                  )}
                  <span className="uppercase ml-4 text-base">{filter}</span>
                </Disclosure.Button>
                <div className="h-px w-[90px] bg-[#F2F2F2] mt-4 mb-2" />
                <Transition
                  as="div"
                  show={open}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-2"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-2"
                >
                  <Disclosure.Panel className={`w-full pl-[26px] pr-4 py-2 `}>
                    {renderFilter(filter)}
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        );
      })}
    </div>
  );
};

export default Filter;
