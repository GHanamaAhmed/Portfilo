import React, { memo, useState } from 'react'
import TitleSection from '../home/titleSection'
import Skills from '../home/tech/skills'
import CustomModal from './modal'
import { useAuth0 } from "@auth0/auth0-react"
export default memo(function TechStack() {
  const [visible, setVisible] = useState(false)
  const { isAuthenticated } = useAuth0()
  const handleVisible = (e) => {
    e.preventDefault()
    setVisible((prev) => !prev)
  }
  return (
    <div className='flex h-screen items-center justify-center w-full gap-3 py-24 md:py-28'>
      <div className='w-10/12 flex justify-start items-center gap-4'>
        <div className='w-full flex flex-col gap-2'>
          <TitleSection title='Tech Stack' subTitle={"Technologies I’ve been working with recently"} />
          <Skills className={"w-full gap-10 py-7"} />
         {isAuthenticated&& <button className='w-full flex justify-center' onClick={handleVisible}>
            <svg
              className='w-16 fill-none stroke-lightContent dark:stroke-darkContent'
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <title>ionicons-v5-a</title>
              <line
                x1={256}
                y1={112}
                x2={256}
                y2={400}
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 32
                }}
              />
              <line
                x1={400}
                y1={256}
                x2={112}
                y2={256}
                style={{
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 32
                }}
              />
            </svg>
          </button>}
        </div>
        {isAuthenticated && <CustomModal onShow={handleVisible} visible={visible} />
        }
      </div>
    </div>
  )
}
)