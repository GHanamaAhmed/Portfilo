import { useState, useLayoutEffect, memo } from "react"
export default memo(function DarkMode() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    useLayoutEffect(() => {
        if (theme == 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [theme])
    const toglgeDarkMode = () => {
        setTheme((prevValue) => theme == "dark" ? "light" : "dark")
    }
    return (
        <div>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label onClick={toglgeDarkMode} htmlFor="checkbox" className="label">
                <img src='./img/icons8-moon-and-stars-96.png' alt='' className="fas fa-moon" width={15} />
                <img src='./img/icons8-summer-94.png' alt='' className="fas fa-sun" width={15} />
                <div className={`ball ${theme == "dark" ? "translate-x-6" : ""}`}></div>
            </label>
        </div>
    )
})