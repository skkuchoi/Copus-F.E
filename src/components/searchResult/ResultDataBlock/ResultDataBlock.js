import Pagination from './Pagination';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryListItemTitleBlock from './CategoryListItemTitleBlock';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import NoExistDataBlock from './NoExistDataBlock';
import useAsync from '../../../hooks/useAsync';
import getRightSearchResult from '../../../api/search/getRightSearchResult';
import { totalFilter } from '../SearchResultLayout';
import parseGwoncha from '../../../utils/parseGwoncha';
import parseMunche from '../../../utils/parseMunche';
import parseTitle from '../../../utils/parseTitle';
import parseSearchContent from '../../../utils/parseSearchContent';
import Loading from '../../shared/Loading';
import {
  seojiContext,
  gwonchaContext,
  muncheContext,
  finalContext,
} from '../../shared/ContentLayout';

const ResultListPositioner = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 5% 95%;
  padding: 10px 3px;
  border-bottom: 0.5px solid #dadce0;
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

const Id = styled.span`
  font-size: 17px;
  margin: 0 auto;
`;

const ResultInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const SubInformation = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 17px;
  padding-left: 20px;
  color: gray;
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

const SubInformationText = styled.span`
  margin-right: 15px;
  ::after {
    content: '|';
    margin-left: 10px;
    opacity: 0.5;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const SubInformationTextNoHover = styled.span`
  margin-right: 15px;
  ::after {
    content: '|';
    margin-left: 10px;
    opacity: 0.5;
  }
`;
const OriginalText = styled.div`
  font-size: 17px;
  margin-top: 5px;
  padding-left: 20px;
  color: gray;
  &:hover {
    text-decoration: underline;
  }
`;

const FinalTitle = styled.span`
  font-size: 17px;
  margin: 0;
  &:hover {
    text-decoration: underline;
  }
`;
const FinalWonju = styled.span`
  font-size: 12px;
  margin: 0;
