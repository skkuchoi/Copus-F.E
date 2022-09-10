import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBookOpen, FaExclamationCircle, FaPencilAlt } from 'react-icons/fa';
import {TbBookUpload} from 'react-icons/tb'
const CardHovering = keyframes`
  0%{
    transform:  translateY( 0px );
  }
  100%{
    transform:  translateY( -8px );
  }
`;

const CardShape = styled.div`
  width: 220px;
  height: 330px;
  cursor: pointer;
  background-color: ${(props) => props.cardColor};
  border-radius: 2rem;
  box-shadow: 1px 4px 4px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    animation: ${CardHovering} 0.2s linear forwards;
  }
`;

const IconBlock = styled.div`
  font-size: 25px;
  color: black;
`;

const TitleBlock = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: #222222;
  letter-spacing: -1px;
`;

const ContentBlock = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #222222;
  margin-top: 5%;
  white-space: pre-wrap;
  text-align: center;
  letter-spacing: -1px;
`;

function Card({ icon, title, content, cardColor }) {
  return (
    <CardShape cardColor={cardColor}>
      <IconBlock>
        {icon === '1' && <TbBookUpload size="30" />}
        {icon === '2' && <FaExclamationCircle />}
        {icon === '3' && <FaPencilAlt />}
      </IconBlock>

      <TitleBlock>{title}</TitleBlock>
      <ContentBlock>{content}</ContentBlock>
    </CardShape>
  );
}

export default Card;
