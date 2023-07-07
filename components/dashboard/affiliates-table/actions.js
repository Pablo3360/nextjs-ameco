import React from 'react'
import Dropdown from '@/components/dropdown'
import { useSelector } from 'react-redux'


export default function Actions() {
  const user=useSelector(state=>state.user)
  console.log('user',user.user.roles)
  // const userRoles=user.user.roles
  const userRoles=['recaudador']
  return (
    <div>
    {
      userRoles.includes('comision')||userRoles.includes('recaudador')?
      <Dropdown options={['Ver ficha']}/>:
      <Dropdown options={['Otorgar beneficio', 'Ver ficha', 'Dar de baja']}/>
    }
    </div>
  )
}
