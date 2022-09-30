import React from 'react';
import styled from 'styled-components';
import lineImg from './lineImg.png';

const IntroBlock = styled.div`
  display: flex;
  justify-content: space-between;
  //align-items: center;
  margin: 60px 10%;
  flex-direction: row;
  gap: 120px;
  //margin-bottom : 100px;
`;

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 0.008fr 1fr 1fr;
  //background-color : green;
  height: 800px;
  width: 900px;
  grid-column-gap: 10px;
  margin-bottom: 100px;

  /*
    ::before {
    content: '';
    display: block;
    
    position: relative;
    top: -0.5rem;
    left: -4rem;
    width: 0.1rem;
    height: 7rem;
    background-color: gray;
  }
  */
`;

const TitleCard = styled.div`
  width: 200px;
  height: 200px;
  //background-color: yellow;
`;

const TitleCard1 = styled.div`
  width: 0px;
  height: 800px;
  //background-color: yellow;
  grid-row-start: 1;
  grid-row-end: 4;
  //margin-bottom : 100px;
  border-style: solid;
  border-width: 1px;
  border-color: lightgray;
`;
const TextCard = styled.div`
  width: 400px;
  height: 200px;
  //background-color: yellow;
  margin-top: 120px;
`;
const Card2 = styled.div`
  width: 50px;
  height: 100px;
  // background-color: blue ;
`;

const TitleNumberStyle = styled.div`
  font-size: 25px;
  color: orange;

  ::before {
    content: '';
    display: block;
    width: 0.7rem;
    height: 0.7rem;
    margin-top: 30px;
    position: relative;
    top: 1.3rem;
    left: -0.92rem;
    width: ${(props) => (props.focus ? '0.7rem' : '0.5rem')};
    height: ${(props) => (props.focus ? '0.7rem' : '0.5rem')};
    border-radius: 50%;
    background-color: ${(props) => (props.focus ? 'black' : '#aeaeae')};
    opacity: 0.8;
    opacity: 0.8;
  }
`;

const TitleStyle = styled.div`
  font-size: 25px;
  color: black;
  font-weight: bold;
`;

const BigTitle = styled.div`
  font-size: 35px;
  width: 320px;
  height: 110px;
  font-weight: bold;
  //text-decoration-line: underline;
  //text-decoration-color: black;
  text-decoration-thickness: 2px;
  //background-color: yellow;
  //background-color: yellow;
  border-bottom-style: solid;
  border-bottom-width: 3px;
`;

function ConstructionProcess() {
  return (
    <IntroBlock>
      <BigTitle>
        성균코퍼스 <br /> 구축과정
      </BigTitle>
      <Container>
        <TitleCard1 />
        <TitleCard>
          <TitleNumberStyle>1</TitleNumberStyle>
          <TitleStyle>
            원시코퍼스 <br /> 구축
          </TitleStyle>
        </TitleCard>
        <TextCard>
          원문 텍스트 자료의 교감 및 재구조화 작업을 진행합니다. 재구조환 내용을
          바탕으로 반정형 텍스트를 제작합니다.
        </TextCard>

        <TitleCard>
          <TitleNumberStyle>2</TitleNumberStyle>
          <TitleStyle>
            메타데이터 <br /> 제작
          </TitleStyle>
        </TitleCard>
        <TextCard>
          교육용 위키피디아 사이트에서 원시 코퍼스 구축 및 메타데이터 자료를
          제작합니다. 위키 페이지에서 구성원들 간의 협업을 통해 텍스트의
          서지정보, 텍스트 본문 내 고유명사에 관한 메타정보 등을 추가로
          삽입합니다.
        </TextCard>

        <TitleCard>
          <TitleNumberStyle>3</TitleNumberStyle>
          <TitleStyle>
            성균코퍼스 <br /> 업로드
          </TitleStyle>
        </TitleCard>
        <TextCard>
          위키 웹에서 구조화가 완료된 텍스트들은 일괄 변환 후 성균 코퍼스에
          업로드됩니다. 이는 웹 환경에서 다양한 메타 정보에 대한 열람 및 검색이
          가능합니다. XML 형태로 다운로드가 가능하여 대량의 데이터에서 손쉽게
          접근할 수 있습니다.
        </TextCard>
      </Container>
    </IntroBlock>
  );
}

export default ConstructionProcess;
