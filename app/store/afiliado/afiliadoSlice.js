'use client'
import { createSlice } from '@reduxjs/toolkit'

const initialState={}
const afiliadoSlice = createSlice({
    name:'afiliado',
    initialState,
    reducers:{
        setAfiliado: (state,action) => {
            state.afiliado=action.payload
        }
    }
})

export const {setAfiliado}= afiliadoSlice.actions
export default afiliadoSlice.reducer