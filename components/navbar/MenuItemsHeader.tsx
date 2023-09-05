"use client"

const MenuItemsHeader = ({ title  } : { title: string }) => {
  return (
    <h2 className="text-center lg:text-sm font-semibold tracking-[0.04rem] text-neutral-700 px-2">
      {title}
    </h2>
  )
}

export default MenuItemsHeader