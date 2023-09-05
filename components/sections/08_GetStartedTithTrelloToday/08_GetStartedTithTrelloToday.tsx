"use client"

import Button from "../../Button";

const GetStartedTithTrelloToday = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 lg:px-10 w-full text-center">
      <h3 className="font-medium text-white text-2xl md:text-4xl">
        Get started with Trello today
      </h3>
      <div className="flex gap-4 w-full justify-center items-center my-3">
        <input 
          type="email"
          placeholder="Email"
          className="outline-none hidden md:block h-fit p-3 rounded-md w-[350px]  duration-300 focus:ring-2 focus:ring-white ring-offset-1"
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