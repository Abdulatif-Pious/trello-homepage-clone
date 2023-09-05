"use client"

import { FiArrowRight  } from 'react-icons/fi';

interface SolutionsMenuItemCardProps {
  title: string,
  description: string,
}



const SolutionsMenuItemCard : React.FC<SolutionsMenuItemCardProps> = ({ title, description }) => {
  return (
    <div className="group mt-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[14px]">
          Use case: {title}
        </h3>
        <FiArrowRight className='text-violet-500 hidden group-hover:block' strokeWidth={3} />
      </div>
      <p className='font-medium  text-[10px] md:leading-[16px]  text-neutral-500 mt-2'>
        {description}
      </p>
    </div>
  )
}

export default SolutionsMenuItemCard