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
  const { isAuthenticated } = useAuth0()
  const skilsReducer = useSelector(state => state.skils)
  const dispatch = useDispatch()
  useEffect(() => {
    function handlewidth() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handlewidth)
    return () => window.removeEventListener("resize", () => { })
  }, [])
  useLayoutEffect(() => {
    dispatch(fetchSkils()).unwrap().catch(err => console.error(err))
  }, [])
  const deleteSkil1 = (e) => {
    e.preventDefault()
    dispatch(deleteSkil(e.currentTarget.src)).unwrap().catch(err => console.error(err))
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
      > {skilsReducer?.isLoading &&[...Array(12)].map((e,i)=> <SwiperSlide key={i} className='content-center flex justify-center'><div className="flex animate-pulse max-h-[100px] max-w-[100px]  items-center justify-center bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
      <svg
        className="w-12 h-12 text-gray-200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 640 512"
      >
        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
      </svg>
    </div></SwiperSlide>)}
        {!isAuthenticated && !skilsReducer?.isLoading && skilsReducer.skils.map((e, i) => <SwiperSlide key={i} className='content-center w-full h-full flex justify-center'><img className='max-h-[100px] max-w-[100px]' crossOrigin='anonymous' src={e} alt="" /></SwiperSlide>)}
        {
          isAuthenticated &&!skilsReducer?.isLoading && skilsReducer.skils.map((e, i) => <SwiperSlide key={i} className='content-center relative flex items-center justify-center'>
            <div className='hover:opacity-50'><img height={100} width={100} onClick={deleteSkil1} className='' crossOrigin='anonymous' src={e} alt="" /></div>
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
