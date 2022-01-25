import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 380px;
  padding: 20px;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`
export const SignButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 20px;
  width: 340px;
  margin: 20px;
  height: 32px;
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`
