import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Logo from 'public/logo/KOHI.png';
import { IconCart, IconSearch, IconUser } from 'constants/Icons';
import { useComponentVisible } from 'src/utils/customHooks';

const BurgerButton = ({ navbarOpen }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(navbarOpen);
    handleClick();
  }, [navbarOpen]);

  const burgerStyles = {
    burgerContainer: {
      height: '32px',
      width: '32px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      padding: '4px',
    },
    line: {
      height: '2px',
      width: '20px',
      background: 'white',
      transition: 'all 0.2s ease',
    },
    lineTop: {
      transform: open ? 'rotate(45deg)' : 'none',
      transformOrigin: 'top left',
      marginBottom: '5px',
    },
    lineMiddle: {
      opacity: open ? 0 : 1,
      // transform: open ? 'translateX(8px)' : 'none',
    },
    lineBottom: {
      transform: open ? 'translateX(-1.5px) rotate(-45deg)' : 'none',
      transformOrigin: 'top left',
      marginTop: '5px',
    },
  };

  return (
    <div>
      <div style={{ ...burgerStyles.line, ...burgerStyles.lineTop }} />
      <div style={{ ...burgerStyles.line, ...burgerStyles.lineMiddle }} />
      <div style={{ ...burgerStyles.line, ...burgerStyles.lineBottom }} />
    </div>
  );
};

const Header = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div
      className="bg-[#2B2B35] flex items-center justify-between sm:px-16 xl:px-[150px] 2xl:px-[255px] py-5 text-white w-full"
      ref={ref}
    >
      <div className="flex items-center justify-between">
        <img src={Logo} width={130} height={60} alt="KOHI" className="object-cover" />
      </div>
      <div className="hidden 2xl:flex items-center justify-between">
        <div className="flex items-center justify-between">
          <p className="mr-[50px]">HOME</p>
          <p className="mr-[50px]">SHOP</p>
          <p className="mr-[50px]">BLOG</p>
          <p className="mr-[50px]">SERVICES</p>
          <p>CONTACT</p>
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
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-3 border border-solid border-transparent block outline-none focus:outline-none"
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          aria-label="Main Menu"
          type="button"
        >
          <BurgerButton navbarOpen={isComponentVisible} />
        </button>
      </div>
    </div>
  );
};

export default Header;
