import React from 'react'

export default function WorkExperience({ skill, adress, location, dateBegin, dateEnd, typeEmployment }) {
    return (
        <div className='w-full flex flex-col gap-2 py-4 border-b-2 dark:border-lightContent'>
            <div className='w-full flex gap-y-3 mb-2 flex-col md:flex-row justify-between md:items-center'>
               {skill&& <p className='text-darkContent dark:text-lightContent text-lg'>{skill}</p>}
                {typeEmployment&& <div className='py-1 px-3 bg-buttonSuccess w-fit text-buttonText rounded-full font-semibold'>{typeEmployment}</div>}
            </div>
            <div className='w-full flex gap-y-2 flex-col md:flex-row justify-between'>
                <div className='flex md:gap-x-10'>
                    {adress&&<div className='flex gap-1'>
                        <svg
                            className='w-6 h-6 fill-lightContent dark:fill-darkContent'
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {" "}
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 4C4 2.89543 4.89543 2 6 2H14C15.1046 2 16 2.89543 16 4V16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H13C12.4477 18 12 17.5523 12 17V15C12 14.4477 11.5523 14 11 14H9C8.44772 14 8 14.4477 8 15V17C8 17.5523 7.55228 18 7 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16V4ZM7 5H9V7H7V5ZM9 9H7V11H9V9ZM11 5H13V7H11V5ZM13 9H11V11H13V9Z"
                            />{" "}
                        </svg>
                        <p className='text-darkContent dark:text-lightContent text-sm md:text-base'>{adress}</p>
                    </div>}
                    {location && <div className='flex gap-1'>
                        <svg
                            className='h-6 w-6 fill-none stroke-lightContent dark:stroke-darkContent'
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <title>ionicons-v5-n</title>
                            <path

                                d="M256,48c-79.5,0-144,61.39-144,137,0,87,96,224.87,131.25,272.49a15.77,15.77,0,0,0,25.5,0C304,409.89,400,272.07,400,185,400,109.39,335.5,48,256,48Z"
                                style={{
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 32
                                }}
                            />
                            <circle
                                className='fill-none stroke-lightContent'
                                cx={256}
                                cy={192}
                                r={48}
                                style={{
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 32
                                }}
                            />
                        </svg>
                        <p className='text-darkContent dark:text-lightContent text-sm md:text-base'>{location}</p>
                    </div>}
                </div>
                {(dateBegin || dateEnd) && <div className='flex gap-2'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="bi bi-calendar-date h-6 w-6 fill-lightContent dark:fill-darkContent"
                        viewBox="0 0 16 16"
                    >
                        {" "}
                        <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />{" "}
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />{" "}
                    </svg>
                    <p className='text-darkContent dark:text-lightContent text-sm md:text-base'>{dateBegin} - {dateEnd}</p>
                </div>}
            </div>
        </div>
    )
}
