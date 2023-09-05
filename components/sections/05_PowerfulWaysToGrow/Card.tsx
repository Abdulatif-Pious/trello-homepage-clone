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
    <div className="flex flex-col justify-between p-6 md:w-[31%] bg-gray-50 rounded-md">
      <div className='space-y-4'>
        <Image 
          src={img}
          alt={alt}
          width={100}
          height={100}
      />
        <h4 className='font-semibold  text-xl md:text-2xl'>{title}</h4>
        <p>{description}</p>
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