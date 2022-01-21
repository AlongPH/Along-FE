import React from 'react'

export default interface ModalProps {
  visible?: boolean
  header: string
  contents: React.ReactNode
  onClose: () => void
}
