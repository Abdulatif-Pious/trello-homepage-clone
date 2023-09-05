"use client"

interface CarouselCardProps {
  activeIndex : number,
  setActiveIndex: any,
  index: number,
  title: string,
  description: string
}

const CarouselCard : React.FC<CarouselCardProps> = ({ title, description, activeIndex, setActiveIndex, index }) => {
  return (
    <div 
      className={`${ index === activeIndex ? "bg-white shadow-md  border-sky-500 rounded-md" : "border-transparent"} border-l-8 cursor-pointer p-4`}
      onClick={() => setActiveIndex(index)}  
    >
      <h4 className="font-semibold mb-2 ">
        {title}
      </h4>
      <p>
        {description}
      </p>
    </div>
  )
}

export default CarouselCard