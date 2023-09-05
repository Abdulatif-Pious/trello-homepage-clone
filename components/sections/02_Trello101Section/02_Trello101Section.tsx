"use client"

import { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import Heading from "../../Heading"
import CarouselCard from "./CarouselCard"
import CarouselImage from "./CarouselImage";
import { productivityCard, productivityCarousel } from './constants';


const  Trello101 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-10 w-full">
      <Heading 
        topDescription="TRELLO 101"
        title="A productivity powerhouse"
        description="
          Simple, flexible, and powerful. All it takes are boards, lists, 
          and cards to get a clear view of who’s doing what and what needs to get done. 
          Learn more in our
        "
        descLink="guide for getting started."
      />
      <div className='flex flex-col-reverse gap-4 mt-10 lg:flex-row '>
        <div className='space-y-4 basis-[50%]'>
          {productivityCard.map((item, index) => (
            <CarouselCard 
              key={item.title}
              title={item.title}
              description={item.description}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              index={index}
          />
          ))}
        </div>

        <div className='min-w-[300px] min-h-[300px] min-lg:w-[500px] min-lg:h-[500px] flex flex-col w-full'>
          <Swiper
            grabCursor={true}
            spaceBetween={10}
            className='flex flex-col items-center w-full'
          >
              {productivityCarousel.map((item, index) => (
              <SwiperSlide
                key={item.alt}
                
              >
                <CarouselImage 
                  image={item.image}
                  activeIndex={activeIndex}
                  alt={item.alt}
                  index={index}
                />
              </SwiperSlide>
              
            ))}
          </Swiper>
        </div>
      </div>
      

    </div>
  )
}

export default  Trello101    