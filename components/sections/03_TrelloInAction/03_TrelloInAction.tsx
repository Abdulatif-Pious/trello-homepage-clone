"use client"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



import Heading from "../../Heading"
import CarouselCard from "./CarouselCard"
import { actionCard } from "./constants";
import Button from '../../Button';

const TrelloInAction = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-10 w-full">
      <Heading 
        topDescription="TRELLO IN ACTION"
        title="Workflows for any project, big or small"
      />
      <Swiper
        navigation={true} 
        modules={[Navigation]}
        slidesPerView={1}
        grabCursor={true}
        spaceBetween={30}
        style={
          { margin: "2rem 0",}
        }

        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
      >
  
          {actionCard.map((item) => (
            <SwiperSlide 
              key={item.title}
            >
              <div  className='w-full h-[200px] shadow-lg hover:shadow-xl pb-8'>
                <CarouselCard 
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  backgroundColor={item.color}
                
                />
              </div>
            </SwiperSlide>
            ))}
      </Swiper>

      <div className='flex w-full flex-col lg:items-center space-y-6  lg:flex-row  my-6'>
        <p className='basis-2/3 text-xl'>
          No need to start from scratch. Jump-start your 
          workflow with a proven playbook designed for different teams. 
          Customize it to make it yours.
        </p>
        <div className='basis-1/3 lg:flex lg:justify-end'>
          <Button 
            content="Explore all Use Cases"
            color="blue-inline-600"
          />
        </div>
        
      </div>
    </div>
  )
}

export default TrelloInAction