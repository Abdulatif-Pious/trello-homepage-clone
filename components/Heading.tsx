"use client"

type HeadingProps = {
  topDescription?: string,
  title: string,
  description?: string,
  descLink? : string,
}

const Heading: React.FC<HeadingProps> = ({ topDescription, title,  description, descLink }) => {
  return (
    <div className="space-y-4 lg:w-1/2">
      {topDescription && (
        <h5 className="text-[16px] font-semibold tracking-[1px]">{topDescription}</h5>
      )}
      <h3 className="font-semibold tracking-[1.5px] text-[24px] md:text-[32px]">
        {title}
      </h3>
      {description && (
        <p className="font-normal text-[20px]">
          {description} 
          
          {descLink && (
            <span className="font-medium text-[20px] underline text-blue-600 cursor-pointer">
              {descLink}
            </span>
          )}
        </p>
      )}
    </div>
  )
}

export default Heading