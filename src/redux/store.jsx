import { configureStore } from "@reduxjs/toolkit"
import skilsSlice from '../redux/skilsReducer'
const store = configureStore(
    {
        reducer:{
            skils:skilsSlice
        }
    }
)
export default store