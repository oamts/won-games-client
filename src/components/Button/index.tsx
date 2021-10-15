import * as S from './styles'
import React from 'react'

export type ButtonProps = {
  children?: React.ReactElement
  size?: 'small' | 'medium' | 'large'
}

const Button = ({ children, size = 'medium' }: ButtonProps) => (
  <S.Wrapper size={size}>{!!children && <span>{children}</span>}</S.Wrapper>
)

export default Button
