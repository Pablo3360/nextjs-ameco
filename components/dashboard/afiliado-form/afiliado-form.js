// components/RegisterAfiliadoForm.js
import React from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import Button from '../../common/button/button.js';
import Title from '@/components/common/title/title.js';
import styles from './afiliado-form.module.css';


export default function AfiliadoForm({data, onSubmit, setLimpiarForm }) {
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
  }, []);

  return (
    <div>        
     <Title text="Alta Afiliado"></Title>
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
        style={{borderRadius:"1rem"}}
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
    
    <div className={styles.formContainerBorder}>
    <label htmlFor="sexo">*Sexo al nacer: </label>
      <select
       style={{borderRadius:"1rem"}}
        id="sexo"
        name="sexo"
        value={formik.values.sexo}
        onChange={formik.handleChange}
        required
      >
        <option value="">Selecciona una opción</option>
        <option value="varon">Varón</option>
        <option value="mujer">Mujer</option>
        {/* <option value="sinEspecificar">Sin especificar</option> */}
      </select>
      
      <label htmlFor="estadoCivil">Estado Civil: </label>
      <select
       style={{borderRadius:"1rem"}}
        id="estadoCivil"
        name="estadoCivil"
        value={formik.values.estadoCivil}
        onChange={formik.handleChange}
      >
        <option value="">Selecciona una opción</option>
        <option value="soltero">Soltero/a</option>
        <option value="casado">Casado/a</option>
        <option value="unionDeHecho">Unión de Hecho</option>
        {/* <option value="sinEspecificar">Sin especificar</option> */}
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
    <div  className={styles.formContainerBorder}>
      <label htmlFor="tipoAfiliado">Tipo de Afiliado: </label>
      <select
        style={{borderRadius:"1rem"}}
        id="tipoAfiliado"
        name="tipoAfiliado"
        value={formik.values.tipoAfiliado}
        onChange={formik.handleChange}
      >
      <option value="">Selecciona una opción</option>
      <option value="activo">Activo</option>
      <option value="adherente">Adherente</option>
      </select>
      
        <label htmlFor="empleadorId">Empleador: </label>
        <select
        style={{borderRadius:"1rem"}}
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
    <div className={styles.buttonsContainer}>
    <Button type="submit" text="alta" >Dar de Alta</Button>
    <Button type="" text="volver" >Volver</Button>
    </div>
</form>
</div>
  );
}

