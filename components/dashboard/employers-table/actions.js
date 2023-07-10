import React from 'react'
import Dropdown from '@/components/dropdown'
import { useSelector } from 'react-redux'


export default function Actions() {
  const user=useSelector(state=>state.user)
  const userRoles=user.user.roles
  return (
    <div>
    {
      <Dropdown options={['Ver ficha', 'Desactivar']}/>
    }
    </div>
  )
}
