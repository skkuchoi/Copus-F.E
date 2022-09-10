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

function GwonchaContentListBlock() {
  const gwonchas = [
    { id: 1, name: '권차이름1' },
    { id: 2, name: '권차이름2' },
    { id: 3, name: '권차이름3' },
  ];

  const { literature, consonant, authorname, bookname } = useParams();
  const link = `/original-text/${literature}/byauthor/${consonant}/${authorname}/${bookname}/`;

  return (
    <>
      <TitleBlock title={bookname} link={link} />

      {gwonchas.map((item) => (
        <ListTableBlock>
          <FaArrowAltCircleRight className="arrow-icon" />
          <Link to={link + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </ListTableBlock>
      ))}
    </>
  );
}

export default GwonchaContentListBlock;
