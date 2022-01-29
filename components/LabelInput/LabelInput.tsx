import React, { useState, useEffect, useCallback } from 'react'
import { Container, LabelContainer, InputContainer } from './style'
import LabelInputProps from './interface'

const LabelInput = (props: LabelInputProps) => {
  const { text, value, type = 'text', onChange } = props

  return (
    <Container>
      <LabelContainer>{text}</LabelContainer>
      <InputContainer value={value} onChange={onChange} type={type} />
    </Container>
  )
}

export default LabelInput
