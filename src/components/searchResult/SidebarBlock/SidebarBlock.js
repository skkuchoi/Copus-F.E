import React from 'react';
import styled from 'styled-components';
import CategoryListBlock from './CategoryListBlock';
import { RiArrowDropDownLine } from 'react-icons/ri';
import '../../shared/linkStyle.css';
import { useNavigate } from 'react-router-dom';

const SidebarPositioner = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 75vh;
  padding: 7px 10px;
`;

const LiteratureTitlePositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 3px;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 5px;
  .arrow-icon {
    color: #c55a11;
    height: 30px;
  }
`;

const LiteratureTitle = styled.p`
  color: #c55a11;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

function SidebarBlock({ leftDatas }) {
  const navigate = useNavigate();
  if (leftDatas.error) navigate('/server-error');
  return (
    <SidebarPositioner>
      <LiteratureTitlePositioner>
        <LiteratureTitle>한국문집총간 ({leftDatas.totalCount})</LiteratureTitle>
        <RiArrowDropDownLine className="arrow-icon" size="35" />
      </LiteratureTitlePositioner>

      <CategoryListBlock
        totalCount={leftDatas.totalCount}
        bookTitleCount={leftDatas.bookTitleCount}
        authorNameCount={leftDatas.authorNameCount}
        gwonchaTitleCount={leftDatas.gwonchaTitleCount}
        muncheTitleCount={leftDatas.muncheTitleCount}
        contentCount={leftDatas.contentCount}
        dataIdCount={leftDatas.dataIdCount}
      />
    </SidebarPositioner>
  );
}

export default SidebarBlock;
