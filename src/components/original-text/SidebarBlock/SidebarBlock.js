import React, { useState, useEffect, useRef } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import '../../shared/linkStyle.css';
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
  align-items: center;
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
  //Data
  const leftDatasDepth2 = {
    datas: [
      {
        childId: 'childId1',
        childTitle: 'childTitleDepth2-1',
      },
      {
        childId: 'childId2',
        childTitle: 'childTitleDepth2-2',
      },
      {
        childId: 'childId3',
        childTitle: 'childTitleDepth2-3',
      },
      {
        childId: 'childId4',
        childTitle: 'childTitleDepth2-4',
      },
      {
        childId: 'childId5',
        childTitle: 'childTitleDepth2-5',
      },
      {
        childId: 'childId6',
        childTitle: 'childTitleDepth2-6',
      },
      {
        childId: 'childId7',
        childTitle: 'childTitleDepth2-7',
      },
      {
        childId: 'childId8',
        childTitle: 'childTitleDepth2-8',
      },
      {
        childId: 'childId9',
        childTitle: 'childTitleDepth2-9',
      },
      {
        childId: 'childId10',
        childTitle: 'childTitleDepth2-10',
      },
      {
        childId: 'childId11',
        childTitle: 'childTitleDepth2-11',
      },
      {
        childId: 'childId12',
        childTitle: 'childTitleDepth2-12',
      },
      {
        childId: 'childId13',
        childTitle: 'childTitleDepth2-13',
      },
      {
        childId: 'childId14',
        childTitle: 'childTitleDepth2-14',
      },
      {
        childId: 'childId15',
        childTitle: 'childTitleDepth2-15',
      },
      {
        childId: 'childId16',
        childTitle: 'childTitleDepth2-16',
      },
      {
        childId: 'childId17',
        childTitle: 'childTitleDepth2-17',
      },
      {
        childId: 'childId18',
        childTitle: 'childTitleDepth2-18',
      },
      {
        childId: 'childId19',
        childTitle: 'childTitleDepth2-19',
      },
      {
        childId: 'childId20',
        childTitle: 'childTitleDepth2-20',
      },
      {
        childId: 'childId21',
        childTitle: 'childTitleDepth2-21',
      },
    ],
  };
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
  const leftDatasDepth4 = {
    datas: [
      {
        childId: 'childId',
        childTitle: 'childTitleDepth4-1',
      },
      {
        childId: 'childId',
        childTitle: 'childTitleDepth4-2',
      },
    ],
  };
  const leftDatasDepth5 = {
    datas: [
      {
        childId: 'childId',
        childTitle: 'childTitleDepth5-1',
      },
      {
        childId: 'childId',
        childTitle: 'childTitleDepth5-2',
      },
    ],
  };
  const realDatasDepth2 = JSON.parse(JSON.stringify(leftDatasDepth2));
  const realDatasDepth3 = JSON.parse(JSON.stringify(leftDatasDepth3));
  const realDatasDepth4 = JSON.parse(JSON.stringify(leftDatasDepth4));
  const realDatasDepth5 = JSON.parse(JSON.stringify(leftDatasDepth5));

  const container = useRef();
  const { state } = useLocation();
  const { pathname } = useLocation();
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

  return (
    <Container ref={container}>
      {depth >= 2 && (
        <>
          {realDatasDepth2.datas.map((item) => (
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
