import React, { memo, useCallback, useEffect, useState } from 'react'
import WorkExperience from './workExperience'
import TitleSection from '../home/titleSection'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'
import WorkExperienceEdit from './workExperienceAdd'
import AboutMe from './aboutMe'
import Education from './education'
import EducationAdd from './educationAdd'
export default memo(function About() {
    const { isAuthenticated } = useAuth0()
    const [about, setAbout] = useState()
    const [experience, setExperience] = useState()
    const [education, setEducation] = useState()
    const [isEditExperience, setIsEditExperience] = useState(false)
    const [isEditeducation, setIsEditEducation] = useState(false)
    useEffect(() => {
        const getAbout = async () => {
            await axios.get('http://localhost:3000/about').then(res => {
                setAbout(res.data.aboutMe)
                setExperience(res.data.workExperience)
                setEducation(res.data.education)
            })
        }
        getAbout()
    }, [])
    const onAddworkExperience = useCallback((value) => {
        setExperience(prevValue => [...prevValue, value])
    }, [setExperience])
    const onDeleteWorkExperience = useCallback((id) => {
        setExperience(prevValue => prevValue.filter(e => e["_id"] != id))
    }, [setExperience])
    const onEditeWorkExperience = useCallback((id, newValue) => {
        setExperience(prevValue => prevValue.map(e => {
            if (e["_id"] != id) {
                return e
            }
            e = {
                ...newValue,
            }
            e["_id"] = id
            return e
        }))
    }, [setExperience])
    const onAddEducaion = useCallback((value) => {
        setEducation(prevValue => [...prevValue, value])
    }, [setEducation])
    const onDeleteeducation = useCallback((id) => {
        setEducation(prevValue => prevValue.filter(e => e["_id"] != id))
    }, [setEducation])
    const onEditeeducation = useCallback((id, newValue) => {
        setEducation(prevValue => prevValue.map(e => {
            if (e["_id"] != id) {
                return e
            }
            e = {
                ...newValue,
            }
            e["_id"] = id
            return e
        }))
    }, [setEducation])
    const onEditeAboutME = useCallback((newvalue) => {
        setAbout(prevValue => [{ text: newvalue }])
    }, [setAbout])
    //onEdite
    return (
        <div className='flex items-center justify-center w-full gap-3 py-24 md:py-28'>
            <div className='w-10/12 flex justify-start items-center gap-4'>
                <div className='flex flex-col gap-4 w-full md:w-2/3'>
                    <AboutMe about={about} onEdite={onEditeAboutME} />
                    {experience && <>
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
                        {isEditExperience && <WorkExperienceEdit onAddworkExperience={onAddworkExperience} onClose={() => setIsEditExperience((prev) => !prev)} />}
                        <div className='flex flex-col gap-3 max-h-screen overflow-auto'>
                            {experience.map((item, index) => {
                                return (
                                    <WorkExperience key={index} id={`${item["_id"]}`} skill={item.job} typeEmployment={item.type} adress={item.company} location={item.location} dateBegin={item.datebegin} dateEnd={item.dateEnd} onDelete={onDeleteWorkExperience} onEdite={onEditeWorkExperience} />)
                            })}
                        </div>
                    </>}




                    {education && <>
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
                        {isEditeducation && <EducationAdd onAddEducation={onAddEducaion} onClose={() => setIsEditEducation((prev) => !prev)} />}
                        <div className='flex flex-col gap-3 max-h-screen overflow-auto'>
                            {education.map((item, index) => {
                                return (
                                    <Education key={index} id={`${item["_id"]}`} specialization={item.specialization} type={item.type} school={item.school} location={item.location} dateBegin={item.datebegin} dateEnd={item.dateEnd} onDelete={onDeleteeducation} onEdite={onEditeeducation} />)
                            })}
                        </div>
                    </>}


                </div>
            </div>
        </div>
    )
})
