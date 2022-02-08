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
    placeHolder,
    isError = false,
    errorMessage = '',
    onChange,
    onKeyPress,
  } = props

  return (
    <Container>
      <LabelContainer>{text}</LabelContainer>
      <InputContainer
        value={value}
        onChange={onChange}
        type={type}
        isError={isError}
        placeholder={placeHolder}
        onKeyPress={onKeyPress}
      />
      {/* {isError && <ErrorContainer>{errorMessage}</ErrorContainer>} */}
    </Container>
  )
}

export default LabelInput
