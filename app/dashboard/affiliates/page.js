'use client'

import AffiliatesTable from '@/components/dashboard/affiliates-table/affiliates-table.js'
import { useSelector } from 'react-redux/es/hooks/useSelector.js'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'

export default function Affiliates(){
    const router=useRouter()
    const [data,setData]=useState('');
    const user=useSelector(state=>state.user)

    function formatDate(date){
        const fechaStr = date;
        const fechaObj = new Date(fechaStr);

        const dia = fechaObj.getDate();
        const mes = fechaObj.getMonth() + 1;
        const año = fechaObj.getFullYear();

        const fechaFormateada = `${dia}/${mes < 10 ? '0' + mes : mes}/${año}`;
        return fechaFormateada;
    }
    
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
            console.log ('dataaa :',data)
            const tableData=data.map(e=>{
                return {
                    nombreCompleto: e.apellidos+', '+e.nombres,
                    dni:e.dni,
                    nacimiento:formatDate(e.nacimiento),
                    estadoCivil:e.estadoCivil,
                    empleador:e.empleador.razon,
                }
            })
            setData(tableData)
        }).catch(err=>{
            console.log(err)
        })
    },[user])

    return (
        <div style={{"margin":"40px"}}>
            <AffiliatesTable data={data}/>
        </div>
    )    
}