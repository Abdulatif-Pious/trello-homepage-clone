
interface ButtonProps {
  content: string,
  color: string,
  category?: string,
  widthFull? : boolean
}

const Button : React.FC<ButtonProps> = ({ content, color, category, widthFull }) => {
  return (
    <button 
      className={`
        font-medium text-[16px] text-neutral-700  rounded-md  p-[12px] my-4 cursor-pointer  z-0  transform duration-500 focus:ring
        ${color === 'violet-300' && "border border-violet-300 hover:bg-violet-300/50 ring-violet-300"} 
        ${color === "yellow-300" && "border border-yellow-300 hover:bg-yellow-300/5 ring-yellow-300"}
        ${color === "blue-600" && "text-white bg-blue-600 hover:bg-blue-700 ring-blue-300"}
        ${color === "blue-inline-600" && " my-0 border border-blue-600 hover:bg-blue-600/30 ring-blue-300"}
        ${color === "white" && "bg-white hover:bg-white/80 ring-blue-300"}
        ${color === "cyan-400" &&  "border border-cyan-400 hover:bg-cyan-400/20 ring-cyan-300"}
        ${category === "PREMIUM" && "bg-cyan-400/20 hover:bg-white"}
        ${widthFull && "w-full max-w-[600px] md:w-fit"}
      `}
      type='button'
    >
      {content}
    </button>
  )
}



export default Button