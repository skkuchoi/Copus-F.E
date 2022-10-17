import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  scrollContext,
} from '../../../shared/ContentLayout';
import { selectedConsonant, selectedFilter } from '../../SortBlock/SortBlock';
import parseAuthor from '../../../../utils/parseAuthor';
import Loading from '../../../shared/Loading';
import calculateIdLevel from '../../../../utils/calculateIdLevel';
import calculateLastIdNumber from '../../../../utils/calculateLastIdNumber';

import { leftBlockDepth } from '../../../../pages/menuExplore/MenuExplore';
import NoExistDataBlock from '../../../searchResult/ResultDataBlock/NoExistDataBlock';

import Pagination from '../../../searchResult/ResultDataBlock/Pagination';

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
  z-index: 999;
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
  z-index: 999;

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
  const clickScrollContext = useContext(scrollContext);
  const navigate = useNavigate();

  const { state } = useLocation();
  if (state !== null) {
    const count = calculateIdLevel(state.currentId);

    if (count === 3) {
      depthContext.setDepth(1);
      clickSeojiContext.setClickSeoji(state.currentId);
      currentFocusTitle.setCurrentFocusTitle(state.currentId);
      clickScrollContext.setScroll(calculateLastIdNumber(state.currentId));
    } else if (count === 4) {
      depthContext.setDepth(1);
      clickSeojiContext.setClickSeoji(state.lv1Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv1Id);
      clickScrollContext.setScroll(calculateLastIdNumber(state.lv1Id));
      depthContext.setDepth(2);
      clickGwonchaContext.setClickGwoncha(state.currentId);
      currentFocusTitle.setCurrentFocusTitle(state.currentId);
      clickScrollContext.setScroll(calculateLastIdNumber(state.currentId));
    } else if (count === 5) {
      depthContext.setDepth(1);
      clickSeojiContext.setClickSeoji(state.lv1Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv1Id);
      clickScrollContext.setScroll(calculateLastIdNumber(state.lv1Id));
      depthContext.setDepth(2);
      clickGwonchaContext.setClickGwoncha(state.lv2Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv2Id);
      clickScrollContext.setScroll(calculateLastIdNumber(state.lv2Id));
      depthContext.setDepth(3);
      clickMuncheContext.setClickMunche(state.currentId);
      currentFocusTitle.setCurrentFocusTitle(state.currentId);
      clickScrollContext.setScroll(calculateLastIdNumber(state.currentId));
    } else if (count === 6) {
      depthContext.setDepth(1);
      clickSeojiContext.setClickSeoji(state.lv1Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv1Id);
      clickScrollContext.setScroll(calculateLastIdNumber(state.lv1Id));
      depthContext.setDepth(2);
      clickGwonchaContext.setClickGwoncha(state.lv2Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv2Id);
      clickScrollContext.setScroll(calculateLastIdNumber(state.lv2Id));
      depthContext.setDepth(3);
      clickMuncheContext.setClickMunche(state.lv3Id);
      currentFocusTitle.setCurrentFocusTitle(state.lv3Id);
      clickScrollContext.setScroll(calculateLastIdNumber(state.lv3Id));
      depthContext.setDepth(4);
      clickFinalContext.setClickFinal(state.currentId);
      currentFocusTitle.setCurrentFocusTitle(state.currentId);
      clickScrollContext.setScroll(calculateLastIdNumber(state.currentId));
    }
  }

  const [limitPage, setLimitPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const offset = (currentPage - 1) * limitPage;
  useEffect(() => {
    setCurrentPage(1);
  }, []);

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

  if (seojiJsonDatas.error) navigate('/server-error');
  if (seojiJsonDatas.data === null || seojiJsonDatas.data === undefined)
    return <Loading />;
  if (seojiJsonDatas.data.count === 0) return <NoExistDataBlock />;
  return (
    <>
      {seojiJsonDatas.data.datas
        .slice(offset, offset + limitPage)
        .map((item) => (
          <BookTableBlock
            bgColor="#edeaea"
            key={item.seojiId}
            clickId={item.seojiId}
            authorName={filter === 'author' ? item.authorId : ''}
            currentTitle={item.seojiId}>
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

      <Pagination
        totalContent={seojiJsonDatas.data.datas.length}
        limitPage={limitPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default BookContentListBlock;
