import React from 'react';
import styled from 'styled-components';
import TitleBlock from '../ContentListTitleBlock';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';

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

function TitleContentListBlock() {
  const titles = [
    { id: 1, name: '월고집1' },
    { id: 2, name: '월고집2' },
    { id: 3, name: '월고집3' },
  ];
  const { literature, consonant, authorname, bookname, gwoncha, munche } =
    useParams();
  const link2gwoncha = `/original-text/${literature}/byauthor/${consonant}/${authorname}/${bookname}/${gwoncha}/`;
  const link = `/original-text/${literature}/byauthor/${consonant}/${authorname}/${bookname}/${gwoncha}/${munche}/`;
  const link2Gwoncha = `/original-text/${literature}/byauthor/${consonant}/${authorname}/${bookname}/`;

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

      {titles.map((item) => (
        <ListTableBlock marginLeft="60px">
          <FaArrowAltCircleRight className="arrow-icon" />
          <Link to={link + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </ListTableBlock>
      ))}
    </>
  );
}

export default TitleContentListBlock;
