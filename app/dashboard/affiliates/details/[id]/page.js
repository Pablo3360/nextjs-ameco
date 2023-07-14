'use client'

import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector , useDispatch } from "react-redux"
import { useState } from "react"
import AffiliateInfo from "@/components/dashboard/affiliate-details/affiliate-details"
import ParticipantesTable from "@/components/dashboard/participantes-table/participantes-table"
import Title from "@/components/common/title/title"
import Button from "@/components/common/button/button"
import Loader from "@/components/common/pageLoader/loader"
import { handleLogOut } from "@/app/functions"

import styles from './page.module.css'

export default function AffiliateDetails({params}) {
    const user = useSelector(state=>state.user.user)
    const router=useRouter()
    const dispatch=useDispatch()
    let token=user?.token

    const [affiliateData , setAffiliateData] = useState('')
    const [isLoading,setIsLoading]=useState(true)
    useEffect(()=>{
        if (token){
            axios.get(`${process.env.NEXT_PUBLIC_URL_API}/afiliados/${params.id}`,{
                headers:{
                    Authorization: 'Bearer ' + token
                }
            }).then((res)=>{
                setIsLoading(false)
                setAffiliateData(res.data.data)
                console.log('res data :',res.data.data)
            }).catch(err=>{
                console.log('axios error :',err)
                handleLogOut(dispatch,router)
            })
        }
    },[token])

    return (
    <div>
        <div className={styles.topBar}>
        <Title text={'Ficha Afiliado'}/>
            <Button text='alta'>
                Actualizar
            </Button>
        </div>
        {
            isLoading?<Loader/>:
            <div>
                <AffiliateInfo affiliateData={affiliateData}/>
                <div className={styles.separador}>
                    <h1 className={styles.h1}>Participantes</h1>
                    <Button text="alta">Alta participante</Button>
                </div>
            </div>
        }     
        {
            isLoading ? null :
            affiliateData?.participantes?.length>0?<ParticipantesTable data={affiliateData.participantes}/>:
            <p>El afiliado no tiene participantes registrados</p>
        }
    </div>
    )
}
