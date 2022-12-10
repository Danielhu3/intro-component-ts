import React from 'react'
import { UseFormRegister, FieldValues  } from 'react-hook-form';
import { Input } from './style';


type Props = {
    type:string;
    placeholder:string;
    register: UseFormRegister<FieldValues>
    field:string
    error?: any;
}


const index = ({type, placeholder, register, field, error}:Props) => {
  if(error){
    console.log(error)
    console.log(typeof(error))
  }
  return (
    <>
    <Input type={type} {...register(field)} placeholder={placeholder}/>
    {error ? <span>{error.message}</span> : null}
    </>
  )
}

export default index