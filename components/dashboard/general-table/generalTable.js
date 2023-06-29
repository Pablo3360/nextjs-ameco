import React from 'react';
import styles from './general-table.module.css'

const GeneralTable = ({ datos }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.headerCell}>Tipo</th>
          <th className={styles.headerCell}>Cantidad</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((row, index) => (
          <tr key={index}>
            <td className={styles.cell}>{row.type}</td>
            <td className={styles.cell}>{row.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GeneralTable;