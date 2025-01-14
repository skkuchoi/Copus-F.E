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
  scrollContext,
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

  @media screen and (max-width: 800px) {
    display: none;
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

function BookSidebar() {
  const container = useRef();

  const consonant = useContext(selectedConsonant);
  const filter = useContext(selectedFilter);
  const depthContext = useContext(leftBlockDepth);

  const currentFocusTitle = useContext(currentFocusTitleContext);
  const clickSeojiContext = useContext(seojiContext);
  const clickGwonchaContext = useContext(gwonchaContext);
  const clickMuncheContext = useContext(muncheContext);
  const clickFinalContext = useContext(finalContext);
  const clickScrollContext = useContext(scrollContext);

  const [seojiListDatas, setSeojiListDatas] = useState([]);

  const [includeGwonchaData, setIncludeGwonchaData] = useState({});
  const [gwonchaListDatas, setGwonchaListDatas] = useState([]);

  const [includeMuncheData, setIncludeMuncheData] = useState({});
  const [muncheListDatas, setMuncheListDatas] = useState([]);

  const [includeFinalData, setIncludeFinalData] = useState({});
  const [finalListDatas, setFinalListDatas] = useState([]);

  const navigate = useNavigate();

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
          childTitle: seoji.childTitle,
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
    window.scrollTo(0, 110);
    if (typeof clickScrollContext.scroll === 'number') {
      switch (true) {
        case clickScrollContext.scroll <= 100:
          container.current.scrollTo(0, 200);
          break;
        case clickScrollContext.scroll <= 200:
          container.current.scrollTo(0, 780);
          break;
        case clickScrollContext.scroll <= 250:
          container.current.scrollTo(0, 780);
          break;
        case clickScrollContext.scroll <= 300:
          container.current.scrollTo(0, 700);
          break;
        case clickScrollContext.scroll <= 350:
          container.current.scrollTo(0, 900);
          break;
        case clickScrollContext.scroll <= 400:
          container.current.scrollTo(0, 1100);
          break;
        case clickScrollContext.scroll <= 450:
          container.current.scrollTo(0, 1300);
          break;
        case clickScrollContext.scroll <= 500:
          container.current.scrollTo(0, 1500);
          break;
        case clickScrollContext.scroll <= 550:
          container.current.scrollTo(0, 1700);
          break;
        case clickScrollContext.scroll <= 600:
          container.current.scrollTo(0, 1900);
          break;
        case clickScrollContext.scroll <= 650:
          container.current.scrollTo(0, 1900);
          break;
        case clickScrollContext.scroll <= 700:
          container.current.scrollTo(0, 2100);
          break;
        case clickScrollContext.scroll <= 800:
          container.current.scrollTo(0, 2600);
          break;
        case clickScrollContext.scroll <= 900:
          container.current.scrollTo(0, 2800);
          break;
        default:
          break;
      }
    }
  }, [clickScrollContext]);

  const handleItemScroll = () => {
    clickScrollContext.setScroll('');
  };

  if (
    seojiListDatas.error ||
    gwonchaListDatas.error ||
    muncheListDatas.error ||
    finalListDatas.error
  )
    navigate('/server-error');
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
    return <Loading />;
  return (
    <Container ref={container}>
      {seojiListDatas.map((seoji) => (
        <>
          <ListItemPositioner padding="0px">
            <HiOutlineDocumentText className="list-icon" />
            <ListLi
              onClick={() => {
                handleItemScroll();
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
                  <ListItemPositioner padding="20px">
                    <HiOutlineDocumentText className="list-icon" />
                    <ListLi
                      onClick={() => {
                        handleItemScroll();
                        clickGwonchaContext.setClickGwoncha(gwoncha.childId);
                        depthContext.setDepth(2);
                        currentFocusTitle.setCurrentFocusTitle(gwoncha.childId);
                      }}
                      className={
                        currentFocusTitle.currentFocusTitle === gwoncha.childId
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
                              onClick={() => {
                                handleItemScroll();
                                clickMuncheContext.setClickMunche(
                                  munche.childId,
                                );
                                depthContext.setDepth(3);
                                currentFocusTitle.setCurrentFocusTitle(
                                  munche.childId,
                                );
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
                              final.childId.includes(munche.childId) && (
                                <ListItemPositioner padding="60px">
                                  <HiOutlineDocumentText className="list-icon" />
                                  <ListLi
                                    onClick={() => {
                                      handleItemScroll();
                                      depthContext.setDepth(4);
                                      currentFocusTitle.setCurrentFocusTitle(
                                        final.childId,
                                      );
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
