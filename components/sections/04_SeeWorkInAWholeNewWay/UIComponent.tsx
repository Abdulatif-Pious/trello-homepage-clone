"use client"

import Image from "next/image";

interface UIComponenentProps {
  img : string
  alt: string
  title : string
  description : string
  link : string
  reverse?: boolean
}

const UIComponent : React.FC<UIComponenentProps>  = ({ img, alt, title, description, link, reverse }) => {
  return (
    <div className={`flex ${reverse ? " lg:flex-row-reverse" : "lg:flex-row"} flex-col   items-center  gap-[40px] bg-white p-[24px] my-6 rounded-md`}>
      <Image 
        src={img}
        alt={alt}
        width={500}
        height={500}
      />
      <div className="space-y-6">
        <h4 className="font-semibold">
          {title}
        </h4>
        <p className="text-[20px]">
          {description}
        </p>

        <p className="text-[20px] text-blue-600 underline cursor-pointer">
          {link}
        </p>
      </div>
    </div>
  )
}

export default UIComponent