import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import {Colors} from '../styles/mixins'

const Element = styled.button`
  margin: 0 auto;
`

export const Button: FunctionComponent = ({ children }) => (
  <Element>
    <span>{children}</span>
  </Element>
)
