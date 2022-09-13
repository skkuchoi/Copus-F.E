import React from 'react';
import styled from 'styled-components';

const ContentPositioner = styled.div`
  padding: 15px 30px;
  display: flex;
  flex-direction: column;

  .big-title {
    font-size: 25px;
    font-weight: bold;
  }

  .line {
    border-bottom: 2px solid black;
    width: 50%;
    margin-top: 5px;
  }

  .post-div {
    background-color: brown;
    margin-top: 10px;
    margin-left: 25px;
  }

  .small-title {
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .post {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  padding: 5px 10px;
  margin-bottom: 15px;
  background-color: rgba(197, 232, 207, 0.5);
`;

const Wonju = styled.div`
  margin-left: 7px;
  padding-top: 4px;
  font-size: 15px;
`;

const Page = styled.div`
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
`;

const CopyBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-bottom: 20px;
`;

const DciInformation = styled.div`
  color: grey;
  font-size: 11px;
`;

const CopyButton = styled.button`
  background-color: gray;
  color: white;
  border: none;
  width: fit-content;
  padding: 1px 5px;
  margin: 0px 3px;
  font-size: 9px;
  cursor: pointer;
`;

const ContentText = styled.div`
  margin-left: 10px;
  font-size: 20px;
  margin-bottom: 40px;
`;

const Origin = styled.div`
  padding: 5px 20px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 12px;
`;


export default function Content({ title, wonju, page, dci, content }) {
  return (
    
    <ContentPositioner>
      <Title>{title}</Title>

      <SubTitle>
        {title}
        <Wonju>{wonju}</Wonju>
        <Page>{page}</Page>
      </SubTitle>

      <CopyBlock>
        <DciInformation>[DCI]{dci}</DciInformation>
        <CopyButton>DCI 복사</CopyButton>
        <CopyButton>URL 복사</CopyButton>
      </CopyBlock>

      <ContentText>{content}</ContentText>
      <Origin> ⓒ 한국고전번역원 | 영인표점 한국문집총간 | 2010</Origin>
    </ContentPositioner>
  );
}
