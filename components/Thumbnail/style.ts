import styled from 'styled-components'

export const Container = styled.div`
  border: 1px solid black;
  display: flex;
  width: 380px;
  height: 280px;
  align-content: stretch;
  margin: 16px;
`
export const Sidebar = styled.div`
  border: 2px solid red;
  flex-basis: 60px;

  display: flex;
  flex-direction: column;
`

export const ContentsArea = styled.div`
  border: 2px solid blue;
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
`
