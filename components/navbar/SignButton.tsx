"use client"

import  Link  from 'next/link';

interface SignButtonProps  {
  mobile? : boolean
}

const SignButton: React.FC<SignButtonProps> = ({ mobile }) => {
  return (
      <div className={`flex gap-3 ${mobile && " flex-col-reverse w-full"}`}>
      <Link 
        href="/"
        className={`text-[16px] text-center py-[12px] ${mobile ? "w-full border border-blue-600" : "w-[50px]"}`}
      >
        Log in
      </Link>
      <Link
        href="/"
        className={`
          text-[16px]  text-center text-white bg-blue-600  py-[12px] transform duration-300 hover:bg-blue-800
          ${mobile ? "w-full" : "w-[180px]"}
          `}
      >
        Get Trello for free
      </Link>
    </div>
  )
}

export default SignButton