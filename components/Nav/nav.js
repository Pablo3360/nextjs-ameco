import React from 'react'
import {sidebar,link} from './nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={sidebar}>
        <Link href='/dashboard'className={link}>General</Link>
        <Link href='/dashboard/affiliates'className={link}>Afiliados</Link>
        <Link href='/dashboard/employers'className={link}>Empleadores</Link>
        {/* <Link href='/dashboard/benefits'className={link}>Beneficios</Link>
        <Link href='/dashboard/collects'className={link}>Recaudacion</Link> */}
        <p href='/dashboard/benefits'className={link}>Beneficios</p>
        <p href='/dashboard/collects'className={link}>Recaudacion</p> 
    </div>
  )
}
