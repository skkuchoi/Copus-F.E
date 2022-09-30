import React, { createContext, useContext, useState } from 'react';
import styled from 'styled-components';
import ContentListTitleBlock from '../original-text/ContentListBlock/ContentListTitleBlock';
import DisplaySelectedListBlock from '../original-text/DisplayBlock/DisplaySelectedListBlock';

import Sidebar from '../original-text/SidebarBlock/Sidebar';

import SortBlock from '../original-text/SortBlock/SortBlock';
import { leftBlockDepth } from '../../pages/menuExplore/consonant/Consonant';
import BookTableRowBlock from '../original-text/ContentListBlock/BookTableRowBlock';
import BookContentListBlock from '../original-text/ContentListBlock/bybook/BookContentListBlock';
import GwonchaContentListBlock from '../original-text/ContentListBlock/bybook/GwonchaContentListBlock';
import MuncheContentListBlock from '../original-text/ContentListBlock/bybook/MuncheContentListBlock';
import TitleContentListBlock from '../original-text/ContentListBlock/bybook/TitleContentListBlock';
import Content from '../original-text/ContentBlock/Content';

const MainContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 75vh;
  margin: 1px 20px;
`;

export const seojiContext = createContext();
export const gwonchaContext = createContext();
export const muncheContext = createContext();
export const finalContext = createContext();

function ContentLayout() {
  const depthContext = useContext(leftBlockDepth);

  // 권차
  const [clickSeoji, setClickSeoji] = useState('');

  //문체
  const [clickGwoncha, setClickGwoncha] = useState('');

  //최종정보
  const [clickMunche, setClickMunche] = useState('');

  //최종정보 Content
  const [clickFinal, setClickFinal] = useState('');
  return (
    <>
      <seojiContext.Provider
        value={{ clickSeoji: clickSeoji, setClickSeoji: setClickSeoji }}>
        <gwonchaContext.Provider
          value={{
            clickGwoncha: clickGwoncha,
            setClickGwoncha: setClickGwoncha,
          }}>
          <muncheContext.Provider
            value={{
              clickMunche: clickMunche,
              setClickMunche: setClickMunche,
            }}>
            <finalContext.Provider
              value={{
                clickFinal: clickFinal,
                setClickFinal: setClickFinal,
              }}>
              <DisplaySelectedListBlock />
              <SortBlock>
                <MainContentBlock>
                  <Sidebar />

                  {depthContext.depth === 0 && (
                    <ContentListTitleBlock title={'총 리스트'}>
                      <BookTableRowBlock />
                      <BookContentListBlock />
                    </ContentListTitleBlock>
                  )}

                  {depthContext.depth === 1 && (
                    <ContentListTitleBlock title={'총 리스트'}>
                      <GwonchaContentListBlock />
                    </ContentListTitleBlock>
                  )}
                  {depthContext.depth === 2 && (
                    <ContentListTitleBlock title={'총 리스트'}>
                      <MuncheContentListBlock />
                    </ContentListTitleBlock>
                  )}
                  {depthContext.depth === 3 && (
                    <ContentListTitleBlock title={'총 리스트'}>
                      <TitleContentListBlock />
                    </ContentListTitleBlock>
                  )}
                  {depthContext.depth === 4 && (
                    <ContentListTitleBlock>
                      <Content />
                    </ContentListTitleBlock>
                  )}
                </MainContentBlock>
              </SortBlock>
            </finalContext.Provider>
          </muncheContext.Provider>
        </gwonchaContext.Provider>
      </seojiContext.Provider>
    </>
  );
}

export default ContentLayout;
