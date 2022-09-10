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

  .link2munche-line {
    list-style: none;
    text-decoration-line: none;
    color: black;
  }
`;

const ListTableRowData = styled.span`
  font-size: 15px;
  cursor: pointer;
`;

function MuncheContentListBlock() {
  const munches = [
    { id: 1, name: '문체이름1' },
    { id: 2, name: '문체이름2' },
    { id: 3, name: '문체이름3' },
  ];

  const { literature, consonant, bookname, gwoncha } = useParams();

  const link2munche = `/original-text/${literature}/bybook/${consonant}/${bookname}/${gwoncha}/`;
  const link2Gwoncha = `/original-text/${literature}/bybook/${consonant}/${bookname}/`;

  return (
    <>
      <TitleBlock title={bookname} link={link2Gwoncha} />
      <ListTableBlock marginLeft="0px">
        <FaArrowAltCircleRight className="arrow-icon" />

        <ListTableRowData>{gwoncha}</ListTableRowData>
      </ListTableBlock>

      {munches.map((item) => (
        <ListTableBlock marginLeft="30px">
          <FaArrowAltCircleRight className="arrow-icon" />
          <Link to={link2munche + item.name} className="link2munche-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </ListTableBlock>
      ))}
    </>
  );
}

export default MuncheContentListBlock;
