import axios from 'axios';

export async function sendData(values, user) {
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
      console.log(error);
    }
} else( alert("No tiene el rol permitido para esta accion"))
  }
  