import React, { createContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdAdd } from 'react-icons/md';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import '../../shared/linkStyle.css';

const BoxPositioner = styled.div`
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 4px gray;
  height: 50px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
  margin-top: 12px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const TitlePositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 200;
`;

const CircleOpenButton = styled.div`
  background: black;
  width: 18px;
  height: 18px;
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  margin-top: 3px;
  transition: 0.125s all ease-in;
  ${(props) =>
    props.sortMenuOpen &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: rotate(45deg);
    `}
`;

const FilterPositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

const CircleCheckButton = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 16px;
  cursor: pointer;
  margin-top: 3px;
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryName = styled.div`
  font-size: 15px;
  font-weight: 100;
  margin-right: 10px;
`;

const ConsonantPositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  border-left: 1px solid #ced4da;
  padding-left: 15px;
`;

const CircleColorButton = styled.div`
  width: ${(props) => props.width};
  height: 13px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 16px;
  cursor: pointer;
  margin-top: 3px;
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 3px;
  background-color: ${(props) => (props.select ? 'black' : '')};
  color: ${(props) => (props.select ? 'white' : 'black')};
`;

export const selectedConsonant = createContext();
export const selectedFilter = createContext();

function SortBlock({ children }) {
  // 분류기준 midu Opid
  const [sortMenuOpen, setSortMenuOpen] = useState(true);
  const handleSortMenuOpenButton = () => setSortMenuOpen(!sortMenuOpen);
  const consonants = [
    { consonant: 'A', id: '가' },
    { consonant: 'B', id: '나' },
    { consonant: 'C', id: '다' },
    { consonant: 'D', id: '라' },
    { consonant: 'E', id: '마' },
    { consonant: 'F', id: '바' },
    { consonant: 'G', id: '사' },
    { consonant: 'H', id: '아' },
    { consonant: 'I', id: '자' },
    { consonant: 'J', id: '차' },
    { consonant: 'K', id: '카' },
    { consonant: 'L', id: '타' },
    { consonant: 'N', id: '파' },
    { consonant: 'M', id: '하' },
  ];
  const consonantsOrder = {
    all: 'all',
    A: '가',
    B: '나',
    C: '다',
    D: '라',
    E: '마',
    F: '바',
    G: '사',
    H: '아',
    I: '자',
    J: '차',
    K: '카',
    L: '타',
    N: '파',
    M: '하',
  };
  // consonant 설정
  const { pathname } = useLocation();

  const [consonant, setConsonant] = useState(
    consonantsOrder[pathname.split('/')[3]],
  );
  // Select Category Filter
  const [filter, setFilter] = useState(
    pathname.includes('book') ? 'book' : 'author',
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filter, consonant]);

  const navigate = useNavigate();
  const link4Consonant = '/menu-explore/';

  return (
    <selectedConsonant.Provider value={consonant}>
      <selectedFilter.Provider value={filter}>
        <BoxPositioner>
          <TitlePositioner onClick={handleSortMenuOpenButton}>
            <Title>분류기준</Title>
            <CircleOpenButton sortMenuOpen={sortMenuOpen}>
              <MdAdd />
            </CircleOpenButton>
          </TitlePositioner>

          <FilterPositioner>
            <CircleCheckButton
              onClick={() => {
                setFilter('book');
                window.location.replace(link4Consonant + 'book/all');
              }}>
              {filter === 'book' && <MdDone />}
            </CircleCheckButton>
            <CategoryName>서명별</CategoryName>

            <CircleCheckButton
              onClick={() => {
                setFilter('author');
                window.location.replace(link4Consonant + 'author/all');
              }}>
              {filter === 'author' && <MdDone />}
            </CircleCheckButton>
            <CategoryName>저자별</CategoryName>
          </FilterPositioner>

          <ConsonantPositioner>
            <CircleColorButton
              select={'all' === consonant}
              onClick={() => {
                setConsonant('all');
                window.location.replace(`/menu-explore/${filter}/all`);
              }}
              width="30px">
              전체
            </CircleColorButton>
            {consonants.map((item) => (
              <CircleColorButton
                select={item.id === consonant}
                key={item.id}
                onClick={() => {
                  setConsonant(item.id);
                  window.location.replace(
                    link4Consonant + filter + '/' + item.consonant,
                  );
                }}
                width="13px">
                {item.id}
              </CircleColorButton>
            ))}
          </ConsonantPositioner>
        </BoxPositioner>
        {children}
      </selectedFilter.Provider>
    </selectedConsonant.Provider>
  );
}

export default SortBlock;
