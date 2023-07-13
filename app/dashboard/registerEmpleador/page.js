'use client' 
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
//import {useFormik } from 'formik';
import EmpleadorForm from '../../../components/dashboard/empleador-form/empleador-form';
import sendEmpleador  from './sendEmpleador';

export default function RegisterAfiliado() {
  const router = useRouter();
  const [data, setData] = useState([]);
  let user = useSelector(state => state.user);
  const [limpiarForm, setLimpiarForm] = useState(() => () => {});

  // useEffect(() => {
  //   if (!user.user) {
  //     router.push('/');
  //     return;
  //   } else {
  //     axios
  //       .get(`${process.env.NEXT_PUBLIC_URL_API}/recaudadores`, {
  //         headers: {
  //           Authorization: 'Bearer ' + user.user.token
  //         }
  //       })
  //       .then(res => {
  //         const data = res.data.data;
  //         const recaudadores = data;
  //         setData(recaudadores);
  //       })
  //       .catch(err => {
  //         // alert error 401 --No autorizado o no logueado
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'No Tienes Autorizacion!',
  //     text: 'O No estas Logueado!',
  //     confirmButtonText: 'Cerrar',
  //     confirmButtonColor: '#85b9f0',  
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       window.location.replace('/dashboard')   
  //     }
  //   })
  //   });
  //   }
  // }, []); 

  

  const handleSubmit = async values => {
   
    const response = await sendEmpleador(values, user);
    //comentar el de arriba y descomentar el de abajo para pruebas sin guardar en BD
    //const response=values;
   
    if (response) {

    Swal.fire({
      title: 'ALTA CON EXITO!',
      text: 'Has Dado de Alta un Nuevo Empleador',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ir a Alta Afiliado',
      cancelButtonText: 'Cerrar',
      cancelButtonColor: '##f8b7ba',
      confirmButtonColor: '#85b9f0', 
      
    }).then(result => {
      if (result.isConfirmed) {
        window.location.replace('/dashboard/registerAfiliado');      
     }      
     limpiarForm();      
    });    
     }}


  return ( 
    <div>       
    <EmpleadorForm 
      data={data} 
      onSubmit={handleSubmit} 
      setLimpiarForm={setLimpiarForm}
    />
    </div>
  );
}
