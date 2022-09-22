import Pagination from './Pagination';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryListItemTitleBlock from './CategoryListItemTitleBlock';
import { useLocation, useParams } from 'react-router-dom';
import NoExistDataBlock from './NoExistDataBlock';
import useAsync from '../../../hooks/useAsync';
import getRightSearchResult from '../../../api/search/getRightSearchResult';

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

function ResultDataBlock() {
  let id = 1;

  //SearchFilter Settings
  const { pathname } = useLocation();
  const { keyword } = useParams();
  const searchFilter = pathname.split('/')[2];
  const filterUri = {
    total: 'total',
    'book-title': 'bookTitle',
    'author-name': 'authorName',
    'gwoncha-title': 'gwonchaTitle',
    'munche-title': 'muncheTitle',
    content: 'content',
    'data-id': 'dataId',
  };
  const filter = filterUri[searchFilter];

  const [rightDatas] = useAsync(
    () => getRightSearchResult(filter, keyword),
    [filter],
  );

  //Pagination
  const [limitPage, setLimitPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limitPage;
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);
   
  if (rightDatas.data === null) return <div>zz</div>;
  switch (filter) {
    case 'total':
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
                        {item.publishYear}{' '}
                      </SubInformationText>
                    </SubInformation>
                  </ResultInformation>
                </ResultListPositioner>
              </>
            ))}

          <br />

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
                        {item.gwonchaTitle}{' '}
                      </SubInformationText>
                      <SubInformationText>
                        {item.muncheTitle}{' '}
                      </SubInformationText>
                      <SubInformationText>
                        {item.publishYear}{' '}
                      </SubInformationText>
                    </SubInformation>
                  </ResultInformation>
                </ResultListPositioner>
              </>
            ))}

          <br />

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
                        {item.gwonchaTitle}{' '}
                      </SubInformationText>
                      <SubInformationText>
                        {item.muncheTitle}{' '}
                      </SubInformationText>
                      <SubInformationText>
                        {item.publishYear}{' '}
                      </SubInformationText>
                      {/* <SubInformationText>{item.page}</SubInformationText> */}
                    </SubInformation>
                    <OriginalText>{item.contentPartition}</OriginalText>
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
                        {item.publishYear}{' '}
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
                        {item.gwonchaTitle}{' '}
                      </SubInformationText>
                      <SubInformationText>
                        {item.muncheTitle}{' '}
                      </SubInformationText>
                      <SubInformationText>
                        {item.publishYear}{' '}
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
                        {item.gwonchaTitle}
                      </SubInformationText>
                      <SubInformationText>
                        {item.publishYear}{' '}
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
                        {item.gwonchaTitle}
                      </SubInformationText>
                      <SubInformationText>
                        {item.muncheTitle}
                      </SubInformationText>
                      <SubInformationText>
                        {item.publishYear}{' '}
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
                        {item.gwonchaTitle}
                      </SubInformationText>
                      <SubInformationText>
                        {item.muncheTitle}{' '}
                      </SubInformationText>
                      <SubInformationText>
                        {item.publishYear}{' '}
                      </SubInformationText>
                      {/* <SubInformationText>{item.page}</SubInformationText> */}
                    </SubInformation>
                    <OriginalText>{item.contentPartition}</OriginalText>
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
                      {item.gwonchaTitle !== null && (
                        <SubInformationText>
                          {item.gwonchaTitle}
                        </SubInformationText>
                      )}
                      {item.muncheTitle !== null && (
                        <SubInformationText>
                          {item.muncheTitle}
                        </SubInformationText>
                      )}
                      <SubInformationText>
                        {item.publishYear}{' '}
                      </SubInformationText>
                      {/* <SubInformationText>{item.page}</SubInformationText> */}
                    </SubInformation>
                    {item.contentPartition !== null && (
                      <OriginalText>{item.contentPartition}</OriginalText>
                    )}
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
