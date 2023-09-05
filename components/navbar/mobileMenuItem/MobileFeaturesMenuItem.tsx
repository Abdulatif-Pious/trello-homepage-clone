"use client"

import MenuItemsHeader from "../MenuItemsHeader";
import { menuFeaturecontents } from "../constants";
import  MobileMenuItemContainer  from './MobileMenuItemContainer';
import  ItemContainer  from "../ItemContainer";
import { menuFeatureItemContents  } from '../constants';


const MobileFeaturesMenuItem = () => {
  return (
    <div className="my-2 mx-3">
      <MenuItemsHeader 
        title="Explore the features that help your team succeed"
      />
      <div className="my-3">
        {menuFeaturecontents.map(({title, Icon, description}, i) => (
          <MobileMenuItemContainer 
            key={`${title}-${i}`}
            title={title}
            Icon={Icon}
            description={description}
          />
        ))}
      </div>
      <div className="bg-violet-100 p-3">
        {menuFeatureItemContents.map((item) => (
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

export default MobileFeaturesMenuItem