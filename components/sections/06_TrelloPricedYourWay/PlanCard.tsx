"use client"

import React from "react"
import Button from "../../Button"

interface PlanCardProps {
  category: string
  price: number
  title: string
  description: string
  buttonContent: string
}

const PlanCard : React.FC<PlanCardProps> = ({ category, price, title, description, buttonContent }) => {
  return (
    <div className={`
      flex flex-col justify-between border p-4 w-full lg:w-1/4
      ${category === "Premium" ? "border-cyan-500"  : "border-gray-300"} 
    `}>
      
      <div className=" space-y-6">
        <h4 className="uppercase ">{category}</h4>
        <div>
          <p className="mb-2">
            $ {" "}
            <span className="font-semibold text-5xl">{price}</span>{" "}
            USD
          </p>
          <p className="text-xs">{title}</p>
        </div>
        <p>{description}</p>
      </div>

      <div className="mt-10 mb-5">
        <Button 
          content={buttonContent}
          color="cyan-400"
          category={category}
        />

        <p className={`text-blue-600 underline cursor-pointer ${category === "Free" && "invisible"}`}>
          Learn more about {" "}
        <span className="capitalize">{category}</span>
        </p>
      </div>

    </div>
  )
}

export default PlanCard