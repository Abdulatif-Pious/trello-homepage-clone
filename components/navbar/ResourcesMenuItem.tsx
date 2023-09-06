"use client";

import MenuItemsHeader from "./MenuItemsHeader";
import MenuItemsCard from './MenuItemsCard'
import {  menuResourceContents, menuResourceItemContent,  } from './constants';
import ItemContainer from "./ItemContainer";

const ResourcesMenuItem = () => {
  return (
    <div className="flex w-full">

      <div className="flex w-3/5 bg-white  py-[16px] ">
        <div className="max-w-[1000px]  ml-auto pl-8 mr-8 ">
          <MenuItemsHeader 
            title="Take a page out of these pre-built Trello playbooks designed for all teams"
          />
          <hr className="my-[16px] border-gray-300" />
          <div className="grid grid-cols-3 gap-y-[12px]">
            {menuResourceContents.map((content) => (
              <MenuItemsCard 
                key={content.title}
                title={content.title}
                description={content.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" w-2/5 bg-violet-100 py-[16px] px-[32px]">
        <div className=" max-w-[480px] mr-auto ">
          {menuResourceItemContent.map((item, i) => (
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

export default ResourcesMenuItem