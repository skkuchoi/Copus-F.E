import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import '../../shared/linkStyle.css';
import getDepth2List from '../../../api/explore1/sidebar/getDepth2List';

import useAsync from '../../../hooks/useAsync';
import { selectedConsonant } from '../SortBlock/SortBlock';
import getDepth1List from '../../../api/explore1/sidebar/left/getLeftDepth1List';


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

function SidebarBlock({ depth = 2 }) {
  //State
  const [seoji, setSeoji] = useState('');
  const [gwoncha, setGwoncha] = useState('');
  //Data

  const leftDatasDepth3 = {
    parentId: 'childId3',
    datas: [
      {
        childId: 'childId3-1',
        childTitle: 'childTitleDepth3-1',
      },
      {
        childId: 'childId3-2',
        childTitle: 'childTitleDepth3-2',
      },
    ],
  };

  const realDatasDepth3 = JSON.parse(JSON.stringify(leftDatasDepth3));

  const container = useRef();
  const { pathname, state } = useLocation();

  console.log('state: ', state);
  let iconState = {};
  useEffect(() => {
    if (state !== null) {
      container.current.scrollTo(0, state.height);
      window.scrollTo(0, 100);
      if (state.length > 1) {
        iconState = state.iconState;
      }
    }
  }, [container, pathname]);
  const link4Seoji = '/menu-explore/gwoncha/';
  const link4Gwoncha = '/menu-explore/munche/';

  // + - 아이콘
  const navigate = useNavigate();
  const [minusIcon, setMinusIcon] = useState(iconState);
  const handleIconShape = (id) => {
    setMinusIcon((prevMinusIcon) => ({
      ...prevMinusIcon,
      [id]: !prevMinusIcon[id],
    }));
    console.log(minusIcon);
    navigate(link4Seoji + id, {
      state: { height: '300', iconState: minusIcon },
    });
  };

  const onClickTitle = (id, height) => {
    const gwonchaList = [];
    const moveHeight = height < 400 ? 0 : 300;
    navigate(link4Seoji + id, {
      state: { height: moveHeight, iconState: minusIcon },
    });
  };
  const consonant = useContext(selectedConsonant);
 
  const [consonantDatas] = useAsync(() => getDepth2List(2, consonant), [consonant]);
 
  return (
    <Container ref={container}>
      {depth >= 2 && consonantDatas.data !== null && (
        <>
          {consonantDatas.data.datas.map((item) => (
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
                    onClickTitle(item.childId, target.pageY);
                  }}>
                  {item.childTitle}
                </ListLi>
              </ListItemPositioner>

              {depth >= 3 && realDatasDepth3.parentId === item.childId && (
                <>
                  {realDatasDepth3.datas.map((item) => (
                    <ListItemPositioner className="gwoncha-padding">
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
                          onClickTitle(item.childId, target.pageY);
                        }}>
                        {item.childTitle}
                      </ListLi>
                    </ListItemPositioner>
                  ))}
                </>
              )}
            </>
          ))}
        </>
      )}
    </Container>
  );
}

export default SidebarBlock;
