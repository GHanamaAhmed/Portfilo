import { memo, useEffect, useState } from 'react'
import DarkMode from './darkMode'
import Contact from './contact'
import NavBarPages from './navBarPages'
import { Avatar, Dropdown } from "flowbite-react"
import { useAuth0 } from "@auth0/auth0-react"
export default memo(function Header({ onHandleMenu }) {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [positionScroll, setPositinScroll] = useState(window.screenY)
    const [headerPosition, setHeaderPosition] = useState("")
    const { isAuthenticated, loginWithPopup, logout, user } = useAuth0()
    useEffect(() => {
        const handlePosition = () => {
            if (positionScroll < window.scrollY) {
                if (isMenuActive == false) {
                    setHeaderPosition("-translate-y-full")
                }
            } else {
                setHeaderPosition("")
            }
            setPositinScroll(window.scrollY)
        }
        window.addEventListener('scroll', handlePosition)
        return () => window.removeEventListener("scroll", () => { })
    }, [positionScroll])
    const handleMenu = () => {
        setIsMenuActive(prevValue => !prevValue);
        onHandleMenu();
    }

    return (
        <header className={`w-full fixed bg- z-50 bg-white ${headerPosition} duration-500 dark:bg-darkMode flex items-center justify-around py-2`}>
            <img src="./img/logo 1.svg" alt="icon" />
            <div className='flex flex-col items-center gap-1 cursor-pointer md:hidden' onClick={handleMenu}>
                <div className={`h-1 w-6 rounded-lg bg-darkMode dark:bg-lightContent duration-300 ${isMenuActive ? "-translate-x-4" : ""}`}></div>
                <div className={`h-1 w-6 rounded-lg bg-darkMode dark:bg-lightContent duration-300 ${isMenuActive ? "-translate-x-2" : ""}`}></div>
                <div className='h-1 w-6 rounded-lg bg-darkMode dark:bg-lightContent'></div>
            </div>
            <div className='md:flex justify-between items-center gap-10 hidden'>
                <NavBarPages />
                <ul className='flex justify-between items-center gap-3'>
                    <Contact />
                    <li className='ml-3'>
                        <DarkMode />
                    </li>
                </ul>
                <Dropdown label={<Avatar img={isAuthenticated && user.picture} rounded alt="avatar" />} inline={true}>
                    {isAuthenticated &&
                        <>
                            <Dropdown.Header>
                                <span className="block text-sm">
                                    {user.name}
                                </span>
                                <span className="block truncate text-sm font-medium">
                                    {user.email}
                                </span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={(e) => { logout(); console.log(user); }}>
                                Sign out
                            </Dropdown.Item>
                        </>}
                    {!isAuthenticated &&
                        <Dropdown.Item onClick={() => { loginWithPopup() }}>
                            Sign in
                        </Dropdown.Item>
                    }
                </Dropdown>
            </div>
        </header>
    )
})