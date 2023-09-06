"use client"

import Image from "next/image";

interface FeedbackSliderProps {
  content : string 
  person : string
  position : string
  logoImg : string
  alt: string
  description : string
}

const FeedbackSlider : React.FC<FeedbackSliderProps> = ({ content, person, position, logoImg, alt, description }) => {
  return (
    <div className="relative h-[1000px] sm:h-[600px] lg:h-[500px]  flex flex-col lg:flex-row">
      
      <div className="lg:basis-3/5 ">  
        <Image 
          src="images/download.svg"
          alt="bluqckquote_img"
          width={500}
          height={500}
          className="absolute"
        />
        <div className="flex flex-col justify-between h-full  p-[32px] lg:p-[48px]">
          <p className="text-[24px]">{content}</p>
          <div>
            <div 
              className="my-4 lg:my-2 w-48 h-[2px] bg-black/80"
            />
            <p>{person}</p>
            <p>{position}</p>
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-[12px] mt-6">
              <Image 
                src={logoImg}
                alt={alt}
                width={100}
                height={100}
              />
              <p className="text-blue-600 underline">
                Read the story
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:basis-2/5 flex flex-col justify-between h-full  p-[32px] lg:py-[48px] bg-gradient-to-tr from-violet-500 to-pink-300">
        <h3 className="text-white text-[24px] md:text-[32px]">
          {description}
        </h3>
        <p className="text-white/80 hover:text-white underline cursor-pointer">
          Trello TechValidate Survey
        </p>
      </div>
      
    </div>
  )
}

export default FeedbackSlider