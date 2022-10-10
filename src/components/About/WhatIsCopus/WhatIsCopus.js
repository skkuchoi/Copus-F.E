import React from 'react';
import styled from 'styled-components';
import Title from './shared/Title';

const WholeBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 10%;
  flex-direction: column;
`;

const Card = styled.div`
  height: 500px;
  width: 800px;
  background-image: url(${process.env.PUBLIC_URL + '/img/AboutUs/copusImg.png'});
  background-size: 100% 100%;
  margin-top: 20px;
`;

function WhatIsCopus() {
  return (
    <WholeBlock>
      <Title content={'성균 코퍼스 프로젝트란?'} />
      <Card />
    </WholeBlock>
  );
}

export default WhatIsCopus;
