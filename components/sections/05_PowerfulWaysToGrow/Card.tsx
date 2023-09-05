"use client"

import Image from 'next/image';
import Button from '../../Button';

interface CardProps {
  img : string
  alt : string
  title : string
  description : string
  buttonContent : string
}


const Card : React.FC<CardProps> = ({ img, alt, title, description, buttonContent }) => {
  return (
    <div className="flex flex-col justify-between p-[24px] md:w-[31%] bg-gray-50 rounded-md">
      <div className='space-y-4'>
        <Image 
          src={img}
          alt={alt}
          width={100}
          height={100}
      />
        <h4 className='font-semibold  text-[20px] md:text-[24px]'>{title}</h4>
        <p className='text-[16px]'>{description}</p>
      </div>

        <div>
          <Button 
            content={buttonContent}
            color="blue-inline-600"
          />
        </div>
    </div>
  )
}

export default Card