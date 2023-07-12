// components/RegisterAfiliadoForm.js
import React from 'react';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation.js';
import Button from '../../common/button/button.js';
import Title from '@/components/common/title/title.js';
import styles from '../../common/form/form.module.css'; //css para todos los formularios


export default function AfiliadoForm({data, onSubmit, setLimpiarForm }) {
  
  const router = useRouter();
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
      celular:'',
      tipoAfiliado: '',
      empleadorId: ''
    },
    onSubmit,
  });
   //limpiar formulario
  useEffect(() => {
    setLimpiarForm(() => () => formik.resetForm());
  }, []);

  const handleBack = () => {
   console.log("boton volver")
    // router.push('/dashboard/affiliates');
    
  };


  return (
    <div>        
    <Title text="Alta Afiliado"></Title>
    <form className={styles.container}onSubmit={formik.handleSubmit}>
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
      <label htmlFor="estadoCivil">Estado Civil: </label>
      <select
        id="estadoCivil"
        name="estadoCivil"
        value={formik.values.estadoCivil}
        onChange={formik.handleChange}
      >
        <option value="">Selecciona una opción</option>
        <option value="soltero">Soltero/a</option>
        <option value="casado">Casado/a</option>
        <option value="unionDeHecho">Unión de Hecho</option>
        <option value={null}>Sin especificar</option>
      </select>
    </div>
    <div className={styles.formContainer}>  
    <label htmlFor="sexo">Sexo al nacer: </label>
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
        <option value={null}>Sin especificar</option>
      </select>
      
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
      <label htmlFor="domicilio">Domicilio: </label>
      <input
        type="text"
        id="domicilio"
        name="domicilio"
        value={formik.values.domicilio}
        onChange={formik.handleChange}     
      />
      </div>

      <div className={styles.formContainer}>
      <label htmlFor="celular">Telefono Celular: </label>
      <input
        type="text"
        id="celular"
        name="celular"
        value={formik.values.celular}
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
      <div  className={styles.formContainer}>      
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
    <div className={styles.buttonsContainer}>
    <Button type="submit" text="alta" >Dar de Alta</Button>
    <Button  type='button' text="volver" onChange={handleBack}> Volver</Button>
    </div>
</form>
</div>
  );
}

