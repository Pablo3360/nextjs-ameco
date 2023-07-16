'use client'

import React from 'react'
import EmployersTable from '@/components/dashboard/employers-table/employers-table'
import { handleLogOut } from '@/app/functions'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/components/common/button/button'
import Loader from '@/components/common/pageLoader/loader'
import axios from 'axios'
import TitleBar from '@/components/common/TitleBar/TitleBar'

export default function Employers() {
    const router=useRouter()
    const dispatch=useDispatch()
    const [data,setData]=useState('');
    const [isLoading,setIsLoading]=useState(true);
    const user = useSelector(state=>state.user.user)
    let token=user?.token

    useEffect(()=>{
        if (token){
            axios.get(`${process.env.NEXT_PUBLIC_URL_API}/empleadores`,{
                headers: {
                Authorization: 'Bearer ' + token
                }
            }).then(res=>{
                const data=res.data.data;
                const tableData=data.map(e=>{
                    return {
                        razon:e.razon,
                        cuit:e.cuit,
                        localidad:e.localidad,
                        recaudador:e.recaudador?e.recaudador.apellidos+', '+e.recaudador.nombres:null,
                    }
                })
                setData(tableData)
                setIsLoading(false)
            }).catch(err=>{
                console.log(err)
                handleLogOut(dispatch,router)
            })
        }
    },[token])
    return (
        <div>
        <TitleBar>
            <h1>Tabla de empleadores</h1>
            <Button text='alta' onClick={()=>router.push('./employers/registerEmpleador')}>Alta empleador</Button>
        </TitleBar>
            {isLoading?<Loader/>:<EmployersTable data={data}/>}
        </div>
    )
}

