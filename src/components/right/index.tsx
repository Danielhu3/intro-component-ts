import React from 'react'
import { Right } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <Right>{children}</Right>
  )
}

export default index