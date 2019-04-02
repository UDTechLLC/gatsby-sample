import React from 'react'
import styled from 'styled-components'

export const Button = styled(props => <button {...props} className={`${props.className} btn`} />)`
  border-radius: 20px;
`
