import React from 'react'
import styles from './nav.module.css'

export default function Nav() {
  return (
    <div className={styles.sidebar}>
        <h4>General</h4>
        <h4>Afiliados</h4>
        <h4>Empleadores</h4>
        <h4>Beneficios</h4>
        <h4>Recaudacion</h4>
    </div>
  )
}
