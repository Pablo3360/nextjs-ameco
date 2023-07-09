'use client'

import AffiliatesTable from '@/components/dashboard/affiliates-table/affiliates-table.js'
import { formatDate,dateToNumber } from '@/app/functions'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Affiliates(){
    const router=useRouter()
    const [data,setData]=useState('');
    let user=useSelector(state=>state.user)
    
    useEffect(()=>{
        if (!user.user) {
            router.push('/login')
            return;
        } else
        axios.get(`${process.env.NEXT_PUBLIC_URL_API}/afiliados`,{
            headers: {
              Authorization: 'Bearer ' + user.user.token
            }
           }).then(res=>{
            const data=res.data.data;
            console.log(res.data)
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
            console.log(err)
        })
    },[])

    return (
        <div style={{"margin":"40px"}}>
            <AffiliatesTable data={data}/>
        </div>
    )    
}