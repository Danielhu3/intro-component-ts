import React from 'react'
import { UseFormRegister, FieldValues  } from 'react-hook-form';
import  ErrorSpan  from '../errorSpan/';
import { Input } from './style';


type Props = {
    type:string;
    placeholder:string;
    register: UseFormRegister<FieldValues>
    field:string
    error?: any;
}


const index = ({type, placeholder, register, field, error}:Props) => {
  return (
    <>
    <Input type={type} {...register(field)} placeholder={field === 'email' && error ? 'email@example.com' :placeholder} error={error}/>
    {error ? <ErrorSpan message={error.message}/> : null}
    </>
  )
}

export default index