'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState={}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state,action) => {
            state.user=action.payload
        },
        logOff: (state) => {
            state.user={}
        }
    }
})

export const {setUser , logOff} = userSlice.actions
export default userSlice.reducer