import React, { useState, useEffect, useCallback } from 'react'
import { Container, LabelContainer, InputContainer } from './style'
import LabelInputProps from './interface'

const LabelInput = (props: LabelInputProps) => {
  const { text, value: propsValue, type = 'text', onChange } = props

  const [value, setValue] = useState('')

  const handleChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const changeValue = e.target.value
      setValue(changeValue)
      if (onChange) onChange(e)
    },
    [onChange]
  )
  useEffect(() => {
    setValue(() => propsValue)
  }, [propsValue])

  return (
    <Container>
      <LabelContainer>{text}</LabelContainer>
      <InputContainer value={value} onChange={handleChangeValue} type={type} />
    </Container>
  )
}

export default LabelInput
