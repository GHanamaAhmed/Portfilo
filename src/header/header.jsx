import { memo, useEffect, useLayoutEffect, useState } from 'react'
import DarkMode from './darkMode'
import Contact from './contact'
import NavBarPages from './navBarPages'
export default memo(function Header({ onHandleMenu }) {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [positionScroll, setPositinScroll] = useState(window.screenY)
    const [headerPosition, setHeaderPosition] = useState("")
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
                <NavBarPages/>
                <ul className='flex justify-between items-center gap-3'>
                    <Contact/>
                    {/* <li><img src="./img/Vector.svg" alt="" width={30} /></li>
                    <li> <img src="./img/ant-design_twitter-circle-filled.svg" alt="" width={30} /></li>
                    <li> <img src="./img/entypo-social_linkedin-with-circle.svg" alt="" width={30} /></li> */}
                    <li className='ml-3'>
                        <DarkMode />
                    </li>
                </ul>
            </div>
        </header>
    )
})