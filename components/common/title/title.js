import React from 'react';
import styles from './title.module.css';

export default function Title({text}) {
  return (
    <div>
    <h2 className={styles.title}>{text}</h2>  
    </div>
  )
}

