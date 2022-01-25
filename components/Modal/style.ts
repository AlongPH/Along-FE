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
  width: 440px;
  height: 577px;
  background-color: #fff;
  padding: 20px;
  // Modal 창 브라우저 가운데로 조정
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
`
export const HeadArea = styled.div`
  /* position: absolute; */
  font-size: 25px;
  height: 105px;
  width: 100%;

  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`
export const TitleArea = styled.div`
  /* margin-top: 12px; // 높이 맞춤 */
  text-align: center;
  justify-content: center;
  width: 100%;
`
export const CloseButton = styled.div`
  float: right;
  width: 30px;
  :hover {
    cursor: pointer;
  }
`

export const ContentsArea = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100%;
`
