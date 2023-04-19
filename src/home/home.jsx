import { memo, useEffect, useState } from "react"
import Tech from "./tech/tech"
import Project from "./project/project"
import Contacts from "./contacts/contacts"

export default memo(function Home() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidthScreen(() => window.innerWidth)
    })
  }, [])
  return (
    <div>
      <div className='flex flex-col items-center w-full gap-3 py-24 md:py-28 lg:py-36 md:flex-row-reverse md:justify-around lg:px-28'>
        <img src="./img/50353683 1.png" alt="" width={widthScreen <= 768 ? 200 : 250} />
        <div className="w-2/3 md:w-fit text-justify text-solidHeading text-xl font-bold md:text-4xl">
          <p className="inline md:block dark:text-textLight">Hi 👋,</p>
          <p className="inline md:block dark:text-textLight">My name is </p>
          <p className="inline md:block text-gradiant">Ahmed GH </p>
          <p className="inline md:block dark:text-textLight">I build things for web</p>
        </div>
      </div>
      <Tech />
      <Project widthContainer={"w-10/12"} textAlign={"items-center"}/>
      <Contacts/>
    </div>
  )
})
