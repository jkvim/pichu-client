import * as React from 'react'
import styled from 'react-emotion'

const Button = styled('span')`
  cursor: pointer;
  color: ${(props: any) =>
    props.reversed
      ? props.active ? 'white' : '#aaa'
      : props.active ? 'black' : '#ccc'};
`

export default Button