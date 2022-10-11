import React, { useRef, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiOutlineDocumentText } from 'react-icons/hi';

import useAsync from '../../../hooks/useAsync';
import getLeftSeoji from '../../../api/explore/leftblock/getLeftSeoji';
import getLeftGwoncha from '../../../api/explore/leftblock/getLeftGwoncha';
import getLeftMunche from '../../../api/explore/leftblock/getLeftMunche';
import getLeftFinal from '../../../api/explore/leftblock/getLeftFinal';

import { selectedConsonant, selectedFilter } from '../SortBlock/SortBlock';
import { leftBlockDepth } from '../../../pages/menuExplore/MenuExplore';
import {
  currentFocusTitleContext,
  seojiContext,
  gwonchaContext,
  muncheContext,
  finalContext,
} from '../../shared/ContentLayout';
import parseGwoncha from '../../../utils/parseGwoncha';
import parseMunche from '../../../utils/parseMunche';
import parseTitle from '../../../utils/parseTitle';

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
  width: 500px;
  .list-icon {
    color: gray;
    margin-right: 3px;
    position: relative;
    top: 4px;
    padding-left: ${(props) => props.padding};
  }
  .focus {
    background-color: #f0be86;
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

function BookSidebar() {
  const container = useRef();

  useEffect(() => {
    container.current.scrollTo(0, 400);
    window.scrollTo(0, 100);
  }, [container]);

  const consonant = useContext(selectedConsonant);
  const filter = useContext(selectedFilter);
  const depthContext = useContext(leftBlockDepth);

  const currentFocusTitle = useContext(currentFocusTitleContext);
  const clickSeojiContext = useContext(seojiContext);
  const clickGwonchaContext = useContext(gwonchaContext);
  const clickMuncheContext = useContext(muncheContext);
  const clickFinalContext = useContext(finalContext);

  const [seojiListDatas, setSeojiListDatas] = useState([]);

  const [includeGwonchaData, setIncludeGwonchaData] = useState({});
  const [gwonchaListDatas, setGwonchaListDatas] = useState([]);

  const [includeMuncheData, setIncludeMuncheData] = useState({});
  const [muncheListDatas, setMuncheListDatas] = useState([]);

  const [includeFinalData, setIncludeFinalData] = useState({});
  const [finalListDatas, setFinalListDatas] = useState([]);

  // 서지 api 요청, consonant가 바뀔 때마다 OK
  const [seojiJsonDatas] = useAsync(
    () => getLeftSeoji(filter, 0, consonant),
    [consonant],
  );

  // 서지 api 요청 데이터인 json이 바뀔 때마다 OK
  useEffect(() => {
    if (seojiJsonDatas.data !== null) {
      let tempArray = [];
      seojiJsonDatas.data.datas.map((seoji) => {
        tempArray.push({
          childId: seoji.childId,
          childTitle: seoji.childTItle,
        });
      });
      setSeojiListDatas(tempArray);
      depthContext.setDepth(0);
    }
  }, [seojiJsonDatas]);

  // 권차 api 요청, seojiTitle이 바뀔 때마다 OK
  const [gwonchaJsonDatas] = useAsync(
    () => getLeftGwoncha(filter, 1, clickSeojiContext.clickSeoji),
    [clickSeojiContext.clickSeoji],
  );

  //권차 api 요청 데이터인 json이 바뀔 때마다 OK
  useEffect(() => {
    if (gwonchaJsonDatas.data !== null) {
      gwonchaJsonDatas.data.datas.map((gwoncha) => {
        if (!includeGwonchaData[gwoncha.childId]) {
          setGwonchaListDatas((prev) => [
            ...prev,
            { childId: gwoncha.childId, childTitle: gwoncha.childTItle },
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

  // 문체 api 요청, click gwoncha 했을 때마다 ok
  const [muncheJsonDatas] = useAsync(
    () => getLeftMunche(filter, 2, clickGwonchaContext.clickGwoncha),
    [clickGwonchaContext.clickGwoncha],
  );

  //문체 api 요청 데이터인 json이 바뀔 때마다 ok
  useEffect(() => {
    if (muncheJsonDatas.data !== null) {
      muncheJsonDatas.data.datas.map((munche) => {
        if (!includeMuncheData[munche.childId]) {
          setMuncheListDatas((prev) => [
            ...prev,
            { childId: munche.childId, childTitle: munche.childTItle },
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

  // 최종정보 api 요청, click munche 했을 때마다 ok
  const [finalJsonDatas] = useAsync(
    () => getLeftFinal(filter, 3, clickMuncheContext.clickMunche),
    [clickMuncheContext.clickMunche],
  );

  //문체 api 요청 데이터인 json이 바뀔 때마다 ok
  useEffect(() => {
    if (finalJsonDatas.data !== null) {
      finalJsonDatas.data.datas.map((final) => {
        if (!includeFinalData[final.childId]) {
          setFinalListDatas((prev) => [
            ...prev,
            { childId: final.childId, childTitle: final.childTItle },
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

  useEffect(() => {
    console.log('currentFocusTitle : ', currentFocusTitle.currentFocusTitle);
  }, [currentFocusTitle.currentFocusTitle]);

  if (
    seojiListDatas === null ||
    seojiListDatas === undefined ||
    gwonchaListDatas === null ||
    gwonchaListDatas === undefined ||
    muncheListDatas === null ||
    muncheListDatas === undefined ||
    finalListDatas === null ||
    finalListDatas === undefined
  )
    return <div>zz</div>;
  return (
    <Container ref={container}>
      {seojiListDatas.map((seoji) => (
        <>
          <ListItemPositioner padding="0px">
            <HiOutlineDocumentText className="list-icon" />
            <ListLi
              onClick={(target) => {
                currentFocusTitle.setCurrentFocusTitle(seoji.childTitle);
                clickSeojiContext.setClickSeoji(seoji.childId);
                depthContext.setDepth(1);
              }}
              className={
                currentFocusTitle.currentFocusTitle === seoji.childTitle
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
                  <ListItemPositioner padding="20px">
                    <HiOutlineDocumentText className="list-icon" />
                    <ListLi
                      onClick={(target) => {
                        clickGwonchaContext.setClickGwoncha(gwoncha.childId);
                        depthContext.setDepth(2);
                        currentFocusTitle.setCurrentFocusTitle(
                          gwoncha.childTitle,
                        );
                      }}
                      className={
                        currentFocusTitle.currentFocusTitle ===
                        gwoncha.childTitle
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
                          <ListItemPositioner padding="40px">
                            <HiOutlineDocumentText className="list-icon" />
                            <ListLi
                              onClick={(target) => {
                                clickMuncheContext.setClickMunche(
                                  munche.childId,
                                );
                                depthContext.setDepth(3);
                                currentFocusTitle.setCurrentFocusTitle(
                                  munche.childTitle,
                                );
                              }}
                              className={
                                currentFocusTitle.currentFocusTitle ===
                                munche.childTitle
                                  ? 'focus'
                                  : ''
                              }>
                              {parseMunche(munche.childTitle)}
                            </ListLi>
                          </ListItemPositioner>

                          {finalListDatas.map(
                            (final) =>
                              final.childId.includes(munche.childId) && (
                                <ListItemPositioner padding="60px">
                                  <HiOutlineDocumentText className="list-icon" />
                                  <ListLi
                                    onClick={(target) => {
                                      depthContext.setDepth(4);
                                      currentFocusTitle.setCurrentFocusTitle(
                                        final.childTitle,
                                      );
                                      clickFinalContext.setClickFinal(
                                        final.childId,
                                      );
                                    }}
                                    className={
                                      currentFocusTitle.currentFocusTitle ===
                                      final.childTitle
                                        ? 'focus'
                                        : ''
                                    }>
                                    {parseTitle(final.childTitle).map((el) => (
                                      <FinalTitle>
                                        &nbsp; {el.title}&nbsp;
                                        <FinalWonju>{el.wonju}</FinalWonju>
                                      </FinalTitle>
                                    ))}
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
      ))}
    </Container>
  );
}

export default BookSidebar;
