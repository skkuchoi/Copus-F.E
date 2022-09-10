import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const MenuBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 7px;
  width: 98%;
  height: fit-content;
`;

const MenuElement = styled.div`
  display: flex;
  padding: 10px;
  width: 100%;
  border-radius: 0px 30px 30px 0px;
  height: fit-content;
  background-color: ${(props) =>
    props.display ? 'rgba(188, 248, 183, 0.4)' : 'transparent'};
`;
const MenuText = styled.span`
  margin-left: 10px;
  font-size: 20px;
  color: black;

  &:hover {
    cursor: pointer;
    font-weight: bold;
  }
`;

function MenuListBlock() {
  const { pathname } = useLocation();
  const isMemberPage = pathname.includes('member');
  const [personalMenu, isPersonalMenu] = useState(true);
  const [memberMenu, isMemberMenu] = useState(false);

  useEffect(() => {
    if (isMemberPage) {
      isPersonalMenu(false);
      isMemberMenu(true);
    } else {
      isPersonalMenu(true);
      isMemberMenu(false);
    }
  }, [pathname]);
  return (
    <>
      <MenuBlock>
        <MenuElement display={personalMenu}>
          <FaUserCircle className="icon" size="30" />

          <MenuText>
            <Link
              to="/myaccount"
              style={{ textDecoration: 'none', color: 'black' }}>
              개인 정보
            </Link>
          </MenuText>
        </MenuElement>
      </MenuBlock>

      <MenuBlock>
        <MenuElement display={memberMenu}>
          <MdOutlineManageAccounts className="icon" size="30" />

          <MenuText>
            <Link
              to="/myaccount/member"
              style={{ textDecoration: 'none', color: 'black' }}>
              회원 관리
            </Link>
          </MenuText>
        </MenuElement>
      </MenuBlock>
    </>
  );
}

export default MenuListBlock;
