"use client"

import { menuFeaturecontents, menuFeatureItemContents } from "./constants";

import MenuItemsHeader from "./MenuItemsHeader";
import MenuItemsCard from './MenuItemsCard'
import Button from '../Button';
import ItemContainer from "./ItemContainer";

const FeaturesMenuItem = () => {
  return (
    <div className="flex w-full ">

      <div className="flex bg-white w-3/5  py-[16px] ">
        <div className="max-w-[1000px]  ml-auto pl-8 mr-8 ">
          <MenuItemsHeader 
            title="Explore the features that help your team succeed"
          />
          <hr className="my-[16px] border-gray-300" />
          <div className="grid grid-cols-3 gap-y-[12px]">
            {menuFeaturecontents.map((content) => (
              <MenuItemsCard 
                key={content.title}
                title={content.title}
                Icon={content.Icon}
                description={content.description}
              />
            ))}
          </div>
        </div>
      </div>

      <div className=" w-2/5 bg-violet-100 py-[16px] px-[32px]">
        <div className=" max-w-[480px] mr-auto ">
        {menuFeatureItemContents.map((item, i) => (
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

export default FeaturesMenuItem