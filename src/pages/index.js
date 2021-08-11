import HomeCategory from 'components/home/HomeCategory';
import HomeServices from 'components/home/HomeServices';
import Layout from 'components/Layout';
import { SlideBanner } from 'components/home/SlideBanner';
import coffeeMachine01 from 'public/images/coffee-machine-1.png';
import coffeeMachine02 from 'public/images/coffee-machine-2.png';
import coffeeMachine03 from 'public/images/coffee-machine-3.png';
import coffeeMachine04 from 'public/images/coffee-machine-4.png';

const images = [coffeeMachine01, coffeeMachine02, coffeeMachine03, coffeeMachine04];

const banners = [
  {
    id: 0,
    image: coffeeMachine01,
    title: 'A Special espresso machine THIS WEEK',
    description:
      'Get one of three type of espresso machine from Bialetti, take the discount up to 30%',
  },
  {
    id: 1,
    image: coffeeMachine02,
    title: 'A Special espresso machine THIS WEEK',
    description:
      'Get one of three type of espresso machine from Bialetti, take the discount up to 30%',
  },
  {
    id: 2,
    image: coffeeMachine03,
    title: 'Get ready New coffee maker THIS WEEK',
    description: 'New coffee maker from Bialetti, check it now to get the discount up to 30%',
  },
  {
    id: 3,
    image: coffeeMachine04,
    title: 'Get ready New coffee maker THIS WEEK',
    description: 'New coffee maker from Bialetti, check it now to get the discount up to 30%',
  },
];

export default function Home() {
  return (
    <Layout>
      <div className="pb-10 bg-[#2B2B35]">
        <SlideBanner banners={banners} images={images} />
      </div>
      <div className="sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full">
        <HomeCategory />
      </div>
      <div className="sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full">
        <HomeCategory />
      </div>
      <div className="sm:px-16 xl:px-[150px] 2xl:px-[255px] w-full">
        <HomeServices />
      </div>
    </Layout>
  );
}
