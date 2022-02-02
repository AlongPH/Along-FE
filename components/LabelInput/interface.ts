import React from 'react'

export default interface LabelInputProps {
  name: string
  text: string
  value: string
  type?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
