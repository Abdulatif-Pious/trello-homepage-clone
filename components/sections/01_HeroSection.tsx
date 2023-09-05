"use client"

import Image from 'next/image';
import { BsSkipStartCircle } from 'react-icons/bs';

import Button from '../Button';

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full items-center lg:text-left text-center gap-6 px-4 lg:px-10 max-w-[1280px] mx-auto ">  
        
      <div className="w-full flex flex-col gap-3 lg:gap-6 ">
        <h2 className="font-bold  text-[32px] md:text-[44px] lg:text-[48px] text-black"> 
          Trello brings all your tasks, teammates, and tools together
        </h2>
        <p className='font-medium text-xl text-black'>
          Keep everything in the same place—even if your team isn’t.
        </p>
        <div className='flex items-center lg:items-start xl:items-center md:flex-row lg:flex-col xl:flex-row w-full md:w-fit  gap-3 '>
          <input 
            type='email' 
            placeholder="Email" 
            className='
              hidden md:block outline-none   h-fit w-[350px] rounded-lg p-3 duration-300 ring-white ring-offset-1 focus:ring-2'
            />
          <div className='w-full md:w-1/3 lg:w-fit'>
            <Button 
              content="Sign up - it's free"
              color="blue-600"
            />
          </div>
        </div>
        <div className='flex items-center justify-center lg:justify-start gap-3 text-neutral-200 hover:text-white  group'>
          <p className='underline '>Watch video</p>
          <BsSkipStartCircle size={24}  className="group-hover:translate-x-[5px] duration-300" />
        </div>
      </div>

      <div className="w-full">
        <Image src="/images/TrelloUICollage_4x.webp" alt='hero_img' width={500} height={500} />
      </div>

    </div>
  )
}

export default HeroSection