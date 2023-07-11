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

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async values => {
    setIsButtonDisabled(false);
    setIsLoading(false);
    //const response = await sendData(values, user);
    //comentar el de arriba y descomentar el de abajo para pruebas sin guardar en BD
    const response=values;
    setIsLoading(false);
    if (response) {

    Swal.fire({
      title: '',
      text: 'AFILIADO  CREADO CON EXITO',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ir a la Ficha del Afiliado',
      cancelButtonText: 'Cerrar'
      
    }).then(result => {
      if (result.isConfirmed) {
        // ficha del afiliado
        Swal.fire({
          title: 'Ficha del Afiliado',
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
    <div style={{marginLeft:"2%"}}>       
    <AfiliadoForm 
      data={data} 
      onSubmit={handleSubmit} 
      setLimpiarForm={setLimpiarForm}
    />
    </div>
  );
}
