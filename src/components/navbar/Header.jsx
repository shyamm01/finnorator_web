import { NavLink } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full h-['80px'] justify-between items-center inline-flex border-b-grey-100 shadow-sm">
      <div className="justify-start items-center gap-10 flex ">
        <img className="w-[100px] h-[22px]" src="./images/image-1.png" alt="logo" />
        <div className="justify-start items-start gap-12 flex">
          <NavLink className="text-center text-grey-800 text-base font-regular font-normal font-sans" to={'/'}>Home</NavLink>
          <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/about'}>About</NavLink>
          <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/market'}>Market</NavLink>
          <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/services'}>Services</NavLink>
          <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/blog'}>Blog</NavLink>
        </div>
      </div>
      <div className="justify-start items-start gap-2 w-['254px'] flex">
        
        <div className="px-3 py-4 w-['119px'] h-['48px'] rounded-lg justify-center items-center gap-2.5 flex">
          <NavLink to={'/signup'} className=" text-primary-500 p-2 rounded-md justify-center items-center gap-2 flex"><span>Sign in</span>
          <IoIosArrowRoundForward className="text-primary-500 text-regular w-6 h-6"/></NavLink>
        </div>
        <div className="px-3 py-4 w-['119px'] h-['48px'] bg-sky-500 rounded-lg justify-center items-center gap-2.5 flex">
          <NavLink to={'/signup'} className="text-white-100 bg-primary-500 p-2 rounded-md">Get Started</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header