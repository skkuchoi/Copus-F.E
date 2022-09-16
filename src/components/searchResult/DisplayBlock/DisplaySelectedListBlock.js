import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DisplayPositioner = styled.div`
  background-color: #f2f2f2;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  height: 50px;
`;

const ResultNumberPositioner = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-left: 50px;
  margin-right: 8px;
  letter-spacing: -1px;
`;

const SearchResultNumber = styled.span`
  color: #c55a11;
  margin-right: 5px;
`;

const Keyword = styled.span`
  font-size: 18px;
  ::before {
    content: '▶';
    position: relative;
    top: -3px;
    margin-left: 5px;
    margin-right: 7px;
    font-size: 10px;
  }
`;

function DisplaySelectedListBlock({ totalResultNum }) {
  const { keyword } = useParams();
  return (
    <DisplayPositioner>
      <ResultNumberPositioner>
        <SearchResultNumber>{totalResultNum}</SearchResultNumber>
        건의 검색결과
      </ResultNumberPositioner>
      
      <Keyword>검색어: {keyword}</Keyword>
    </DisplayPositioner>
  );
}

export default DisplaySelectedListBlock;
