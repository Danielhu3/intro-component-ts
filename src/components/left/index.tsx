import React from 'react'
import { Left } from './style'

type Props = {
    children: JSX.Element[];
}
const index = ({children}:Props) => {
  return (
    <Left>{children}</Left>
  )
}

export default index