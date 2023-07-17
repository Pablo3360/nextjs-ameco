'use client'
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector , useDispatch } from "react-redux"
import { useState } from "react"
import { setAfiliado } from "@/app/store/afiliado/afiliadoSlice"
import AffiliateInfo from "@/components/dashboard/affiliate-details/affiliate-details"
import RegisterParticipante from "../../registerParticipante/page"
import ParticipantesTable from "@/components/dashboard/participantes-table/participantes-table"
import TitleBar from "@/components/common/TitleBar/TitleBar"
import Button from "@/components/common/button/button"
import Loader from "@/components/common/pageLoader/loader"
import { handleLogOut } from "@/app/functions"
import RegisterAfiliado from "../../registerAfiliado/page"

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
            }).catch(err=>{
                console.log('axios error :',err)
                handleLogOut(dispatch,router)
            })
        }
    },[token])
    
    const handleClick = (e) => {       
      //ir a RegisterParticpante y pasarle affiliateData   
      //console.log("afiliado pasado desde Detail: "+affiliateData)
      dispatch(setAfiliado(affiliateData))
      router.push('/dashboard/affiliates/registerParticipante')
  
      }

    return (
    <div>
        
        <TitleBar>
            <h1>Ficha afiliado</h1>
            <Button text='alta'>Actualizar</Button>
        </TitleBar>
        {
            isLoading?<Loader/>:
            <div>
                <AffiliateInfo affiliateData={affiliateData}/>
                <TitleBar>
                    <h1>Participantes</h1>
                    <Button text="alta" onClick={handleClick}>Alta participante</Button>       
                </TitleBar>
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
