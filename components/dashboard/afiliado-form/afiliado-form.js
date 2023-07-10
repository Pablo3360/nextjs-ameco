// components/RegisterAfiliadoForm.js
import { useFormik } from 'formik';
import { useEffect } from 'react';

import styles from './afiliado-form.module.css';
import React from 'react';

export default function AfiliadoForm({data,isButtonDisabled, setIsButtonDisabled, onSubmit, setLimpiarForm }) {
 //
  const formik = useFormik({
    initialValues: {
      apellidos: '',
      nombres: '',
      dni: '',
      sexo: '',
      nacimiento: '',
      estadoCivil: '',
      localidad: '',
      domicilio:'',
      telCelular:'',
      tipoAfiliado: '',
      empleadorId: ''
    },
    onSubmit,
    
  });
  useEffect(() => {
    setLimpiarForm(() => () => formik.resetForm());
  }, [formik, setLimpiarForm]);

  return (
    <div className={styles.principal}>        
    <h1>ALTA AFILIADO</h1>
  <form onSubmit={formik.handleSubmit}>
    <div className={styles.formContainer}>
      <label htmlFor="apellidos">*Apellido: </label>
      <input
        type="text"
        id="apellidos"
        name="apellidos"
        value={formik.values.apellidos}
        onChange={formik.handleChange}
        required
      />     
      <label htmlFor="nombres">*Nombres: </label>
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
      <label htmlFor="dni">*DNI: </label>
      <input
        type="text"
        id="dni"
        name="dni"
        value={formik.values.dni}
        onChange={formik.handleChange}
        required
      />
       <label htmlFor="nacimiento">*Fecha Nacimiento: </label>
      <input
        type="date"
        id="nacimiento"
        name="nacimiento"
        value={formik.values.nacimiento}
        onChange={formik.handleChange}
        required
      />
       <label htmlFor="telCelular">Telefono Celular: </label>
      <input
        type="text"
        id="telCelular"
        name="telCelular"
        value={formik.values.telCelular}
        onChange={formik.handleChange}
      //   required
      />

    </div>
    <div className={styles.formContainer}>
    <label htmlFor="sexo">*Sexo al nacer: </label>
      <select
        id="sexo"
        name="sexo"
        value={formik.values.sexo}
        onChange={formik.handleChange}
        required
      >
        <option value="">Selecciona una opción</option>
        <option value="varon">Varón</option>
        <option value="mujer">Mujer</option>
        <option value="sinEspecificar">Sin especificar</option>
      </select>
      <label htmlFor="estadoCivil">Estado Civil: </label>
      <select
        id="estadoCivil"
        name="estadoCivil"
        value={formik.values.estadoCivil}
        onChange={formik.handleChange}
      >
        <option value="">Selecciona una opción</option>
        <option value="soltero/a">Soltero/a</option>
        <option value="casado/a">Casado/a</option>
        <option value="unionDeHecho">Unión de Hecho</option>
        <option value="sinEspecificar">Sin especificar</option>
      </select>
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
       <label htmlFor="domicilio">Domicilio: </label>
      <input
        type="text"
        id="domicilio"
        name="domicilio"
        value={formik.values.domicilio}
        onChange={formik.handleChange}
     
      />
    </div>
    <div  className={styles.formContainer}>
<label htmlFor="tipoAfiliado">Tipo de Afiliado: </label>
<select
  id="tipoAfiliado"
  name="tipoAfiliado"
  value={formik.values.tipoAfiliado}
  onChange={formik.handleChange}
>
  <option value="">Selecciona una opción</option>
  <option value="activo">Activo</option>
  <option value="adherente">Adherente</option>
</select>
</div>

<div>
<label htmlFor="empleadorId">Empleador: </label>
<select
  id="empleadorId"
  name="empleadorId"
  value={formik.values.empleadorId}
  onChange={formik.handleChange}
>
  <option value="">Selecciona una opción</option>
  {data.map((empleador) => (
    <option key={empleador.id} value={empleador.id}>
      {empleador.razon} - {empleador.cuit}
    </option>
  ))}
</select>
</div>

<button className={`${styles.button} ${isButtonDisabled ? 'button-disabled' : ''}`} type="submit">DAR DE ALTA</button>
</form>
</div>
  );
}

