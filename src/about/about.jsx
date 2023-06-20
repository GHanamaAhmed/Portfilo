import React, { memo, useCallback, useEffect, useState } from 'react'
import WorkExperience from './workExperience'
import TitleSection from '../home/titleSection'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'
import WorkExperienceEdit from './workExperienceAdd'
import AboutMe from './aboutMe'
import Education, { LoadingEducation } from './education'
import EducationAdd from './educationAdd'
import { useSelector, useDispatch } from "react-redux";
import { fetchAbout } from "../redux/aboutReducer";
export default memo(function About() {
    const { isAuthenticated } = useAuth0()
    const {experience,education} = useSelector(state => state.about)
    const dispatch = useDispatch()
    const [isEditExperience, setIsEditExperience] = useState(false)
    const [isEditeducation, setIsEditEducation] = useState(false)
    useEffect(() => {
        dispatch(fetchAbout()).unwrap().catch(err => console.error(err))
    }, [])
    //onEdite
    return (
        <div className='flex items-center justify-center w-full gap-3 py-24 md:py-28'>
            <div className='w-10/12 flex justify-start items-center gap-4'>
                <div className='flex flex-col gap-4 w-full md:w-2/3'>
                    <AboutMe/>
                    {(experience === undefined || experience?.length > 0) && <>
                        {(isAuthenticated || experience != false) && <TitleSection title={"Work Experience"} textAlign={"items-start"} />}
                        {isAuthenticated && !isEditExperience && <div className='flex justify-center items-center'>
                            <svg
                                className='w-16 fill-none stroke-lightContent dark:stroke-darkContent'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                onClick={() => { setIsEditExperience(true) }}
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

                        </div>}
                        {isEditExperience && <WorkExperienceEdit onClose={() => setIsEditExperience((prev) => !prev)} />}
                        <div className='flex flex-col gap-3 max-h-screen overflow-auto'>
                            {experience === undefined && [...Array(2)].map((e, i) => <LoadingEducation key={i} />)}
                            {experience?.map((item, index) => {
                                return (
                                    <WorkExperience key={index} id={`${item["_id"]}`} skill={item.job} typeEmployment={item.type} adress={item.company} location={item.location} dateBegin={item.datebegin} dateEnd={item.dateEnd}/>)
                            })}
                        </div>
                    </>}
                    {(education === undefined || education?.length > 0) && <>
                        {(isAuthenticated || education != false) && <TitleSection title={"Work Experience"} textAlign={"items-start"} />}
                        {isAuthenticated && !isEditeducation && <div className='flex justify-center items-center'>
                            <svg
                                className='w-16 fill-none stroke-lightContent dark:stroke-darkContent'
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                onClick={() => { setIsEditEducation(true) }}
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

                        </div>}
                        {isEditeducation && <EducationAdd onClose={() => setIsEditEducation((prev) => !prev)} />}
                        <div className='flex flex-col gap-3 max-h-screen overflow-auto'>
                            {education === undefined && [...Array(2)].map((e, i) => <LoadingEducation key={i} />)}
                            {education?.map((item, index) => {
                                return (
                                    <Education key={index} id={`${item["_id"]}`} specialization={item.specialization} type={item.type} school={item.school} location={item.location} dateBegin={item.datebegin} dateEnd={item.dateEnd}/>)
                            })}
                        </div>
                    </>}


                </div>
            </div>
        </div>
    )
})
