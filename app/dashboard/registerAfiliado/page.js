'use client' //directiva que hay que usar en Next13 cuando usamos useState
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useFormik } from 'formik';
import styles from './page.module.css';
import { sendData } from './sendData';
import { mock_empleadores } from './mock';

export default function registerAfiliado() {
  const router=useRouter()
    const [data,setData]=useState([]);
  let user=useSelector(state=>state.user)
  
  useEffect(()=>{
    if (!user.user) {
        router.push('/login')
        return;
    } else
    axios.get(`${process.env.NEXT_PUBLIC_URL_API}/empleadores`,{
        headers: {
          Authorization: 'Bearer ' + user.user.token
        }
       }).then(res=>{
        const data= res.data.data;
    //    console.log(data)
    
      const empleadores=data
        setData(empleadores)
    //    console.log(data)
    }).catch(err=>{
        console.log(err)
    })
},[])

//     //mock para empleadores- prueba - despues traer de la BD
//  const empleadores = mock_empleadores
 const [isButtonDisabled, setIsButtonDisabled] = useState(false);
 const [isLoading, setIsLoading] = useState(false);


 const formik = useFormik({
    initialValues: {
    apellidos: '',
    nombres: '',
    dni: '',
    sexo: '',
    nacimiento: '',
    estadoCivil: '',
    localidad: '',
   // domicilio: '',
    //telCelular: '',
    tipoAfiliado: '',
    empleadorId: ''
     },
    onSubmit: async (values)=> {
        setIsButtonDisabled(true);
        setIsLoading(true);   
        // enviar los datos del formulario y manejar la respuesta
   const response = await sendData(values, user);
   //const response = values

    setIsLoading(false);
    //if (response.success) {
        if(response){
      // Mostrar pop-up de éxito
      alert(JSON.stringify(values, null, 2));
      
      alert ('Afiliado creado con exito')
      formik.resetForm() //limpia el formulario
        }else {
      // Mostrar pop-up de error
      alert("hay campos vacios")
    }
    setIsButtonDisabled(false);
  }
});   
     
    
  
    
return (
    <div className={styles.principal}>        
      <h1>ALTA AFILIADOS</h1>
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
         {/* <label htmlFor="telCelular">Telefono Celular: </label>
        <input
          type="text"
          id="telCelular"
          name="telCelular"
          value={formik.values.telCelular}
          onChange={formik.handleChange}
        //   required
        /> */}

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
          {/* <option value="sinEspecificar">Sin especificar</option> */}
        </select>
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
          <option value="unionHecho">Unión de Hecho</option>
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
         {/* <label htmlFor="domicilio">Domicilio: </label>
        <input
          type="text"
          id="domicilio"
          name="domicilio"
          value={formik.values.domicilio}
          onChange={formik.handleChange}
       
        /> */}
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

<button className={styles.button} type="submit" disabled={isButtonDisabled}>DAR DE ALTA</button>
</form>
</div>

  )
}