"use client"

import MenuItemsHeader from "./MenuItemsHeader";
import Button from '../Button';

interface ItemContainerProps {
  title: string,
  description: string,
  buttonContent: string,
  color: string,
  mobile?: boolean
}

const ItemContainer: React.FC<ItemContainerProps> = ({ title, description, buttonContent, color,  mobile}) => {
  return (
    <div className={`${mobile &&  "flex items-center justify-between flex-wrap gap-[16px] w-full"}`}>
      <div>
        <MenuItemsHeader
          title={title}
        />
        <hr className="hidden lg:block border-violet-500 my-4"/>
        <p className="  text-[12px]  md:leading-[20px]   text-secondary-gray mt-2">
          {description}
        </p>
      </div>
      
      <div>
        <Button 
          content={buttonContent}
          color={color}
        />
      </div>
      
    </div>
  )
}

export default ItemContainer