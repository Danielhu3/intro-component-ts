import React from 'react'
import { UseFormRegister, FieldValues  } from 'react-hook-form';
import { Input } from './style';


type Props = {
    type:string;
    placeholder:string;
    register: UseFormRegister<FieldValues>
    field:string
}


const index = ({type, placeholder, register, field}:Props) => {
  return (
    <Input type={type} {...register(field)}/>
  )
}

export default index