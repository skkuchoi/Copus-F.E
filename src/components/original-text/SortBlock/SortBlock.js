import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdAdd } from 'react-icons/md';
import { Link, useLocation, useParams } from 'react-router-dom';
import '../../shared/linkStyle.css';

const BoxPositioner = styled.div`
  border: 1px solid #eeeeee;
  box-shadow: 0px 0px 4px gray;
  height: 50px;
  margin: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: left;
  padding-left: 20px;
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
    props.menuOpen &&
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

const CategoryPositioner = styled.div`
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
  width: 13px;
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

function SortBlock({ open }) {
  // 분류기준 menu Open
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpenButton = () => setMenuOpen(!menuOpen);

  // Select Category menu
  const [selectByBook, setSelectByBook] = useState(false);
  const [selectByAuthor, setSelectByAuthor] = useState(false);
  const handleSelectByBook = () => {
    setSelectByBook(true);
    setSelectByAuthor(false);
  };
  const handleSelectByAuthor = () => {
    setSelectByAuthor(true);
    setSelectByBook(false);
  };

  // consonant에 따른 link 연결
  const { literature, consonant } = useParams();
  const { pathname } = useLocation();
  const includeByBook = pathname.includes('bybook');
  const includeByAuthor = pathname.includes('byauthor');
  const byBookLink = `/original-text/${literature}/bybook/`;
  const byAuthorLink = `/original-text/${literature}/byauthor/`;

  const consonants = [
    { id: 0, consonant: '가' },
    { id: 1, consonant: '나' },
    { id: 2, consonant: '다' },
    { id: 3, consonant: '라' },
    { id: 4, consonant: '마' },
    { id: 5, consonant: '바' },
    { id: 6, consonant: '사' },
    { id: 7, consonant: '아' },
    { id: 8, consonant: '자' },
    { id: 9, consonant: '차' },
    { id: 10, consonant: '카' },
    { id: 11, consonant: '타' },
    { id: 12, consonant: '파' },
    { id: 13, consonant: '하' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    if (open) {
      setMenuOpen(true);
      setSelectByBook(includeByBook);
      setSelectByAuthor(includeByAuthor);
    }
  }, [open, includeByBook, includeByAuthor]);

  return (
    <BoxPositioner>
      <TitlePositioner onClick={handleMenuOpenButton}>
        <Title>분류기준</Title>
        <CircleOpenButton menuOpen={menuOpen}>
          <MdAdd />
        </CircleOpenButton>
      </TitlePositioner>

      {menuOpen && (
        <>
          <CategoryPositioner>
            <Link to={byBookLink} className="link-line">
              <CircleCheckButton onClick={handleSelectByBook}>
                {selectByBook && <MdDone />}
              </CircleCheckButton>
            </Link>
            <CategoryName>서명별</CategoryName>

            <Link to={byAuthorLink} className="link-line">
              <CircleCheckButton onClick={handleSelectByAuthor}>
                {selectByAuthor && <MdDone />}
              </CircleCheckButton>
            </Link>
            <CategoryName>저자별</CategoryName>
          </CategoryPositioner>
        </>
      )}

      {menuOpen && selectByBook && (
        <ConsonantPositioner>
          {consonants.map((item) => (
            <Link
              to={byBookLink + item.consonant}
              className="link-line"
              key={item.id}>
              <CircleColorButton select={item.consonant === consonant}>
                {item.consonant}
              </CircleColorButton>
            </Link>
          ))}
        </ConsonantPositioner>
      )}

      {menuOpen && selectByAuthor && (
        <ConsonantPositioner>
          {consonants.map((item) => (
            <Link
              to={byAuthorLink + item.consonant}
              className="link-line"
              key={item.id}>
              <CircleColorButton select={item.consonant === consonant}>
                {item.consonant}
              </CircleColorButton>
            </Link>
          ))}
        </ConsonantPositioner>
      )}
    </BoxPositioner>
  );
}

export default SortBlock;
