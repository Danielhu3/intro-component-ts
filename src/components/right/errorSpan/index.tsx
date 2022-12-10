import React from 'react'
import { ErrorSpan } from './style'

type Props ={
    message: string;
}
const index = ({message}:Props) => {
  return (
    <ErrorSpan>{message}</ErrorSpan>
  )
}

export default index