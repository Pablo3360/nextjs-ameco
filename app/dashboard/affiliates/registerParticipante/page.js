'use client' 
import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import ParticipanteForm from '../../../../components/participante/participante-form/participante-form';
import sendParticipante from './sendParticipante'

export default function RegisterParticipante() {
  const router = useRouter();
  const [data, setData] = useState([]);
  let user = useSelector(state => state.user);
  const [limpiarForm, setLimpiarForm] = useState(() => () => {});
//traer id Afiliado Titular
  

  const handleSubmit = async values => {
   
    //const response = await sendParticipante(values, user);
    //comentar el de arriba y descomentar el de abajo para pruebas sin guardar en BD
    const response=values;
   
    if (response) {

    Swal.fire({
      title: 'ALTA CON EXITO!',
      text: 'Has Dado de Alta un Nuevo Participante',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cerrar',
      cancelButtonColor: '#d33',
      confirmButtonColor: '#85b9f0', 
      
    })
  
     limpiarForm();      
     
     }}

  return ( 
    <div>       
    <ParticipanteForm 
      data={data} 
      onSubmit={handleSubmit} 
      setLimpiarForm={setLimpiarForm}
    />
    </div>
  );
}