`;

function ResultDataBlock() {
  let id = 1;

  // useContext
  const totalDetailFilter = useContext(totalFilter);

  // Navigate
  const navigate = useNavigate();

  //SearchFilter Settings
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const filterUri = {
    total: 'total',
    'book-title': 'bookTitle',
    'author-name': 'authorName',
    'gwoncha-title': 'gwonchaTitle',
    'munche-title': 'muncheTitle',
    content: 'content',
    'data-id': 'dataId',
  };
  const filter = filterUri[pathname.split('/')[2]];

  const [rightDatas] = useAsync(
    () =>
      getRightSearchResult(
        filter,
        totalDetailFilter.totalDetailFilter,
        keyword,
      ),
    [filter, totalDetailFilter.totalDetailFilter],
  );

  //Pagination
  const [limitPage, setLimitPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limitPage;

  useEffect(() => {
    setCurrentPage(1);
  }, [filter, totalDetailFilter.totalDetailFilter]);

  // 로딩 페이지
  if (rightDatas.error) navigate('/server-error');
  if (rightDatas.data === null) return <Loading />;
  switch (filter) {
    case 'total':
      switch (totalDetailFilter.totalDetailFilter) {
        case 'total':
          return (
            <>
              <CategoryListItemTitleBlock
                title="총 리스트"
                number={rightDatas.data.count}
              />

              {rightDatas.data.count ? (
                rightDatas.data.datas
                  .slice(offset, offset + limitPage)
                  .map((item) => (
                    <>
                      <ResultListPositioner>
                        <Id> {id++}. </Id>
                        <ResultInformation>
                          <Title
                            onClick={() => {
                              navigate('/menu-explore/book/all', {
                                state: {
                                  currentId: item.seojiId,
                                },
                              });
                            }}>
                            {item.seojiTitle}
                          </Title>
                          <SubInformation>
                            <SubInformationTextNoHover>
                              {item.authorName}
                            </SubInformationTextNoHover>
                            <SubInformationTextNoHover>
                              {item.publishYear}
                            </SubInformationTextNoHover>

                            {item.gwonchaTitle !== null && (
                              <SubInformationText
                                onClick={() => {
                                  navigate('/menu-explore/book/all', {
                                    state: {
                                      lv1Id: item.seojiId,
                                      currentId: item.gwonchaId,
                                    },
                                  });
                                }}>
                                {parseGwoncha(item.gwonchaTitle)}
                              </SubInformationText>
                            )}

                            {item.muncheTitle !== null && (
                              <SubInformationText
                                onClick={() => {
                                  navigate('/menu-explore/book/all', {
                                    state: {
                                      lv1Id: item.seojiId,
                                      lv2Id: item.gwonchaId,
                                      currentId: item.muncheId,
                                    },
                                  });
                                }}>
                                {parseMunche(item.muncheTitle)}
                              </SubInformationText>
                            )}
                            <FinalTitle
                              onClick={() => {
                                navigate('/menu-explore/book/all', {
                                  state: {
                                    lv1Id: item.seojiId,
                                    lv2Id: item.gwonchaId,
                                    lv3Id: item.muncheId,
                                    currentId: item.finalId,
                                  },
                                });
                              }}>
                              {item.finalTitle !== null &&
                                parseTitle(item.finalTitle).map((el) => (
                                  <>
                                    {el.title}&nbsp;
                                    <FinalWonju>{el.wonju}&nbsp; </FinalWonju>
                                  </>
                                ))}
                            </FinalTitle>
                          </SubInformation>
                          {item.contentPartition !== null && (
                            <OriginalText
                              onClick={() => {
                                navigate('/menu-explore/book/all', {
                                  state: {
                                    lv1Id: item.seojiId,
                                    lv2Id: item.gwonchaId,
                                    lv3Id: item.muncheId,
                                    currentId: item.finalId,
                                  },
                                });
                              }}>
                              {parseSearchContent(item.contentPartition)}
                            </OriginalText>
                          )}
                        </ResultInformation>
                      </ResultListPositioner>
                    </>
                  ))
              ) : (
                <NoExistDataBlock />
              )}
              <Pagination
                totalContent={rightDatas.data.datas.length}
                limitPage={limitPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          );
        case 'bookTitle':
          return (
            <>
              <CategoryListItemTitleBlock
                title="서명"
                number={rightDatas.data.count}
              />
              {rightDatas.data.datas
                .slice(offset, offset + limitPage)
                .map((item) => (
                  <>
                    <ResultListPositioner>
                      <Id> {id++}. </Id>
                      <ResultInformation>
                        <Title
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                currentId: item.seojiId,
                              },
                            });
                          }}>
                          {item.seojiTitle}
                        </Title>
                        <SubInformation>
                          <SubInformationTextNoHover>
                            {item.authorName}
                          </SubInformationTextNoHover>
                          <SubInformationTextNoHover>
                            {item.publishYear}
                          </SubInformationTextNoHover>
                        </SubInformation>
                      </ResultInformation>
                    </ResultListPositioner>
                  </>
                ))}

              <br />

              <Pagination
                totalContent={rightDatas.data.count}
                limitPage={limitPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          );
        case 'authorName':
          return (
            <>
              <CategoryListItemTitleBlock
                title="저/편/필자"
                number={rightDatas.data.count}
              />
              {rightDatas.data.datas
                .slice(offset, offset + limitPage)
                .map((item) => (
                  <>
                    <ResultListPositioner>
                      <Id> {id++}. </Id>
                      <ResultInformation>
                        <Title
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                currentId: item.seojiId,
                              },
                            });
                          }}>
                          {item.seojiTitle}
                        </Title>
                        <SubInformation>
                          <SubInformationTextNoHover>
                            {item.authorName}
                          </SubInformationTextNoHover>
                          <SubInformationTextNoHover>
                            {item.publishYear}
                          </SubInformationTextNoHover>
                        </SubInformation>
                      </ResultInformation>
                    </ResultListPositioner>
                  </>
                ))}

              <br />

              <Pagination
                totalContent={rightDatas.data.count}
                limitPage={limitPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          );
        case 'gwonchaTitle':
          return (
            <>
              <CategoryListItemTitleBlock
                title="권차"
                number={rightDatas.data.count}
              />
              {rightDatas.data.datas
                .slice(offset, offset + limitPage)
                .map((item) => (
                  <>
                    <ResultListPositioner>
                      <Id> {id++}. </Id>
                      <ResultInformation>
                        <Title
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                currentId: item.seojiId,
                              },
                            });
                          }}>
                          {item.seojiTitle}
                        </Title>
                        <SubInformation>
                          <SubInformationTextNoHover>
                            {item.authorName}
                          </SubInformationTextNoHover>
                          <SubInformationTextNoHover>
                            {item.publishYear}
                          </SubInformationTextNoHover>
                          <SubInformationText
                            onClick={() => {
                              navigate('/menu-explore/book/all', {
                                state: {
                                  lv1Id: item.seojiId,
                                  currentId: item.gwonchaId,
                                },
                              });
                            }}>
                            {parseGwoncha(item.gwonchaTitle)}
                          </SubInformationText>
                        </SubInformation>
                      </ResultInformation>
                    </ResultListPositioner>
                  </>
                ))}

              <br />

              <Pagination
                totalContent={rightDatas.data.count}
                limitPage={limitPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          );
        case 'muncheTitle':
          return (
            <>
              <CategoryListItemTitleBlock
                title="문체"
                number={rightDatas.data.count}
              />
              {rightDatas.data.datas
                .slice(offset, offset + limitPage)
                .map((item) => (
                  <>
                    <ResultListPositioner>
                      <Id> {id++}. </Id>
                      <ResultInformation>
                        <Title
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                currentId: item.seojiId,
                              },
                            });
                          }}>
                          {item.seojiTitle}
                        </Title>
                        <SubInformation>
                          <SubInformationTextNoHover>
                            {item.authorName}
                          </SubInformationTextNoHover>
                          <SubInformationTextNoHover>
                            {item.publishYear}
                          </SubInformationTextNoHover>
                          <SubInformationText
                            onClick={() => {
                              navigate('/menu-explore/book/all', {
                                state: {
                                  lv1Id: item.seojiId,
                                  currentId: item.gwonchaId,
                                },
                              });
                            }}>
                            {parseGwoncha(item.gwonchaTitle)}
                          </SubInformationText>
                          <SubInformationText
                            onClick={() => {
                              navigate('/menu-explore/book/all', {
                                state: {
                                  lv1Id: item.seojiId,
                                  lv2Id: item.gwonchaId,
                                  currentId: item.muncheId,
                                },
                              });
                            }}>
                            {parseMunche(item.muncheTitle)}
                          </SubInformationText>
                        </SubInformation>
                      </ResultInformation>
                    </ResultListPositioner>
                  </>
                ))}

              <br />

              <Pagination
                totalContent={rightDatas.data.count}
                limitPage={limitPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          );
        case 'content':
          return (
            <>
              <CategoryListItemTitleBlock
                title="원문"
                number={rightDatas.data.count}
              />
              {rightDatas.data.datas
                .slice(offset, offset + limitPage)
                .map((item) => (
                  <>
                    <ResultListPositioner>
                      <Id> {id++}. </Id>
                      <ResultInformation>
                        <Title
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                currentId: item.seojiId,
                              },
                            });
                          }}>
                          {item.seojiTitle}
                        </Title>
                        <SubInformation>
                          <SubInformationTextNoHover>
                            {item.authorName}
                          </SubInformationTextNoHover>
                          <SubInformationTextNoHover>
                            {item.publishYear}
                          </SubInformationTextNoHover>
                          <SubInformationText
                            onClick={() => {
                              navigate('/menu-explore/book/all', {
                                state: {
                                  lv1Id: item.seojiId,
                                  currentId: item.gwonchaId,
                                },
                              });
                            }}>
                            {parseGwoncha(item.gwonchaTitle)}
                          </SubInformationText>
                          <SubInformationText
                            onClick={() => {
                              navigate('/menu-explore/book/all', {
                                state: {
                                  lv1Id: item.seojiId,
                                  lv2Id: item.gwonchaId,
                                  currentId: item.muncheId,
                                },
                              });
                            }}>
                            {parseMunche(item.muncheTitle)}
                          </SubInformationText>
                          <FinalTitle
                            onClick={() => {
                              navigate('/menu-explore/book/all', {
                                state: {
                                  lv1Id: item.seojiId,
                                  lv2Id: item.gwonchaId,
                                  lv3Id: item.muncheId,
                                  currentId: item.finalId,
                                },
                              });
                            }}>
                            {parseTitle(item.finalTitle).map((el) => (
                              <>
                                {el.title}&nbsp;
                                <FinalWonju>{el.wonju}&nbsp; </FinalWonju>
                              </>
                            ))}
                          </FinalTitle>
                        </SubInformation>
                        <OriginalText
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                lv1Id: item.seojiId,
                                lv2Id: item.gwonchaId,
                                lv3Id: item.muncheId,
                                currentId: item.finalId,
                              },
                            });
                          }}>
                          {parseSearchContent(item.contentPartition)}
                        </OriginalText>
                      </ResultInformation>
                    </ResultListPositioner>
                  </>
                ))}

              <br />

              <Pagination
                totalContent={rightDatas.data.count}
                limitPage={limitPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          );
        case 'dataId':
          return (
            <>
              <CategoryListItemTitleBlock
                title="자료ID"
                number={rightDatas.data.count}
              />
              {rightDatas.data.datas
                .slice(offset, offset + limitPage)
                .map((item) => (
                  <>
                    <ResultListPositioner>
                      <Id> {id++}. </Id>
                      <ResultInformation>
                        <Title
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                currentId: item.seojiId,
                              },
                            });
                          }}>
                          {item.seojiTitle}
                        </Title>
                        <SubInformation>
                          <SubInformationTextNoHover>
                            {item.authorName}
                          </SubInformationTextNoHover>
                          <SubInformationTextNoHover>
                            {item.publishYear}
                          </SubInformationTextNoHover>

                          {item.gwonchaTitle && (
                            <SubInformationText
                              onClick={() => {
                                navigate('/menu-explore/book/all', {
                                  state: {
                                    lv1Id: item.seojiId,
                                    currentId: item.gwonchaId,
                                  },
                                });
                              }}>
                              {parseGwoncha(item.gwonchaTitle)}
                            </SubInformationText>
                          )}
                          {item.muncheTitle && (
                            <SubInformationText
                              onClick={() => {
                                navigate('/menu-explore/book/all', {
                                  state: {
                                    lv1Id: item.seojiId,
                                    lv2Id: item.gwonchaId,
                                    currentId: item.muncheId,
                                  },
                                });
                              }}>
                              {parseMunche(item.muncheTitle)}
                            </SubInformationText>
                          )}
                          <FinalTitle
                            onClick={() => {
                              navigate('/menu-explore/book/all', {
                                state: {
                                  lv1Id: item.seojiId,
                                  lv2Id: item.gwonchaId,
                                  lv3Id: item.muncheId,
                                  currentId: item.finalId,
                                },
                              });
                            }}>
                            {item.finalTitle &&
                              parseTitle(item.finalTitle).map((el) => (
                                <>
                                  {el.title}&nbsp;
                                  <FinalWonju>{el.wonju}&nbsp; </FinalWonju>
                                </>
                              ))}
                          </FinalTitle>
                        </SubInformation>
                      </ResultInformation>
                    </ResultListPositioner>
                  </>
                ))}

              <br />

              <Pagination
                totalContent={rightDatas.data.count}
                limitPage={limitPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          );

        default:
          break;
      }
      break;
    case 'bookTitle':
      if (!rightDatas.data.count)
        return (
          <>
            <CategoryListItemTitleBlock
              title="서명"
              number={rightDatas.data.count}
            />
            <NoExistDataBlock />
          </>
        );

      return (
        <>
          <CategoryListItemTitleBlock
            title="서명"
            number={rightDatas.data.count}
          />

          {rightDatas.data.datas
            .slice(offset, offset + limitPage)
            .map((item) => (
              <>
                <ResultListPositioner>
                  <Id> {id++}. </Id>

                  <ResultInformation>
                    <Title
                      onClick={() => {
                        navigate('/menu-explore/book/all', {
                          state: {
                            currentId: item.seojiId,
                          },
                        });
                      }}>
                      {item.seojiTitle}
                    </Title>

                    <SubInformation>
                      <SubInformationTextNoHover>
                        {item.authorName}
                      </SubInformationTextNoHover>
                      <SubInformationTextNoHover>
                        {item.publishYear}
                      </SubInformationTextNoHover>
                    </SubInformation>
                  </ResultInformation>
                </ResultListPositioner>
              </>
            ))}

          <Pagination
            totalContent={rightDatas.data.datas.length}
            limitPage={limitPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      );
    case 'authorName':
      if (!rightDatas.data.count)
        return (
          <>
            <CategoryListItemTitleBlock
              title="저/편/필자"
              number={rightDatas.data.count}
            />
            <NoExistDataBlock />
          </>
        );
      return (
        <>
          <CategoryListItemTitleBlock
            title="저/편/필자"
            number={rightDatas.data.count}
          />

          {rightDatas.data.datas
            .slice(offset, offset + limitPage)
            .map((item) => (
              <>
                <ResultListPositioner>
                  <Id> {id++}. </Id>

                  <ResultInformation>
                    <Title
                      onClick={() => {
                        navigate('/menu-explore/book/all', {
                          state: {
                            currentId: item.seojiId,
                          },
                        });
                      }}>
                      {item.seojiTitle}
                    </Title>

                    <SubInformation>
                      <SubInformationTextNoHover>
                        {item.authorName}
                      </SubInformationTextNoHover>
                      <SubInformationTextNoHover>
                        {item.publishYear}
                      </SubInformationTextNoHover>
                    </SubInformation>
                  </ResultInformation>
                </ResultListPositioner>
              </>
            ))}

          <Pagination
            totalContent={rightDatas.data.datas.length}
            limitPage={limitPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      );
    case 'gwonchaTitle':
      if (!rightDatas.data.count)
        return (
          <>
            <CategoryListItemTitleBlock
              title="권차"
              number={rightDatas.data.count}
            />
            <NoExistDataBlock />
          </>
        );
      return (
        <>
          <CategoryListItemTitleBlock
            title="권차"
            number={rightDatas.data.count}
          />

          {rightDatas.data.datas
            .slice(offset, offset + limitPage)
            .map((item) => (
              <>
                <ResultListPositioner>
                  <Id> {id++}. </Id>

                  <ResultInformation>
                    <Title
                      onClick={() => {
                        navigate('/menu-explore/book/all', {
                          state: {
                            currentId: item.seojiId,
                          },
                        });
                      }}>
                      {item.seojiTitle}
                    </Title>

                    <SubInformation>
                      <SubInformationTextNoHover>
                        {item.authorName}
                      </SubInformationTextNoHover>
                      <SubInformationTextNoHover>
                        {item.publishYear}
                      </SubInformationTextNoHover>
                      <SubInformationText
                        onClick={() => {
                          navigate('/menu-explore/book/all', {
                            state: {
                              lv1Id: item.seojiId,
                              currentId: item.gwonchaId,
                            },
                          });
                        }}>
                        {parseGwoncha(item.gwonchaTitle)}
                      </SubInformationText>
                    </SubInformation>
                  </ResultInformation>
                </ResultListPositioner>
              </>
            ))}

          <Pagination
            totalContent={rightDatas.data.datas.length}
            limitPage={limitPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      );
    case 'muncheTitle':
      if (!rightDatas.data.count)
        return (
          <>
            <CategoryListItemTitleBlock
              title="문체"
              number={rightDatas.data.count}
            />
            <NoExistDataBlock />
          </>
        );
      return (
        <>
          <CategoryListItemTitleBlock
            title="문체"
            number={rightDatas.data.count}
          />

          {rightDatas.data.datas
            .slice(offset, offset + limitPage)
            .map((item) => (
              <>
                <ResultListPositioner>
                  <Id> {id++}. </Id>

                  <ResultInformation>
                    <Title
                      onClick={() => {
                        navigate('/menu-explore/book/all', {
                          state: {
                            currentId: item.seojiId,
                          },
                        });
                      }}>
                      {item.seojiTitle}
                    </Title>

                    <SubInformation>
                      <SubInformationTextNoHover>
                        {item.authorName}
                      </SubInformationTextNoHover>
                      <SubInformationTextNoHover>
                        {item.publishYear}
                      </SubInformationTextNoHover>
                      <SubInformationText
                        onClick={() => {
                          navigate('/menu-explore/book/all', {
                            state: {
                              lv1Id: item.seojiId,
                              currentId: item.gwonchaId,
                            },
                          });
                        }}>
                        {parseGwoncha(item.gwonchaTitle)}
                      </SubInformationText>
                      <SubInformationText
                        onClick={() => {
                          navigate('/menu-explore/book/all', {
                            state: {
                              lv1Id: item.seojiId,

                              lv2Id: item.gwonchaId,
                              currentId: item.muncheId,
                            },
                          });
                        }}>
                        {parseMunche(item.muncheTitle)}
                      </SubInformationText>
                    </SubInformation>
                  </ResultInformation>
                </ResultListPositioner>
              </>
            ))}

          <Pagination
            totalContent={rightDatas.data.datas.length}
            limitPage={limitPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      );
    case 'content':
      if (!rightDatas.data.count)
        return (
          <>
            <CategoryListItemTitleBlock
              title="원문"
              number={rightDatas.data.count}
            />
            <NoExistDataBlock />
          </>
        );
      return (
        <>
          <CategoryListItemTitleBlock
            title="원문"
            number={rightDatas.data.count}
          />

          {rightDatas.data.datas
            .slice(offset, offset + limitPage)
            .map((item) => (
              <>
                <ResultListPositioner>
                  <Id> {id++}. </Id>

                  <ResultInformation>
                    <Title
                      onClick={() => {
                        navigate('/menu-explore/book/all', {
                          state: {
                            id: item.seojiId,
                          },
                        });
                      }}>
                      {item.seojiTitle}
                    </Title>

                    <SubInformation>
                      <SubInformationTextNoHover>
                        {item.authorName}
                      </SubInformationTextNoHover>
                      <SubInformationTextNoHover>
                        {item.publishYear}
                      </SubInformationTextNoHover>
                      <SubInformationText
                        onClick={() => {
                          navigate('/menu-explore/book/all', {
                            state: {
                              lv1Id: item.seojiId,
                              currentId: item.gwonchaId,
                            },
                          });
                        }}>
                        {parseGwoncha(item.gwonchaTitle)}
                      </SubInformationText>
                      <SubInformationText
                        onClick={() => {
                          navigate('/menu-explore/book/all', {
                            state: {
                              lv1Id: item.seojiId,

                              lv2Id: item.gwonchaId,
                              currentId: item.muncheId,
                            },
                          });
                        }}>
                        {parseMunche(item.muncheTitle)}
                      </SubInformationText>
                      <FinalTitle
                        onClick={() => {
                          navigate('/menu-explore/book/all', {
                            state: {
                              lv1Id: item.seojiId,
                              lv2Id: item.gwonchaId,
                              lv3Id: item.muncheId,
                              currentId: item.finalId,
                            },
                          });
                        }}>
                        {parseTitle(item.finalTitle).map((el) => (
                          <>
                            {el.title}&nbsp;
                            <FinalWonju>{el.wonju}&nbsp; </FinalWonju>
                          </>
                        ))}
                      </FinalTitle>
                    </SubInformation>
                    <OriginalText
                      onClick={() => {
                        navigate('/menu-explore/book/all', {
                          state: {
                            lv1Id: item.seojiId,
                            lv2Id: item.gwonchaId,
                            lv3Id: item.muncheId,

                            currentId: item.finalId,
                          },
                        });
                      }}>
                      {parseSearchContent(item.contentPartition)}
                    </OriginalText>
                  </ResultInformation>
                </ResultListPositioner>
              </>
            ))}

          <Pagination
            totalContent={rightDatas.data.datas.length}
            limitPage={limitPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      );
    case 'dataId':
      if (!rightDatas.data.count)
        return (
          <>
            <CategoryListItemTitleBlock
              title="자료ID"
              number={rightDatas.data.count}
            />
            <NoExistDataBlock />
          </>
        );
      return (
        <>
          <CategoryListItemTitleBlock
            title="자료ID"
            number={rightDatas.data.count}
          />

          {rightDatas.data.datas
            .slice(offset, offset + limitPage)
            .map((item) => (
              <>
                <ResultListPositioner>
                  <Id> {id++}. </Id>

                  <ResultInformation>
                    <Title
                      onClick={() => {
                        navigate('/menu-explore/book/all', {
                          state: {
                            id: item.seojiId,
                          },
                        });
                      }}>
                      {item.seojiTitle}
                    </Title>

                    <SubInformation>
                      <SubInformationTextNoHover>
                        {item.authorName}
                      </SubInformationTextNoHover>
                      <SubInformationTextNoHover>
                        {item.publishYear}
                      </SubInformationTextNoHover>

                      {item.gwonchaTitle && (
                        <SubInformationText
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                lv1Id: item.seojiId,
                                currentId: item.gwonchaId,
                              },
                            });
                          }}>
                          {parseGwoncha(item.gwonchaTitle)}
                        </SubInformationText>
                      )}
                      {item.muncheTitle && (
                        <SubInformationText
                          onClick={() => {
                            navigate('/menu-explore/book/all', {
                              state: {
                                lv1Id: item.seojiId,

                                lv2Id: item.gwonchaId,
                                currentId: item.muncheId,
                              },
                            });
                          }}>
                          {parseMunche(item.muncheTitle)}
                        </SubInformationText>
                      )}
                      <FinalTitle
                        onClick={() => {
                          navigate('/menu-explore/book/all', {
                            state: {
                              lv1Id: item.seojiId,
                              lv2Id: item.gwonchaId,
                              lv3Id: item.muncheId,
                              currentId: item.finalId,
                            },
                          });
                        }}>
                        {item.finalTitle &&
                          parseTitle(item.finalTitle).map((el) => (
                            <>
                              {el.title}&nbsp;
                              <FinalWonju>{el.wonju}&nbsp; </FinalWonju>
                            </>
                          ))}
                      </FinalTitle>
                    </SubInformation>
                  </ResultInformation>
                </ResultListPositioner>
              </>
            ))}

          <Pagination
            totalContent={rightDatas.data.datas.length}
            limitPage={limitPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      );

    default:
      return;
  }
}

export default ResultDataBlock;
