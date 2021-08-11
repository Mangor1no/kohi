// import { AnimatePresence, motion } from 'framer-motion';

// export const Slideshow = ({ image, title, description }) => (
//   <AnimatePresence>
//     <motion.div
//       initial={{ x: 300, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//       exit={{ x: -300, opacity: 0 }}
//     >
//       <img key={image?.src} src={image?.src} alt="banner" />
//       <p>{title}</p>
//       <p>{description}</p>
//     </motion.div>
//   </AnimatePresence>
// );

import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const carouselSetting = {
  autoPlay: true,
  infiniteLoop: true,
  showArrows: false,
  showThumbs: false,
  showStatus: false,
};

export const SlideBanner = ({ banners }) => {
  return (
    <div className="sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full bg-[#2B2B35]">
      <Carousel {...carouselSetting}>
        {banners.map((banner) => (
          <div
            className="flex items-center justify-center md:justify-between py-20 relative px-4"
            key={banner.id}
          >
            <div className="flex flex-col items-start z-20">
              <div className="w-full text-left max-w-[400px] lg:max-w-[590px]">
                <p
                  className="text-white text-5xl uppercase font-[600]"
                  style={{ lineHeight: '72px' }}
                >
                  {banner.title}
                </p>
                <p className="text-white text-sm mt-[10px]">{banner.description}</p>
              </div>
              <button type="button" className="text-white mt-[46px] bg-primary px-[47px] py-[13px]">
                Buy now
              </button>
            </div>
            <div className="absolute inset-0 md:relative md:bg-none z-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/60 md:relative md:bg-none z-10 w-full h-full" />
              <img
                src={banner.image}
                alt="banner"
                className="!w-[300px] !h-[300px] lg:!w-[400px] lg:!h-[400px] xl:!w-[500px] xl:!h-[500px] object-cover z-0"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
