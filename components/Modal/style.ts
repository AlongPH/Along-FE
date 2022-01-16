import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`

export const ModalContainer = styled.div`
  width: 33%;
  height: 50%;
  background-color: #fff;
  // Modal 창 브라우저 가운데로 조정
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 40px;

  display: flex;
  flex-direction: column;
`
export const HeadArea = styled.div`
  position: absolute;
  font-size: 25px;
  height: 50px;
  width: 100%;
  border-radius: 40px 40px 0 0;
  background-color: skyblue;

  display: flex;
  justify-content: space-around;
`
export const TitleArea = styled.div`
  margin-top: 12px; // 높이 맞춤
  /* text-align: center; */
  justify-content: center;
  width: 100%;
`
export const CloseButton = styled.div`
  background-color: red;
  float: right;
  width: 30px;
  :hover {
    cursor: pointer;
  }
`

export const ContentsArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: yellowgreen;
`
