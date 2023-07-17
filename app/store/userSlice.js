'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState={}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser: (state,action) => {
            state.user=action.payload
            console.log('payload :',action.payload)
        },
        setToken: (state,action) => {
            if (state){
                state.token=action.payload
            }
        },
        logOut: (state) => {
            state={}
        },
    }
})

export const {setUser , setToken, logOut} = userSlice.actions
export default userSlice.reducer