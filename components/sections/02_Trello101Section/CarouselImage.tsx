"use client"

import Image from "next/image";
import React from "react"

interface CarouselImageProps {
  image: string,
  alt: string,
  activeIndex: number,
  index: number,
}

const CarouselImage : React.FC<CarouselImageProps> = ({ image, alt, activeIndex, index }) => {
  
  return (
    <div>
      <Image 
        src={`/images/${image}`} 
        alt={alt} 
        width={800} 
        height={800} 
      />
    </div>
  
  )
}

export default CarouselImage