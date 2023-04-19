import React from 'react'
import Contact from '../../header/contact'

export default function Contacts() {
    return (
        <div className='flex flex-col w-full items-center justify-center mt-6 mb-3 py-2'>
            <div className='w-10/12 flex flex-col md:flex-row md:items-center md:justify-between'>
                <img src="./img/logo 2.svg" alt="" width={90} />
                <div className='flex flex-col gap-2 md:gap-4 md:flex-row'>
                    <div className='flex gap-2 md:gap-10 w-full justify-between'>
                        <p className='text-solidHeading dark:text-lightContent'>+213 0658438356</p>
                        <p className='text-solidHeading dark:text-lightContent'>ghanamaahmed@gmail.com</p>
                    </div>
                    <ul className='flex gap-2'>
                        <Contact />
                    </ul>
                </div>
            </div>
            <div className='divided w-10/12 h-px my-4 fill-darkModeSecondary bg-lightContent dark:bg-darkContent'>
            </div>
        </div>
    )
}
