'use client'
import React from 'react'
import { useState } from 'react'
import styles from './page.module.css'



export default function CreateAffiliates() {
    const [inputValue, setInputValue] = useState({
        apellidos: '',
        nombres: '',
        dni: '',
        sexo: '',
        nacimiento: '',
        estadoCivil: '',
        localidad: '',
        domicilio: '',
        celular: '',
        tipoAfiliado: '',
        empleador: ''
      });
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario
      };
  
  return (
    <div className={styles.panel}>
        <div className={styles.contain}>
        <h1 style={{margin: "10px 0", color:'blue'}} >Alta Afiliado</h1>
        <div className={styles.inputContainer}>
             {/*  */}
             
            
    <form onSubmit={handleSubmit}>
      <div className={styles.inputContainer} htmlFor="apellidos">
      <input  className={styles.inputField} 
        type="text"
        id="apellidos"
        name="apellidos"
        placeholder="Apellido"
        value={inputValue.apellidos}
        onChange={handleInputChange}
        required
      />
      </div>

      <div className={styles.inputContainer} htmlFor="nombres">
      <input  className={styles.inputField} 
        type="text"
        id="nombres"
        name="nombres"
        placeholder="Nombres"
        value={inputValue.nombres}
        onChange={handleInputChange}
        required
      />
      </div>

      
      <div className={styles.inputContainer} htmlFor="dni">
      <input  className={styles.inputField} 
        type="text"
        id="dni"
        name="dni"
        placeholder="DNI"
        value={inputValue.dni}
        onChange={handleInputChange}
        required
      />
      </div>
      <div >
      <label className={styles.inputContainer} htmlFor="sexo">Seleccione Sexo</label>
      
      <select className={''}
        id="sexo"
        name="sexo"
        value={inputValue.sexo}
        onChange={handleInputChange}
        required
      >
        <option value="">--Selecciona una opción--</option>
        <option value="varon">Varón</option>
        <option value="mujer">Mujer</option>
        <option value="sin especificar">Sin especificar</option>
      </select>
      </div>
       
      <div className={styles.inputContainer} htmlFor="nacimiento">
      <input  className={styles.inputField} 
        type="text"
        id="nacimiento"
        name="nacimiento"
        placeholder="Fecha de Nacimiento"
        value={inputValue.nacimiento}
        onChange={handleInputChange}
        required
      />
      </div>
      <div >
      <label className={styles.inputContainer} htmlFor="estadoCivil">Seleccione Estado Civil</label>
      <select
        id="estadoCivil"
        name="estadoCivil"
        value={inputValue.estadoCivil}
        onChange={handleInputChange}
      >
        <option value="">--Selecciona una opción--</option>
        <option value="soltero/a">Soltero/a</option>
        <option value="casado/a">Casado/a</option>
        <option value="union de hecho">Unión de hecho</option>
        <option value="sin especificar">Sin especificar</option>
      </select>
      </div>

      <div className={styles.inputContainer} htmlFor="localidad">
      <input  className={styles.inputField} 
        type="text"
        id="localidad"
        name="localidad"
        placeholder="Localidad"
        value={inputValue.localidad}
        onChange={handleInputChange}
        required
      />
      </div>

      <div className={styles.inputContainer} htmlFor="domicilio">
      <input  className={styles.inputField} 
        type="text"
        id="domicilio"
        name="domicilio"
        placeholder="Domicilio"
        value={inputValue.domicilio}
        onChange={handleInputChange}
        required
      />
      </div>
      <div className={styles.inputContainer} htmlFor="telefonoMovil">
      <input  className={styles.inputField} 
        type="text"
        id="telefonoMovil"
        name="telefonoMovil"
        placeholder="Numero de Celular"
        value={inputValue.telefonoMovil}
        onChange={handleInputChange}
        required
      />
      </div>
      </form>  
      <div className={styles.inputContainer}>
      <button onClick={''} className={styles.loginButton}>Aceptar</button> 
      <br></br>
      </div>
        </div>
        

        </div> 
      
    </div>

  )
}


