import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className=" bg-grey-900 px-5 pt-10">
        <div className="grid md:grid-cols-12 gap-5 pb-28">
          <div className="md:col-span-2 py-4 px-5">
            <img src="./images/image-1.png" className="w-[150px]" alt="" />
          </div>
          <div className="md:col-span-2 py-4 px-5">
            <ul className=" list-none">
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  About us
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  Careers
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  Term & Conditions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 py-4 px-5">
            <ul className=" list-none">
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  Certifications
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  ISO
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  SGR
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 py-4 px-5">
            <ul className=" list-none">
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  For Marketplaces
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 py-4 px-5">
            <ul className=" list-none">
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  Notification
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  Transportation
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 py-4 px-5">
            <ul className=" list-none">
              <li className="mb-4">
                <NavLink to='/' className='text-white-50 text-base'>
                  Work
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-5 border-b-2 border-white-50">
          <div className="md:col-span-2 py-4 px-5">
            <div className=" text-white-50 text-xsm mb-2">Contact</div>
            <a className=" text-white-50 text-sm" href="tel:+18919891191">+1 891 989-11-91</a>
          </div>
          <div className="md:col-span-4 py-4 px-5">
            <div className=" text-white-50 text-xsm mb-2">Email</div>
            <a className=" text-white-50 text-sm" href="mail:info@logoipsum.com">info@logoipsum.com</a>
          </div>
          <div className="md:col-span-3 py-4 px-5">
            <div className=" text-white-50 text-xsm mb-2">Address</div>
            <a className=" text-white-50 text-sm" href="mail:info@logoipsum.com">2972 Westheimer Rd. Santa Ana, Illinois 85486 </a>
          </div>
          <div className="md:col-span-3 py-4 px-5 ms-auto">
            <div className="bg-sky-500 rounded-full gap-2.5 w-44 bg-primary-500">
              <NavLink to={'/signup'} className="text-white-100 px-3 py-4  rounded-md justify-center items-center gap-2 flex">Sign Up
              </NavLink>
            </div>
          </div>
        </div>
        <div className="flex justify-between py-5">
          <span className=" text-white-50 text-xsm">© 2023 — Copyright</span>
          <span className=" text-white-50 text-xsm">Privacy</span>
        </div>
      </footer>
    </>
  )
}

export default Footer