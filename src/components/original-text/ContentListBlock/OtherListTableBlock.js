import React from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const Positioner = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: left;
  padding: 8px 0px;
  border-top: 1px solid #dadce0;
  .arrow-icon {
    color: orange;
    padding-left: ${(props) => props.marginLeft};
    padding-right: 9px;
  }
  &:hover {
    background-color: #edeaea;
    cursor: pointer;
  }
`;

const IconPositioner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

const TitleNumbering = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`;
const TextPositioner = styled.div`
  display: flex;
  align-items: center;
`;

function OtherListTableBlock({
  marginLeft = '13px',
  iconNum = 0,
  numbering = 1,
  children,
}) {
  return (
    <Positioner marginLeft={marginLeft}>
      <IconPositioner>
        {iconNum === '0' && (
          <TitleNumbering className="arrow-icon">{numbering}</TitleNumbering>
        )}
        {iconNum === '1' && (
          <FaArrowAltCircleRight className="arrow-icon" size="19" />
        )}
        {iconNum === '2' && (
          <IoIosArrowForward className="arrow-icon" size="19" />
        )}
      </IconPositioner>
      <TextPositioner>{children}</TextPositioner>
    </Positioner>
  );
}

export default OtherListTableBlock;
