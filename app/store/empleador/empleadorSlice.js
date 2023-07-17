'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState={}
const empleadorSlice = createSlice({
    name:'empleador',
    initialState,
    reducers:{
        getEmpleador: (state,action) => {
            state.empleador=action.payload
        }
    }
})

export const {getEmpleador}= empleadorSlice.actions
export default empleadorSlice.reducer