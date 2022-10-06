import React from 'react';
import styled from 'styled-components';
import Title from './shared/Title';
import ExpectationCard from './shared/ExpectationCard';

const CardBlock = styled.div`
  display: flex;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 30px;
  background-color: rgba(188, 248, 183, 0.4);
  border-radius: 20px;
  width: fit-content;
  padding-top: 10px;
  height: 300px;
`;

function WhatWeDo() {
  return (
    <>
      <Title content={'우리는 다음을 기대합니다'} />
      <CardBlock>
        <ExpectationCard
          icon="1"
          title="자유로운 접근"
          content="자유로움을 최우선으로 합니다. 여러 구성원이 토론이 가능한 온라인 플랫폼 
          안에서 데이터를 자유롭게 작성하고 열람할 수 있습니다."
        />
        <ExpectationCard
          icon="2"
          title="정제된 데이터"
          content="작성된 다채로운 데이터들을 정제된 형태로 웹사이트에 공개합니다. 이를
          통해 사용자들에게 가시적인 정보제공을 기대할 수 있습니다."
        />
        <ExpectationCard
          icon="3"
          title="다양한 형태의 구조화"
          content="원문을 다양한 형태로 구조화합니다. 텍스트 내 고유명사 데이터의
          메타데이터를 제공하고 식별자를 붙여 검색과 열람 기능을 강화합니다."
        />
      </CardBlock>
    </>
  );
}

export default WhatWeDo;
