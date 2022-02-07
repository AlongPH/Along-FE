import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid yellow; */
  width: 100%;
`
export const LabelContainer = styled.div`
  padding: 20px;
  padding-bottom: 5px;
  font-size: 15px;
`

export const InputContainer = styled.input<{ isError: boolean }>`
  margin-left: 20px;
  margin-right: 20px;
  font-size: 25px;
  border: none;
  outline: none;
  border-bottom: ${(props) =>
    props.isError ? `1px solid red` : `1px solid black`};
  ::placeholder {
    font-size: 15px;
  }
`
export const ErrorContainer = styled.div`
  padding-left: 20px;
  color: red;
`
