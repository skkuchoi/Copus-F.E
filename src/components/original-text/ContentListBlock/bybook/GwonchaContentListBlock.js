import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TitleBlock from '../ContentListTitleBlock';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';
import NoExistDataBlock from '../../../shared/NoExistDataBlock';
import Pagination from '../../../shared/Pagination';
const ListTableBlock = styled.div`
  width: 98%;
  border-bottom: 1px solid #dadce0;
  padding-top: 10px;
  padding-bottom: 5px;
  text-align: left;

  .arrow-icon {
    color: orange;
    margin-right: 9px;
    margin-left: ${(props) => props.marginLeft};
  }

  .link-line {
    list-style: none;
    text-decoration-line: none;
    color: black;
  }
`;

const ListTableRowData = styled.span`
  font-size: 15px;
  cursor: pointer;
`;

function GwonchaContentListBlock(gwonchasInquiryNum) {
  const gwonchas = [
    { id: 1, name: '권차이름1' },
    { id: 2, name: '권차이름2' },
    { id: 3, name: '권차이름3' },
    { id: 4, name: '권차이름1' },
    { id: 5, name: '권차이름2' },
    { id: 6, name: '권차이름3' },
    { id: 7, name: '권차이름1' },
    { id: 8, name: '권차이름2' },
    { id: 9, name: '권차이름3' },
    { id: 10, name: '권차이름1' },
    { id: 11, name: '권차이름2' },
    { id: 12, name: '권차이름3' },
  ];

  const { literature, consonant, bookname } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;
  const link2Gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;

   //Pagination
   const [limitPage, setLimitPage] = useState(10);
   const [currentPage, setCurrentPage] = useState(1);
   const offset = (currentPage - 1) * limitPage;
   useEffect(() => {
     setCurrentPage(1);
   }, [bookname]);
     if (!gwonchasInquiryNum)
       return (
         <>
           <TitleBlock title={bookname} link={link2Gwoncha} />
           <NoExistDataBlock />
         </>
       );
  return (
    <>
      <TitleBlock title={bookname} link={link2Gwoncha} />
      {gwonchas.slice(offset, offset+limitPage).map((item) => (
        <ListTableBlock>
          <FaArrowAltCircleRight className="arrow-icon" />
          <Link to={link + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </ListTableBlock>
      ))}

      <Pagination
          totalContent={gwonchas.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default GwonchaContentListBlock;
