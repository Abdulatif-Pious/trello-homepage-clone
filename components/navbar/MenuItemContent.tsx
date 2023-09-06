"use client" 

import FeaturesMenuItem from "./FeaturesMenuItem";
import SolutionsMenuItem from "./SolutionsMenuItem";
import PlansMenuItem from "./PlansMenuItem";
import ResourcesMenuItem from "./ResourcesMenuItem";

import MobileFeaturesMenuItem from "./mobileMenuItem/MobileFeaturesMenuItem";
import MobileSolutionsMenuItem from './mobileMenuItem/MobileSolutionsMenuItem';
import MobilePlansMenuItem from './mobileMenuItem/MobilePlansMenuItem';
import MobileResourcesMenuItem from './mobileMenuItem/MobileResourcesMenuItem';

interface MenuItemContentProps {
  active?: string | null,
  activeMobile? : string | null,
  setActive?: any
}

const MenuItemContent: React.FC<MenuItemContentProps> = ({ active, activeMobile, setActive }) => {
  return (
    <>
          {/* DESKTOP MENU ITEM CONTENT */}
      <div className={`hidden lg:block absolute top-13 w-full 
        ${active === "features" ? "transform translate-y-0 h-full  duration-500  scale-100" : "scale-0  h-0 transform -translate-y-96 duration-300" }`}
      >
        {active  === "features" && (
          <>
            <FeaturesMenuItem />
            <div 
              className={` ${active && "min-h-screen top-0 bottom-0 left-0 right-0 bg-black/20 cursor-pointer"}`}
              onClick={() => setActive("")}
            />
          </>
        )}
      </div>

      <div className={`hidden lg:block absolute top-13 w-full 
        ${active === "solutions" ? "transform translate-y-0 h-full  duration-500  scale-100" : "scale-0  h-0 transform -translate-y-96 duration-300" }`}
      >
        {active === "solutions" && (
          <>
            <SolutionsMenuItem />
            <div 
              className={` ${active && "min-h-screen top-0 bottom-0 left-0 right-0 bg-black/20  cursor-pointer"}`}
              onClick={() => setActive("")}
            />
          </>
        )}
      </div>

      <div className={`hidden lg:block absolute top-13 w-full 
        ${active === "plans" ? "transform translate-y-0 h-full  duration-500  scale-100" : "scale-0  h-0 transform -translate-y-96 duration-300" }`}
      >
        {active === "plans" && (
          <>
            <PlansMenuItem />
            <div 
              className={` ${active && "min-h-screen top-0 bottom-0 left-0 right-0 bg-black/20  cursor-pointer"}`}
              onClick={() => setActive("")}
            />
          </>
        )}
      </div>

      <div className={`hidden lg:block absolute top-13 w-full 
        ${active === "resources" ? "transform translate-y-0 h-full  duration-500  scale-100" : "scale-0  h-0 transform -translate-y-96 duration-300" }`}
      >
        {active === "resources" && (
          <>
            <ResourcesMenuItem />
            <div 
              className={` ${active && "min-h-screen top-0 bottom-0 left-0 right-0 bg-black/20  cursor-pointer"}`}
              onClick={() => setActive("")}
            />
          </>
        )}
      </div>
      
            {/*  MOBILE MENU ITEM CONTENT  */}
      <div className="overflow-hidden">
        <div className={`block lg:hidden  ${activeMobile === "features" ? "transform duration-500 translate-x-0" : "transform duration-500 translate-x-[100%]"}`}>
          {activeMobile === 'features' && (
            <MobileFeaturesMenuItem />
          )}
        </div>
        
        <div className={`block lg:hidden  ${activeMobile === "solutions" ? "transform duration-500 translate-x-0" : "transform duration-500 translate-x-[100%]"}`}>
          {activeMobile === "solutions" && (
            <MobileSolutionsMenuItem />
          )}
        </div>

        <div className={`block lg:hidden  ${activeMobile === "plans" ? "transform duration-500 translate-x-0" : "transform duration-500 translate-x-[100%]"}`}>
          {activeMobile === "plans" && (
            <MobilePlansMenuItem />
          )}
        </div>

        <div className={`block lg:hidden  ${activeMobile === "resources" ? "transform duration-500 translate-x-0" : "transform duration-500 translate-x-[100%]"}`}>
          {activeMobile === "resources" && (
            <MobileResourcesMenuItem />
          )}
        </div>
      </div>
    </>
  )
}  


export default MenuItemContent;
