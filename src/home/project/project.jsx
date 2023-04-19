
import TitleSection from '../titleSection'
import CardProject from './cardProject'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
export default function Project({textAlign,widthContainer}) {
    const [widthScreen, setWidthScreen] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidthScreen(() => window.innerWidth)
        })
        return () => window.removeEventListener("resize", () => { })
    }, [])
    return (
        <div className='w-full flex flex-col items-center gap-5'>
            <TitleSection title={"Projects"} subTitle={"Things I’ve built so far"} textAlign={textAlign} />
            <div className='w-full flex justify-around'>
                {widthScreen >= 768 ? (
                    <div className='w-full flex flex-col items-center gap-5'>
                        <div className={`${widthContainer} flex gap-y-5 justify-between`}>
                            <CardProject img={"./img/Rectangle 4.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} />
                            <CardProject img={"./img/Rectangle 6.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} />
                            <CardProject img={"./img/Rectangle 8.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} />
                        </div>
                        <div className={`${widthContainer} flex gap-y-5 justify-between`}>
                            <CardProject img={"./img/Rectangle 12.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} />
                            <CardProject img={"./img/Rectangle 13.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} />
                            <CardProject img={"./img/Rectangle 14.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} />
                        </div>
                    </div>
                ) : (<Swiper
                    modules={[Navigation, A11y]}
                    spaceBetween={10}
                    slidesPerView={widthScreen < 640 ? 1 : 2}
                >
                    <SwiperSlide className='content-center flex justify-center'><CardProject img={"./img/Rectangle 4.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} /></SwiperSlide>
                    <SwiperSlide className='content-center flex justify-center'><CardProject img={"./img/Rectangle 6.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} /></SwiperSlide>
                    <SwiperSlide className='content-center flex justify-center'><CardProject img={"./img/Rectangle 8.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} /></SwiperSlide>
                    <SwiperSlide className='content-center flex justify-center'><CardProject img={"./img/Rectangle 12.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} /></SwiperSlide>
                    <SwiperSlide className='content-center flex justify-center'><CardProject img={"./img/Rectangle 13.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} /></SwiperSlide>
                    <SwiperSlide className='content-center flex justify-center'><CardProject img={"./img/Rectangle 14.png"} title={"Project Tile goes here"} description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"} tech={"HTML , JavaScript, SASS, React"} url={""} urlGithub={""} /></SwiperSlide>
                </Swiper>)}
            </div>
        </div>
    )
}
