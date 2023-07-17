import React from 'react'
import GeneralTable from '@/components/dashboard/general-table/generalTable';
import styles from './page.module.css'

export default function Dashboard() {

  const mock = [
    { type: 'Activo', amount: 10 },
    { type: 'Adherente', amount: 5 },
    { type: 'Afiliados Titulares', amount: 8 },
    { type: 'Conyuges', amount: 3 },
    { type: 'Participantes', amount: 12 }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>General</h3>
        <GeneralTable data={mock}/>
      </div>
    </div>
  )
}