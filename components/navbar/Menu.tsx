"use client";

import { RiArrowDropDownLine, } from "react-icons/ri";;
import { RxHamburgerMenu } from 'react-icons/rx'; 
import { AiOutlineClose } from 'react-icons/ai';


interface MenuProps {
  active: string,
  setActive: any,
  mobileMenuShow: boolean,
  setMobileMenuShow: any,
  setActiveMobile: any
}

const Menu: React.FC<MenuProps> = ({ active, setActive, mobileMenuShow, setMobileMenuShow, setActiveMobile }) => {
  
  const menus = ["features", "solutions", "plans", "pricing", "resources"]; 


  const onClick = (currentaActive: string) => {
    if (currentaActive === "pricing") {
      setActive("");
      return;
    }
    if (currentaActive === active) {
      setActive("");
      return;
    }
    setActive(currentaActive as string);
  }

  return (
    <>
                {/*   DESKTOP SCREEN  */}
      <div className={`hidden lg:flex relative  gap-6 ml-12`}>
        {menus.map((item: string) => (
          <div  key={item}>
            <p
              className={`flex items-center justify-center  font-medium  capitalize text-lg py-3 cursor-pointer hover:text-blue-600
                ${active === item && "text-blue-600" }
              `}        
              onClick={() => onClick(item)}
            > 
              {item}
            {item === "pricing" ? null : <RiArrowDropDownLine className={` duration-300 ${ active === item ? "rotate-180" : "rotate-0"} `}/>}
            </p>
            <div 
                className={` ${ active === item  ? "absolute w-20 h-1 bg-blue-600 top-12  translate-x-0  duration-[800ms] transform" : "translate-x-96  w-0  duration-500"} `}
              />
          </div>
        ))}
      </div>
              {/* MOBILE SCREEN */}
      <div 
        className="block lg:hidden ml-auto cursor-pointer transfrom "
        onClick={() => {
          setMobileMenuShow(!mobileMenuShow)
          setActiveMobile("")
        }} 
      >
        {mobileMenuShow ? <AiOutlineClose strokeWidth={20} size={24} /> : <RxHamburgerMenu size={24} strokeWidth={1} />}
      </div>
      
    </>
  );
};

export default Menu;