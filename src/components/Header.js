/* eslint-disable max-lines */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Popover, Transition } from '@headlessui/react';
import { IconCart, IconNavDropdown, IconSearch, IconUser } from 'constants/Icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useState } from 'react';
import { useWindowSize } from 'utils/customHooks';
import BurgerButton from './header/burger';

const Header = () => {
  const [className, setClassName] = useState('');
  const [toggleSearch, setToggleSearch] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const { route } = useRouter();

  console.log(route);

  const { width } = useWindowSize();

  const handleScroll = () => {
    if (width > 786) {
      if (window.pageYOffset > 250) {
        if (!className) {
          setClassName('#212227');
        }
      } else {
        setClassName('');
      }
    } else if (window.pageYOffset > 30) {
      if (!className) {
        setClassName('#212227');
      }
    } else {
      setClassName('');
    }
  };

  useEffect(() => {
    if (route === '/' || route.includes('/shop') || route === '/cart') {
      window.addEventListener('scroll', handleScroll);
    } else {
      setClassName('#212227');
    }
  }, [route]);

  return (
    <div
      style={{ backgroundColor: className }}
      className="fixed top-0 flex items-center justify-between sm:px-20 py-5 text-white w-full z-30 bg-transparent transition duration-500 ease-in-out"
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <p className="text-4xl font-semibold px-3 cursor-pointer">KOHI</p>
        </Link>
      </div>
      <div className="hidden 2xl:flex items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="mr-[50px] flex items-center justify-between group relative">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-orange-700 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="mr-2">SHOP</span>
                    <IconNavDropdown />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/3 left-1/3 sm:px-0 2xl:w-[1300px]">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid grid-cols-5 gap-x-7 bg-white px-7 py-10 text-textPrimary">
                          <div className="border-r border-gray-200">
                            <p className="mb-5 text-base uppercase">TOP BRAND</p>
                            <div className="font-poppins text-sm flex flex-col justify-center">
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Bialetti</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Breville</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Delonghi</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Nespresso</a>
                              </Link>
                              <Link href="/">
                                <a className="hover:text-primary">See More</a>
                              </Link>
                            </div>
                          </div>
                          <div className="border-r border-gray-200">
                            <p className="mb-5 text-base uppercase">Coffee Machine</p>
                            <div className="font-poppins text-sm flex flex-col justify-center">
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Coffee Grinder</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Coffee Maker</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Coffee Roaster</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Espresso Machine</a>
                              </Link>
                              <Link href="/">
                                <a className="hover:text-primary">Full Automatic</a>
                              </Link>
                            </div>
                          </div>
                          <div className="border-r border-gray-200">
                            <p className="mb-5 text-base uppercase">barista tools</p>
                            <div className="font-poppins text-sm flex flex-col justify-center">
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Cups & Mugs</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Scales & Spoons</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Servers & Storages</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Tampers & Mats</a>
                              </Link>
                              <Link href="/">
                                <a className="hover:text-primary">Thermormeter</a>
                              </Link>
                            </div>
                          </div>
                          <div className="border-r border-gray-200">
                            <p className="mb-5 text-base uppercase">Coffee beanS</p>
                            <div className="font-poppins text-sm flex flex-col justify-center">
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Capsules</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Ground</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Roasted</a>
                              </Link>
                              <Link href="/">
                                <a className="mb-[10px] hover:text-primary">Whole beans</a>
                              </Link>
                              <Link href="/">
                                <a className="hover:text-primary">All beans</a>
                              </Link>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <img
                              src="/images/coffee-machine-1.png"
                              alt=""
                              className="w-48 h-48 min-w-[192px]"
                            />
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <p className="mr-[50px]">BLOG</p>
          <p className="mr-[50px]">SERVICES</p>
          <p className="mr-[50px]">CONTACT</p>
          <div className="mr-[50px] flex items-center justify-between group relative">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`${
                      open ? '' : 'text-opacity-90'
                    } text-white group bg-orange-700 rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span className="mr-2">MORE</span>
                    <IconNavDropdown />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid bg-white p-7 py-5 text-textPrimary">
                          <div className="font-poppins text-sm flex flex-col justify-center">
                            <Link href="/">
                              <a className="mb-[10px] hover:text-primary">About us</a>
                            </Link>
                            <Link href="/">
                              <a className="mb-[10px] hover:text-primary">News</a>
                            </Link>
                            <Link href="/">
                              <a className="hover:text-primary">Locations</a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        </div>
        <div className="flex items-center justify-between 2xl:ml-[200px] 3xl:ml-[280px]">
          <div className="mr-[50px]">
            <IconSearch />
          </div>
          <div className="mr-[50px]">
            <IconUser />
          </div>
          <div>
            <IconCart />
          </div>
        </div>
      </div>
      <div className="block 2xl:hidden">
        <div
          className="text-white cursor-pointer text-xl leading-none px-3 py-3 border border-solid border-transparent block outline-none focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
          role="button"
        >
          <BurgerButton navbarOpen={toggleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
