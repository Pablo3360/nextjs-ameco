import React from 'react'
import {sidebar,link} from './nav.module.css'
import Link from 'next/link'

export default function Nav() {
  return (
    <div className={sidebar}>
        <Link href='/login'className={link}>Login</Link>
        <Link href='/dashboard'className={link}>General</Link>
        <Link href='/dashboard/affiliates'className={link}>Afiliados</Link>
        <Link href='/dashboard/registerAfiliado'className={link}>Alta Afiliado</Link>
        {/* <Link href='/dashboard/employers'className={link}>Empleadores</Link>
        <Link href='/dashboard/benefits'className={link}>Beneficios</Link>
        <Link href='/dashboard/collects'className={link}>Recaudacion</Link> */}
    </div>
  )
}
