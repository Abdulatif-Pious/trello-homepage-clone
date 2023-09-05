"use client"

import MenuItemsHeader from "../MenuItemsHeader";
import  MobileMenuItemContainer  from './MobileMenuItemContainer';
import  ItemContainer  from "../ItemContainer";
import {  menuSolutionContents, menuSolutionItemContent } from '../constants';

const MobileSolutionsMenuItem = () => {
  return (
    <div className="my-2 mx-3">
      <MenuItemsHeader 
        title="Take a page out of these pre-built Trello playbooks designed for all teams"
      />
      <div className="my-3">
        {menuSolutionContents.map(({title, Icon, description}, i) => (
          <MobileMenuItemContainer 
            key={`${title}-${i}`}
            title={title}
            Icon={Icon}
            description={description}
          />
        ))}
        <h3 className="text-[12px] border-y py-3">
          See all teams
        </h3>
      </div>
      <div className="bg-violet-100 p-3">
        {menuSolutionItemContent.map((item) => (
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

export default MobileSolutionsMenuItem