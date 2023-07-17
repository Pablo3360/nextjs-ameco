import React from 'react'
import { useSelector } from 'react-redux'
import agregar from '../../../app/icons/actions/agregar.png'
import ficha from '../../../app/icons/actions/ficha.png'
import eliminar from '../../../app/icons/actions/eliminar.png'
import styles from '../actions.module.css'

export default function Actions() {
  const user=useSelector(state=>state.user)
  const userRoles=user.user.roles
  return (
    <div className={styles.container}>
    {
      userRoles?.includes('comision') || userRoles?.includes('recaudador')?null:
      <img src={agregar.src} alt="" className={styles.icon}/>
    }
      <img src={ficha.src} alt="" className={styles.icon}/>
    {
      userRoles?.includes('comision') || userRoles?.includes('recaudador')?null:<img src={eliminar.src} alt="" className={styles.icon}/>
    }
    </div>
  )
}
