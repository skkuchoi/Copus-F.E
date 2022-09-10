import React, { useState } from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

const SearchBlockPositioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;

  border-radius: 30px;
  border: 1px solid #d9e3d8;
  .search-icon {
    padding: 10px 10px;
    height: 22px;
    width: 25px;
    color: black;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const SearchCategoryDiv = styled.div`
  width: 80px;
  height: 42px;
  background-color: rgba(188, 248, 183, 0.4);
  z-index: 10;
  font-size: 15px;
  border-radius: 30px 0px 0px 30px;
  color: black;
`;

const SelectedCategoryBlock = styled.div`
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
    cursor: pointer;
  }
`;

const SelectedCategoryName = styled.span`
  text-align: left;
`;

const CategoryElement = styled.li`
  background-color: rgba(188, 248, 183, 0.4);
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
function SearchBlock() {
  const [searchCategory, setSearchCategoryDiv] = useState('서명');
  const [keyword, setKeyword] = useState('');
  const [isMenuOpen, setIsOpenMenu] = useState(false);

  const onClickCategory = (e) => {
    setSearchCategoryDiv(e.target.innerText);
    setIsOpenMenu(false);
  };

  //검색 했을 때 일어나는 일(post)
  // searchCategory는, context 조회로, 해당 영역이 먼저 선택되도록 하자.
  const onSubmit = (e) => {
    if (keyword !== '' && keyword.trim() !== '') {
      window.location.href = '/search-result/' + searchCategory + '/' + keyword;
    }
  };
  return (
    <SearchBlockPositioner>
      <SearchCategoryDiv>
        <OutsideClickHandler
          onOutsideClick={() => {
            setIsOpenMenu(false);
          }}>
          <SelectedCategoryBlock>
            <SelectedCategoryName>{searchCategory}</SelectedCategoryName>

            <RiArrowDropDownLine
              size="20"
              className="dropdown-icon"
              onClick={() => setIsOpenMenu(!isMenuOpen)}
            />
          </SelectedCategoryBlock>
          {isMenuOpen && (
            <>
              <CategoryElement onClick={onClickCategory}>서명</CategoryElement>
              <CategoryElement onClick={onClickCategory}>저자</CategoryElement>
              <CategoryElement onClick={onClickCategory}>원문</CategoryElement>
            </>
          )}
        </OutsideClickHandler>
      </SearchCategoryDiv>

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
