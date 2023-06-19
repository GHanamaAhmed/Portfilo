import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
const fetchSkils = createAsyncThunk(
    "skils/fetchSkils",
    async (obj, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await fetch("http://localhost:3000/tech", {
                method: "GET"
            }).then(res => res.json())
            if (response.res) {
                return fulfillWithValue(response.data)
            }
            return rejectWithValue(response.mes)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
const deleteSkil = createAsyncThunk(
    "slils/deletSkil",
    async (obj, { rejectWithValue, fulfillWithValue }) => {
        try {
            const response = await fetch("http://localhost:3000/tech/removeSkil", {
                method: "DELETE",
                body: "img=" + obj,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(res => res.json())
            if (response?.res) {
                return fulfillWithValue(obj)
            }
            return rejectWithValue(response.mes)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
const skilsSlice = createSlice({
    name: "skils",
    initialState: {
        skils: [],
        isLoading: false,
        error: undefined
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSkils.fulfilled, (state, { payload }) => {
            state.skils.push(payload)
            state.isLoading = false
        }).addCase(fetchSkils.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchSkils.rejected, (state, { error }) => {
            state.error = error
            state.isLoading = false
        }).addCase(deleteSkil.fulfilled, (state, { payload }) => {
            state.skils.filter(e => e != payload)
            state.isLoading = false
        }).addCase(deleteSkil.pending, (state) => {
            state.isLoading = true
        }).addCase(deleteSkil.rejected, (state, { error }) => {
            state.error = error
            state.isLoading = false
        })
    }
})
export { fetchSkils,deleteSkil }
export default skilsSlice.reducer