import React from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Positioner = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  padding: 5px 0px;
  border-top: 1px solid #dadce0;
  &:hover {
    background-color: #edeaea;
    cursor: pointer;
  }
  .arrow-icon {
    color: orange;
    margin-left: ${(props) => props.marginLeft};
    margin-right: 9px;
  }
`;

function OtherTableBlock({ marginLeft = '13px', children }) {
  return (
    <Positioner marginLeft={marginLeft}>
      <FaArrowAltCircleRight className="arrow-icon" />
      {children}
    </Positioner>
  );
}

export default OtherTableBlock;
