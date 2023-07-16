'use client' 
import React from 'react';
import { useRouter } from 'next/navigation.js';
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
  const affiliateData = useSelector((state)=> state.afiliado)
 // console.log("afiliado : " +affiliateData.afiliado.id)
  const [limpiarForm, setLimpiarForm] = useState(() => () => {});
//traer data Afiliado Titular
 const affiliateId = affiliateData.afiliado.id;
 const Affiliatenombre = affiliateData.afiliado.nombres;
const Affiliateapellido = affiliateData.afiliado.apellidos;
 
 
  const handleSubmit = async values => {   
   // console.log(values)
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
       //router.push('/dashboard/affiliates/details/' + affiliateId)
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

  return ( 
    <div>       
    <ParticipanteForm 
      id={affiliateId}
      nombre={Affiliatenombre}
      apellido={Affiliateapellido}
      onSubmit={handleSubmit} 
      setLimpiarForm={setLimpiarForm}
    />
    </div>
  );
}
