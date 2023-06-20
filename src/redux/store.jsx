import { configureStore } from "@reduxjs/toolkit"
import skilsSlice from './skilsReducer'
import aboutSlice from "./aboutReducer";
const store = configureStore(
    {
        reducer:{
            skils:skilsSlice,
            about:aboutSlice
        }
    }
)
export default store