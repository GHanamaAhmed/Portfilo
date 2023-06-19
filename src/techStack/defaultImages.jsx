import axios from 'axios'
import { Navigation, A11y } from "swiper"
import { memo, useLayoutEffect, useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
const generateImages = async () => {
    let images = []
    await axios.get("http://localhost:3000/tech/defaultPath").then(data => {
        if (data.status == 200) {
            images = data.data.data
        }
    })
    return images
}
export default memo(function DefaultImages({ onGenerateImg,width }) {
    const [images, setImages] = useState([])
    useLayoutEffect(() => {
        async function fun() {
            await generateImages().then(res => {
                setImages(res)
            })
        }
        fun()
    },[])
    return ( <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={width > 767 ? 4 : 2}
        spaceBetween={0}
        navigation
    >
        {images.map((e, i) => <SwiperSlide key={i} className='content-center flex justify-center items-center'><img key={i} crossOrigin='anonymous' className='cursor-pointer' onClick={(element) => onGenerateImg(element)} src={e} alt="" /></SwiperSlide>)}
    </Swiper>) 

})
