import axios from 'axios';
import Swal from 'sweetalert2';

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
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El Afiliado ya Existe'
      });
    }
} else{
  Swal.fire({
    icon: 'error',
    title: 'Disculpa',
    text: 'No Tienes Autorizacion!'
  });
}
  }
  