import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DisplaySelectedInfoBlock = styled.div`
  background-color: #f2f2f2;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  height: 50px;
`;

const BookTitle = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding-left : 37px;  

  .line {
    //display : flex;
    border-left: 2px solid black;
    opacity: 0.5;
    //justify-content: center;
    //align-items: center;
    //margin-top: 18px;
    margin-left: 50px;
    //margin-right: 5px;
  }
`;

const ListInformation = styled.span`
  display : flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  
  ::before {
    content: '▶';
    margin-left: 7px;
    margin-right: 7px;
    font-size : 10px;
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
  const { consonant, authorname, bookname, gwoncha, munche, title } =
    useParams();

  return (
    <DisplaySelectedInfoBlock>
      <BookTitle>
        연행록
       
      </BookTitle>

      {consonant && <ListInformation>{consonant}</ListInformation>}
      {authorname && <ListInformation>{authorname}</ListInformation>}
      {bookname && <ListInformation>{bookname}</ListInformation>}
      {gwoncha && <ListInformation>{gwoncha}</ListInformation>}
      {munche && <ListInformation>{munche}</ListInformation>}
      {title && <ListInformation>{title}</ListInformation>}
    </DisplaySelectedInfoBlock>
  );
}

export default DisplaySelectedListBlock;
