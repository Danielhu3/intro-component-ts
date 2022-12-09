import React from 'react'
import { Form } from './style'

type Props = {
    children:JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <Form>{children}</Form>
  )
}

export default index