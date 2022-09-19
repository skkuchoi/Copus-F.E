import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BookTableBlock from '../BookTableBlock';

const TableItem = styled.p`
  font-size: 15px;
  padding: 5px 0px;
  margin: 0;
`;

const Buga = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BugaButton = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  width: fit-content;
  height: fit-content;
  font-size: 12px;
  padding: 3px;
  margin-right: 5px;
  color: #fc8a70;

  &:hover {
    background-color: black;
  }
`;
function BookContentListBlock() {
  let id = 1;
  const books = [
    {
      id: 1,
      name: '월고집(月皐集)',
      author: '조성가(趙性家)',
      zipsu: '속98집',
      year: '1929',
    },
    {
      id: 2,
      name: '월고집(月皐集)',
      author: '조성가(趙性家)',
      zipsu: '속98집',
      year: '1929',
    },
    {
      id: 3,
      name: '월고집(月皐集)',
      author: '조성가(趙性家)',
      zipsu: '속98집',
      year: '1929',
    },
  ];

  const rightDatas = {
    count: '',
    datas: [
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
      {
        seojiId: 'seojiId',
        seojiTitle: 'seojiTitle',
        authorName: 'authorName',
        zipsuStart: 'zipsuStart',
        zipsuEnd: 'zipsuEnd',
        publishYear: 'publishYear',
        buga: {
          //부가 정보 있을 시 value == 서지 ID
          beomrye: 'beomrye',
          chapter: 'chapter', //목차
          haejae: 'haejae',
        },
      },
    ],
  };
  const realDatas = JSON.parse(JSON.stringify(rightDatas));

  const { literature, consonant } = useParams();

  const link = '/menu-explore/gwoncha/';

  return (
    <>
      {realDatas.datas.map((item) => (
        <Link to={link + item.seojiId} className="link-line" key={id}>
          <BookTableBlock bgColor="#edeaea">
            <TableItem>{id++}</TableItem>
            <TableItem>{item.seojiTitle}</TableItem>
            <TableItem>{item.authorName}</TableItem>
            <TableItem>{item.zipsuStart}</TableItem>
            <TableItem>{item.publishYear}</TableItem>

            <Buga>
              {item.buga.beomrye != null && (
                <Link to="/" className="link-line">
                  <BugaButton>{item.buga.beomrye}</BugaButton>
                </Link>
              )}
              {item.buga.chapter != null && (
                <Link to="/" className="link-line">
                  <BugaButton>{item.buga.chapter}</BugaButton>
                </Link>
              )}
              {item.buga.haejae != null && (
                <Link to="/" className="link-line">
                  <BugaButton>{item.buga.haejae}</BugaButton>
                </Link>
              )}
            </Buga>
          </BookTableBlock>
        </Link>
      ))}
    </>
  );
}

export default BookContentListBlock;
