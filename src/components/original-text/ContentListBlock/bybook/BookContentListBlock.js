import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getRightSeoji from '../../../../api/test/rightBlock/bybook/getRightSeoji';
import useAsync from '../../../../hooks/useAsync';

import { selectedConsonant, selectedFilter } from '../../SortBlock/SortBlock';
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

  const consonant = useContext(selectedConsonant);
  const filter = useContext(selectedFilter);

  const [seojiJsonDatas] = useAsync(
    () => getRightSeoji(filter, consonant),
    [consonant],
  );

  // 집수 function
  //console.log('right block : seojiJsonDatas: ', seojiJsonDatas);
  if (seojiJsonDatas.data === null || seojiJsonDatas.data === undefined)
    return <div>zz</div>;
  return (
    <>
      {seojiJsonDatas.data.datas.map((item) => (
        <BookTableBlock
          bgColor="#edeaea"
          key={item.seojiId}
          clickId={item.seojiId}
          authorName={filter === 'author' ? item.authorName : ''}
          currentTitle={item.seojiTitle}>
          <TableItem>{id++}</TableItem>
          <TableItem>{item.seojiTitle}</TableItem>
          <TableItem>{item.authorName}</TableItem>

          <TableItem>{item.zipsu}</TableItem>
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
      ))}
    </>
  );
}

export default BookContentListBlock;
