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
    justify-content: center;
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
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const FilterPositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  @media screen and (max-width: 800px) {
    display: none;
  }
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
  @media screen and (max-width: 800px) {
    display: none;
  }
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

  // consonant 설정
  const { pathname } = useLocation();
  const [consonant, setConsonant] = useState('all');
  // Select Category Filter
  const [filter, setFilter] = useState(
    pathname.includes('book') ? 'book' : 'author',
  );

  const consonants = [
    { consonant: '가', id: 'A' },
    { consonant: '나', id: 'B' },
    { consonant: '다', id: 'C' },
    { consonant: '라', id: 'D' },
    { consonant: '마', id: 'E' },
    { consonant: '바', id: 'F' },
    { consonant: '사', id: 'G' },
    { consonant: '아', id: 'H' },
    { consonant: '자', id: 'I' },
    { consonant: '차', id: 'J' },
    { consonant: '카', id: 'K' },
    { consonant: '타', id: 'L' },
    { consonant: '파', id: 'M' },
    { consonant: '하', id: 'N' },
  ];

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
          {sortMenuOpen && (
            <>
              <FilterPositioner>
                <CircleCheckButton
                  onClick={() => {
                    setFilter('book');
                    navigate(link4Consonant + 'book/all');
                  }}>
                  {filter === 'book' && <MdDone />}
                </CircleCheckButton>
                <CategoryName>서명별</CategoryName>

                <CircleCheckButton
                  onClick={() => {
                    setFilter('author');
                    navigate(link4Consonant + 'author/all');
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
                      navigate(link4Consonant + filter + '/' + item.id);
                    }}
                    width="13px">
                    {item.consonant}
                  </CircleColorButton>
                ))}
              </ConsonantPositioner>
            </>
          )}
        </BoxPositioner>
        {children}
      </selectedFilter.Provider>
    </selectedConsonant.Provider>
  );
}

export default SortBlock;
