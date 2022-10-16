import React, { useRef, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiOutlineDocumentText } from 'react-icons/hi';

import useAsync from '../../../hooks/useAsync';

import getLeftAuthor from '../../../api/explore/leftblock/getLeftAuthor';
import getLeftSeoji from '../../../api/explore/leftblock/getLeftSeoji';
import getLeftGwoncha from '../../../api/explore/leftblock/getLeftGwoncha';
import getLeftMunche from '../../../api/explore/leftblock/getLeftMunche';
import getLeftFinal from '../../../api/explore/leftblock/getLeftFinal';

import { selectedConsonant, selectedFilter } from '../SortBlock/SortBlock';
import { leftBlockDepth } from '../../../pages/menuExplore/MenuExplore';
import {
  currentFocusTitleContext,
  authorContext,
  seojiContext,
  gwonchaContext,
  muncheContext,
  finalContext,
} from '../../shared/ContentLayout';
import parseGwoncha from '../../../utils/parseGwoncha';
import parseMunche from '../../../utils/parseMunche';
import parseTitle from '../../../utils/parseTitle';
import Loading from '../../shared/Loading';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  border: 1px solid #d9d9d9;
  border-right: none;
  height: 80vh;
  overflow-y: scroll;
  overflow-x: scroll;

  .gwoncha-padding {
    padding-left: 30px;
  }

  .munche-padding {
    margin-left: 39px;
  }

  .final-padding {
    margin-left: 65px;
  }
`;

const ListItemPositioner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  padding: 5px 10px;
  width: 1400px;
  .list-icon {
    color: gray;
    margin-right: 3px;
    position: relative;
    top: 4px;
    padding-left: ${(props) => props.padding};
  }
  .focus {
    background-color: #f0be86;
    &:hover {
      background-color: #f0be86;
    }
  }
`;

const ListLi = styled.li`
  list-style-type: none;
  padding-left: ${(props) => props.padding};
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;

const FinalTitle = styled.span`
  font-size: 15px;
  margin: 0;
`;

const FinalWonju = styled.span`
  font-size: 12px;
  margin: 0;
