import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
const fetchAbout = createAsyncThunk(
    "about/fetchAbout",
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response =await fetch('http://localhost:3000/about',
                {
                    method: "GET"
                })
                .then(res => res.json())
            return fulfillWithValue(response)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
const editeAbout = createAsyncThunk(
    "about/editeAbout",
    async (text, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response =await fetch("http://localhost:3000/about/aboutMe",
                {
                    method: "PUT",
                    body: JSON.stringify({ text }),
                    headers: {
                        "Content-Type": "aplication/x-www-form-urlencoded"
                    }
                })
                .then(res => res.json())
            return fulfillWithValue(response.aboutMe?.text)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const addWorkExperience = createAsyncThunk(
    "about/addWorkExperience",
    async (data, { rejectWithValue, fulFillWithValue }) => {
        try {
            const response =await fetch("http://localhost:3000/about/workExperience",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }).then(res => res.json())
            return fulFillWithValue(response.workExperience)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const editWorkExperience = createAsyncThunk(
    "about/editeWorkExperience",
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response =await fetch("http://localhost:3000/about/workExperience",
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }).then(res => res.json())
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
const deleteWorkExperiance = createAsyncThunk(
    "about/deleteWorkExperience",
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response =await fetch("http://localhost:3000/about/workExperience",
                {
                    method: "DELETE",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(res => res.json())
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const addEducation = createAsyncThunk(
    "about/addEducation",
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response =await fetch("http://localhost:3000/about/education",
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "aplication/x-www-form-urlencoded"
                    }
                })
                .then(res => res.json())
            return fulfillWithValue(response.education)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
const editEducation = createAsyncThunk(
    "about/editEducation",
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response =await fetch("http://localhost:3000/about/education",
                {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }).then(res => res.json())
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
const deletEducation = createAsyncThunk(
    "about/deleteEducation",
    async (data, { fulfillWithValue, rejectWithValue }) => {
        try {
            const response =await fetch("http://localhost:3000/about/education",
                {
                    method: "DELETE",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }
                }).then(res => res.json())
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const abouteSlice = createSlice({
    name: "about",
    initialState: {
        aboutMe: undefined,
        experience: undefined,
        education: undefined,
        error: undefined,
        isLoading: undefined
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAbout.fulfilled, (state, { payload }) => {
            state.aboutMe = payload.aboutMe
            state.education = payload.education
            state.experience = payload.workExperience
            state.isLoading = false
            state.error = false
        }).addCase(fetchAbout.pending, (state) => {
            state.isLoading = true
        }).addCase(fetchAbout.rejected, (state, { error }) => {
            state.isLoading = false
            state.error = error
        })
            .addCase(editeAbout.fulfilled, (state, { payload }) => {
                state.aboutMe = [{ text: payload }]
            })
            .addCase(addWorkExperience.fulfilled, (state, { payload }) => {
                let newExperience = state.experience
                newExperience.push(payload)
                state.experience = newExperience
            })
            .addCase(editWorkExperience.fulfilled, (state, { payload }) => {
                let newExperience = state.experience
                state.experience = newExperience.map(e => {
                    if (payload.id != e._id) {
                        return e
                    }
                    e = {
                        ...payload.workExperience
                    }
                    e._id = payload.id
                    return e
                })
            }).addCase(deleteWorkExperiance.fulfilled, (state, { payload }) => {
                let newExperiance = state.experience
                state.experience = newExperiance.filter(e => e._id != payload.id)
            }).addCase(addEducation.fulfilled, (state, { payload }) => {
                let newEducation = state.education
                newEducation.push(payload)
                state.education = newEducation
            }).addCase(editEducation.fulfilled, (state, { payload }) => {
                let newEducation = state.education
                state.experience = newEducation.map(e => {
                    if (payload.id != e._id) {
                        return e
                    }
                    e = {
                        ...payload.workExperience
                    }
                    e._id = payload.id
                    return e
                })
            }).addCase(deletEducation.fulfilled, (state, { payload }) => {
                let newEducation = state.education
                state.experience = newExperiance.filter(e => e._id != payload.id)
            })
    }
})

export { fetchAbout, editeAbout, addWorkExperience, editWorkExperience, deleteWorkExperiance, addEducation, editEducation, deletEducation }
export default abouteSlice.reducer