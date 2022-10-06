import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 270px;
  width: 300px;
  background-color: none;
  border: none;
  border-color: #005666;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CardFontBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 21px;
`;

const SubTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardTitleStyle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardTextStyle = styled.div`
  font-size: 15px;
  margin-left: 10px;
  color: #222222;
  margin-top: 10px;
  padding: 0px 20px;
`;

const FreeWriteImg = styled.div`
  height: 110px;
  width: 110px;
  background-image: url(${process.env.PUBLIC_URL + '/img/AboutUs/freeWrite.png'});
  background-size: 100% 100%;
  margin-bottom: 10px;
`;

const DataImg = styled.div`
  height: 110px;
  width: 110px;
  background-image: url(${process.env.PUBLIC_URL + '/img/AboutUs/dataImg.png'});
  background-size: 100% 100%;
  margin-bottom: 10px;
`;

const VariationImg = styled.div`
  height: 100px;
  width: 100px;
  background-image: url(${process.env.PUBLIC_URL + '/img/AboutUs/variationImg.png'});
  background-size: 100% 100%;
  margin-bottom: 10px;
  margin-top: 10px;
`;

function ExpectationCard({ icon, title, content }) {
  return (
    <Card>
      <CardFontBlock>
        <SubTitleBlock>
          {icon === '1' && <FreeWriteImg />}
          {icon === '2' && <DataImg />}
          {icon === '3' && <VariationImg />}
          <CardTitleStyle>{title}</CardTitleStyle>
        </SubTitleBlock>
        <CardTextStyle>{content}</CardTextStyle>
      </CardFontBlock>
    </Card>
  );
}

export default ExpectationCard;
