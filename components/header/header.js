'use client'

import React from 'react'
import styles from './header.module.css'
import { useSelector , useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { handleLogOut } from '@/app/functions'

export default function Header() {
    const router=useRouter()
    const dispatch=useDispatch()
    let user = useSelector(state=>state.user.user)
    console.log(user)
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>AMECO</h1>
            {
                user?
                <div className={styles.dropdown}>
                    <button className={styles.dropbtn}>{user.nombres} ↓</button>
                    <div className={styles.dropdownContent}>
                        <a >Perfil</a>
                        <a >Opciones</a>
                        <a onClick={()=>{handleLogOut(dispatch,router)}}>Cerrar sesión</a>
                    </div>
                </div>:
                null
            }
        </div>
    )
    }
