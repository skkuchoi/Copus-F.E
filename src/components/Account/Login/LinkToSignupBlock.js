
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkBlock = styled.div`
  margin-top: 5px;
  text-align: right;
  padding-right: 5px;
  padding-top: 2px;
  border-top: 1px solid #dadada;
  .link-line {
    list-style: none;
    text-decoration-line: none;
  }
`;

const LinkName = styled.span`
  font-size: 13px;
  color: gray;
  cursor: pointer;
`;

function LinkToSignupBlock() {
  return (
    <LinkBlock>
      <Link to="/signup" className="link-line">
        <LinkName>회원가입</LinkName>
      </Link>
    </LinkBlock>
  );
}

export default LinkToSignupBlock;
