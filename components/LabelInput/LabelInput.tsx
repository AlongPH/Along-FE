import React, { useState, useEffect, useCallback } from 'react'
import {
  Container,
  LabelContainer,
  InputContainer,
  ErrorContainer,
} from './style'
import LabelInputProps from './interface'

const LabelInput = (props: LabelInputProps) => {
  const {
    text,
    value,
    type = 'text',
    isError = false,
    errorMessage = '',
    onChange,
    onKeyPress,
    onBlur,
  } = props

  return (
    <Container>
      <LabelContainer>{text}</LabelContainer>
      <InputContainer
        value={value}
        onChange={onChange}
        type={type}
        isError={isError}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
      />
      {isError && <ErrorContainer>{errorMessage}</ErrorContainer>}
    </Container>
  )
}

export default LabelInput
