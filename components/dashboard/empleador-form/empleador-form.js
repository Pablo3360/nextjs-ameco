// components/RegisterAfiliadoForm.js
import { useFormik } from 'formik';
import { useEffect } from 'react';

import styles from './empleador-form.module.css';
import React from 'react';

export default function EmpleadorForm({data,isButtonDisabled, setIsButtonDisabled, onSubmit }) {
 //
  const formik = useFormik({
    initialValues: {
        razon:'',
        cuit:'',
        mail:'',
        localidad:'',
        recaudadorId: ''
    },
    onSubmit,
    
  });
  

  return (
    <div className={styles.principal}>        
    <h1>ALTA EMPLEADOR</h1>
  <form onSubmit={formik.handleSubmit}>
    <div className={styles.formContainer}>
      <label htmlFor="razon">*Razon Social: </label>
      <input
        type="text"
        id="razon"
        name="razon"
        value={formik.values.razon}
        onChange={formik.handleChange}
        required
      />     
      <label htmlFor="cuit">*CUIT: </label>
      <input
        type="text"
        id="cuit"
        name="cuit"
        value={formik.values.cuit}
        onChange={formik.handleChange}
        required
      />
    </div>

    <div className={styles.formContainer}>
      <label htmlFor="mail">*Email: </label>
      <input
        type="mail"
        id="mail"
        name="mail"
        value={formik.values.mail}
        onChange={formik.handleChange}
        required
      />
    </div>  
    
    <div className={styles.formContainer}>
    <label htmlFor="localidad">*Localidad: </label>
      <input
        type="text"
        id="localidad"
        name="localidad"
        value={formik.values.localidad}
        onChange={formik.handleChange}
        required
      />
    </div>
   <div style={{"marginTop":"25px"}}>
   <label htmlFor="recaudadorId">Recaudador: </label>  
    <select
     id="recaudadorId"
     name="recaudadorId"
     value={formik.values.recaudadorId}
    onChange={formik.handleChange}
    >
    <option value="">Selecciona una opción</option>
     {data.map((recaudador) => (
      <option key={recaudador.id} value={recaudador.id}>
          {recaudador.apellido} - {recaudador.nombre}
    </option>
    ))}
    </select>
    </div>

<button className={`${styles.button} ${isButtonDisabled ? 'button-disabled' : ''}`} type="submit">DAR DE ALTA</button>
</form>
</div>
  );
}
