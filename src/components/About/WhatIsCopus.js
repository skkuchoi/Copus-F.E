import React from 'react';
import styled from 'styled-components';
import copusImg from './copusImg.png';

const IntroBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 10%;
  flex-direction: column;
`;

const TitleBlock = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    font-size : 30px;
    font-weight : bold;
    text-decoration-line: underline;
    text-decoration-color: rgba(188, 248, 183, 0.4);
    text-decoration-thickness: 5px;
`

const Card = styled.div`
  height: 500px;
  width: 800px;
  background-image: url(${copusImg});
  background-size: 100% 100%;
  margin-top : 20px;
`;

function WhatIsCopus () {
    return (
     <IntroBlock>
        <TitleBlock>
            성균 코퍼스 프로젝트란?
        </TitleBlock>
        <Card/>
     </IntroBlock>

    );
}

export default WhatIsCopus;