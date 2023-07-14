// components/RegisterAfiliadoForm.js
import React from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import Link from 'next/link';
import Button from '../../common/button/button.js';
import Title from '@/components/common/title/title.js';
import styles from '../../common/form/form.module.css'; //css para todos los formularios


export default function ParticipanteForm({data, onSubmit, setLimpiarForm }) {
  
  
  const formik = useFormik({
    initialValues: {
      apellidos: '',
      nombres: '',
      dni: '',
      sexo: '',
      nacimiento: '',
      relacion: '',
      afiliadoId: '',
    },
    onSubmit,
  });

 
  const handleSexoChange = (e) => {
    formik.setFieldValue("sexo", e.target.value === "SinEspecificar" ? null : e.target.value);
  }
   //limpiar formulario
  useEffect(() => {
    setLimpiarForm(() => () => formik.resetForm());
  }, []);

 
  return (
    <div  style={{ marginLeft:"5%" }}>        
    <Title text="Alta Participante"></Title>
    <form className={styles.container}onSubmit={formik.handleSubmit}>
    <div  className={`${styles.formContainer} ${styles.formBorder}`}>      
    <label htmlFor="afiliadoId">Participante del Afiliado: </label> 
    <input
        type="text"
        id="afiliadoId"
        name="afiliadoId"
        value={formik.values.afiliadoId}
        onChange={formik.handleChange}
        required
      />       
    </div>
    <div className={styles.formContainer}>
      <label htmlFor="apellidos">Apellido: </label>
     
      <input
        type="text"
        id="apellidos"
        name="apellidos"
        value={formik.values.apellidos}
        onChange={formik.handleChange}
        required
      /> 
      </div>
      <div className={styles.formContainer}>    
      <label htmlFor="nombres">Nombres: </label>
      <input
        type="text"
        id="nombres"
        name="nombres"
        value={formik.values.nombres}
        onChange={formik.handleChange}
        required
      />
    </div>

    <div className={styles.formContainer}>
      <label htmlFor="dni">DNI: </label>
      <input
        type="text"
        id="dni"
        name="dni"
        value={formik.values.dni}
        onChange={formik.handleChange}
        required
      />
      </div>
      <div className={styles.formContainer}>  
       <label htmlFor="nacimiento">Fecha Nacimiento: </label>
      <input
        style={{borderRadius:"1rem"}}
        type="date"
        id="nacimiento"
        name="nacimiento"
        value={formik.values.nacimiento}
        onChange={formik.handleChange}
        required
      />     
    </div>    
     <div className={styles.formContainer}>  
    <label htmlFor="sexo">Sexo al nacer: </label>
      <select
        id="sexo"
        name="sexo"
        value={formik.values.sexo}
        onChange={handleSexoChange}
        required
      >
        <option value="">Selecciona una opción</option>
        <option value="varon">Varón</option>
        <option value="mujer">Mujer</option>
        <option value="SinEspecificar">Sin Especificar</option>
      </select>
      
    </div>
      <div  className={styles.formContainer}>
      <label htmlFor="relacion">Relacion: </label>
      <select
        id="relacion"
        name="relacion"
        value={formik.values.relacion}
        onChange={formik.handleChange}
      >
      <option value="">Selecciona una opción</option>
      <option value="pareja">Pareja</option>
      <option value="hijo">Hijo/a</option>
      <option value="padre">padre/madre</option>
      </select>
      </div>
     
    <div className={styles.buttonsContainer}>
    <Button type="submit" text="alta" >Dar de Alta</Button>
    <Link href='/dashboard/affiliates'>
    <Button  type='button' text="volver" > Volver</Button>
    </Link>    
    </div>
</form>
</div>
  );
}

