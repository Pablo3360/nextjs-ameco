'use client'

import React from 'react'
import styles from './header.module.css'
import { useSelector , useDispatch } from 'react-redux'
import { logOut } from '@/app/store/userSlice'
import { useRouter } from 'next/navigation'
import { handleLogOut } from '@/app/functions'

export default function Header() {
  const router=useRouter()
  const dispatch=useDispatch()
  let user = useSelector(state=>state.user.user)

  // function handleLogOut(){
  //   dispatch(logOut());
  //   localStorage.clear();
  //   router.push('/')
  // }

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>AMECO</h1>
        {
          user?
            <div>
              <h3>{user.nombres}</h3>
              <button onClick={()=>handleLogOut(dispatch,router)}>Cerrar sesion</button>
            </div>:
            null
        }
    </div>
  )
}
