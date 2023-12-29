import { NavLink } from "react-router-dom"
import { IoIosArrowRoundForward } from "react-icons/io";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import AccordianLists from "./Accordian";

const LandingPage = () => {

  const steps = [
    {
      id: 1,
      heading: 'Sign Up',
      pera: 'Easily register and onboard with one time KYC',
      imgURl: './images/dashboard2.png'
    },
    {
      id: 2,
      heading: 'Enter Details',
      pera: 'Enter your goals, time period and a couple of other fields that will help us pick the right mutual fund scheme for you.',
      imgURl: './images/dashboard2.png'
    },
    {
      id: 3,
      heading: 'Let us Pick',
      pera: 'Read the detailed analysis of the scheme that we pick for you and get everything you need to know about it before giving a go-ahead. ',
      imgURl: './images/dashboard2.png'
    },
    {
      id: 4,
      heading: 'Invest & Track',
      pera: 'Once you feel it’s right for you, hit that button and make that investment. From them on, our dashboard will be your go-to place to keep a track of it.',
      imgURl: './images/dashboard2.png'
    }
  ]

  const choose = [
    {
      id: 1,
      heading: 'Save Time & Efforts',
      pera: 'Spend less time and money on deciding and managing your investments with our AI-based scheme suggestor',
      iconURL: './images/icon/watch.png'
    },
    {
      id: 2,
      heading: 'Helps You Not Lose Track',
      pera: 'Keeps you informed and updated about your  investments, timelines, current market tend, expected returns.',
      iconURL: './images/icon/location.png'
    },
    {
      id: 3,
      heading: 'Completely Safe',
      pera: 'With 128-bit encryption, we assure complete user privacy and safety of all your  information and important documents.',
      iconURL: './images/icon/shield.png'
    },
    {
      id: 4,
      heading: 'Financial Awareness',
      pera: 'Finorator helps you understand your finances better and helps you develop best practices to manage them.',
      iconURL: './images/icon/export.png'
    }
  ]
  return (
    <>
      <div className="relative isolate p-4 sm:px-8 px-4">
        <section className="mx-auto flex w-full py-4 rounded-xl bg-primary-50">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto sm:gap-8 xl:gap-0 sm:py-16 sm:grid-cols-12">
            <div className="mr-auto place-self-center sm:col-span-5 order-2 sm:order-1">
              <h1 className="tracking-tight text-primary-900 drop-shadow-md stroke-1 font-black text-h2 lg:text-h1 sm:text-h3 shadow-grey-900">Get access to</h1>
              <h3 className='text-h5 sm:text-h5 lg:text-h4 font-bold my-7'>AI-Driven Personalised <br /> suggestions on <br /> mutual fund schemes</h3>
              <div className="bg-sky-500 rounded-lg gap-2.5 w-44 bg-primary-500">
                <NavLink to={'/signup'} className="text-white-100 px-3 py-4  rounded-md justify-center items-center gap-2 flex">Get Started
                  <IoIosArrowRoundForward className="text-white text-regular w-6 h-6" />
                </NavLink>
              </div>
            </div>
            <div className="lg:mt-0 sm:col-span-7 order-1 sm:order-2">
              <img src="./images/hero_img.svg" alt="mockup" />
            </div>
          </div>
        </section>
      </div>
      <div className="relative">
        <h4 className="text-center text-h6 px-4 sm:text-h5 font-bold">Let’s ease up the decision making process for your investments</h4>
        <h3 className="text-center text-h5 px-4 sm:text-h3 font-bold sm:mt-44 mt-20">Find the scheme that fits your <br /> needs perfectly</h3>
        <img src="./images/bg.png" className="absolute top-10 left-2/4 w-2/4 -z-10" style={{ transform: 'translatex(-50%)' }} alt="" />
        <div className="grid md:grid-cols-12 max-w-screen-xl px-4 py-8 mx-auto sm:mt-7 mt-2">
          <div className="md:col-span-6">
            <ul className="">
              <li className="sm:text-h6 text-base font-medium mb-4 ">Confused about where to Invest? Too many options  to choose from?</li>
              <li className="sm:text-h6 text-base font-medium mb-4 ">Don’t worry!</li>
              <li className="sm:text-h6 text-base font-medium mb-4 ">We will pick out personalised mutual fund schemes based on your needs that align with your wealth goals.</li>
            </ul>
          </div>
          <div className="md:col-span-6 mt-4 sm:mt-0">
            <img src="./images/clients.png" className="w-full" alt="" />
            <div className="bg-primary-50 p-4 mt-6 rounded-2xl">
              <div className="bg-sky-500 rounded-lg gap-2.5 w-44 bg-primary-500">
                <NavLink to={'/signup'} className="text-white-100 sm:px-3 sm:py-4 px-2 py-3 rounded-md justify-center items-center gap-2 flex">Sign Up
                  <IoIosArrowRoundForward className="text-white text-regular w-6 h-6" />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative sm:mt-16 lg:mt-36 p-4 px-8 ">
        <h4 className="text-center text-h5 font-bold mb-6">What will you get once you sign up with us ?</h4>
        <div className="mx-auto w-full py-2 rounded-xl bg-primary-50">
          <h3 className="text-center lg:text-h3 sm:text-h4 text-h5 w-full font-bold mt-4 mx-auto">An informative & easy-to <br /> understand Dashboard</h3>
          <div className="grid md:grid-cols-12 max-w-screen-xl px-4 pt-8 pb-4 mx-auto mt-7">
            <div className="md:col-span-6">
              <img src="./images/dashboard.png" className="w-full" alt="" />
            </div>
            <div className="md:col-span-6 md:ms-11 md:me-16 mt-10">
              <p className=" font-bold text-h6">Get to know about your scheme,  expected returns,  current market trends and other important details</p>
              <div className="bg-sky-500 rounded-lg gap-2.5 w-full bg-primary-500 border-s-4 border-s-primary-900 my-5">
                <NavLink to={'/signup'} className="text-white-100 lg:px-5 lg:py-6 px-3 py-2 text-h6 font-bold  rounded-md justify-start items-start gap-2 flex">
                  Comparison of different schemes
                </NavLink>
              </div>
              <p className="text-h6 font-normal   mb-10">Details of your invested sum</p>
              <p className="text-h6 font-normal">Current market status</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative my-24 mx-8 bg-[url('./images/bg2.png')] bg-left bg-cover">
        <div className="grid md:grid-cols-12 max-w-screen-xl px-4 pt-8 pb-4 mx-auto mt-7">
          <div className="md:col-span-6 md:ms-11 md:me-16 my-auto">
            <h3 className="md:text-h3 text-h4 font-bold mb-10">With 128-bit encryption <br />
              FINORATOR IS SAFE</h3>
            <div className="bg-sky-500 rounded-lg gap-2.5 w-44 bg-primary-500">
              <NavLink to={'/signup'} className="text-white-100 px-3 py-4  rounded-md justify-center items-center gap-2 flex">Sign Up
                <IoIosArrowRoundForward className="text-white text-regular w-6 h-6" />
              </NavLink>
            </div>
          </div>
          <div className="md:col-span-6">
            <img src="./images/encry.png" className="w-full" alt="" />
          </div>
        </div>
      </div>

      <div className="relative my-24 mx-8">
        <h2 className="text-center md:text-h2 text-h4 w-full font-bold mt-4 mb-8 mx-auto">How finorator works</h2>
        {steps.map((curElem) =>
          <div className="grid md:grid-cols-12 max-w-screen-xl px-4 pt-4 mx-auto" key={curElem.id}>
            <div className="md:col-span-6 md:ms-11 md:me-16 my-auto">
              <span className="lg:text-h5 text-h6 font-bold">Step {curElem.id}</span>
              <h3 className="lg:text-h3 text-h4 font-bold my-3">{curElem.heading}</h3>
              <p className=" lg:text-regular text-base">{curElem.pera}</p>
            </div>
            <div className="md:col-span-6">
              <img src={curElem.imgURl} className="w-full" alt="" />
            </div>
          </div>
        )}
      </div>

      <div className="relative mt-32 mb-20 mx-8">
        <h2 className="text-center md:text-h2 text-h4 w-full font-bold mt-4 mb-8 mx-auto">Why choose finorator</h2>
        <div className="grid md:grid-cols-12 gap-5 md:px-4 pt-4 mx-auto">
          {choose.map((curElem) =>
            <div className="md:col-span-6 lg:col-span-3 bg-white-50 py-8 px-5 my-auto shadow-xl text-center rounded-xl" key={curElem.id}>
              <img src={curElem.iconURL} className=" w-[100px] mx-auto" alt="" />
              <div className=" md:text-h5 text-h6 font-bold my-5 px-14">{curElem.heading}</div>
              <p className=" md:text-regular text-base">{curElem.pera}</p>
            </div>
          )}
        </div>
      </div>

      <div className="relative md:mx-8 pb-8 md:pb-56">
        <div className="grid lg:grid-cols-12 gap-5 md:p-10 p-4 rounded-xl mx-auto bg-secondary-50">
          <div className="lg:col-span-7 rounded-xl">
            <div className=" text-h5 md:text-h3 font-bold">Finorator aims to empower its user with the right information about their investments.</div>
          </div>
          <div className="lg:col-span-5 md:py-8 md:px-5 my-auto gap-5 rounded-xl md:flex">
            <div className="bg-sky-500 rounded-lg gap-2.5 bg-primary-500 mb-5 md:md-0">
              <NavLink to={'/signup'} className="text-white-100 px-3 py-4  rounded-md justify-center items-center gap-2 flex">Know more about us
              </NavLink>
            </div>
            <div className="bg-sky-500 rounded-lg gap-2.5  bg-white-50 border-2 border-primary-500 mb-5 md:md-0">
              <NavLink to={'/signup'} className="text-primary-500 px-3 py-4  rounded-md justify-center items-center gap-2 flex">Contact Us
              </NavLink>
            </div>
          </div>
        </div>
        <img src="./images/bg3.png" className="absolute bottom-0 right-0 w-2/4 -z-10 hidden md:flex" alt="" />
      </div>

      <div className="relative md:mx-8">
        <div className="grid md:grid-cols-12 gap-5 md:p-10 p-4 rounded-xl mx-auto bg-primary-50">
          <div className="md:col-span-6 lg:col-span-3 my-auto">
            <div className=" text-h3 font-bold my-5">Explore & Learn</div>
            <p className=" text-regular my-5">Some must-read articles to help you manage finances better.</p>
            <div className="bg-sky-500 rounded-lg gap-2.5 w-44 bg-primary-500">
              <NavLink to={'/signup'} className="text-white-100 px-3 py-4  rounded-md justify-center items-center gap-2 flex">Sign Up
                <IoIosArrowRoundForward className="text-white text-regular w-6 h-6" />
              </NavLink>
            </div>
          </div>
          <div className="md:col-span-6 lg:col-span-3 bg-white-50 my-auto shadow-xl rounded-xl">
            <img src='./images/image-2.png' className=" w-full rounded-t-xl" alt="" />
            <div className="px-4 py-4">
              <div className="flex items-center">
                <span className=" text-sm text-secondary-500 font-medium">Category</span>
                <span className=" text-xsm p-2 rounded-sm  bg-white-500 ms-3">3 min read</span>
              </div>
              <div className=" text-h5 font-bold my-2 text-primary-900">Sub-Heading</div>
              <p className=" text-regular pb-3 border-b-2 border-white-600">Lorem ipsum dolor sit amet consectetur. Nunc convallis blandit eget in nisi sed ipsum ultricies. In...</p>
              <div className="flex items-center pt-3">
                <img src="./images/circle.png" className="w-[40px] h-[40px]" alt="" />
                <div className="ms-3">
                  <div className="text-regular text-primary-500">Finorator</div>
                  <span className=" text-xsm">Posted just now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-3 bg-white-50 my-auto shadow-xl rounded-xl">
            <img src='./images/image-2.png' className=" w-full rounded-t-xl" alt="" />
            <div className="px-4 py-4">
              <div className="flex items-center">
                <span className=" text-sm text-secondary-500 font-medium">Category</span>
                <span className=" text-xsm p-2 rounded-sm  bg-white-500 ms-3">3 min read</span>
              </div>
              <div className=" text-h5 font-bold my-2 text-primary-900">Sub-Heading</div>
              <p className=" text-regular pb-3 border-b-2 border-white-600">Lorem ipsum dolor sit amet consectetur. Nunc convallis blandit eget in nisi sed ipsum ultricies. In...</p>
              <div className="flex items-center pt-3">
                <img src="./images/circle.png" className="w-[40px] h-[40px]" alt="" />
                <div className="ms-3">
                  <div className="text-regular text-primary-500">Finorator</div>
                  <span className=" text-xsm">Posted just now</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-3 bg-white-50 my-auto shadow-xl rounded-xl">
            <img src='./images/image-2.png' className=" w-full rounded-t-xl" alt="" />
            <div className="px-4 py-4">
              <div className="flex items-center">
                <span className=" text-sm text-secondary-500 font-medium">Category</span>
                <span className=" text-xsm p-2 rounded-sm  bg-white-500 ms-3">3 min read</span>
              </div>
              <div className=" text-h5 font-bold my-2 text-primary-900">Sub-Heading</div>
              <p className=" text-regular pb-3 border-b-2 border-white-600">Lorem ipsum dolor sit amet consectetur. Nunc convallis blandit eget in nisi sed ipsum ultricies. In...</p>
              <div className="flex items-center pt-3">
                <img src="./images/circle.png" className="w-[40px] h-[40px]" alt="" />
                <div className="ms-3">
                  <div className="text-regular text-primary-500">Finorator</div>
                  <span className=" text-xsm">Posted just now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative md:py-44 py-10 px-5 md:px-0">
        <h2 className="text-center text-h2 w-full font-bold mx-auto">What our customers have to say...</h2>
        <div className="grid md:grid-cols-12 gap-5 md:px-4 pt-8 mx-auto">
          <div className="md:col-span-3 bg-primary-50 py-4 px-5  border-2 border-primary-500 rounded-xl">
            <div className="flex items-center">
              <img src='./images/testimonials.png' className=" w-[64px]" alt="" />
              <div className=" text-regular text-primary-500 font-bold ms-4">Full Name</div>
            </div>
            <p className=" text-base mt-3">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="md:col-span-3 bg-primary-50 py-4 px-5  border-2 border-primary-500 rounded-xl">
            <div className="flex items-center">
              <img src='./images/testimonials.png' className=" w-[64px]" alt="" />
              <div className=" text-regular text-primary-500 font-bold ms-4">Full Name</div>
            </div>
            <p className=" text-base mt-3">Lorem ipsum dolor sit amet consectetur. Etiam pretium egestas massa elementum sollicitudin ac.</p>
          </div>
          <div className="md:col-span-3 bg-primary-50 py-4 px-5  border-2 border-primary-500 rounded-xl">
            <div className="flex items-center">
              <img src='./images/testimonials.png' className=" w-[64px]" alt="" />
              <div className=" text-regular text-primary-500 font-bold ms-4">Full Name</div>
            </div>
            <p className=" text-base mt-3">Lorem ipsum dolor sit amet consectetur. A sed diam vel tincidunt consequat nibh faucibus eleifend. Scelerisque odio faucibus odio vivamus enim. Ipsum tortor porttitor in sit ullamcorper integer facilisi odio. In in a est turpis.</p>
          </div>
          <div className="md:col-span-3 bg-primary-50 py-4 px-5  border-2 border-primary-500 rounded-xl">
            <div className="flex items-center">
              <img src='./images/testimonials.png' className=" w-[64px]" alt="" />
              <div className=" text-regular text-primary-500 font-bold ms-4">Full Name</div>
            </div>
            <p className=" text-base mt-3">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <img src="./images/bg5.png" className="absolute left-0 bottom-0 w-1/4 -z-10 hidden md:block" alt="" />
        <img src="./images/bg4.png" className="absolute right-0 bottom-0 w-1/4 -z-10 hidden md:block" alt="" />
      </div>

      {/* --------------------------accordiain-------------------------------------- */}

      <div className="relative md:py-24 py-10 max-w-screen-xl mx-auto px-5 md:px-0">
        <h2 className="text-center text-h3 w-full font-bold mx-auto mb-10">Still have questions? <br />
          Check out our FAQs</h2>

        {/* <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span>What is Flowbite?</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
              <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
              <span>Is there a Figma file available?</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
              <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-bs-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
              <span>What are the differences between Flowbite and Tailwind UI?</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
              <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
              <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
              </ul>
            </div>
          </div>
        </div> */}
        <div>
      <AccordianLists/>
      
    </div>

      </div>


      {/* -------------------------------------------ready to get ready----------------------------- */}

      <div className="relative md:py-32 py-10 max-w-screen-xl mx-auto text-center bg-[url('./images/bg.png')] bg-cover bg-center">
        <h1 className=" text-h1 font-bold text-primary-900">Ready to <br /> Get Ready?</h1>
        <div className="bg-sky-500 rounded-lg gap-2.5 w-44 bg-primary-500 mx-auto mt-4">
          <NavLink to={'/signup'} className="text-white-100 px-3 py-4  rounded-md justify-center items-center gap-2 flex">Get Started
            <IoIosArrowRoundForward className="text-white text-regular w-6 h-6" />
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default LandingPage