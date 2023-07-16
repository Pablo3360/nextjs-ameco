'use client'
import { useDispatch } from 'react-redux'
import AffiliatesTable from '@/components/dashboard/affiliates-table/affiliates-table.js'
import { formatDate,dateToNumber, handleLogOut } from '@/app/functions'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Loader from '@/components/common/pageLoader/loader'
import Title from '@/components/common/title/title'
import TitleBar from '@/components/common/TitleBar/TitleBar'
import Button from '@/components/common/button/button'
import axios from 'axios'

export default function Affiliates(){
    const dispatch =useDispatch();
    const router=useRouter()
    const [data,setData]=useState('');
    const [isLoading,setIsLoading]=useState(true);
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
                const tableData=data.map(e=>{
                    return {
                        nombreCompleto: e.apellidos+', '+e.nombres,
                        dni:e.dni,
                        nacimiento:dateToNumber(formatDate(e.nacimiento)),
                        estadoCivil:e.estadoCivil,
                        empleador:e.empleador.razon,
                        FechaDeAlta:dateToNumber(formatDate(e.createdAt)),
                        id:e.id,
                    }
                })
                setIsLoading(false)
                setData(tableData)
            }).catch(err=>{
                console.log('axios error :',err)
                handleLogOut(dispatch,router)
            })
        }
    },[token])

    return (
        <div>
            <TitleBar>
                <h1>Tabla de afiliados</h1>
                <Button text='alta' onClick={()=>{router.push('affiliates/registerAfiliado')}}>Alta de afiliado</Button>
            </TitleBar>
            {
                isLoading?<Loader/>:
                <div>
                    <AffiliatesTable data={data}/>
                </div>
            }
        </div>
    )    
}