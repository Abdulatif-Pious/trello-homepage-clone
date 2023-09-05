"use client"

import { IconType } from 'react-icons';

interface MobileMenuContainerProps {
  title: string,
  Icon?: IconType,
  description: string
}

const MobileMenuItemContainer: React.FC<MobileMenuContainerProps> = ({ title, Icon, description }) => {
  return (
    <div
    className="border-y  py-[12px]"
  >
    <div className="flex items-center gap-1">
      {Icon && <Icon className='w-6 h-6 md:w-9 md:h-9' />}
      <h3>{title}</h3>
    </div>
    <p className="text-[12px] text-secondary-gray mt-2">{description}</p>
  </div>
  )
}

export default MobileMenuItemContainer