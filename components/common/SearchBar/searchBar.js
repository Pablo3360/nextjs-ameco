import React from 'react'
import lupa from '@/app/icons/lupa.png'
import styles from './searchBar.module.css'
export default function SearchBar(props) {
    console.log('props :',props)
  return (
    <div className={styles.container}>
          <input
            className={styles.search} 
            type="text"
            value={props.value} 
            placeholder='Buscar...'
            onChange={props.onChange}
          />
          <img src={lupa.src} className={styles.icon} alt="" />
    </div>
  )
}
