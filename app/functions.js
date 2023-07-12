import { logOut } from "./store/userSlice";

export function handleLogOut(dispatch,router){
    // router=useRouter();
    // dispatch=useDispatch()
    dispatch(logOut());
    localStorage.clear();
    router.push('/')
  }
//transforma fecha tal que 1992-01-18T00:00:00.000Z => 18/01/1992
export function formatDate(date){
    const fechaStr = date;
    const fechaObj = new Date(fechaStr);

    const dia = fechaObj.getDate();
    const mes = fechaObj.getMonth() + 1;
    const año = fechaObj.getFullYear();

    const fechaFormateada = `${dia}/${mes < 10 ? '0' + mes : mes}/${año}`;
    return fechaFormateada;
}
//transforma fecha en Epoch time a DD/MM/AAAA
export function dateToNumber(fecha) {
    var partes = fecha.split('/');
    var fechaObjeto = new Date(partes[2], partes[1] - 1, partes[0]);
    var numero = fechaObjeto.getTime();

    return numero;
}