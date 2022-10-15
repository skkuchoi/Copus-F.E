import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BookTableBlock from '../BookTableBlock';

import useAsync from '../../../../hooks/useAsync';
import getRightSeoji from '../../../../api/explore/rightblock/getRightSeoji';

import {
  authorContext,
  currentFocusTitleContext,
  gwonchaContext,
  seojiContext,
  muncheContext,
  finalContext,
} from '../../../shared/ContentLayout';
import { selectedConsonant, selectedFilter } from '../../SortBlock/SortBlock';
import parseAuthor from '../../../../utils/parseAuthor';
import Loading from '../../../shared/Loading';
import calculateIdLevel from '../../../../utils/calculateIdLevel';
import { leftBlockDepth } from '../../../../pages/menuExplore/MenuExplore';
import NoExistDataBlock from '../../../searchResult/ResultDataBlock/NoExistDataBlock';

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

function beomryePopUp(lv1Id) {
  const options =
    'toolbar=no,scrollbars=yes,resizable=yes,status=no,menubar=no,width=900, height=900, top=0,left=0';
  window.open(`/beomrye/${lv1Id}`, '_blank', options);
}

function chapterPopUp(lv1Id) {
  const options =
    'toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=900, height=900, top=0,left=0';
  window.open(`/chapter/${lv1Id}`, '_blank', options);
}

function haejaePopUp(lv1Id) {
  const options =
    'toolbar=no,scrollbars=no,resizable=yes,status=no,menubar=no,width=900, height=900, top=0,left=0';
  window.open(`/haejae/${lv1Id}`, '_blank', options);
}

function BookContentListBlock() {
  let consonant = useContext(selectedConsonant);
  const filter = useContext(selectedFilter);
  const depthContext = useContext(leftBlockDepth);
  const currentFocusTitle = useContext(currentFocusTitleContext);
  const clickSeojiContext = useContext(seojiContext);
  const clickAuthorContext = useContext(authorContext);
  const clickGwonchaContext = useContext(gwonchaContext);
  const clickMuncheContext = useContext(muncheContext);
  const clickFinalContext = useContext(finalContext);

  const { state } = useLocation();
  if (state !== null) {
    const count = calculateIdLevel(state.currentId);
    if (count === 3) {
      depthContext.setDepth(1);
      clickSeojiContext.setClickSeoji(state.currentId);
      currentFocusTitle.setCurrentFocusTitle(state.currentId);
    } else if (count === 4) {
      depthContext.setDepth(1);
      clickSeojiContext.setClickSeoji(state.lv1Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv1Id);
      depthContext.setDepth(2);
      clickGwonchaContext.setClickGwoncha(state.currentId);
      currentFocusTitle.setCurrentFocusTitle(state.currentId);
    } else if (count === 5) {
      depthContext.setDepth(1);
      clickSeojiContext.setClickSeoji(state.lv1Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv1Id);
      depthContext.setDepth(2);
      clickGwonchaContext.setClickGwoncha(state.lv2Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv2Id);
      depthContext.setDepth(3);
      clickMuncheContext.setClickMunche(state.currentId);
      currentFocusTitle.setCurrentFocusTitle(state.currentId);
    } else if (count === 6) {
      depthContext.setDepth(1);
      clickSeojiContext.setClickSeoji(state.lv1Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv1Id);
      depthContext.setDepth(2);
      clickGwonchaContext.setClickGwoncha(state.lv2Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv2Id);
      depthContext.setDepth(3);
      clickMuncheContext.setClickMunche(state.lv3Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv3Id);
      depthContext.setDepth(4);
      clickFinalContext.setClickFinal(state.currentId);
      currentFocusTitle.setCurrentFocusTitle(state.currentId);
    }
  }

  let id = 1;

  // seojiKeyword 세팅
  let seojiKeyword;
  if (clickAuthorContext.clickAuthor) seojiKeyword = 'authorName';
  else if (consonant === 'all') seojiKeyword = 'all';
  else if (filter === 'book') seojiKeyword = 'bookTitleConsonant';
  else if (filter === 'author' && consonant)
    seojiKeyword = 'authorNameConsonant';
  else seojiKeyword = 'authorName';

  if (clickAuthorContext.authorValue)
    consonant = parseAuthor(clickAuthorContext.authorValue);

  const [seojiJsonDatas] = useAsync(
    () => getRightSeoji(filter, seojiKeyword, consonant),
    [consonant, clickAuthorContext.authorValue],
  );

  if (seojiJsonDatas.data === null || seojiJsonDatas.data === undefined)
    return <Loading />;
  else if (seojiJsonDatas.data.count === 0) return <NoExistDataBlock />;
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
            <BugaButton onClick={() => beomryePopUp(item.seojiId)}>
              범례
            </BugaButton>

            <BugaButton onClick={() => chapterPopUp(item.seojiId)}>
              목차
            </BugaButton>

            <BugaButton onClick={() => haejaePopUp(item.seojiId)}>
              해제
            </BugaButton>
          </Buga>
        </BookTableBlock>
      ))}
    </>
  );
}

export default BookContentListBlock;
