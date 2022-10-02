import React, { useRef, useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import useAsync from '../../../hooks/useAsync';
import { selectedConsonant, selectedFilter } from '../SortBlock/SortBlock';

import getSeoji from '../../../api/test/leftBlock/bybook/getSeoji';
import { HiOutlineDocumentText } from 'react-icons/hi';
import getGwoncha from '../../../api/test/leftBlock/bybook/getGwoncha';
import getMunche from '../../../api/test/leftBlock/bybook/getMunche';
import getFinal from '../../../api/test/leftBlock/bybook/getFinal';
import { leftBlockDepth } from '../../../pages/menuExplore/MenuExploreBook';
import {
  currentFocusTitleContext,
  seojiContext,
  gwonchaContext,
  muncheContext,
} from '../../shared/ContentLayout';

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

  const [seojiListDatas, setSeojiListDatas] = useState([]);

  const [includeGwonchaData, setIncludeGwonchaData] = useState({});
  const [gwonchaListDatas, setGwonchaListDatas] = useState([]);

  const [includeMuncheData, setIncludeMuncheData] = useState({});
  const [muncheListDatas, setMuncheListDatas] = useState([]);

  const [includeFinalData, setIncludeFinalData] = useState({});
  const [finalListDatas, setFinalListDatas] = useState([]);

  // 서지 api 요청, consonant가 바뀔 때마다
  const [seojiJsonDatas] = useAsync(
    () => getSeoji(filter, 0, consonant),
    [consonant],
  );
  // 서지 api 요청 데이터인 json이 바뀔 때마다
  useEffect(() => {
    if (seojiJsonDatas.data !== null) {
      let tempArray = [];
      seojiJsonDatas.data.datas.map((seoji) => {
        tempArray.push({
          childId: seoji.childId,
          childTitle: seoji.childTitle,
        });
      });
      setSeojiListDatas(tempArray);
      depthContext.setDepth(0);
    }
  }, [seojiJsonDatas]);

  // 권차
  //const [clickSeoji, setClickSeoji] = useState('');

  // 권차 api 요청, seojiTitle이 바뀔 때마다
  const [gwonchaJsonDatas] = useAsync(
    () => getGwoncha(filter, 1, clickSeojiContext.clickSeoji),
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
    () => getMunche(filter, 2, clickGwonchaContext.clickGwoncha),
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

  // //최종정보
  // const [clickMunche, setClickMunche] = useState('');

  // 최종정보 api 요청, click munche 했을 때마다
  const [finalJsonDatas] = useAsync(
    () => getFinal(filter, 3, clickMuncheContext.clickMunche),
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
                      {gwoncha.childTitle}
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
                              {munche.childTitle}
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
                                    }}
                                    className={
                                      currentFocusTitle.currentFocusTitle ===
                                      final.childTitle
                                        ? 'focus'
                                        : ''
                                    }>
                                    {final.childTitle}
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
