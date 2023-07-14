import axios from 'axios';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default async function sendData(values, user) {
    // const valores= values;
    // console.log("Valores:"  + valores)
    const userRoles=user.user.roles
    console.log(values)
    if(userRoles.includes('admin')||userRoles.includes('secretario')|| userRoles.includes('presidente')){
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL_API}/afiliados/register-afiliado`,
        values,
        {
          headers: {
            Authorization: 'Bearer ' + user.user.token
          }
        }
      );
      return response.data;
    } catch (error) {
      if(400)
      //alert error 400
      Swal.fire({
        icon: 'error',
        title:"Error",
        html: `<h3>El Afiliado con DNI ${values.dni}</h3>`,
        text: 'YA EXISTE',
        confirmButtonColor: '#85b9f0',        
     
      });
    }
} else{
    // alert error 401 --No autorizado o no logueado
    Swal.fire({
      icon: 'error',
      title: 'No Tienes Autorizacion!',
      text: 'O No estas Logueado!',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#85b9f0',  
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.replace('/dashboard/affiliates')   
      }
    });
}
  }
  