import React from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import Link from 'next/link';
import Button from '../../common/button/button.js';
import TitleBar from '@/components/common/TitleBar/TitleBar.js';
import styles from '../../common/form/form.module.css'; //css para todos los formularios

export default function EmpleadorForm({data,onSubmit, setLimpiarForm }) {
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
  //limpiar formulario
  useEffect(() => {
    setLimpiarForm(() => () => formik.resetForm());
  }, []);
  
  const handleRecaudadorChange = (e) => {
    formik.setFieldValue("recaudadorId", e.target.value === "SinEspecificar" ? null : e.target.value);
  }

  return (
  <div>        
  <TitleBar>
    <h1>Alta empleador</h1>
  </TitleBar>
  <form className={styles.container} onSubmit={formik.handleSubmit}>
    <div className={styles.formContainer}>
      <label htmlFor="razon">Razon Social: </label>
      <input
        type="text"
        id="razon"
        name="razon"
        value={formik.values.razon}
        onChange={formik.handleChange}
        required
      />  
      </div>
      <div className={styles.formContainer}>   
      <label htmlFor="cuit">CUIT: </label>
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
      <label htmlFor="mail">Email: </label>
      <input
        type="mail"
        id="mail"
        name="mail"
        value={formik.values.mail}
        onChange={formik.handleChange}
        
      />
    </div>  
    <div className={styles.formContainer}>
    <label htmlFor="localidad">Localidad: </label>
      <input
        type="text"
        id="localidad"
        name="localidad"
        value={formik.values.localidad}
        onChange={formik.handleChange}
        required
      />
    </div>
    <div className={styles.formContainer}>
   <label htmlFor="recaudadorId">Recaudador: </label>  
    <select
     id="recaudadorId"
     name="recaudadorId"
     value={formik.values.recaudadorId}
     onChange={handleRecaudadorChange}
    required
    >
    <option value="">Selecciona una opción</option>
     {data.map((recaudador) => (
      <option key={recaudador.id} value={recaudador.id}>
          {recaudador.apellidos} - {recaudador.nombres}
    </option>
    ))}
    <option value="SinEspecificar">Sin Especificar</option>
    </select>
    </div>
    <div className={styles.buttonsContainer}>
    <Button type="submit" text="alta" >Dar de Alta</Button>
    <Link href='/dashboard/employers'>
    <Button  type='button' text="volver" > Volver</Button>
    </Link>    
    </div>
</form>
</div>
  );
}
