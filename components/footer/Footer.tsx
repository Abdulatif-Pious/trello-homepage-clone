"use client"

import Image from 'next/image';
import { AiOutlineGlobal, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

import { footerCard } from './constants';
import FooterCard from './FooterCard';



const Footer = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[40px] w-full">
      <div className="flex flex-col lg:flex-row  lg:gap-[40px]">
        <div className='flex lg:flex-col justify-between lg:justify-start gap-[16px] p-[16px]'>
          <Image 
            src="/vercel.svg"
            alt="logo_img"
            width={150}
            height={150}
          />
          <p className='w-fit text-white hover:underline cursor-pointer'>Log in</p>
        </div>
        <div className='flex flex-col lg:flex-row my-10 lg:my-0 w-full'>
          {footerCard.map((item) => (
            <FooterCard 
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <hr className='hidden lg:block bg-gray-500 w-full h-1 my-4'/>
      
      <div className='flex flex-col lg:flex-row justify-between w-full gap-[32px] my-4'>
        <div className='basis-3/5 flex flex-col lg:flex-row items-start lg:items-center gap-[16px] w-full'>
          <div className=' flex items-center gap-[8px]'>
            <AiOutlineGlobal className='text-white text-[30px]' />
            <select className='text-white outline-none focus:border bg-transparent py-[8px] h-fit cursor-pointer'>
              <option value="en" className='bg-gray-400 py-[8px]'>English</option>
              <option value="cs" className='bg-gray-400 py-[8px]'>Čeština</option>
              <option value="de" className='bg-gray-400 py-[8px]'>Deutsch</option>
              <option value="es" className='bg-gray-400 py-[8px]'>Español</option>
              <option value="fr" className='bg-gray-400 py-[8px]'>Français</option>
              <option value="it" className='bg-gray-400 py-[8px]'>Italiano</option>
              <option value="hu" className='bg-gray-400 py-[8px]'>Magyar</option>
            </select>
          </div>
          

          <p className='text-[12px] text-white hover:underline cursor-pointer'>Privacy Policy</p>
          <p className='text-[12px] text-white hover:underline cursor-pointer'>Notice at Collection</p>
          <p className='text-[12px] text-white hover:underline cursor-pointer'>Terms</p>
          <p className='text-[12px] text-white hover:underline cursor-pointer'>Copyright © 2023 Atlassian</p>
        </div>
        <div className='basis-2/5 flex gap-[16px] lg:justify-end w-full'>
          <div className='border border-white rounded-full w-fit'>
            <AiOutlineInstagram  className='text-white m-2 cursor-pointer hover:text-[14px]' />
          </div>
          <div className='border border-white rounded-full w-fit'>
            <FaFacebookF  className='text-white m-2 cursor-pointer hover:text-[14px]' />
          </div>
            
          <div className='border border-white rounded-full w-fit'>
            <FaLinkedinIn  className='text-white m-2 cursor-pointer hover:text-[14px]' />
          </div>
          <div className='border border-white rounded-full w-fit'>
            <FaTwitter  className='text-white m-2 cursor-pointer hover:text-[14px]' />
          </div>
          <div className='border border-white rounded-full w-fit'>
            <FaYoutube  className='text-white m-2 cursor-pointer hover:text-[14px]' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
