import React, { memo, useEffect, useRef, useState } from 'react'
import { Modal, Button } from "flowbite-react"
import { SwiperSlide, Swiper } from 'swiper/react'
import { Navigation, A11y } from "swiper"
import axios from "axios"
import "swiper/css"
import "swiper/css/navigation"
import DefaultImages from './defaultImages'
const postImg = async (file, imgCurrent, img) => {
    imgCurrent === "file" && await axios.post("http://localhost:3000/tech/addTech", file).then(res => console.log(res.data)).catch(err => console.log(err))
    imgCurrent === "img" && await axios.post("http://localhost:3000/tech/addTechdefault", {img},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(res => console.log(res.data)).catch(err => console.log(err))
}
export default memo(function CustomModal({ visible, onShow }) {
    const [width, setWidth] = useState(window.innerWidth)
    const [img, setImg] = useState('')
    const [imgCurrent, setImgCurrent] = useState("file")
    const inputImg = useRef()
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
        return () => {
            window.removeEventListener("resize", () => { })
        }
    }, [])
    const generateImg = (e) => {
        e.preventDefault()
        setImgCurrent("img")
        setImg(e.currentTarget.src)
    }
    const handleImage = (e) => {
        e.preventDefault()
        setImgCurrent("file")
        let file = e.currentTarget.files[0]
        let fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.addEventListener("loadend", () => {
            setImg(fileReader.result)
        })
    }
    const addTech = async (e) => {
        e.preventDefault()
        let dataFormat = new FormData()
        let file = inputImg.current.files[0]
        if (file&&imgCurrent=="file") {
            dataFormat.append("img", file)
            await postImg(dataFormat, imgCurrent, img)
        }else if (img&&imgCurrent=="img") {
            await postImg("dataFormat", imgCurrent, img)
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
                            <img src={img} crossOrigin='anonymous' className='max-h-88 max-w-88' alt='Img' />
                        </div>
                    </div>
                    <div className='mt-3'>
                        <DefaultImages width={width} onGenerateImg={generateImg} />
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