import Pagination from './Pagination';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryListItemTitleBlock from './CategoryListItemTitleBlock';
import { useLocation } from 'react-router-dom';
import NoExistDataBlock from './NoExistDataBlock';

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

function ResultDataBlock({ rightDatas }) {
  let id = 1;

  //SearchFilter Settings
  const { pathname } = useLocation();
  const filterUri = {
    total: '전체',
    'book-title': '서명',
    'author-name': '저자',
    content: '원문',
  };
  const searchFilter = filterUri[pathname.split('/')[2]];

  //Pagination
  const [limitPage, setLimitPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limitPage;
  useEffect(() => {
    setCurrentPage(1);
  }, [searchFilter]);
  
  if (searchFilter === '전체') {
    return (
      <>
        <CategoryListItemTitleBlock title="서명" number={rightDatas.count} />
        {rightDatas.datas.slice(offset, offset + limitPage).map((item) => (
          <>
            <ResultListPositioner>
              <Id> {id++}. </Id>
              <ResultInformation>
                <Title>{item.seojiTitle}</Title>
                <SubInformation>
                  <SubInformationText>{item.authorName}</SubInformationText>
                  <SubInformationText>{item.publishYear} </SubInformationText>
                </SubInformation>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <br />

        <CategoryListItemTitleBlock
          title="저/편/필자"
          number={rightDatas.count}
        />
        {rightDatas.datas.slice(offset, offset + limitPage).map((item) => (
          <>
            <ResultListPositioner>
              <Id> {id++}. </Id>
              <ResultInformation>
                <Title>{item.seojiTitle}</Title>
                <SubInformation>
                  <SubInformationText>{item.authorName}</SubInformationText>
                  <SubInformationText>{item.gwonchaTitle} </SubInformationText>
                  <SubInformationText>{item.muncheTitle} </SubInformationText>
                  <SubInformationText>{item.publishYear} </SubInformationText>
                </SubInformation>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <br />

        <CategoryListItemTitleBlock title="원문" number={rightDatas.count} />
        {rightDatas.datas.slice(offset, offset + limitPage).map((item) => (
          <>
            <ResultListPositioner>
              <Id> {id++}. </Id>
              <ResultInformation>
                <Title>{item.seojiTitle}</Title>
                <SubInformation>
                  <SubInformationText>{item.authorName}</SubInformationText>
                  <SubInformationText>{item.gwonchaTitle} </SubInformationText>
                  <SubInformationText>{item.muncheTitle} </SubInformationText>
                  <SubInformationText>{item.publishYear} </SubInformationText>
                  {/* <SubInformationText>{item.page}</SubInformationText> */}
                </SubInformation>
                <OriginalText>{item.contentPartition}</OriginalText>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <Pagination
          totalContent={rightDatas.datas.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  } else if (searchFilter === '서명') {
    if (!rightDatas.count)
      return (
        <>
          <CategoryListItemTitleBlock title="서명" number={rightDatas.count} />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <CategoryListItemTitleBlock title="서명" number={rightDatas.count} />

        {rightDatas.datas.slice(offset, offset + limitPage).map((item) => (
          <>
            <ResultListPositioner>
              <Id> {id++}. </Id>

              <ResultInformation>
                <Title>{item.seojiTitle}</Title>

                <SubInformation>
                  <SubInformationText>{item.authorName}</SubInformationText>
                  <SubInformationText>{item.publishYear} </SubInformationText>
                </SubInformation>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <Pagination
          totalContent={rightDatas.datas.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  } else if (searchFilter === '저자') {
    if (!rightDatas.count)
      return (
        <>
          <CategoryListItemTitleBlock
            title="저/편/필자"
            number={rightDatas.count}
          />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <CategoryListItemTitleBlock
          title="저/편/필자"
          number={rightDatas.count}
        />

        {rightDatas.datas.slice(offset, offset + limitPage).map((item) => (
          <>
            <ResultListPositioner>
              <Id> {id++}. </Id>

              <ResultInformation>
                <Title>{item.seojiTitle}</Title>

                <SubInformation>
                  <SubInformationText>{item.authorName}</SubInformationText>
                  <SubInformationText>{item.gwonchaTitle} </SubInformationText>
                  <SubInformationText>{item.muncheTitle} </SubInformationText>
                  <SubInformationText>{item.publishYear} </SubInformationText>
                </SubInformation>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <Pagination
          totalContent={rightDatas.datas.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  } else if (searchFilter === '원문') {
    if (!rightDatas.count)
      return (
        <>
          <CategoryListItemTitleBlock title="원문" number={rightDatas.count} />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <CategoryListItemTitleBlock title="원문" number={rightDatas.count} />

        {rightDatas.datas.slice(offset, offset + limitPage).map((item) => (
          <>
            <ResultListPositioner>
              <Id> {id++}. </Id>

              <ResultInformation>
                <Title>{item.seojiTitle}</Title>

                <SubInformation>
                  <SubInformationText>{item.authorName}</SubInformationText>
                  <SubInformationText>{item.gwonchaTitle} </SubInformationText>
                  <SubInformationText>{item.muncheTitle} </SubInformationText>
                  <SubInformationText>{item.publishYear} </SubInformationText>
                  {/* <SubInformationText>{item.page}</SubInformationText> */}
                </SubInformation>
                <OriginalText>{item.contentPartition}</OriginalText>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <Pagination
          totalContent={rightDatas.datas.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  }
}

export default ResultDataBlock;
