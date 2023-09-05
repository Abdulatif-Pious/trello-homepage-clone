"use client"

import Image from 'next/image';


const Brands = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-10 w-full text-center">
      <p className='text-xl mb-6'>
        Join over 2,000,000 teams worldwide that are using Trello to get more done.
      </p>
      <div className='block md:hidden mx-auto w-[200px]'>
        <Image 
          src="images/logos-3x3-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg"
          alt="logos_img"
          width={200}
          height={200}
        />
      </div>
      <div className='hidden md:block mx-auto w-[600px] xl:w-[800px]'>
        <Image 
          src="images/logos-horizontal-visa-coinbase-john-deere-zoom-grand-hyatt-fender.svg"
          alt="logos_img"
          width={600}
          height={600}
          className="xl:w-[800px] xl:h-[100px]"
        />
      </div>
    </div>
  )
}

export default Brands