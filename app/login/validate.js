
export default function validate({email, password}){

    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let error = ''
    switch(true){
        case !regEmail.test(email):
            error = 'Direccion de correo o contraseña inválidos'
            break;
        case password.length <= 0:
            error = 'Direccion de correo o contraseña inválidos'
            break;
    }
    return error
}