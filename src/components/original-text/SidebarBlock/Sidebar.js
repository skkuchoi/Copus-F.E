import React, {
  useRef,
  useContext,
  useState,
  useEffect,
  createContext,
} from 'react';
import styled from 'styled-components';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import useAsync from '../../../hooks/useAsync';
import { selectedConsonant, selectedFilter } from '../SortBlock/SortBlock';
import { useLocation, useNavigate } from 'react-router-dom';
import getLeftDepth1List from '../../../api/explore1/sidebar/left/getLeftDepth1List';
import getSeoji from '../../../api/test/leftBlock/bybook/getSeoji';
import { HiOutlineDocumentText } from 'react-icons/hi';
import getGwoncha from '../../../api/test/leftBlock/bybook/getGwoncha';
import getMunche from '../../../api/test/leftBlock/bybook/getMunche';
import getFinal from '../../../api/test/leftBlock/bybook/getFinal';
import { leftBlockDepth } from '../../../pages/menuExplore/consonant/Consonant';
import {
  seojiContext,
  gwonchaContext,
  muncheContext,
} from '../../shared/ContentLayout';

const Container = styled.div`
  border: 1px solid #d9d9d9;
  border-right: none;
  height: 85vh;
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

  .list-icon {
    color: gray;
    margin-right: 3px;
    position: relative;
    top: 4px;
    padding-left: ${(props) => props.padding};
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

function Sidebar() {
  const container = useRef();

  useEffect(() => {
    container.current.scrollTo(0, 400);
    window.scrollTo(0, 100);
  }, [container]);

  const consonant = useContext(selectedConsonant);
  const filter = useContext(selectedFilter);
  const depthContext = useContext(leftBlockDepth);

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
  const [seojiJsonDatas] = useAsync(() => getSeoji(0, consonant), [consonant]);
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
    () => getGwoncha(1, clickSeojiContext.clickSeoji),
    [clickSeojiContext.clickSeoji, depthContext.depth],
  );

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
    () => getMunche(2, clickGwonchaContext.clickGwoncha),
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
    () => getFinal(3, clickMuncheContext.clickMunche),
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

  //최종정보

  // set scroll 0 whenever click filter || consonant
  useEffect(() => {
    container.current.scrollTo(0, 0);

    // setGwonchaListDatas([]);
    // setMuncheListDatas([]);
    // setFinalListDatas([]);
    // setIncludeGwonchaData({});
    // setIncludeMuncheData({});
    // setIncludeFinalData({});
  }, [filter, consonant]);
  //const moveHeight = height < 400 ? 0 : 300;
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
                clickSeojiContext.setClickSeoji(seoji.childId);
                depthContext.setDepth(1);
              }}>
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
                      }}>
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
                              }}>
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
                                    }}>
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

export default Sidebar;