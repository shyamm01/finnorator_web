import { NavLink } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";

const Header = () => {
  return (
    // <div className="w-full h-['80px'] justify-between items-center inline-flex border-b-grey-100 shadow-lg sticky top-0 z-50 bg-white-50 px-8">
    //   <div className="justify-start items-center gap-10 flex ">
    //     <img className="md:w-[200px] w-[120px]" src="./images/image-1.png" alt="logo" />
    //     <div className="justify-start items-start gap-12 md:flex hidden">
    //       <NavLink className="text-center text-grey-800 text-base font-regular font-normal font-sans" to={'/'}>Home</NavLink>
    //       <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/about'}>About</NavLink>
    //       <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/market'}>Market</NavLink>
    //       <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/services'}>Services</NavLink>
    //       <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/blog'}>Blog</NavLink>
    //     </div>
    //   </div>
    //   <div className="md:justify-start md:items-start items-center gap-2 w-['254px'] flex">

    //     <div className="px-3 py-4 w-['119px'] h-['48px'] rounded-lg justify-center items-center gap-2.5 flex">
    //       <NavLink to={'/login'} className=" text-primary-500 bg-white-300 p-2 rounded-md justify-center items-center gap-2 flex"><span>Sign in</span>
    //         <IoIosArrowRoundForward className="text-primary-500  text-regular w-6 h-6" /></NavLink>
    //     </div>
    //     <div className="px-3 py-4 w-['119px'] h-['48px'] bg-sky-500 rounded-lg justify-center items-center gap-2.5 md:flex hidden">
    //       <NavLink to={'/signup'} className="text-white-100 bg-primary-500 p-2 rounded-md">Get Started</NavLink>
    //     </div>
    //     <img src="./images/bar.png" className="w-[35px] md:hidden" alt="" />
    //   </div>
    // </div>

    <header className="sticky top-0 z-50 bg-white-50">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 shadow-lg ">
        <div className="flex flex-wrap items-center me-auto">
          <a href="https://flowbite.com" className="flex items-center">
            <img src="./images/image-1.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </a>
          <div className="flex items-center ms-auto lg:order-2">
            <div className="px-3 py-4 w-['119px'] h-['48px'] rounded-lg justify-center items-center gap-2.5 flex">
              <NavLink to={'/login'} className=" text-primary-500 bg-white-300 p-2 rounded-md justify-center items-center gap-2 flex"><span>Sign in</span>
                <IoIosArrowRoundForward className="text-primary-500  text-regular w-6 h-6" /></NavLink>
            </div>
            <div className="px-3 py-4 w-['119px'] h-['48px'] bg-sky-500 rounded-lg justify-center items-center gap-2.5 md:flex hidden">
              <NavLink to={'/signup'} className="text-white-100 bg-primary-500 p-2 rounded-md">Get Started</NavLink>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <img src="./images/bar.png" className="w-[40px]" alt="" />
            </button>
          </div>
          <div className="hidden justify-between items-center w-full lg:ms-10 lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink className="text-center text-grey-800 text-base font-regular font-normal font-sans" to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/market'}>Market</NavLink>
              </li>
              <li>
                <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/services'}>Services</NavLink>
              </li>
              <li>
                <NavLink className="text-center text-grey-800 text-base font-normal font-sans" to={'/blog'}>Blog</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header