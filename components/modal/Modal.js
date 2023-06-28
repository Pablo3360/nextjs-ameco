import styles from './Modal.module.css'

export default function Modal({message, close}){

    const { contain, modalMessage, modalButton } = styles
    return (
        <div className={contain}>
            <p className={modalMessage} >{message}</p>
            <button className={modalButton} onClick={close} >Aceptar</button>
        </div>
    )
}