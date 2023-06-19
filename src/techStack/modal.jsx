import React, { memo, useEffect, useReducer, useRef, useState } from 'react'
import { Modal, Button } from "flowbite-react"
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, A11y } from "swiper"
import axios from "axios"
import "swiper/css"
import "swiper/css/navigation"
import DefaultImages from './defaultImages'
import { addSkil } from "../redux/skilsReducer";
import { useDispatch } from "react-redux";
const initialState = (width, img, imgCurrent) => ({ width, img, imgCurrent })
const reducer = (state, { type, img, imgCurrent,width }) => {
    switch (type) {
        case "generateImg":
            return {...state,img, imgCurrent}
        case "handleWidth":
          return {...state,width}
    }
}
export default memo(function CustomModal({ visible, onShow }) {
    const [state, dispatche] = useReducer(reducer, initialState(window.innerWidth, " ", "file"))
    const dispatch = useDispatch()
    const inputImg = useRef()
    useEffect(() => {
        window.addEventListener("resize", () => {
            dispatch({type:"handleWidth",width:state.width})
        })
        return () => {
            window.removeEventListener("resize", () => { })
        }
    }, [])
    const generateImg = (e) => {
        e.preventDefault()
        dispatche({ type: "generateImg", imgCurrent: "img", img: e.currentTarget.src })
    }
    const handleImage = (e) => {
        e.preventDefault()
        let file = e.currentTarget.files[0]
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.addEventListener("loadend", () => {
            dispatche({type: "generateImg",img:fileReader.result,imgCurrent:"file"})
        })
    }
    const addTech = async (e) => {
        e.preventDefault()
        let dataFormat = new FormData()
        let file = inputImg.current.files[0]
        if (file && state.imgCurrent == "file") {
            dataFormat.append("img", file)
            dispatch(addSkil({ file: dataFormat, imgCurrent:state.imgCurrent, img:state.img })).unwrap().catch(err => console.error(err))
        } else if (state.img && state.imgCurrent == "img") {
            dispatch(addSkil({ file: null, imgCurrent:state.imgCurrent, img:state.img })).unwrap().catch(err => console.error(err))
        }
    }
    return (
        <Modal
            show={visible}
            position={"center"}
            onClose={onShow}
        >
            <Modal.Header>
                Tech Details
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className='col-start-1 md:col-end-2 col-end-3'>
                            <>
                                <label
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    htmlFor="small_size"
                                >
                                    File input
                                </label>
                                <input
                                    ref={inputImg}
                                    accept="image/x-png,image/gif,image/jpeg"
                                    onChange={handleImage}
                                    className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="small_size"
                                    type="file"
                                />
                            </>
                        </div>
                        <div className='md:col-start-2 md:row-start-1 row-start-3 col-start-1 col-end-3 row-end-3 flex justify-center items-center'>
                            <img src={state.img} crossOrigin='anonymous' className='max-h-88 max-w-88' alt='Img' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <DefaultImages width={state.width} onGenerateImg={generateImg} />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={addTech}>
                    Add
                </Button>
                <Button
                    color="gray"
                    onClick={onShow}
                >
                    <p>
                        Cancel
                    </p>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
)