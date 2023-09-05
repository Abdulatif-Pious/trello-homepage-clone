"use client"

import  MobileMenuItemContainer  from './MobileMenuItemContainer';
import  ItemContainer  from "../ItemContainer";
import {  menuPlanContents, menuPlanItemContent1, menuPlanItemContent2} from '../constants';

const MobilePlansMenuItem = () => {
  return (
    <div className="my-2 mx-3">

      <div className="my-3">
        {menuPlanContents.map(({title, Icon, description}, i) => (
          <MobileMenuItemContainer 
            key={`${title}-${i}`}
            title={title}
            Icon={Icon}
            description={description}
          />
        ))}
      </div>

      <div className="bg-yellow-50/50 p-[12px] mb-3">
        {menuPlanItemContent1.map((item) => (
          <ItemContainer
            key={item.title} 
            title={item.title} 
            description={item.description}
            buttonContent={item.buttonContent}
            color="yellow-300"
            mobile
          />
        ))}
      </div>

      <div className="bg-violet-100 p-[12px]">
        {menuPlanItemContent2.map((item) => (
          <ItemContainer
            key={item.title} 
            title={item.title} 
            description={item.description}
            buttonContent={item.buttonContent}
            color="violet-300"
            mobile
          />
        ))}
      </div>
    </div>
  )
}

export default MobilePlansMenuItem