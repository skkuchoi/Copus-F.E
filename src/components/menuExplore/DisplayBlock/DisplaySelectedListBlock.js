import React from 'react';
import styled from 'styled-components';

const DisplayPositioner = styled.div`
  background-color: #f2f2f2;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  height: 50px;
  padding-left: 40px;
`;

const LiteratureTitle = styled.h2`
  font-size: 20px;
`;

const EachElementTitle = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 18px;

  ::before {
    content: '▷';
    margin-left: 7px;
    margin-right: 7px;
    font-size: 10px;
  }
`;

const OptionButtonBlock = styled.div`
  position: absolute;
  width: 90px;
  top: 118px;
  right: 30px;
  margin-top: 14px;
  text-align: center;
  font-size: 13px;
`;

const OptionButton = styled.div`
  background-color: #35644f;

  padding: 3px 10px;
  border-radius: 3px;
  color: white;
  padding-bottom: 5px;
`;

const OptionElement = styled.div`
  background-color: #35644f;
  color: white;

  padding: 3px 10px;
  border-radius: 3px;
  border-top: 0.5px solid white;
  display: ${(props) => (props.hover ? 'block' : 'none')};
  &:hover {
    background-color: #92d050;
    color: black;
    cursor: pointer;
  }
`;

function DisplaySelectedListBlock() {
  return (
    <DisplayPositioner>
      <LiteratureTitle>한국문집총간</LiteratureTitle>
    </DisplayPositioner>
  );
}

export default DisplaySelectedListBlock;
