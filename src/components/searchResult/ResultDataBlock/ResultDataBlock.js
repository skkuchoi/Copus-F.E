import Pagination from './Pagination';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryListItemTitleBlock from './CategoryListItemTitleBlock';
import { useLocation, useParams } from 'react-router-dom';
import NoExistDataBlock from './NoExistDataBlock';
import useAsync from '../../../hooks/useAsync';
import getRightSearchResult from '../../../api/search/getRightSearchResult';
import { totalFilter } from '../SearchResultLayout';
import parseGwoncha from '../../../utils/parseGwoncha';
import parseMunche from '../../../utils/parseMunche';
import parseTitle from '../../../utils/parseTitle';
import parseContent from '../../../utils/parseContent';

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
`;

const OriginalText = styled.div`
  font-size: 17px;
  margin-top: 5px;
  padding-left: 20px;
  color: gray;
`;

const FinalTitle = styled.span`
  font-size: 17px;
  margin: 0;
`;
const FinalWonju = styled.span`
  font-size: 12px;
  margin: 0;
`;

function ResultDataBlock() {
  let id = 1;

  // useContext
  const totalDetailFilter = useContext(totalFilter);

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
  }, [filter, totalDetailFilter]);

  // console.log(totalDetailFilter.totalDetailFilter);
  //console.log(rightDatas);
  // 로딩 페이지
  if (rightDatas.data === null) return <div>zz</div>;
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
                          <Title>{item.seojiTitle}</Title>
                          <SubInformation>
                            <SubInformationText>
                              {item.authorName}
                            </SubInformationText>
                            <SubInformationText>
                              {item.publishYear}
                            </SubInformationText>

                            {item.gwonchaTitle !== null && (
                              <SubInformationText>
                                {parseGwoncha(item.gwonchaTitle)}
                              </SubInformationText>
                            )}

                            {item.muncheTitle !== null && (
                              <SubInformationText>
                                {parseMunche(item.muncheTitle)}
                              </SubInformationText>
                            )}

                            {item.finalTitle !== null &&
                              parseTitle(item.finalTitle).map((el) => (
                                <FinalTitle>
                                  &nbsp; {el.title}&nbsp;
                                  <FinalWonju>{el.wonju}</FinalWonju>
                                </FinalTitle>
                              ))}
                          </SubInformation>
                          {item.contentPartition !== null && (
                            <OriginalText>
                              {parseContent(item.contentPartition)}
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
                        <Title>{item.seojiTitle}</Title>
                        <SubInformation>
                          <SubInformationText>
                            {item.authorName}
                          </SubInformationText>
                          <SubInformationText>
                            {item.publishYear}
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
                        <Title>{item.seojiTitle}</Title>
                        <SubInformation>
                          <SubInformationText>
                            {item.authorName}
                          </SubInformationText>
                          <SubInformationText>
                            {item.publishYear}
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
                        <Title>{item.seojiTitle}</Title>
                        <SubInformation>
                          <SubInformationText>
                            {item.authorName}
                          </SubInformationText>
                          <SubInformationText>
                            {item.publishYear}
                          </SubInformationText>
                          <SubInformationText>
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
                        <Title>{item.seojiTitle}</Title>
                        <SubInformation>
                          <SubInformationText>
                            {item.authorName}
                          </SubInformationText>
                          <SubInformationText>
                            {item.publishYear}
                          </SubInformationText>
                          <SubInformationText>
                            {parseGwoncha(item.gwonchaTitle)}
                          </SubInformationText>
                          <SubInformationText>
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
                        <Title>{item.seojiTitle}</Title>
                        <SubInformation>
                          <SubInformationText>
                            {item.authorName}
                          </SubInformationText>
                          <SubInformationText>
                            {item.publishYear}
                          </SubInformationText>
                          <SubInformationText>
                            {parseGwoncha(item.gwonchaTitle)}
                          </SubInformationText>
                          <SubInformationText>
                            {parseMunche(item.muncheTitle)}
                          </SubInformationText>
                          {parseTitle(item.finalTitle).map((el) => (
                            <FinalTitle>
                              &nbsp; {el.title}&nbsp;
                              <FinalWonju>{el.wonju}</FinalWonju>
                            </FinalTitle>
                          ))}
                        </SubInformation>
                        <OriginalText>
                          {parseContent(item.contentPartition)}
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
                        <Title>{item.seojiTitle}</Title>
                        <SubInformation>
                          <SubInformationText>
                            {item.authorName}
                          </SubInformationText>
                          <SubInformationText>
                            {item.publishYear}
                          </SubInformationText>

                          {item.gwonchaTitle && (
                            <SubInformationText>
                              {parseGwoncha(item.gwonchaTitle)}
                            </SubInformationText>
                          )}
                          {item.muncheTitle && (
                            <SubInformationText>
                              {parseMunche(item.muncheTitle)}
                            </SubInformationText>
                          )}

                          {item.finalTitle &&
                            parseTitle(item.finalTitle).map((el) => (
                              <FinalTitle>
                                &nbsp; {el.title}&nbsp;
                                <FinalWonju>{el.wonju}</FinalWonju>
                              </FinalTitle>
                            ))}
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
                    <Title>{item.seojiTitle}</Title>

                    <SubInformation>
                      <SubInformationText>{item.authorName}</SubInformationText>
                      <SubInformationText>
                        {item.publishYear}
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
                    <Title>{item.seojiTitle}</Title>

                    <SubInformation>
                      <SubInformationText>{item.authorName}</SubInformationText>
                      <SubInformationText>
                        {item.publishYear}
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
                    <Title>{item.seojiTitle}</Title>

                    <SubInformation>
                      <SubInformationText>{item.authorName}</SubInformationText>
                      <SubInformationText>
                        {item.publishYear}
                      </SubInformationText>
                      <SubInformationText>
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
                    <Title>{item.seojiTitle}</Title>

                    <SubInformation>
                      <SubInformationText>{item.authorName}</SubInformationText>
                      <SubInformationText>
                        {item.publishYear}
                      </SubInformationText>
                      <SubInformationText>
                        {parseGwoncha(item.gwonchaTitle)}
                      </SubInformationText>
                      <SubInformationText>
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
                    <Title>{item.seojiTitle}</Title>

                    <SubInformation>
                      <SubInformationText>{item.authorName}</SubInformationText>
                      <SubInformationText>
                        {item.publishYear}
                      </SubInformationText>
                      <SubInformationText>
                        {parseGwoncha(item.gwonchaTitle)}
                      </SubInformationText>
                      <SubInformationText>
                        {parseMunche(item.muncheTitle)}
                      </SubInformationText>
                      {parseTitle(item.finalTitle).map((el) => (
                        <FinalTitle>
                          &nbsp; {el.title}&nbsp;
                          <FinalWonju>{el.wonju}</FinalWonju>
                        </FinalTitle>
                      ))}
                    </SubInformation>
                    <OriginalText>
                      {parseContent(item.contentPartition)}
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
                    <Title>{item.seojiTitle}</Title>

                    <SubInformation>
                      <SubInformationText>{item.authorName}</SubInformationText>
                      <SubInformationText>
                        {item.publishYear}
                      </SubInformationText>

                      {item.gwonchaTitle && (
                        <SubInformationText>
                          {parseGwoncha(item.gwonchaTitle)}
                        </SubInformationText>
                      )}
                      {item.muncheTitle && (
                        <SubInformationText>
                          {parseMunche(item.muncheTitle)}
                        </SubInformationText>
                      )}

                      {item.finalTitle &&
                        parseTitle(item.finalTitle).map((el) => (
                          <FinalTitle>
                            &nbsp; {el.title}&nbsp;
                            <FinalWonju>{el.wonju}</FinalWonju>
                          </FinalTitle>
                        ))}
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
