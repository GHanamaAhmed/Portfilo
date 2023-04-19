import React from 'react'
import Footer from '../footer/footer'
import Contacts from '../home/contacts/contacts'
export default function Contacts2() {
    return (
        <div className='relative h-screen flex flex-col justify-center items-center'>
            <p className='text-solidHeading dark:text-SolidHeadingDarkMode text-4xl font-bold'>For any questions please mail us:</p>
            <p className="inline md:block text-gradiant text-3xl font-bold">ghanamaahmed@gmail.com</p>
            <footer className='bottom-0 absolute w-full'>
                <Contacts />
                <Footer />
            </footer>
        </div>
    )
}
