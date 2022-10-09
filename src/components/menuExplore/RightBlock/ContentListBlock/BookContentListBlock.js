import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BookTableBlock from '../BookTableBlock';

import useAsync from '../../../../hooks/useAsync';
import getRightSeoji from '../../../../api/explore/rightblock/getRightSeoji';

import { authorContext } from '../../../shared/ContentLayout';
import { selectedConsonant, selectedFilter } from '../../SortBlock/SortBlock';

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
  const clickAuthorContext = useContext(authorContext);

  // seojiKeyword 세팅
  let seojiKeyword;
  if (clickAuthorContext.clickAuthor) seojiKeyword = 'authorName';
  else if (consonant === 'all') seojiKeyword = 'all';
  else if (filter === 'book') seojiKeyword = 'bookTitleConsonant';
  else if (filter === 'author' && consonant)
    seojiKeyword = 'authorNameConsonant';
  else seojiKeyword = 'authorName';

  const [seojiJsonDatas] = useAsync(
    () => getRightSeoji(filter, seojiKeyword, consonant),
    [consonant, clickAuthorContext.clickAuthor],
  );

  console.log('seojiJsonDatas:', seojiJsonDatas);

  if (seojiJsonDatas.data === null || seojiJsonDatas.data === undefined)
    return <div>로딩</div>;
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
                <BugaButton>{item.publishYear}</BugaButton>
              </Link>
            )}
            {item.buga.chapter != null && (
              <Link to="/" className="link-line">
                <BugaButton>{item.publishYear}</BugaButton>
              </Link>
            )}
            {item.buga.haejae != null && (
              <Link to="/" className="link-line">
                <BugaButton>{item.publishYear}</BugaButton>
              </Link>
            )}
          </Buga>
        </BookTableBlock>
      ))}
    </>
  );
}

export default BookContentListBlock;
