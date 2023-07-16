'use client'
import { useSelector , useDispatch} from "react-redux";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'
import { createContext } from "react";
import { setToken, setUser } from "../store/userSlice";

const context=createContext()

const AuthProvider = ({children})=>{
    const router=useRouter();
    const dispatch=useDispatch()

    let user = useSelector(state=>state.user)

    console.log('user(Provider) :',user)

    useEffect(()=>{
        if (Object.keys(user).length===0){
            user=localStorage.getItem('user')
            dispatch(setUser(JSON.parse(user)))
        }
        if(!user){
            router.push('/')
        }
    },[])
    return(
        <>
            {children}
        </>
    )
}
export {AuthProvider,context};