"use client"

import MenuItemsHeader from "../MenuItemsHeader";
import  MobileMenuItemContainer  from './MobileMenuItemContainer';
import  ItemContainer  from "../ItemContainer";
import {  menuResourceContents, menuResourceItemContent } from '../constants';

const MobileResourcesMenuItem = () => {
  return (
    <div className="my-2 mx-3">
      <MenuItemsHeader 
        title="Learn & connect"
      />
      <div className="my-3">
        {menuResourceContents.map(({title, description}, i) => (
          <MobileMenuItemContainer 
            key={`${title}-${i}`}
            title={title}
            description={description}
          />
        ))}
      </div>
      <div className="bg-violet-100 p-[12px]">
        {menuResourceItemContent.map((item) => (
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

export default MobileResourcesMenuItem