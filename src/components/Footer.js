import React from 'react';
import {
  IconFacebook,
  IconInstagram,
  IconLocation,
  IconMail,
  IconPhone,
  IconPinterest,
  IconTwitter,
  IconYoutube,
} from './Icons';

const Footer = () => {
  return (
    <>
      <div className="w-full bg-[#212227] px-6 lg:px-24 2xl:px-64 pb-32">
        <div>
          <div className="flex flex-col items-center justify-center text-[#F2F2F2]">
            <p className="text-xl mt-[58px] uppercase font-bold">Keep updated</p>
            <div className="h-px w-[150px] bg-[#F2F2F2] mt-[10px] mb-4" />
            <p className="max-w-2xl font-poppins text-sm text-center">
              Subcribes to receive updates on new arrival, special offers and other discount
              information.
            </p>
            <div className="flex items-center h-[50px] w-[300px] md:w-[450px] mt-7 mb-28">
              <input
                type="text"
                className="h-full w-full pl-6 font-poppins text-xs placeholder-[#B1B1B1] text-textPrimary focus:outline-none rounded-l-md"
                placeholder="Your email address"
              />
              <button
                type="button"
                className="h-full font-poppins font-semibold text-base bg-primary uppercase px-3 md:px-8 rounded-r-md"
              >
                Subscribe
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-y-6 md;gap-y-0 md:gap-x-6 w-full">
              <div className="md:col-span-2">
                <p className="uppercase text-xl font-semibold text-white">Kohi</p>
                <div className="font-poppins text-sm text-[#B1B1B1]">
                  <p className="my-[14px]">
                    We introduce you the best coffee and best coffee machine
                  </p>
                  <p className="flex items-center mb-[14px]">
                    <IconMail />
                    <span className="ml-5">kohicoffee@gmail.com</span>
                  </p>
                  <p className="flex items-center mb-[14px]">
                    <IconPhone />
                    <span className="ml-5">+84 3838 66830</span>
                  </p>
                  <p className="flex items-center mb-[14px]">
                    <IconLocation />
                    <span className="ml-5">110 Tran Phu, Ha Dong, Ha Noi, Viet Nam</span>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 col-span-3 gap-y-5 mt-4">
                <div className="font-poppins text-sm text-[#B1B1B1]">
                  <p className="text-white text-base mb-6">Information</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">About us</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">New arrivals</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Privacy Policy</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Term & Conditon</p>
                </div>
                <div className="font-poppins text-sm text-[#B1B1B1]">
                  <p className="text-white text-base mb-6">Shop</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Coffee Machine</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Barisra Tools</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Accessories</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Coffee Beans</p>
                </div>
                <div className="font-poppins text-sm text-[#B1B1B1]">
                  <p className="text-white text-base mb-6">Services</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Online Order</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Fast Delivery</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Maintenance & Repair</p>
                  <p className="text-sm text-[#B1B1B1] mb-[14px]">Return & Refund</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[#B1B1B1] py-6 border-t border-[#B1B1B1] w-full bg-[#212227] px-6 lg:px-24 2xl:px-64">
        <p className="font-poppins text-xs">
          All right reserved. Copyright © <span className="text-primary">KOHICOFFEE</span>
        </p>
        <div className="ml-5 flex items-center justify-between w-[224px] sm:w-[448px] flex-wrap">
          <div className="m-2">
            <IconFacebook />
          </div>
          <div className="m-2">
            <IconInstagram />
          </div>
          <div className="m-2">
            <IconPinterest />
          </div>
          <div className="m-2">
            <IconTwitter />
          </div>
          <div className="m-2">
            <IconYoutube />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
