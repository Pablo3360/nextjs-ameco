'use client'
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";
import afiliadoReducer from "./afiliado/afiliadoSlice";
import empleadorReducer from "./empleador/empleadorSlice";

export const store= configureStore({
    reducer: {
        user:userReducer,
        afiliado: afiliadoReducer,
        empleador: empleadorReducer,
    },
})