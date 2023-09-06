"use client"

import Button from "../../Button";

const GetStartedTithTrelloToday = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[40px] w-full text-center">
      <h3 className="font-medium text-white text-[24px] md:text-[32px]">
        Get started with Trello today
      </h3>
      <div className="flex gap-[16px] w-full justify-center items-center my-3">
        <input 
          type="email"
          placeholder="Email"
          className="outline-none hidden md:block h-fit p-[12px] rounded-md w-[350px]  duration-300 focus:ring-2 focus:ring-white ring-offset-1"
        />
        <Button 
          content="Sign up - it's free!"
          color="blue-600"
          widthFull
        />
      </div>
    </div>
  )
}

export default GetStartedTithTrelloToday;