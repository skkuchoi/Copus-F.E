import React from 'react';
import styled from 'styled-components';
import ImgBlock from './ImgBlock/ImgBlock';
import SearchBlock from '../../shared/SearchBlock/SearchBlock';

const MenuPositioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding-right: 30px;
  @media screen and (max-width: 800px) {
    justify-content: center;
  }
`;

function Header() {
  return (
    <MenuPositioner>
      <ImgBlock />
      <SearchBlock border="1px solid #d9e3d8" />
    </MenuPositioner>
  );
}

export default Header;
