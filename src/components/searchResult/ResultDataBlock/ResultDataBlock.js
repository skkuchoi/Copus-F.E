import Pagination from './Pagination';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoryListItemTitleBlock from './CategoryListItemTitleBlock';
import { useParams } from 'react-router-dom';
import NoExistDataBlock from './NoExistDataBlock';
//=========== Result Data Block //===========
const ResultListPositioner = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 5% 95%;
  padding: 10px 3px;
  border-bottom: 0.5px solid #bfbfbf;
`;

const Id = styled.span`
  font-size: 17px;
  margin: 0 auto;
`;

const ResultInformation = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
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

function ResultDataBlock({ bookResultNum, authorResultNum, textResultNum }) {
  const bookExample = [
    {
      id: 1,
      name: '가암유고(可庵遺稿)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 2,
      name: '가오고략(嘉梧藁略)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 3,
      name: '가정유고(柯汀遺稿)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 4,
      name: '가정집(稼亭集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 5,
      name: '가주집(家州集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 6,
      name: '가휴집(可畦集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 7,
      name: '가휴집(可畦集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 8,
      name: '가휴집(可畦集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 9,
      name: '가휴집(可畦集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 10,
      name: '가휴집(可畦集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 11,
      name: '가휴집(可畦集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 12,
      name: '가휴집(可畦集)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
  ];
  const authorExample = [
    {
      id: 1,
      name: '이름이름1(可庵遺稿)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
    {
      id: 2,
      name: '이름이름2(可庵遺稿)',
      author: '강규환(姜奎煥)',
      munche: '시(詩)',
      year: '1929년 간행',
    },
  ];
  const textExample = [
    {
      id: 1,
      name: '가암유고(可庵遺稿)',
      gwoncha: '어쩌고일',
      munche: '시(詩)',
      author: '강규환(姜奎煥)',
      year: '1929년 간행',
      page: 'a016_299d',
      content:
        '毛遂昔自薦，囊錐穎未脫。目笑十九人，恥與比同列。至楚約定從，日中猶不決',
    },
  ];

  //Title Settings
  const { searchCategory } = useParams();

  //Pagination
  const [limitPage, setLimitPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limitPage;
  useEffect(() => {
    setCurrentPage(1);
  }, [searchCategory]);

  if (searchCategory === '서명') {
    if (!bookResultNum)
      return (
        <>
          <CategoryListItemTitleBlock title="서명" number={bookResultNum} />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <CategoryListItemTitleBlock title="서명" number={bookResultNum} />

        {bookExample.slice(offset, offset + limitPage).map((result) => (
          <>
            <ResultListPositioner>
              <Id> {result.id}. </Id>

              <ResultInformation>
                <Title>{result.name}</Title>

                <SubInformation>
                  <SubInformationText>{result.author}</SubInformationText>
                  <SubInformationText>{result.munche} </SubInformationText>
                  <SubInformationText>{result.year} </SubInformationText>
                </SubInformation>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <Pagination
          totalContent={bookExample.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  } else if (searchCategory === '저자') {
    if (!authorResultNum)
      return (
        <>
          <CategoryListItemTitleBlock title="저/편/필자" number={authorResultNum} />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <CategoryListItemTitleBlock title="저/편/필자" number={authorResultNum} />

        {authorExample.slice(offset, offset + limitPage).map((result) => (
          <>
            <ResultListPositioner>
              <Id> {result.id}. </Id>

              <ResultInformation>
                <Title>{result.name}</Title>

                <SubInformation>
                  <SubInformationText>{result.author}</SubInformationText>
                  <SubInformationText>{result.munche} </SubInformationText>
                  <SubInformationText>{result.year} </SubInformationText>
                </SubInformation>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <Pagination
          totalContent={authorExample.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  } else if (searchCategory === '원문') {
    if (!textResultNum)
      return (
        <>
          <CategoryListItemTitleBlock title="원문" number={textResultNum} />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <CategoryListItemTitleBlock title="원문" number={textResultNum} />

        {textExample.slice(offset, offset + limitPage).map((result) => (
          <>
            <ResultListPositioner>
              <Id> {result.id}. </Id>

              <ResultInformation>
                <Title>{result.name}</Title>

                <SubInformation>
                  <SubInformationText>{result.author}</SubInformationText>
                  <SubInformationText>{result.gwoncha} </SubInformationText>
                  <SubInformationText>{result.munche} </SubInformationText>
                  <SubInformationText>{result.year} </SubInformationText>
                  <SubInformationText>{result.page}</SubInformationText>
                </SubInformation>
                <OriginalText>{result.content}</OriginalText>
              </ResultInformation>
            </ResultListPositioner>
          </>
        ))}

        <Pagination
          totalContent={textExample.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </>
    );
  }
}

export default ResultDataBlock;
