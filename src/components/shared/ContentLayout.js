import React, { createContext, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

import DisplaySelectedListBlock from '../menuExplore/DisplayBlock/DisplaySelectedListBlock';
import SortBlock from '../menuExplore/SortBlock/SortBlock';
import BookSidebar from '../menuExplore/SidebarBlock/BookSidebar';
import AuthorSidebar from '../menuExplore/SidebarBlock/AuthorSidebar';

import ContentListTitleBlock from '../menuExplore/RightBlock/ContentListTitleBlock';
import BookTableRowBlock from '../menuExplore/RightBlock/BookTableRowBlock';
import BookContentListBlock from '../menuExplore/RightBlock/ContentListBlock/BookContentListBlock';
import GwonchaContentListBlock from '../menuExplore/RightBlock/ContentListBlock/GwonchaContentListBlock';
import MuncheContentListBlock from '../menuExplore/RightBlock/ContentListBlock/MuncheContentListBlock';
import TitleContentListBlock from '../menuExplore/RightBlock/ContentListBlock/TitleContentListBlock';
import Content from '../menuExplore/RightBlock/ContentListBlock/Content';

import { leftBlockDepth } from '../../pages/menuExplore/MenuExplore';

const MainContentBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: fit-content;
  margin: 1px 20px;
`;

export const currentFocusTitleContext = createContext();
export const authorContext = createContext();
export const seojiContext = createContext();
export const gwonchaContext = createContext();
export const muncheContext = createContext();
export const finalContext = createContext();

function ContentLayout({ filter }) {
  const depthContext = useContext(leftBlockDepth);

  // 현재 선택된 아이
  const [currentFocusTitle, setCurrentFocusTitle] = useState('');
  // 저자
  const [clickAuthor, setClickAuthor] = useState('');
  const [authorValue, setAuthorValue] = useState('');
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
      <currentFocusTitleContext.Provider
        value={{
          currentFocusTitle: currentFocusTitle,
          setCurrentFocusTitle: setCurrentFocusTitle,
        }}>
        <authorContext.Provider
          value={{
            clickAuthor: clickAuthor,
            setClickAuthor: setClickAuthor,
            authorValue: authorValue,
            setAuthorValue: setAuthorValue,
          }}>
          <seojiContext.Provider
            value={{
              clickSeoji: clickSeoji,
              setClickSeoji: setClickSeoji,
            }}>
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
                      {filter === 'book' && <BookSidebar />}
                      {filter === 'author' && <AuthorSidebar />}

                      {(depthContext.depth === 0 ||
                        depthContext.depth === -1) && (
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
        </authorContext.Provider>
      </currentFocusTitleContext.Provider>
    </>
  );
}

export default ContentLayout;
