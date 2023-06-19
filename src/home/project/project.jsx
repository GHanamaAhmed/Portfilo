
import TitleSection from '../titleSection'
import CardProject from './cardProject'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import CustomModal from './modal';
import { useAuth0 } from "@auth0/auth0-react"
import { useLocation } from "react-router-dom"
const cardData = [
    {
        img: "./img/Rectangle 4.png",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        tech: "HTML, JavaScript, SASS, React",
        url: "",
        urlGithub: ""
    },
    {
        img: "./img/Rectangle 6.png",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        tech: "HTML, JavaScript, SASS, React",
        url: "",
        urlGithub: ""
    },
    {
        img: "./img/Rectangle 8.png",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        tech: "HTML, JavaScript, SASS, React",
        url: "",
        urlGithub: ""
    },
    {
        img: "./img/Rectangle 12.png",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        tech: "HTML, JavaScript, SASS, React",
        url: "",
        urlGithub: ""
    },
    {
        img: "./img/Rectangle 13.png",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        tech: "HTML, JavaScript, SASS, React",
        url: "",
        urlGithub: ""
    },
    {
        img: "./img/Rectangle 14.png",
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        tech: "HTML, JavaScript, SASS, React",
        url: "",
        urlGithub: ""
    }
];

export default function Project({ textAlign, widthContainer }) {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)
    const [inpute, setInpute] = useState()
    const [show, setShow] = useState(false)
    const { isAuthenticated } = useAuth0()
    const location = useLocation()
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidthScreen(() => window.innerWidth)
        })
        return () => window.removeEventListener("resize", () => { })
    }, [])
    const handleVisible = (e) => {
        e.preventDefault()
        setShow((prev) => !prev)
    }
    return (
        <div className='w-full flex flex-col items-center gap-5'>
            <TitleSection title={"Projects"} subTitle={"Things I’ve built so far"} textAlign={textAlign} />
            {isAuthenticated && <button className='w-full flex justify-center' onClick={handleVisible}>
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
            <div className='w-full flex justify-around'>
                {widthScreen >= 768 ? (
                    <div className='w-full flex flex-col items-center gap-5'>
                        {new Array(cardData.length / 3).fill(null).map((element, index) => {
                            let data = cardData.slice(index * 3, (index + 1) * 3)
                            return (
                                <div key={index} className={`${widthContainer} flex gap-y-5 justify-between`}>
                                    {data.map((e, i) => <CardProject key={i} img={e.img} title={e.title} description={e.description} tech={e.tech} url={e.url} urlGithub={e.urlGithub} />)}
                                </div>
                            )
                        })}
                    </div>
                ) : (<Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={10}
                    slidesPerView={widthScreen < 640 ? 1 : 2}
                >
                    {cardData.map((e, i) => <SwiperSlide key={i} className='content-center flex justify-center'><CardProject img={e.img} title={e.title} description={e.description} tech={e.tech} url={e.url} urlGithub={e.urlGithub} /></SwiperSlide>
                    )}
                </Swiper>)}
            </div>
            <CustomModal visible={show} onChange={handleVisible} />
        </div>
    )
}