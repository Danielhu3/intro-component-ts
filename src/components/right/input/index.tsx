import React from 'react'
import { Input } from './style';

type Props = {
    type:string;
    placeholder:string;
}
const index = ({type, placeholder}:Props) => {
  return (
    <Input type={type}></Input>
  )
}

export default index