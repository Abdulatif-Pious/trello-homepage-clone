"use client"

interface FooterCardProps {
  title : string
  description : string
}

const FooterCard : React.FC<FooterCardProps>  = ({ title, description}) => {
  return (
    <div className="text-white py-4 lg:p-4 lg:w-1/4  space-y-4 cursor-pointer border-y border-y-gray-500 lg:border-none hover:underline lg:hover:no-underline lg:hover:bg-white/30">
      <h4>{title}</h4>
      <p className="text-xs">{description}</p>
    </div>
  )
}

export default FooterCard