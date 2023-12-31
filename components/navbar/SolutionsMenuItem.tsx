"use client";

import { FiArrowRight  } from 'react-icons/fi';

import MenuItemsHeader from "./MenuItemsHeader";
import MenuItemsCard from './MenuItemsCard'
import {  menuSolutionContents, menuSolututionsItemCard } from './constants';
import SolutionsMenuItemCard from "./SolutionsMenuItemCard";

const SolutionsMenuItem = () => {
  return (
    <div className="flex w-full">

      <div className="flex bg-white w-3/5  py-[16px] ">
        <div className="max-w-[1000px]  ml-auto pl-8 mr-8 ">
          <MenuItemsHeader 
            title="Take a page out of these pre-built Trello playbooks designed for all teams"
          />
          <hr className="my-[16px] border-gray-300" />
          <div className="grid grid-cols-3 gap-y-[12px]">
            {menuSolutionContents.map((content) => (
              <MenuItemsCard 
                key={content.title}
                title={content.title}
                Icon={content.Icon}
                description={content.description}
              />
            ))}
              <div className='flex items-center gap-[8px] w-fit cursor-pointer group '>
                <p>See all teams</p>
                <FiArrowRight className='text-blue-600  duration-300 group-hover:translate-x-[5px]' />
              </div>
          </div>
          
        </div>
      </div>

      <div className=" w-2/5 bg-violet-100 py-[16px] px-[32px]">
        <div className=" max-w-[480px] mr-auto ">
          <MenuItemsHeader 
            title="Our product in action"
          />
          <hr className="border-violet-500 my-4" />
          {menuSolututionsItemCard.map((item, i) => (
            <SolutionsMenuItemCard 
              key={`${item.title}-${i}`}
              title={item.title} 
              description={item.description}
            />
          ))}
          <div className='flex items-center gap-[8px] fit-content mt-10 cursor-pointer group/item'>
            <p>See all use cases</p>
            <FiArrowRight  className='text-blue-600 duration-300 group-hover/item:translate-x-[5px]'/>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default SolutionsMenuItem