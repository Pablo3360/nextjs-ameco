import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import agregar from '@/app/icons/actions/agregar.png'
import ficha from '@/app/icons/actions/ficha.png'
import eliminar from '@/app/icons/actions/eliminar.png'
import styles from '../actions.module.css'

export default function Actions({affiliateId}) {
  const user=useSelector(state=>state.user)
  const userRoles=user.roles
  const router=useRouter()
  
  function handleClick(){
    router.push('/dashboard/affiliates/details/' + affiliateId)
  }
  return (

    <div className={styles.container}>
    {
      userRoles?.includes('comision') || userRoles?.includes('recaudador')?null:
      <img src={agregar.src} alt="" className={styles.icon}/>
    }
      <img src={ficha.src} alt="" onClick={()=>handleClick()} className={styles.icon}/>
    {
      userRoles?.includes('comision') || userRoles?.includes('recaudador')?null:<img src={eliminar.src} alt="" className={styles.icon}/>
    }
    </div>
  )
}
