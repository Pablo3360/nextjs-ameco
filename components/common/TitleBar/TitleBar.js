import React from 'react'
import styles from './titlebar.module.css'

export default function TitleBar(props) {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}
