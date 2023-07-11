import React from 'react'
import styles from './buttons.module.css'

export default function ButtonForm (props) {
  return (
    <div>
      <button className={styles.button} type={props.type}>{props.children}</button>
    </div>
  )
}