`;

function AuthorSidebar() {
  const container = useRef();

  useEffect(() => {
    container.current.scrollTo(0, 400);
    window.scrollTo(0, 100);
  }, [container]);

  const consonant = useContext(selectedConsonant);
  const filter = useContext(selectedFilter);

  const depthContext = useContext(leftBlockDepth);
  const currentFocusTitle = useContext(currentFocusTitleContext);
  const clickAuthorContext = useContext(authorContext);
  const clickSeojiContext = useContext(seojiContext);
  const clickGwonchaContext = useContext(gwonchaContext);
  const clickMuncheContext = useContext(muncheContext);
  const clickFinalContext = useContext(finalContext);

  const navigate = useNavigate();
  const [authorListDatas, setAuthorListDatas] = useState([]);

  const [includeSeojiData, setIncludeSeojiData] = useState({});
  const [seojiListDatas, setSeojiListDatas] = useState([]);

  const [includeGwonchaData, setIncludeGwonchaData] = useState({});
  const [gwonchaListDatas, setGwonchaListDatas] = useState([]);

  const [includeMuncheData, setIncludeMuncheData] = useState({});
  const [muncheListDatas, setMuncheListDatas] = useState([]);

  const [includeFinalData, setIncludeFinalData] = useState({});
  const [finalListDatas, setFinalListDatas] = useState([]);

  const [authorJsonDatas] = useAsync(
    () => getLeftAuthor(filter, -1, consonant),
    [consonant],
  );
  // 서지 api 요청 데이터인 json이 바뀔 때마다
  useEffect(() => {
    if (authorJsonDatas.data !== null) {
      let tempArray = [];
      authorJsonDatas.data.datas.map((author) => {
        tempArray.push({
          childId: author.childId,
          childTitle: author.childTitle,
        });
      });
      setAuthorListDatas(tempArray);
      depthContext.setDepth(-1);
    }
  }, [authorJsonDatas]);

  // 서지 api 요청, consonant가 바뀔 때마다
  const [seojiJsonDatas] = useAsync(
    () => getLeftSeoji(filter, 0, clickAuthorContext.clickAuthor),
    [clickAuthorContext.clickAuthor, depthContext.depth],
  );

  // 서지 api 요청 데이터인 json이 바뀔 때마다
  useEffect(() => {
    if (seojiJsonDatas.data !== null) {
      seojiJsonDatas.data.datas.map((seoji) => {
        if (!includeSeojiData[seoji.childId]) {
          setSeojiListDatas((prev) => [
            ...prev,
            { childId: seoji.childId, childTitle: seoji.childTitle },
          ]);
          setIncludeSeojiData((prev) => ({
            ...prev,
            [seoji.childId]: seoji.childId,
          }));
          depthContext.setDepth(0);
        }
      });
    }
  }, [seojiJsonDatas]);

  //console.log(seojiListDatas);
  // 권차
  //const [clickSeoji, setClickSeoji] = useState('');

  // 권차 api 요청, seojiTitle이 바뀔 때마다
  const [gwonchaJsonDatas] = useAsync(
    () => getLeftGwoncha(filter, 1, clickSeojiContext.clickSeoji),
    [clickSeojiContext.clickSeoji, depthContext.depth],
  );
  //console.log('권차 사이드바 갖와: ', gwonchaJsonDatas);
  //권차 api 요청 데이터인 json이 바뀔 때마다
  useEffect(() => {
    if (gwonchaJsonDatas.data !== null) {
      gwonchaJsonDatas.data.datas.map((gwoncha) => {
        if (!includeGwonchaData[gwoncha.childId]) {
          setGwonchaListDatas((prev) => [
            ...prev,
            { childId: gwoncha.childId, childTitle: gwoncha.childTitle },
          ]);
          setIncludeGwonchaData((prev) => ({
            ...prev,
            [gwoncha.childId]: gwoncha.childId,
          }));
          depthContext.setDepth(1);
        }
      });
    }
  }, [gwonchaJsonDatas]);

  // //문체
  // const [clickGwoncha, setClickGwoncha] = useState('');

  // 문체 api 요청, click gwonch 했을 때마다
  const [muncheJsonDatas] = useAsync(
    () => getLeftMunche(filter, 2, clickGwonchaContext.clickGwoncha),
    [clickGwonchaContext.clickGwoncha],
  );

  //문체 api 요청 데이터인 json이 바뀔 때마다
  useEffect(() => {
    if (muncheJsonDatas.data !== null) {
      muncheJsonDatas.data.datas.map((munche) => {
        if (!includeMuncheData[munche.childId]) {
          setMuncheListDatas((prev) => [
            ...prev,
            { childId: munche.childId, childTitle: munche.childTitle },
          ]);
          setIncludeMuncheData((prev) => ({
            ...prev,
            [munche.childId]: munche.childId,
          }));
          depthContext.setDepth(2);
        }
      });
    }
  }, [muncheJsonDatas]);

  // 최종정보 api 요청, click munche 했을 때마다
  const [finalJsonDatas] = useAsync(
    () => getLeftFinal(filter, 3, clickMuncheContext.clickMunche),
    [clickMuncheContext.clickMunche],
  );

  //문체 api 요청 데이터인 json이 바뀔 때마다
  useEffect(() => {
    if (finalJsonDatas.data !== null) {
      finalJsonDatas.data.datas.map((final) => {
        if (!includeFinalData[final.childId]) {
          setFinalListDatas((prev) => [
            ...prev,
            { childId: final.childId, childTitle: final.childTitle },
          ]);
          setIncludeFinalData((prev) => ({
            ...prev,
            [final.childId]: final.childId,
          }));
          depthContext.setDepth(3);
        }
      });
    }
  }, [finalJsonDatas]);

  // set scroll 0 whenever click filter || consonant
  useEffect(() => {
    container.current.scrollTo(0, 0);
  }, [filter, consonant]);

  if (
    authorListDatas.error ||
    seojiListDatas.error ||
    gwonchaListDatas.error ||
    muncheListDatas.error ||
    finalListDatas.error
  )
    navigate('/server-error');
  if (
    authorListDatas === null ||
    authorListDatas === undefined ||
    seojiListDatas === null ||
    seojiListDatas === undefined ||
    gwonchaListDatas === null ||
    gwonchaListDatas === undefined ||
    muncheListDatas === null ||
    muncheListDatas === undefined ||
    finalListDatas === null ||
    finalListDatas === undefined
  )
    return <Loading />;
  return (
    <Container ref={container}>
      {authorListDatas.map((author) => (
        <>
          <ListItemPositioner padding="0px">
            <HiOutlineDocumentText className="list-icon" />
            <ListLi
              onClick={(target) => {
                currentFocusTitle.setCurrentFocusTitle(author.childId);
                clickAuthorContext.setClickAuthor(author.childId);
                clickAuthorContext.setAuthorValue(author.childTitle);
                depthContext.setDepth(0);
              }}
              className={
                currentFocusTitle.currentFocusTitle === author.childId
                  ? 'focus'
                  : ''
              }>
              {author.childTitle}
            </ListLi>
          </ListItemPositioner>
          {seojiListDatas.map(
            (seoji) =>
              clickAuthorContext.clickAuthor.includes(author.childId) && (
                <>
                  <ListItemPositioner padding="20px">
                    <HiOutlineDocumentText className="list-icon" />
                    <ListLi
                      onClick={(target) => {
                        currentFocusTitle.setCurrentFocusTitle(seoji.childId);
                        clickSeojiContext.setClickSeoji(seoji.childId);
                        depthContext.setDepth(1);
                      }}
                      className={
                        currentFocusTitle.currentFocusTitle === seoji.childId
                          ? 'focus'
                          : ''
                      }>
                      {seoji.childTitle}
                    </ListLi>
                  </ListItemPositioner>

                  {gwonchaListDatas.map(
                    (gwoncha) =>
                      gwoncha.childId.includes(seoji.childId) && (
                        <>
                          <ListItemPositioner padding="40px">
                            <HiOutlineDocumentText className="list-icon" />
                            <ListLi
                              onClick={(target) => {
                                currentFocusTitle.setCurrentFocusTitle(
                                  gwoncha.childId,
                                );
                                clickGwonchaContext.setClickGwoncha(
                                  gwoncha.childId,
                                );
                                depthContext.setDepth(2);
                              }}
                              className={
                                currentFocusTitle.currentFocusTitle ===
                                gwoncha.childId
                                  ? 'focus'
                                  : ''
                              }>
                              {parseGwoncha(gwoncha.childTitle)}
                            </ListLi>
                          </ListItemPositioner>

                          {muncheListDatas.map(
                            (munche) =>
                              munche.childId.includes(gwoncha.childId) && (
                                <>
                                  <ListItemPositioner padding="60px">
                                    <HiOutlineDocumentText className="list-icon" />
                                    <ListLi
                                      onClick={(target) => {
                                        currentFocusTitle.setCurrentFocusTitle(
                                          munche.childId,
                                        );
                                        clickMuncheContext.setClickMunche(
                                          munche.childId,
                                        );
                                        depthContext.setDepth(3);
                                      }}
                                      className={
                                        currentFocusTitle.currentFocusTitle ===
                                        munche.childId
                                          ? 'focus'
                                          : ''
                                      }>
                                      {parseMunche(munche.childTitle)}
                                    </ListLi>
                                  </ListItemPositioner>

                                  {finalListDatas.map(
                                    (final) =>
                                      final.childId.includes(
                                        munche.childId,
                                      ) && (
                                        <ListItemPositioner padding="80px">
                                          <HiOutlineDocumentText className="list-icon" />
                                          <ListLi
                                            onClick={(target) => {
                                              currentFocusTitle.setCurrentFocusTitle(
                                                final.childId,
                                              );
                                              depthContext.setDepth(4);
                                              clickFinalContext.setClickFinal(
                                                final.childId,
                                              );
                                            }}
                                            className={
                                              currentFocusTitle.currentFocusTitle ===
                                              final.childId
                                                ? 'focus'
                                                : ''
                                            }>
                                            {parseTitle(final.childTitle).map(
                                              (el) => (
                                                <FinalTitle>
                                                  &nbsp; {el.title}&nbsp;
                                                  <FinalWonju>
                                                    {el.wonju}
                                                  </FinalWonju>
                                                </FinalTitle>
                                              ),
                                            )}
                                          </ListLi>
                                        </ListItemPositioner>
                                      ),
                                  )}
                                </>
                              ),
                          )}
                        </>
                      ),
                  )}
                </>
              ),
          )}
        </>
      ))}
    </Container>
  );
}

export default AuthorSidebar;
