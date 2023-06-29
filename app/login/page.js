'use client'
import { useState } from 'react'
import styles from './page.module.css'
import validate from './validate'
// import Modal from 'react-modal'
import Modal from '@/components/modal/Modal'
import { useRouter } from 'next/navigation'


export default function Login(){

    const { inputContainer, inputField, inputLabel, inputHighlight, contain, loginButton, svg, circle, inputs, second, modal, login } = styles
    const [ load, setLoad ] = useState(false)
    const [ inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    const [ error, setError ] = useState('')
    const [ loginModal, setLoginModal ] = useState(false)
    const [ modalLabel, setModalLabel ] = useState('')
    const router  = useRouter()

    function handlerChange(e){
        // e.preventDefault()
        setInputValue({
            ...inputValue,
            [ e.target.name ]: e.target.value
        })
    }

    function handlerSubmit(){
        if(inputValue.email === '' | inputValue.password === '') {
            setModalLabel('Debe llenar todos los campos')
            setLoginModal(true)
        }
        setError(validate(inputValue))
        if(validate(inputValue) === ''){
            setLoad(true)
            setTimeout(() => {
                setLoad(false)
            }, 3000)
            router.push('/')
            // return alert('suseful')
            
        }
        else{
            setModalLabel(error)
            setLoginModal(true)
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
                    <input onChange={handlerChange} name="email" placeholder="Email" className={inputField} type="email" required={true}/>
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