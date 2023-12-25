import { Link } from "react-router-dom"


const FooterSingle = () => {

const footerItems = [
    {
        item:'About',
        path:'/About'
    },
    {
        item:'Help Center',
        path:'/Help-Center'
    },
    {
        item:'Terms of Service',
        path:'/Terms-of-Service'
    },
    {
        item:'Privacy Policy',
        path:'/Privacy-Policy'
    },
    {
        item:'Cookie Policy',
        path:'/Cookie-Policy'
    },
    {
        item:'Accessibility',
        path:'/Accessibility'
    },
    {
        item:'careers',
        path:'/careers'
    },
    {
        item:'Marketing',
        path:'/Marketing'
    },
    {
        item:'Developers',
        path:'/Developers'
    },
    {
        item:'Settings',
        path:'/Settings'
    },
]

  return (
    <div className="w-full flex flex-wrap gap-x-1 py-8 justify-around items-center ">
        {footerItems.map((item, index)=><Link className="no-underline text-white-900 text-nowrap" key={`${item.path}${index}`}>{item.item}</Link>)}
    </div>
  )
}

export default FooterSingle