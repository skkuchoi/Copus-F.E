import React, { useRef, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import useAsync from '../../../hooks/useAsync';
import { selectedConsonant, selectedFilter } from '../SortBlock/SortBlock';
import { useLocation, useNavigate } from 'react-router-dom';
import getLeftDepth1List from '../../../api/explore1/sidebar/left/getLeftDepth1List';

const Container = styled.div`
  border: 1px solid #d9d9d9;
  border-right: none;
  height: 85vh;
  overflow-y: scroll;
  overflow-x: scroll;

  .gwoncha-padding {
    padding-left: 30px;
  }

  .munche-padding {
    margin-left: 39px;
  }

  .final-padding {
    margin-left: 65px;
  }
`;

const ListItemPositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 5px 10px;

  .list-icon {
    border: 0.5px solid #c9c9c9;
    color: gray;
    margin-right: 3px;
    position: relative;
    top: 2px;
    &:hover {
      background-color: #eeeeee;
      cursor: pointer;
    }
  }
`;

const ListLi = styled.li`
  list-style-type: none;
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;

function Depth1Sidebar() {
  const container = useRef();
  const { pathname, state } = useLocation();
  useEffect(() => {
    if (state !== null) {
      container.current.scrollTo(0, state.height);
      window.scrollTo(0, 100);
      //   if (state.length > 1) {
      //     iconState = state.iconState;
      //   }
    }
  }, [container, pathname]);

  const consonant = useContext(selectedConsonant);
  const filter = useContext(selectedFilter);
 
  // set scroll 0 whenever click filter || consonant
  useEffect(() => {
    container.current.scrollTo(0, 0);
  }, [filter, consonant]);

  // send Get API
  const [seojiListData] = useAsync(
    () => getLeftDepth1List(1, filter, consonant),
    [filter, consonant],
  );

  // + - 아이콘
  const [minusIcon, setMinusIcon] = useState({});
  const handleIconShape = (id) => {
    setMinusIcon((prevMinusIcon) => ({
      ...prevMinusIcon,
      [id]: !prevMinusIcon[id],
    }));
  };

  // seoji title Click link
  const navigate = useNavigate();
  const link4Seoji = '/menu-explore/2';
  const onClickTitle = (height) => {
    //const gwonchaList = [];
    const moveHeight = height < 400 ? 0 : 300;
    // navigate(link4Seoji, {
    //   state: { height: moveHeight, iconState: minusIcon },
    // });
  };

  return (
    <Container ref={container}>
      {seojiListData.data !== null &&
        seojiListData.data.datas.map((item) => (
          <>
            <ListItemPositioner>
              {minusIcon[item.childId] ? (
                <TiMinusOutline
                  className="list-icon"
                  onClick={() => {
                    handleIconShape(item.childId);
                  }}
                />
              ) : (
                <TiPlusOutline
                  className="list-icon"
                  onClick={() => {
                    handleIconShape(item.childId);
                  }}
                />
              )}          
              <ListLi
                onClick={(target) => {
                  onClickTitle(target.pageY);
                }}>
                {item.childTitle}
              </ListLi>
            </ListItemPositioner>
          </>
        ))}
    </Container>
  );
}

export default Depth1Sidebar;
