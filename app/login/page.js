'use client'
import { useState } from 'react'
import styles from './page.module.css'
import validate from './validate'
import axios from 'axios'
import Modal from '@/components/modal/Modal'
import { useRouter } from 'next/navigation'
import { useDispatch,useSelector } from 'react-redux'
import { setUser } from '@/app/store/userSlice'

export default function Login(){
    const { inputContainer, inputField, inputLabel, inputHighlight, contain, loginButton, svg, circle, inputs, second, modal, login } = styles
    const [ load, setLoad ] = useState(false)
    const [ inputValue, setInputValue] = useState({
        mail: '',
        password: ''
    })
    const [ error, setError ] = useState('')
    const [ loginModal, setLoginModal ] = useState(false)
    const [ modalLabel, setModalLabel ] = useState('')
    const router  = useRouter()

    const dispatch=useDispatch();

    function handlerChange(e){
        setInputValue({
            ...inputValue,
            [ e.target.name ]: e.target.value
        })
    }

    function handlerSubmit(){
        if(inputValue.mail === '' | inputValue.password === '') {
            setModalLabel('Debe llenar todos los campos')
            setLoginModal(true)
        }
        setError(validate(inputValue))
        if(validate(inputValue) === ''){
            setLoad(true)
            axios.post(`${process.env.NEXT_PUBLIC_URL_API}/auth/login`,inputValue).then(res=>{
                dispatch(setUser(res.data.data))
                setLoad(false)
                router.push('/dashboard')
            }).catch(err=>{
                console.log(err)
                alert(err.message)
                setLoad(false)
            })
        }
    }
    function closeModal(){
        setLoginModal(false)
    }
    return (
        <div className={login}>
        <div className={contain} >
            <h1 style={{margin: "10px 0"}} >Iniciar Sesión</h1>
            <div className={inputs} onClick={() => setLoad(false)} >
                { error === "" ? "" : <p style={{color: "red", margin: "10px 0"}} >{error}</p>}
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
            {loginModal? <Modal message={modalLabel} close={closeModal} ></Modal> : ""}
            {/* <Modal className={modal} isOpen={loginModal} onRequestClose={closeModal} contentLabel='registrado' ></Modal> */}
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