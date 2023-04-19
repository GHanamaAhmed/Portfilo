import React from 'react'
import WorkExperience from './workExperience'
import TitleSection from '../home/titleSection'

export default function About() {
    return (
        <div className='flex items-center justify-center w-full gap-3 py-24 md:py-28'>
            <div className='w-10/12 flex justify-start items-center gap-4'>
                <div className='flex flex-col gap-4 w-full md:w-2/3'>
                    <TitleSection title={"About Me"} textAlign={"items-start"}/>
                    <p className='text-darkContent dark:text-lightContent text-sm lg:text-base'>
                        The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                    </p>
                    <TitleSection title={"Work Experience"} textAlign={"items-start"}/>
                    <WorkExperience skill={"Junior Web Developer"} typeEmployment={"Full Time"} adress={"Dr. Rajkumar’s Learning App"} location={"Bengaluru"} dateBegin={"Sep 2021"} dateEnd={"Des-2021"} />
                    <WorkExperience skill={"JWeb Development Intern"} typeEmployment={"Internship"} adress={"IonPixelz Web Solutions"} location={"Bengaluru"} dateBegin={"Sep 2021"} dateEnd={"Des-2021"} />
                    <WorkExperience skill={"IonPixelz Web Solutions"} typeEmployment={"Internship"} adress={"HAAPS"} location={"Bengaluru"} dateBegin={"Sep 2021"} dateEnd={"Des-2021"} />
                    <TitleSection title={"Education"} textAlign={"items-start"}/>
                    <WorkExperience skill={"Bachelor in Electronics & Communication"} typeEmployment={"Internship"} adress={"Bangalore Instutute of Technology"} dateBegin={"Aug 2015"} dateEnd={"Des-2020"} />
                </div>
            </div>
        </div>
    )
}
