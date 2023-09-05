"use client"

const MenuItemsHeader = ({ title  } : { title: string }) => {
  return (
    <h2 className="text-center lg:text-[14px] font-semibold tracking-[0.04rem] text-neutral-700 px-[8px]">
      {title}
    </h2>
  )
}

export default MenuItemsHeader