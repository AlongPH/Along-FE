export default interface LabelInputProps {
  text: string
  value: string
  type?: string
  isError?: boolean
  errorMessage?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}
