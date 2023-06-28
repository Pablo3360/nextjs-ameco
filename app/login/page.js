'use client'
import { useState } from 'react'
import styles from './page.module.css'
import validate from './validate'

export default function Login(){

    const { inputContainer, inputField, inputLabel, inputHighlight, contain, loginButton, svg, circle, inputs, second, login } = styles
    const [ load, setLoad ] = useState(false)
    const [ inputValue, setInputValue] = useState({
        email: '',
        password: ''
    })
    const [ error, setError ] = useState('')

    function handlerChange(e){
        // e.preventDefault()
        setInputValue({
            ...inputValue,
            [ e.target.name ]: e.target.value
        })
    }

    function handlerSubmit(){
        if(inputValue.email === '' | inputValue.password === '') return alert('Debe llenar todos los campos')
        setError(validate(inputValue))
        if(validate(inputValue) === ''){
            setLoad(true)
            // return alert('suseful')
            
        }
    }
    return (
        <div className={login}>
        <div className={contain} >
            <h1>Iniciar Sesión</h1>
            <div className={inputs} onClick={() => setLoad(false)} >
                { error === "" ? "" : <p style={{color: "red"}} >{error}</p>}
                <div className={inputContainer}>
                    <input onChange={handlerChange} name="email" placeholder="Email" className={inputField} type="email" required="true"/>
                    <label for="input-field" className={inputLabel}>Enter text</label>
                    <span className={inputHighlight}></span>
                </div>
                <div className={inputContainer}>
                    <input onChange={handlerChange} name="password" placeholder="Contraseña" className={inputField} type="password" required="true"/>
                    <label for="input-field" className={inputLabel}>Enter text</label>
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