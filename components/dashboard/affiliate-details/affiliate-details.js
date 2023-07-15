import { formatDate } from "@/app/functions"
import styles from './affiliate-details.module.css'

export default function AffiliateInfo({affiliateData}) {
  return (
    <div className={styles.afiliado}>
        <div>
            <p ><strong>Apellidos:</strong> {affiliateData.apellidos}</p>
            <p ><strong>Nombres:</strong> {affiliateData.dni}</p>
            <p ><strong>Sexo:</strong> {affiliateData.sexo}</p>
            <p ><strong>Fecha de Nacimiento:</strong> {formatDate(affiliateData.nacimiento)}</p>
        </div>
        <div>
            <p ><strong>Estado Civil:</strong> {affiliateData.estadoCivil}</p>
            <p ><strong>Localidad:</strong> {affiliateData.localidad}</p>
            <p ><strong>Tipo de afiliado:</strong> {affiliateData.tipoAfiliado}</p>
            <p ><strong>Fecha de alta:</strong> {formatDate(affiliateData.createdAt)}</p>
        </div>
        <div className={styles.empleador}>
            <p><strong>Empleador del titular</strong></p>
            <p ><strong>Razón Social:</strong> {affiliateData.empleador?.razon}</p>
            <p ><strong>CUIT:</strong> {affiliateData.empleador?.cuit}</p>
        </div>
    </div>
  )
}
