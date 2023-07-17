'use client' 
import React from 'react';
import { useRouter } from 'next/navigation.js';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import ParticipanteForm from '@/components/dashboard/afiliado-form/participante-form.js';
import sendParticipante from './sendParticipante.js'

export default function RegisterParticipante() {
  const router = useRouter();
  const [data, setData] = useState([]);
  let afiliado = useSelector(state => state.afiliado.afiliado)
  console.log("Afilado de Slice: "+ afiliado)
  let user = useSelector(state => state.user);
  const [limpiarForm, setLimpiarForm] = useState(() => () => {}); 
  const handleSubmit = async values => {   
     try{
    const response = await sendParticipante(values, user);
    //comentar el de arriba y descomentar el de abajo para pruebas sin guardar en BD
    //const response=values; 
    if (response) {
    Swal.fire({
      title: 'ALTA CON EXITO!',
      text: 'Has Dado de Alta un Nuevo Participante',
      icon: 'success',
      //showCancelButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#85b9f0',       
    }).then((result) => {
      if (result.isConfirmed) {
        // redirige al detalle del afiliado titular
        router.back();
      }else{
        Swal.fire({
          title: 'HA OCURRIDO UN ERROR!',
          text: 'Algo salio mal, Intentalo Nuevamente',
          icon: 'error',
          //showCancelButton: true,
          confirmButtonText: 'Aceptar',
          confirmButtonColor: '#85b9f0', 
        })
      }
    })  
     limpiarForm();    
     
    }
  }
  catch (error) {
console.error(error);
// manejar el error
}
    }
    if (!afiliado) {
      return null; // o mostrar un mensaje de error o un componente de carga
    }
  return ( 
    <div>      
     
    <ParticipanteForm 
      id={afiliado.id}
      nombre={afiliado.nombres}
      apellido={afiliado.apellidos}
      onSubmit={handleSubmit} 
      setLimpiarForm={setLimpiarForm}
    />
   
    </div>
  );
}