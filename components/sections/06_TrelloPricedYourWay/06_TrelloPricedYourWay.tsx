"use client"

import Button from "../../Button";
import { planCard } from "./constants";
import PlanCard from "./PlanCard";

const TrelloPricedYourWay = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[40px] w-full">
      <div className="text-center space-y-4">
        <h3 className="font-semibold  text-[24px] md:text-[32px]">
          Trello priced your way
        </h3>
        <p className="text-[20px]">
          Trusted by millions, Trello powers teams all around the world.
        </p>

        <Button 
          content="Compare plans"
          color="blue-600"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 w-full my-12">
        {planCard.map((item) => (
          <PlanCard
            key={item.category} 
            category={item.category}
            price={item.price}
            title={item.title}
            description={item.description}
            buttonContent={item.buttonContent}
          /> 
        ))}
      </div>
      
      
    </div>
  )
}

export default TrelloPricedYourWay;