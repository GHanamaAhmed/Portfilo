import axios from 'axios'
const generateImages = async () => {
    let images = []
    await axios.get("http://localhost:3000/tech/defaultPath").then(data => {
        if (data.status != 200) {
            images = []
        } else {
            images = data.data.data
        }
    })
    return images
}
export { generateImages }