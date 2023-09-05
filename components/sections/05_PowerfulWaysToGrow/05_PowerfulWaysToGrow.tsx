"use client"

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import Heading from "../../Heading";
import Card from "./Card";
import FeedbackSlider from './FeedbackSlider';
import { feedbackSlider } from './constants';



const PowerfulWaysToGrow = () => {
  const pagination = {
    clickable: true,
  };

  return (
    <div  className="max-w-[1280px] mx-auto px-[16px] lg:px-[40px] w-full">
      <Heading 
        topDescription="POWERFUL WAYS TO GROW"
        title="Do more with Trello"
        description="
          Trello’s intuitive features give any team the ability 
          to quickly set up and customize workflows for just about anything.
        "
      />

      <div className="flex flex-wrap  justify-center gap-8 w-full my-4">
        <Card 
          img="/images/Gears.svg"
          alt="gears_img"
          title="Integrations"
          description="
            Connect the apps your team 
            already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.
          "
          buttonContent="Browse Integrations"
        />

        <Card 
          img="/images/Integrations_Puzzle.svg"
          alt="Integrations_Puzzle_img"
          title="Butler Automation"
          description="
            No-code automation is built into every Trello board. Focus 
            on the work that matters most and let the robots do the rest.
          "
          buttonContent="Get to know Automation"
        />

        <Card 
          img="/images/Search_Value.svg"
          alt="Search_Value_img"
          title="Trello Enterprise"
          description="
            The productivity tool teams love, paired with the features 
            and security needed for scale.
          "
          buttonContent="Explore Enterprise"
        />
      </div>

      <Swiper 
        pagination={pagination}
        navigation={true} 
        grabCursor={true}
        spaceBetween={30}
        modules={[Pagination, Navigation]} 
        className="m-12 shadow-lg rounded-xl"
      >
        {feedbackSlider.map((item) => (
          <SwiperSlide 
            key={item.content}
            
          >
            <FeedbackSlider 
              content={item.content}
              person={item.person}
              position={item.position}
              logoImg={item.logoImg}
              alt={item.alt}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  )
}

export default PowerfulWaysToGrow