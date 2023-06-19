import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
const path = [
    { link: "/Portfilo/", name: "Home" },
    { link: "/Portfilo/about", name: "About" },
    { link: "/Portfilo/tech-stack", name: "Tech Stack" },
    { link: "/Portfilo/projects", name: "Projects" },
    { link: "/Portfilo/contact", name: "contact" }
]
export default function NavBarPages() {
    const location = useLocation()
    return (
        <ul className='flex justify-between md:flex-row flex-col items-start md:items-center my-4 md:my-0 px-3 md:px-0 w-fit gap-4 md:gap-10'>
            {path.map((e, i) => {
                if (location.pathname.startsWith(e.link)) {
                    if (location.pathname.startsWith("/Portfilo/") && e.link != location.pathname) {
                        return <li key={i} className='text-darkContent dark:text-lightContent cursor-pointer'><Link to={e.link}>{e.name}</Link></li>
                    }
                    return <li key={i} className='text-darkMode dark:text-slate-400 cursor-pointer'><Link to={e.link}>{e.name}</Link></li>
                }
                return <li key={i} className='text-darkContent dark:text-lightContent cursor-pointer'><Link to={e.link}>{e.name}</Link></li>
            })}
        </ul>
    )
}