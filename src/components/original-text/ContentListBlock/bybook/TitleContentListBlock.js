import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import TitleBlock from '../ContentListTitleBlock';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
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

function TitleContentListBlock(titlesInquiryNum) {
  const titles = [
    { id: 1, name: '월고집1' },
    { id: 2, name: '월고집2' },
    { id: 3, name: '월고집3' },
    { id: 4, name: '월고집1' },
    { id: 5, name: '월고집2' },
    { id: 6, name: '월고집3' },
    { id: 7, name: '월고집1' },
    { id: 8, name: '월고집2' },
    { id: 9, name: '월고집3' },
    { id: 10, name: '월고집1' },
    { id: 11, name: '월고집2' },
    { id: 12, name: '월고집3' },
  ];

  const { literature, consonant, bookname, gwoncha, munche } = useParams();

  const link = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/${munche}/`;
  const link2gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/`;
  const link2Gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}`;

   //Pagination
   const [limitPage, setLimitPage] = useState(10);
   const [currentPage, setCurrentPage] = useState(1);
   const offset = (currentPage - 1) * limitPage;
   useEffect(() => {
     setCurrentPage(1);
   }, [munche]);
     if (!titlesInquiryNum)
       return (
         <>
           <TitleBlock title={bookname} link={link2Gwoncha} />
           <NoExistDataBlock />
         </>
       );

  return (
    <>
      <TitleBlock title={bookname} link={link2Gwoncha} />
      <ListTableBlock marginLeft="0px">
        <FaArrowAltCircleRight className="arrow-icon" />
        <Link to={link2gwoncha} className="link-line">
          <ListTableRowData>{gwoncha}</ListTableRowData>
        </Link>
      </ListTableBlock>

      <ListTableBlock marginLeft="30px">
        <FaArrowAltCircleRight className="arrow-icon" />
        <ListTableRowData>{munche}</ListTableRowData>
      </ListTableBlock>

      {titles.slice(offset, offset + limitPage).map((item) => (
        <ListTableBlock marginLeft="60px">
          <FaArrowAltCircleRight className="arrow-icon" />
          <Link to={link + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </ListTableBlock>
      ))}

      <Pagination
          totalContent={titles.length}
          limitPage={limitPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default TitleContentListBlock;