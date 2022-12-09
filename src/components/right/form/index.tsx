import React from 'react'
import  Button  from '../button/'
import  Input  from '../input/'
import  Terms  from '../terms/'
import { Form } from './style'
import { useForm, SubmitHandler } from "react-hook-form";

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
  const {register, handleSubmit} = useForm();
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input type ='text' placeholder='First Name' register={register} field={'firstName'}/>
      <Input type ='text' placeholder='Last Name' register={register} field={'lastName'}/>
      <Input type ='email' placeholder='Email Address' register={register} field={'email'}/>
      <Input type ='text' placeholder='Password' register={register} field={'password'}/>
      <Button />
      <Terms />
    </Form>
  )
}

export default Index

//onSubmit={handleSubmit(onSubmit)}