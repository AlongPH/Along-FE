import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  background-color: white;
  padding: 8px;
`

export const Main = styled.div`
  /* font-size: 3vh; */
  flex-grow: 1;
  padding-left: 20px;
  :hover {
    cursor: pointer;
  }
`

export const SearchField = styled.input`
  background-color: white;
  font-size: 25px;
  border: none;
  border-bottom: 2px solid black;
  margin: 8px;
  outline: none;
`
export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: white;
  font-size: 2vh;
  cursor: pointer;
  :hover {
    background-color: whitesmoke;
  }
`
