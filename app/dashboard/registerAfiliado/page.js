'use client' //directiva que hay que usar en Next13 cuando usamos useState

import React from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import AfiliadoForm from '../../../components/dashboard/afiliado-form/afiliado-form';

export default function RegisterAfiliado() {
  const router = useRouter();
  const [data, setData] = useState([]);
  let user = useSelector(state => state.user);

  useEffect(() => {
    if (!user.user) {
      router.push('/login');
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
    //   alert(JSON.stringify(values, null, 2));
    //   alert('Afiliado creado con exito');
    // } else {
    //   alert('hay campos vacios');
    // }
    // setIsButtonDisabled(false);
    Swal.fire({
      title: 'Resultado positivo',
      text: 'Afiliado creado con éxito',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Ir a la Ficha del Afiliado',
      cancelButtonText: 'Cerrar'
    }).then(result => {
      if (result.isConfirmed) {
        // código para ir a la ficha del afiliado
        alert(JSON.stringify(values, null, 2));
      } else {
        
        formik.resetForm();
      }
    });
     }}

  return ( 
    <div style={{"marginTop":"40px","marginLeft":"80px"}}>       
    <AfiliadoForm 
      data={data} 
      isButtonDisabled={isButtonDisabled} 
      setIsButtonDisabled={setIsButtonDisabled} 
      onSubmit={handleSubmit} 
    />
    </div>
  );
}
