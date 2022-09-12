import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContentListTitleBlock from '../ContentListTitleBlock';
import Pagination from '../../../shared/Pagination';
import NoExistDataBlock from '../../../shared/NoExistDataBlock';

const ListTableBlock = styled.div`
  display: grid;
  //번호 이름 저자 간행연도
  grid-template-columns: 5% 40% 20% 25% 10%;
  width: 98%;
  border-bottom: 1px solid #dadce0;
  text-align: center;

  .link-line {
    list-style: none;
    text-decoration-line: none;
    color: black;
    padding: 5px 0px;
    //text-align: left;
  }
`;

const ListTableRowTag = styled.span`
  font-size: 15px;
  font-weight: bold;
  background-color: #f5f5f6;
  padding: 7px 0px;
`;

const ListTableRowData = styled.span`
  font-size: 15px;
  padding: 5px 0px;
  :nth-child(2) {
    cursor: pointer;
  }
`;

function BookContentListBlock(booksInquiryNum) {
  const books = [
    {
      id: 1,
      name: '上蘆沙先生',
      author: '저자1',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 2,
      name: '石隅軒酬王大猷',
      author: '저자2',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 3,
      name: '與抱甕盧時用 讀書山房。及其歲暮先歸。',
      author: '저자3',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 4,
      name: '上蘆沙先生',
      author: '저자1',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 5,
      name: '石隅軒酬王大猷',
      author: '저자2',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 6,
      name: '與抱甕盧時用 讀書山房。及其歲暮先歸。',
      author: '저자3',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 7,
      name: '上蘆沙先生',
      author: '저자1',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 8,
      name: '石隅軒酬王大猷',
      author: '저자2',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 9,
      name: '與抱甕盧時用 讀書山房。及其歲暮先歸。',
      author: '저자3',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 10,
      name: '石隅軒酬王大猷',
      author: '저자2',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 11,
      name: '與抱甕盧時用 讀書山房。及其歲暮先歸。',
      author: '저자3',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 12,
      name: '上蘆沙先生',
      author: '저자1',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 13,
      name: '石隅軒酬王大猷',
      author: '저자2',
      jipsu: '속98집',
      year: '1929',
    },
    {
      id: 14,
      name: '與抱甕盧時用 讀書山房。及其歲暮先歸。',
      author: '저자3',
      jipsu: '속98집',
      year: '1929',
    },
  ];

  const { literature, consonant } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/`;

  //Pagination
  const [limitPage, setLimitPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limitPage;
  useEffect(() => {
    setCurrentPage(1);
  }, [consonant]);
    if (!booksInquiryNum)
      return (
        <>
          <ContentListTitleBlock title="서명" number={booksInquiryNum} />
          <NoExistDataBlock />
        </>
      );

  return (
    <>
      <ContentListTitleBlock title="총 리스트" />

      <ListTableBlock>
        <ListTableRowTag>번호</ListTableRowTag>
        <ListTableRowTag>서명</ListTableRowTag>
        <ListTableRowTag>저자</ListTableRowTag>
        <ListTableRowTag>집수</ListTableRowTag>
        <ListTableRowTag>간행연도</ListTableRowTag>
      </ListTableBlock>

      {books.slice(offset, offset + limitPage).map((item) => (
        <ListTableBlock>
          <ListTableRowData>{item.id}</ListTableRowData>
          <Link to={link + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
          <ListTableRowData>{item.author}</ListTableRowData>
          <ListTableRowData>{item.jipsu}</ListTableRowData>
          <ListTableRowData>{item.year}</ListTableRowData>
        </ListTableBlock>
      ))}

      <Pagination
          totalContent={books.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default BookContentListBlock;
