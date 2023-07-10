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
//agregar Recaudadores

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = async values => {
    setIsButtonDisabled(false);
    setIsLoading(false);
    //const response = await sendEmpleador(values, user);
    //comentar el de arriba y descomentar el de abajo para pruebas sin guardar en BD
    const response=values;
    setIsLoading(false);
    if (response) {

    Swal.fire({
      title: 'Resultado positivo',
      text: 'Empleador creado con éxito',
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
       
      
    });
    
     }}


  return ( 
    <div style={{"marginTop":"40px","marginLeft":"80px"}}>       
    <EmpleadorForm 
      data={data} 
      isButtonDisabled={isButtonDisabled} 
      setIsButtonDisabled={setIsButtonDisabled} 
      onSubmit={handleSubmit} 
      
    />
    </div>
  );
}
