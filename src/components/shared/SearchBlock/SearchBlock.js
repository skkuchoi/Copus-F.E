import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

const SearchBlockPositioner = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: ${(props) => props.border};
  .search-icon {
    padding: 10px 10px;
    height: 20px;
    width: 25px;
    color: black;
    background-color: white;
    border-radius: 0px 30px 30px 0px;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const CategoryPositioner = styled.div`
  width: 80px;
  height: 42px;
  background-color: rgba(188, 248, 183);
  z-index: 10;
  font-size: 15px;
  border-radius: 30px 0px 0px 30px;
  color: black;
`;

const SelectedCategoryPositioner = styled.div`
  color: black;
  height: 40px;
  width: 90px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-bottom: 1px;
  font-weight: 500;
  .dropdown-icon {
    background-color: none;
  }
  cursor: pointer;
`;

const SelectedCategoryName = styled.p`
  text-align: left;
`;

const CategoryElement = styled.li`
  background-color: rgba(188, 248, 183);
  cursor: pointer;
  height: 40px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px 0px 0px 30px;
  &:hover {
    font-weight: bold;
  }
`;

const SearchInputBox = styled.input`
  outline: none !important;
  border: none;
  font-size: 15px;
  width: 300px;
  height: 30px;
  padding: 5px 10px;
  font-weight: 400;
  :focus {
    outline: none !important;
    border: none;
    font-weight: 400;
  }
`;
function SearchBlock({ border = 'none' }) {
  const [searchFilter, setSearchFilter] = useState('전체');
  const [keyword, setKeyword] = useState('');
  const [isMenuOpen, setIsOpenMenu] = useState(false);

  const onClickMenu = (e) => {
    if (e.target.innerText === '저/편/필자') {
      setSearchFilter('저자');
    } else {
      setSearchFilter(e.target.innerText);
    }
    setIsOpenMenu(false);
  };

  const filterUri = {
    전체: 'total/',
    서명: 'book-title/',
    저자: 'author-name/',
    원문: 'content/',
  };
  const onSubmit = (e) => {
    if (keyword !== '' && keyword.trim() !== '') {
      window.location.href =
        '/search-result/'  + filterUri[searchFilter] + keyword;
    }
  };
  return (
    <SearchBlockPositioner border={border}>
      <CategoryPositioner>
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpenMenu(false);
          }}>
          <SelectedCategoryPositioner
            onClick={() => setIsOpenMenu(!isMenuOpen)}>
            <SelectedCategoryName>{searchFilter}</SelectedCategoryName>

            <RiArrowDropDownLine size="20" className="dropdown-icon" />
          </SelectedCategoryPositioner>

          {isMenuOpen && (
            <>
              <CategoryElement onClick={onClickMenu}>전체</CategoryElement>
              <CategoryElement onClick={onClickMenu}>서명</CategoryElement>
              <CategoryElement onClick={onClickMenu}>
                저/편/필자
              </CategoryElement>
              <CategoryElement onClick={onClickMenu}>원문</CategoryElement>
            </>
          )}
        </OutsideClickHandler>
      </CategoryPositioner>

      <SearchInputBox
        type="text"
        value={keyword}
        placeholder="검색어를 입력하세요."
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSubmit();
            setKeyword('');
          }
        }}
      />

      <BiSearch
        className="search-icon"
        size="30"
        type="button"
        onClick={() => {
          onSubmit();
          setKeyword('');
        }}
      />
    </SearchBlockPositioner>
  );
}

export default SearchBlock;
