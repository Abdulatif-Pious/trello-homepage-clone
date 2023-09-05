"use client"

import { useState  } from 'react';
import { BsChevronRight }from 'react-icons/bs';

import Logo from './Logo';
import Menu from './Menu';
import SignButton from './SignButton';
import MenuItemContent from './MenuItemContent'; 


// interface NavbarProps  {
//   active: string
//   setActive: any
// }


const Navbar = () => {
  const [activeMobile, setActiveMobile] = useState("");
  const [mobileMenuShow, setMobileMenuShow] = useState(false);

  const [active, setActive] = useState("");

  const menus = ["features", "solutions", "plans", "pricing", "resources"]; 

  const handleActiveMobileClicked = (menu : string) => {
    if (menu === "pricing") {
      setActiveMobile("")
      return;
    }
    setActiveMobile(menu)
  }

  return (
    <div className='w-full '>
    <div className=' w-full bg-white '>

      <div
        className={`flex w-full   px-4 ${  active && "lg:shadow-xl"}`}
      > 
        <div  className='flex items-center  justify-between w-full max-w-[1480px] mx-auto my-3 lg:my-0'>
          <div className='flex w-full items-center'>
            {}
            <Logo activeMobile={activeMobile} setActiveMobile={setActiveMobile} />
            <Menu 
              active={active}
              setActive={setActive}
              mobileMenuShow={mobileMenuShow}
              setMobileMenuShow={setMobileMenuShow}
              setActiveMobile={setActiveMobile}
            />
          </div>
          <div className="hidden lg:block">
            <SignButton />
          </div>

        </div> 
      </div>

        {/* DESKTOP SCREEN MENUITEM CONTENT*/}

        <div className='hidden lg:block'>
          <MenuItemContent 
            active={active}
            setActive={setActive}
          />
        </div>
      
    </div>

    { /* MOBILE SCREEN MENU CONTENT */ }
    {mobileMenuShow && (
      <div className='w-full '>
        <div
          className={`absolute w-full block lg:hidden bg-white  min-h-screen p-3 ${activeMobile  ? "transform duration-500 -translate-x-[100%]" : "transform duration-300 translate-x-0"}`}
        >
          {menus.map((menu : string, i) => (
            <div 
              key={`${menu}-${i}`}
              className='flex justify-between border-y border-neutral-200 py-5 cursor-pointer'  
              onClick={() => handleActiveMobileClicked(menu)}
            >
              <p className='capitalize text-[20px]'>
                {menu} 
              </p>
              {menu === "pricing" ? null : <BsChevronRight strokeWidth={1}/>}
            </div>
          ))}

          <div className='mt-3'>
              <SignButton mobile />
          </div>
        </div>

        {/* MOBILE SCREEN MENUITEM CONTENT*/}
        <div className='block lg:hidden w-full  min-h-screen'>
          <MenuItemContent
            activeMobile={activeMobile}
          />
        </div>
      </div>
    )}

  </div>
  );
};

export default Navbar;