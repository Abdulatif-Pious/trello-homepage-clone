"use client"

import { IconType } from 'react-icons';

interface MenuItemsCardProps {
  title: string,
  Icon?: IconType,
  description: string
}

const MenuItemsCard : React.FC<MenuItemsCardProps> = ({ title, Icon, description   }) => {
  return (
    <div
      className='p-5 rounded-md hover:bg-green-100/50 cursor-pointer'
    >
      <div className='flex items-center  gap-3'>
        {Icon && <Icon className='w-6 h-6 md:w-9 md:h-9' />}
        <h3 className='font-medium '>
          {title}
        </h3>
      </div>
      <p className='font-medium  text-xs md:leading-[16px]  text-secondary-gray mt-4'>
          {description}
        </p>
    </div>
  )
}

export default MenuItemsCard