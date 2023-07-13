// components/RegisterAfiliadoForm.js
import { useFormik } from 'formik';
import { useEffect } from 'react';
import styles from '../../common/form/form.module.css'; //css para todos los formularios
import Button from '../../common/button/button.js';
import Title from '@/components/common/title/title.js';
import React from 'react';

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
  

  return (
  <div>        
  <Title text="Alta Empleador"></Title>
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
        required
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

    <div className={styles.buttonsContainer}>
    <Button type="submit" text="alta" >Dar de Alta</Button>
    <Button type="" text="volver" >Volver</Button>
    </div>
</form>
</div>
  );
}
