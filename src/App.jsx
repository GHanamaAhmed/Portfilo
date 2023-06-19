import { useCallback, useEffect, useRef, useState } from 'react'
import Header from './header/header'
import Home from './home/home'
import DarkMode from './header/darkMode'
import Footer from './footer/footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from './about/about'
import TechStack from './techStack/techStack'
import Projects from './projects/projects'
import Contacts2 from './contacts/contacts'
import NavBarPages from './header/navBarPages'
function App() {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const handleMenu = useCallback(() => {
    setIsMenuActive((prevValue) => !prevValue)
  }, [setIsMenuActive])
  return (
    <div className="App">
      <BrowserRouter>
        <Header onHandleMenu={handleMenu} />
        <div className='relative'>
          <Routes>
            <Route path='/Portfilo/' exact element={
              <>
                <Home />
                <Footer />
              </>
            } />
            <Route path='/Portfilo/about' element={<About />} />
            <Route path='/Portfilo/tech-stack' element={<TechStack />} />
            <Route path='/Portfilo/projects' element={<Projects />} />
            <Route path='/Portfilo/contact' element={<Contacts2 />} />
          </Routes>
          <div className='w-full'>
            <div className={`fixed w-4/6 h-full z-50 flex flex-col items-start top-0 duration-300 ${isMenuActive ? "" : "-translate-x-full"} py-3 bg-white dark:bg-darkMode md:hidden`}>
              <ul className='flex gap-2 w-full border-b pb-1'>
                <li className='hover:bg-slate-500 px-3 py-1 text-darkContent dark:text-lightContent cursor-pointer'>AR</li>
                <li className='hover:bg-slate-500 px-3 py-1 text-SolidHeadingDarkMode dark:text-lightContent cursor-pointer'>FR</li>
              </ul>
              <div className='flex gap-5 px-3 mt-5'>
                <p className='text-darkContent dark:text-lightContent cursor-pointer'>Dark mode</p>
                <DarkMode />
              </div>
              <NavBarPages />
            </div>
            <div className={`absolute w-full h-full z-10 right-0 bg-black opacity-30 top-0 ${isMenuActive ? "" : "hidden"}`}></div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
