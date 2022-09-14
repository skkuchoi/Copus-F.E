import React from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Positioner = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: left;
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

const IconPositioner = styled.div`
  display: flex;
  align-items: left;
  margin-top: 3px;
`;

const TextPositioner = styled.div``;

function OtherListTableBlock({ marginLeft = '13px', children }) {
  return (
    <Positioner marginLeft={marginLeft}>
      <IconPositioner>
        <FaArrowAltCircleRight className="arrow-icon" size="19" />
      </IconPositioner>
      <TextPositioner>{children}</TextPositioner>
    </Positioner>
  );
}

export default OtherListTableBlock;
