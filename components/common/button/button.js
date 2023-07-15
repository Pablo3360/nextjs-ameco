import React from 'react'
import styles from './button.module.css'

export default function Button(props) {

  let buttonClass;
  switch (props.text) {
    case 'alta':
      buttonClass =  `${styles.button} ${styles.alta}`;
      break;
    case 'volver':
      buttonClass =  `${styles.button} ${styles.volver}`;
      break;
    case 'cerrar':
      buttonClass =  `${styles.button} ${styles.cerrar}`;
      break;
    default:
      buttonClass = styles.button;
  }

  return (
    <div>
      <button 
      className={buttonClass} 
      type={props.type}
      onClick={props.onClick}
      >
        {props.children}</button>
    </div>
  )
}


