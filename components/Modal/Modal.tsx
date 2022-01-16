import React from 'react'
import ModalProps from './interface'
import {
  Background,
  HeadArea,
  ModalContainer,
  TitleArea,
  CloseButton,
  ContentsArea,
} from './style'

const Modal = (props: ModalProps) => {
  const { visible, header, onClose, contents } = props
  return (
    <>
      {visible ? (
        <Background onClick={onClose}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <HeadArea>
              <div />
              <TitleArea>{header}</TitleArea>
              <CloseButton onClick={onClose}>X</CloseButton>
            </HeadArea>
            <ContentsArea>{contents}</ContentsArea>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  )
}

export default Modal
