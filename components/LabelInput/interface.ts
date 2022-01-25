import React from 'react'

export default interface LabelInputProps {
  text: string
  value: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
