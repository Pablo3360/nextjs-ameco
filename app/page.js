'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import validate from './validate'
import axios from 'axios'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/app/store/userSlice'

export default function Login(){
    const { inputContainer, inputField, inputLabel, inputHighlight, contain, loginButton, svg, circle, inputs, second, login } = styles
    const [ load, setLoad ] = useState(false)
    const [ inputValue, setInputValue] = useState({
        mail: '',
        password: ''
    })
    const [ error, setError ] = useState('')
    const router  = useRouter()

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)

    function handlerChange(e){
        setInputValue({
            ...inputValue,
            [ e.target.name ]: e.target.value
        })
    }
    function handlerSubmit(){

        setError(validate(inputValue))
        if (error) {
            Swal.fire({
                title: 'error',
                text: error,
                icon: 'error',
            })
        } else
        if(validate(inputValue) === ''){
            setLoad(true)
            axios.post(`${process.env.NEXT_PUBLIC_URL_API}/auth/login`,inputValue).then(res=>{
                dispatch(setUser(res.data.data))
                localStorage.setItem('user', JSON.stringify(res.data.data));
                setLoad(false)
                // router.push('/dashboard')
            }).catch(err=>{
                console.log(err)
                // alert(err.message)
                setLoad(false)
                if (err.response.status===403){
                    Swal.fire({
                        title: 'error',
                        text: 'Direccion de correo electronico o contraseña incorrectas',
                        icon: 'error',
                    })
                } else {
                    Swal.fire({
                        title: 'error',
                        text: 'Ocurrio un error inesperado, intente mas tarde',
                        icon: 'error',
                    })
                }
            })
        }
    }
    useEffect(()=>{
        let userJson=localStorage.getItem('user')
        if (userJson) {
            router.push('/dashboard')
        }
    },[user])

    return (
        <div className={login}>
        <div className={contain} >
            <h1 style={{margin: "10px 0"}} >Iniciar Sesión</h1>
            <div className={inputs} onClick={() => setLoad(false)} >
                {/* { error === "" ? "" : <p style={{color: "red", margin: "10px 0"}} >{error}</p>} */}
                <div className={inputContainer}>
                    <input onChange={handlerChange} name="mail" placeholder="mail" className={inputField} type="mail" required={true}/>
                    <label htmlFor="input-field" className={inputLabel}>Enter text</label>
                    <span className={inputHighlight}></span>
                </div>
                <div className={inputContainer}>
                    <input onChange={handlerChange} name="password" placeholder="Contraseña" className={inputField} type="password" required={true}/>
                    <label htmlFor="input-field" className={inputLabel}>Enter text</label>
                    <span className={inputHighlight}></span>
                </div>
            </div>
            <div className={second} >
            {
                load? (
                    <svg className={svg} viewBox="25 25 50 50">
                         <circle className={circle} r="20" cy="50" cx="50"></circle>
                    </svg> 
                    )
                    :(
                        <button onClick={handlerSubmit} className={loginButton}>Ingresar</button>
                    )
            }
            </div>
        </div>
        </div>
    )
}