import { forwardRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`    
  padding: 10px 20px;
`

const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />  
})

export default Input

Input.displayName = 'Input'