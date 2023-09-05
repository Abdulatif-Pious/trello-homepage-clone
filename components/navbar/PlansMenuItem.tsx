"use client";

import MenuItemsHeader from "./MenuItemsHeader";
import MenuItemsCard from './MenuItemsCard'
import {  menuPlanContents, menuPlanItemContent1, menuPlanItemContent2 } from './constants';
import ItemContainer from "./ItemContainer";
import Button from '../Button';

const PlansMenuItem = () => {
  return (
    <div className="flex w-full">

      <div className="flex w-3/5 bg-white py-4 ">
        <div className="max-w-[1000px]  ml-auto pl-8 mr-8 ">
          <MenuItemsHeader 
            title="Take a page out of these pre-built Trello playbooks designed for all teams"
          />
          <hr className="my-4 border-gray-300" />
          <div className="grid grid-cols-3 gap-y-3">
            {menuPlanContents.map((content) => (
              <MenuItemsCard 
                key={content.title}
                title={content.title}
                Icon={content.Icon}
                description={content.description}
              />
            ))}
            {menuPlanItemContent1.map((item, i) => (
              <div
                key={`${item.title}-${i}`}
                className="bg-yellow-50/50 p-5 col-span-3"
              >
                <h3 className='text-[14px] font-medium '>
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <p className="font-medium  text-[10px] md:leading-[16px]  text-neutral-500 mt-4">
                    {item.description}
                  </p>
                  <Button 
                    content={item.buttonContent}
                    color="yellow-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" w-2/5 bg-violet-100 py-4 px-8">
        <div className=" max-w-[480px] mr-auto ">
          {menuPlanItemContent2.map((item, i) => (
            <ItemContainer 
              key={`${item.title}-${i}`}
              title={item.title} 
              description={item.description}
              buttonContent={item.buttonContent}
              color="violet-300"        
            />
          ))}
        </div>
      </div>      
    </div>
  )
}

export default PlansMenuItem