import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { leftBlockDepth } from '../../../pages/menuExplore/MenuExploreBook';
import {
  currentFocusTitleContext,
  gwonchaContext,
  muncheContext,
  finalContext,
} from '../../shared/ContentLayout';

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
  icon = '',
  numbering = 1,
  clickId = '',
  parentId = '',
  currentTitle = '',
  children,
}) {
  const depthContext = useContext(leftBlockDepth);
  const currentFocusTitle = useContext(currentFocusTitleContext);
  const clickGwonchaContext = useContext(gwonchaContext);
  const clickMuncheContext = useContext(muncheContext);
  const clickFinalContext = useContext(finalContext);
  return (
    <Positioner
      marginLeft={marginLeft}
      onClick={() => {
        if (icon === 'gwoncha') {
          depthContext.setDepth(2);
          clickGwonchaContext.setClickGwoncha(clickId);
        } else if (icon === 'munche') {
          if (parentId !== '') {
            depthContext.setDepth(2);
            clickGwonchaContext.setClickGwoncha(parentId);
          }
          depthContext.setDepth(3);
          clickMuncheContext.setClickMunche(clickId);
        } else if (icon === 'final') {
          depthContext.setDepth(4);
          clickFinalContext.setClickFinal(clickId);
        }
        currentFocusTitle.setCurrentFocusTitle(currentTitle);
      }}>
      <IconPositioner>
        {icon === 'final' && (
          <TitleNumbering className="arrow-icon">{numbering}</TitleNumbering>
        )}
        {icon === 'gwoncha' && (
          <FaArrowAltCircleRight className="arrow-icon" size="19" />
        )}
        {icon === 'munche' && (
          <IoIosArrowForward className="arrow-icon" size="19" />
        )}
      </IconPositioner>
      <TextPositioner>{children}</TextPositioner>
    </Positioner>
  );
}

export default OtherListTableBlock;