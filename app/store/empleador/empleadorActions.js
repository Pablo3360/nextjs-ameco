'use client'
import axios from 'axios';
import { useSelector } from 'react-redux';

import {getEmpleador} from './empleadorSlice';


export const getEmpleadores = () => {
    //let user = useSelector(state => state.user);
    const user ={
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTMzYjFjNi0xZWZmLTQ1YTEtOWU5ZC1kZDllY2I3ZGEzN2MiLCJtYWlsIjoiZGVmYXVsdEBkZWZhdWx0LmNvbSIsInJvbGVzIjpbImFkbWluIl0sImlhdCI6MTY4ODg3Nzk5NywiZXhwIjoxNjg4ODc4ODk3fQ.Y-zWXXavAozS3q0LYj3xzIqgrnBY1tO9k8yZG5MuouE"
    }
  
    return dispatch => {
      axios.get(`${process.env.NEXT_PUBLIC_URL_API}/empleadores`, {
        headers: {
          Authorization: 'Bearer ' + user.token
        }
      })
        .then(res => dispatch(getEmpleador(res.data)))
        .catch(e => console.log(e));
    };
  };