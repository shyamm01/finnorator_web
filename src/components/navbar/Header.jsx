import { NavLink } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full h-['80px'] justify-between items-center inline-flex border-b-grey-100 shadow-lg sticky top-0 z-50 bg-white-50 px-8">
      <div className="justify-start items-center gap-10 flex ">
        <img className="md:w-[200px] w-[120px]" src="./images/image-1.png" alt="logo" />
        <div className="justify-start items-start gap-12 md:flex hidden">
          <NavLink className="text-center text-grey-800 text-base font-regular font-normal font-sans" to={'/'}>Home</NavLink>
          <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/about'}>About</NavLink>
          <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/market'}>Market</NavLink>
          <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/services'}>Services</NavLink>
          <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/blog'}>Blog</NavLink>
        </div>
      </div>
      <div className="md:justify-start md:items-start items-center gap-2 w-['254px'] flex">

        <div className="px-3 py-4 w-['119px'] h-['48px'] rounded-lg justify-center items-center gap-2.5 flex">
          <NavLink to={'/signup'} className=" text-primary-500 bg-white-300 p-2 rounded-md justify-center items-center gap-2 flex"><span>Sign in</span>
            <IoIosArrowRoundForward className="text-primary-500  text-regular w-6 h-6" /></NavLink>
        </div>
        <div className="px-3 py-4 w-['119px'] h-['48px'] bg-sky-500 rounded-lg justify-center items-center gap-2.5 md:flex hidden">
          <NavLink to={'/signup'} className="text-white-100 bg-primary-500 p-2 rounded-md">Get Started</NavLink>
        </div>
        <img src="./images/bar.png" className="w-[35px] md:hidden" alt="" />
      </div>
    </div>


  )
}

export default Header