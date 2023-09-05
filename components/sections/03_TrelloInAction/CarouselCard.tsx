"use client"

interface CarouselCardProps {
  backgroundColor: string,
  icon: string,
  title: string,
  description: string
}


const CarouselCard : React.FC<CarouselCardProps> = ({ backgroundColor, icon, title, description }) => {
  return (
    <div className="rounded-md ">
      <div className={`
        w-full h-[30px] rounded-t-md
        ${backgroundColor === 'orange-500' && "bg-orange-500"}
        ${backgroundColor === 'blue-500' && "bg-blue-500"}
        ${backgroundColor === 'green-500' && "bg-green-500"}
        ${backgroundColor === 'yellow-500' && "bg-yellow-500"}
        ${backgroundColor === 'blue-200' && "bg-blue-200"}
        ${backgroundColor === 'pink-500' && "bg-pink-500"}
      
      `}>
      </div>
      <div className="p-[16px]">
        <h3 className="font-medium text-[20px] md:text-[24px]">
          {title}
        </h3>
        <p className="text-[16px] mt-2">
          {description}
        </p>
      </div>

    </div>
  )
}

export default CarouselCard