"use client"


import Button from "../../Button"
import UIComponent from "./UIComponent"

const SeeWorkInAWholeNewWay = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-[16px] lg:px-[40px] w-full">
      <div className="text-white text-center space-y-4">
        <h3 className="font-semibold  text-[24px] md:text-[32px]">
          See work in a whole new way
        </h3>
        <p className="text-[20px]">
          View your team’s projects from every angle and bring a fresh perspective to 
          <br className="hidden lg:block" />
          the task at hand.
        </p>

        <Button 
          content="Discover all Trello views"
          color="white"
        />
      </div>

      <UIComponent 
        img="/images/TrelloBoard_Timeline_2x.webp"
        alt="timeline_img"
        title="HIT DEADLINES EVERY TIME"
        description="
          From weekly sprints to annual planning, Timeline view 
          keeps all tasks on track. Quickly get a glimpse of what’s coming down 
          the pipeline and identify any gaps that might impede your team’s progress.
        "
        link="Learn more about Timeline view"
      />

      <UIComponent 
        img="/images/TrelloBoard_Calendar_2x.webp"
        alt="calendar_img"
        title="STAY ON TOP OF TASKS"
        description="
          Start each day without any surprises. Whether scheduling an editorial calendar or staying on top 
          of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.
        "
        link="Learn more about Calendar view"
        reverse
      />
    </div>
  )
}

export default SeeWorkInAWholeNewWay