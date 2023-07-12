'use client'
import { useDispatch } from 'react-redux'
import AffiliatesTable from '@/components/dashboard/affiliates-table/affiliates-table.js'
import { formatDate,dateToNumber, handleLogOut } from '@/app/functions'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Affiliates(){
    const dispatch =useDispatch();
    const router=useRouter()
    const [data,setData]=useState('');
    const user = useSelector(state=>state.user.user)
    let token=user?.token
    
    useEffect(()=>{
        if (token) {
            axios.get(`${process.env.NEXT_PUBLIC_URL_API}/afiliados`,{
                headers: {
                Authorization: 'Bearer ' + token
                }
            }).then(res=>{
                const data=res.data.data;
                console.log(data)
                const tableData=data.map(e=>{
                    return {
                        nombreCompleto: e.apellidos+', '+e.nombres,
                        dni:e.dni,
                        nacimiento:dateToNumber(formatDate(e.nacimiento)),
                        estadoCivil:e.estadoCivil,
                        empleador:e.empleador.razon,
                        FechaDeAlta:dateToNumber(formatDate(e.createdAt)),
                    }
                })
                setData(tableData)
            }).catch(err=>{
                console.log('axios error :',err)
                handleLogOut(dispatch,router)
            })
        }
    },[token])

    return (
        <div style={{"margin":"40px"}}>
            <AffiliatesTable data={data}/>
        </div>
    )    
}