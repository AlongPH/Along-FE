import React from 'react'

export default interface LabelInputProps {
  text: string
  value: string
  type?: string
  placeHolder?: string
  isError?: boolean
  errorMessage?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}
