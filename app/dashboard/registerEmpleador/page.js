'use client' //directiva que hay que usar en Next13 cuando usamos useState

import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import EmpleadorForm from '../../../components/dashboard/empleador-form/empleador-form';
import { sendEmpleador } from './sendEmpleador';

export default function RegisterEmpleador() {
  const router = useRouter();
  const [data, setData] = useState([]);
  let user = useSelector(state => state.user);
  const [limpiarForm, setLimpiarForm] = useState(() => () => {});
//agregar Recaudadores

 

  const handleSubmit = async values => {
    
    //const response = await sendEmpleador(values, user);
    //comentar el de arriba y descomentar el de abajo para pruebas sin guardar en BD
    const response=values;
   
    if (response) {

    Swal.fire({
      title: '',
      text: 'EMPLEADOR DADO DE ALTA CON EXITO',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ir a la Ficha del Empleador',
      cancelButtonText: 'Cerrar'
      
    }).then(result => {
      if (result.isConfirmed) {
        // ficha del empleador
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
    <EmpleadorForm 
      data={data} 
      onSubmit={handleSubmit} 
      setLimpiarForm={setLimpiarForm}
    />
    </div>
 
  );
}
