import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 20px;
  width: 396px;
  margin: 20px;
  height: 32px;
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`
export const LabelContents = styled.div`
  display: flex;
  font-size: 12px;
  margin-left: auto;
  padding-right: 20px;
`
