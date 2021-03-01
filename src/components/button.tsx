import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import {Colors, Transitions} from '../styles/mixins'
import {IHandle} from '../types/index';

const Element = styled.button`
  margin: 0 auto;
  transition: all 300ms ease-out;
  ${Transitions.standardHover};
`

export const Button: FunctionComponent<IHandle> = ({ clickHandle, children }) => (
  <Element onClick={clickHandle}>
    <span>{children}</span>
  </Element>
)
