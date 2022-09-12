//import Pagination from './Pagination';
import Pagination from '../../shared/Pagination';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ContentListTitleBlock from './ContentListTitleBlock';
import { useParams } from 'react-router-dom';
//import NoExistDataBlock from './NoExistDataBlock';
import NoExistDataBlock from '../../shared/NoExistDataBlock'

//=========== PageLimit Block //===========
const SelectPageLimitBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // 반응형 조지기 필요
  position: absolute;
  top: 26%;
  right: 10%;

  span {
    font-size: 16px;
    font-weight: bold;
    margin-right: 10px;
  }
`;

const SelectPageNumber = styled.select`
  width: 40px;
  height: 25px;
  margin-top: 4px;
  font-size: 14px;
  text-align: center;
`;

const PageNumberOption = styled.option`
  text-align: left;
`;

//=========== Result Data Block //===========
const ResultDatasBlock = styled.div`
  width: 98%;
  display: grid;
  grid-template-columns: 5% 93%;
  padding: 15px 0px;
  border-bottom: 0.5px solid #bfbfbf;
`;

const Id = styled.span`
  font-size: 17px;
  margin: 0 auto;
`;

const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 19px;
  font-weight: bold;
  width: fit-content;
  height: fit-content;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
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

const Author = styled.span`
  margin-right: 15px;
  ::after {
    content: '|';
    margin-left: 10px;
    opacity: 0.5;
  }
`;

const Gwoncha = styled.span`
  margin-right: 15px;
  ::after {
    content: '|';
    margin-left: 10px;
    opacity: 0.5;
  }
`;
const Kind = styled.span`
  ::after {
    content: '|';
    margin-left: 10px;
    opacity: 0.5;
  }
`;

const Year = styled.span`
  margin-left: 20px;
  ::after {
    content: '|';
    margin-left: 10px;
    opacity: 0.5;
  }
`;

const Page = styled.span`
  margin-left: 20px;
`;

const Text = styled.div`
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
      id: 1,
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
          <ContentListTitleBlock title="서명" number={bookResultNum} />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <ContentListTitleBlock title="서명" number={bookResultNum} />

        {bookExample.slice(offset, offset + limitPage).map((result) => (
          <>
            <ResultDatasBlock>
              <Id> {result.id}. </Id>

              <ResultContent>
                <Title>{result.name}</Title>

                <SubInformation>
                  <Author> {result.author} </Author>
                  <Kind>{result.munche} </Kind>
                  <Year>{result.year} </Year>
                </SubInformation>
              </ResultContent>
            </ResultDatasBlock>
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
          <ContentListTitleBlock title="저자" number={authorResultNum} />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <ContentListTitleBlock title="저자" number={authorResultNum} />

        {authorExample.slice(offset, offset + limitPage).map((result) => (
          <>
            <ResultDatasBlock>
              <Id> {result.id}. </Id>

              <ResultContent>
                <Title>{result.name}</Title>

                <SubInformation>
                  <Author> {result.author} </Author>
                  <Kind>{result.munche} </Kind>
                  <Year>{result.year} </Year>
                </SubInformation>
              </ResultContent>
            </ResultDatasBlock>
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
          <ContentListTitleBlock title="원문" number={textResultNum} />
          <NoExistDataBlock />
        </>
      );
    return (
      <>
        <ContentListTitleBlock title="원문" number={textResultNum} />

        {textExample.slice(offset, offset + limitPage).map((result) => (
          <>
            <ResultDatasBlock>
              <Id> {result.id}. </Id>

              <ResultContent>
                <Title>{result.name}</Title>

                <SubInformation>
                  <Author> {result.author} </Author>
                  <Gwoncha>{result.gwoncha} </Gwoncha>
                  <Kind>{result.munche} </Kind>
                  <Year>{result.year} </Year>
                  <Page>{result.page}</Page>
                </SubInformation>
                <Text>{result.content}</Text>
              </ResultContent>
            </ResultDatasBlock>
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
