import React, { memo, useEffect, useRef, useState } from 'react'
import WorkExperience from './workExperience'
import TitleSection from '../home/titleSection'
import { useAuth0 } from "@auth0/auth0-react"
import { useDispatch, useSelector } from "react-redux";
import { editeAbout } from "../redux/aboutReducer";
import axios from 'axios'
export default memo(function AboutMe() {
    const [isEditAbout, setIsEditAbout] = useState(false)
    const { isAuthenticated } = useAuth0()
    const aboutMe = useRef()
    const about = useSelector(state => state.about)
    const dispatch = useDispatch()
    const handleEditAbout = (e) => {
        e && e.preventDefault()
        setIsEditAbout(prevValue => !prevValue)
    }
    const setWidth = (ref) => {
        if (ref.current && ref.current.style) {
            ref.current.style.width = `${ref.current.value.length}ch`
            ref.current.addEventListener('input', () => {
                if (ref.current.value.length == 0) {
                    ref.current.style.width = `1ch`
                } else {
                    ref.current.style.width = `${ref.current.value.length}ch`
                }
            })
        }
    }
    const editeAboutMe = async (e) => {
        e.preventDefault()
        dispatch(editeAbout(aboutMe.current.value || " ")).unwrap().then(res => handleEditAbout()).catch(err => console.error(err))
    }
    return (
        <>
            {((about.aboutMe && about.aboutMe[0]?.text != " ") || isAuthenticated) && <>
                <div className='flex justify-start'>
                    <TitleSection title={"About Me"} textAlign={"items-start"} />
                    <div className='flex gap-2'>
                        {isAuthenticated && isEditAbout && <button onClick={editeAboutMe} className='text-white py-2 px-4 rounded-md bg-darkContent dark:bg-lightContent'>Save</button>}
                        {isAuthenticated && <svg
                            onClick={handleEditAbout}
                            className='w-7 fill-darkContent dark:fill-lightContent'
                            viewBox="0 0 15 15"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {" "}
                            <path
                                d="M9.85355 0.146447C9.65829 -0.0488155 9.34171 -0.0488155 9.14645 0.146447L6.50002 2.79288L12.2071 8.49998L14.8536 5.85355C15.0488 5.65829 15.0488 5.34171 14.8536 5.14645L9.85355 0.146447Z"
                            />{" "}
                            <path
                                d="M0 9.29289L5.79291 3.49998L11.5 9.20709L5.70711 15H0.5C0.223858 15 0 14.7761 0 14.5V9.29289Z"
                            />{" "}
                            <path d="M8 15H15V14H8V15Z" />{" "}
                        </svg>}
                    </div>
                </div>
                {!isEditAbout && <p className='max-h-40 overflow-visible text-darkContent dark:text-lightContent text-sm lg:text-base'>
                    {about.aboutMe && about.aboutMe[0].text}
                </p>}</>}{!isEditAbout && about.aboutMe === undefined && <div className="w-full">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-xs mb-2.5"></div>
                </div>}
            {isEditAbout && <textarea ref={aboutMe} defaultValue={about.aboutMe && about.aboutMe[0].text} className='w-full focus:ring-0 border-0 h-40 p-0 m-0 dark:bg-darkMode text-darkContent dark:text-lightContent text-sm lg:text-base' />}
        </>
    )
}
)