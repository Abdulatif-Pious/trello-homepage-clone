"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BsChevronLeft } from 'react-icons/bs';

interface LogoProps {
  activeMobile: string | null,
  setActiveMobile: any
}

const Logo: React.FC<LogoProps> = ({ activeMobile, setActiveMobile }) => {
  const router = useRouter();

  const handleBack = () => {
    setActiveMobile("")
  }
  
  return (
    <>
      {/* DESKTOP LOGO*/}
      <div className='hidden lg:block'>
        <Image 
          src="/vercel.svg"
          width="100"
          height="100"
          alt="Logo"
          className=' cursor-pointer'
          onClick={() => router.push("/")}
        />
      </div>

      {/* MOBILE LOGO */}
      <div className='block lg:hidden'>

        <div className={` ${activeMobile  ? "transform duration-500 translate-x-0 " : "transform duration-500 translate-x-[100%] "}`}>
          {activeMobile && (
            <div 
              className='text-[20px] flex gap-[8px] items-center cursor-pointer'
              onClick={handleBack}
            >
              <BsChevronLeft strokeWidth={1} /> Back
            </div>
          )}
        </div>

        <div className={`${!activeMobile  ? "transform duration-500 translate-x-0 " : "transform duration-500 -translate-x-[100%] "}`}>
          {!activeMobile && (
            <div>
              <Image 
                src="/vercel.svg"
                width="100"
                height="100"
                alt="Logo"
                className='cursor-pointer'
                onClick={() => router.push("/")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
};

export default Logo;