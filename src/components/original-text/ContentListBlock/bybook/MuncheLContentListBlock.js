import React from 'react';
import styled from 'styled-components';
import TitleBlock from '../ContentListTitleBlock';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import '../../../shared/linkStyle.css';
import OtherTableBlock from '../OtherTableBlock';

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
      <OtherTableBlock>
        <ListTableRowData>{gwoncha}</ListTableRowData>
      </OtherTableBlock>

      {munches.map((item) => (
        <OtherTableBlock marginLeft="39px">
          <Link to={link2munche + item.name} className="link-line">
            <ListTableRowData>{item.name}</ListTableRowData>
          </Link>
        </OtherTableBlock>
      ))}
    </>
  );
}

export default MuncheContentListBlock;
