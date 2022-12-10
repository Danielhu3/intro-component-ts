import React from 'react'
import  Button  from '../button/'
import  Input  from '../input/'
import  Terms  from '../terms/'
import { Form } from './style'
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface DataProps  {
  
    firstName?:string;
    lastName?:string;
    email?:string;
    password?:string;
  
}
const Index = () => {
  function onSubmit(data:DataProps){
    console.log(data)
  }

  function onError(error:any){
    
  }
  const schema = yup.object({
    firstName: yup.string().required('First Name cannot be empty'),
    lastName: yup.string().required('Last Name cannot be empty'),
    email: yup.string().email('Looks like this is not an email').required('Email cannot be empty'),
    password: yup.string().required('Password cannot be empty').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/, 'Your password must have at least: 8 characters, 1 upper case, 1 lower case, 1 number')
  })
  
  const {register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(schema)});

  
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <Input type ='text' placeholder='First Name' register={register} field={'firstName'} error={errors.firstName}/>
      <Input type ='text' placeholder='Last Name' register={register} field={'lastName'} error={errors.lastName}/>
      <Input type ='text' placeholder='Email Address' register={register} field={'email'} error={errors.email}/>
      <Input type ='text' placeholder='Password' register={register} field={'password'} error={errors.password}/>
      <Button />
      <Terms />
    </Form>
  )
}

export default Index

//onSubmit={handleSubmit(onSubmit)}