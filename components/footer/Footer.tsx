"use client"

import Image from 'next/image';
import { AiOutlineGlobal, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

import { footerCard } from './constants';
import FooterCard from './FooterCard';



const Footer = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-10 w-full">
      <div className="flex flex-col lg:flex-row  lg:gap-10">
        <div className='flex lg:flex-col justify-between lg:justify-start gap-4 p-4'>
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
      
      <div className='flex flex-col lg:flex-row justify-between w-full gap-8 my-4'>
        <div className='basis-3/5 flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full'>
          <div className=' flex items-center gap-2'>
            <AiOutlineGlobal className='text-white text-3xl' />
            <select className='text-white outline-none focus:border bg-transparent py-2 h-fit cursor-pointer'>
              <option value="en" className='bg-gray-400 py-2'>English</option>
              <option value="cs" className='bg-gray-400 py-2'>Čeština</option>
              <option value="de" className='bg-gray-400 py-2'>Deutsch</option>
              <option value="es" className='bg-gray-400 py-2'>Español</option>
              <option value="fr" className='bg-gray-400 py-2'>Français</option>
              <option value="it" className='bg-gray-400 py-2'>Italiano</option>
              <option value="hu" className='bg-gray-400 py-2'>Magyar</option>
            </select>
          </div>
          

          <p className='text-xs text-white hover:underline cursor-pointer'>Privacy Policy</p>
          <p className='text-xs text-white hover:underline cursor-pointer'>Notice at Collection</p>
          <p className='text-xs text-white hover:underline cursor-pointer'>Terms</p>
          <p className='text-xs text-white hover:underline cursor-pointer'>Copyright © 2023 Atlassian</p>
        </div>
        <div className='basis-2/5 flex gap-4 lg:justify-end w-full'>
          <div className='border border-white rounded-full w-fit'>
            <AiOutlineInstagram  className='text-white m-2 cursor-pointer hover:text-sm' />
          </div>
          <div className='border border-white rounded-full w-fit'>
            <FaFacebookF  className='text-white m-2 cursor-pointer hover:text-sm' />
          </div>
            
          <div className='border border-white rounded-full w-fit'>
            <FaLinkedinIn  className='text-white m-2 cursor-pointer hover:text-sm' />
          </div>
          <div className='border border-white rounded-full w-fit'>
            <FaTwitter  className='text-white m-2 cursor-pointer hover:text-sm' />
          </div>
          <div className='border border-white rounded-full w-fit'>
            <FaYoutube  className='text-white m-2 cursor-pointer hover:text-sm' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer
