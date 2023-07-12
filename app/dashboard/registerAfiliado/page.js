'use client' //directiva que hay que usar en Next13 cuando usamos useState

import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
//import {useFormik } from 'formik';
import AfiliadoForm from '../../../components/dashboard/afiliado-form/afiliado-form';
import sendData from './sendData'

export default function RegisterAfiliado() {
  const router = useRouter();
  const [data, setData] = useState([]);
  let user = useSelector(state => state.user);
  const [limpiarForm, setLimpiarForm] = useState(() => () => {});

  useEffect(() => {
    if (!user.user) {
      router.push('/');
      return;
    } else {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL_API}/empleadores`, {
          headers: {
            Authorization: 'Bearer ' + user.user.token
          }
        })
        .then(res => {
          const data = res.data.data;
          const empleadores = data;
          setData(empleadores);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []); 

  

  const handleSubmit = async values => {
   
    const response = await sendData(values, user);
    //comentar el de arriba y descomentar el de abajo para pruebas sin guardar en BD
    //const response=values;
   
    if (response) {

    Swal.fire({
      title: 'ALTA CON EXITO!',
      text: 'Has Dado de Alta un Nuevo Afiliado',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ir a la Ficha del Afiliado',
      cancelButtonText: 'Cerrar'
      
    }).then(result => {
      if (result.isConfirmed) {
        // ficha del afiliado
        Swal.fire({
          title: 'Ficha del Empleador',
          text: Object.entries(values)
          .map(([key, value]) => `${key}: ${value}`)
          .join('\n'),
          confirmButtonText: 'Cerrar'
        });
      
     }      
     limpiarForm();      
    });    
     }}


  return ( 
    <div>       
    <AfiliadoForm 
      data={data} 
      onSubmit={handleSubmit} 
      setLimpiarForm={setLimpiarForm}
    />
    </div>
  );
}
