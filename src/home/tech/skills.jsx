import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, A11y, Grid } from "swiper"
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux"
import { fetchSkils, deleteSkil } from "../../redux/skilsReducer"
import { useAuth0 } from "@auth0/auth0-react"
export default function Skills({ className }) {
  const [width, setWidth] = useState(window.innerWidth)
  const [skils, setSkils] = useState([])
  const { isAuthenticated } = useAuth0()
  const skilsReducer = useSelector(state => state.skils)
  const dispatch = useDispatch()
  useLayoutEffect(() => {
    dispatch(fetchSkils()).unwrap().then(res => {
      setSkils(res)
    }).catch(err => console.error(err))
  }, [])
  useEffect(() => {
    function handlewidth() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handlewidth)
    return () => window.removeEventListener("resize", () => { })
  }, [])
  const deleteSkil1 = (e) => {
    e.preventDefault()
    dispatch(deleteSkil(e.currentTarget.src)).unwrap().then(res => {
      setSkils(prev => prev.filter(e => e != res))
    }).catch(err => console.log(err))
  }
  return (
    <div className={className}>
      <Swiper
        modules={[Navigation, A11y, Grid]}
        spaceBetween={50}
        slidesPerView={width > 767 ? 6 : 2}
        grid={{
          rows: width > 767 ? 2 : 4,
          fill: true
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev"
        }}
      >
        {!isAuthenticated && skils.map((e, i) => <SwiperSlide key={i} className='content-center flex justify-center'><img crossOrigin='anonymous' src={e} alt="" /></SwiperSlide>)}
        {
          isAuthenticated && skils.map((e, i) => <SwiperSlide key={i} className='content-center relative flex items-center justify-center'>
            <div className='hover:opacity-50'><img onClick={deleteSkil1} className='' crossOrigin='anonymous' src={e} alt="" /></div>
          </SwiperSlide>)
        }
      </Swiper>
      <div className='flex flex-row-reverse gap-3 mt-3 justify-center md:justify-end'>
        <button className='next'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-right-circle w-10 fill-darkContent dark:fill-lightContent"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
            />{" "}
          </svg>
        </button>
        <button className='prev'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-arrow-left-circle w-10 fill-darkContent dark:fill-lightContent"
            viewBox="0 0 16 16"
          >
            {" "}
            <path
              fillRule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />{" "}
          </svg>
        </button>
      </div>
    </div>
  )
}
