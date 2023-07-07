
export default function validate({mail, password}){

    const regmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let error = ''
    switch(true){
        case !regmail.test(mail):
            error = 'Direccion de correo o contraseña inválidos'
            break;
        case password.length <= 0:
            error = 'Direccion de correo o contraseña inválidos'
            break;
    }
    return error
}