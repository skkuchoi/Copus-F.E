import React from 'react';
import styled from 'styled-components';

const TextBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const TextStyle = styled.div`
  font-size: 15px;
  margin-left: 10px;
`;

const GlassImg = styled.div`
  height: 100px;
  width: 140px;
  background-image: url(${process.env.PUBLIC_URL + '/img/AboutUs/glassImg.png'});
  background-size: 100% 100%;
  background-color: yellow;
`;


const PlusImg = styled.div`
  height: 100px;
  width: 240px;
  background-image: url(${process.env.PUBLIC_URL + '/img/AboutUs/plusImg.png'});
  background-size: 100% 100%;
  background-color: yellow;
`;

const CollaborationImg = styled.div`
  height: 100px;
  width: 290px;
  background-image: url(${process.env.PUBLIC_URL + '/img/AboutUs/collaboration.png'});
  background-size: 100% 100%;
  background-color: yellow;
`;

const HatImg = styled.div`
  height: 100px;
  width: 250px;
  background-image: url(${process.env.PUBLIC_URL + '/img/AboutUs/hatImg.png'});
  background-size: 100% 100%;
  background-color: yellow;
`;

function Textblock({ direction, icon, content }) {
  return (
    <>
      {direction === 'left' && (
        <TextBlock>
          {icon === '1' && <GlassImg />}
          {icon === '3' && <HatImg />}
          <TextStyle>{content}</TextStyle>
        </TextBlock>
      )}
      {direction === 'right' && (
        <TextBlock>
          <TextStyle>{content}</TextStyle>
          {icon === '2' && <PlusImg />}
          {icon === '4' && <CollaborationImg/>}
        </TextBlock>
      )}
    </>
  );
}

export default Textblock;
