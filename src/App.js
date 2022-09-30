import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { FontStyle } from './FontStyle';
import Home from './pages/home/Home';

import About from './pages/About/About';

import Login from './pages/account/Login/Login';
import Signup from './pages/account/Signup/Signup';
import PersonalInfo from './pages/account/myaccount/PersonalInfo';
import MemberInfo from './pages/account/myaccount/MemberInfo';

import NotFound from './pages/notFound/NotFound';
import NotWorking from './pages/NotWorking/NotWorking';

import SearchResult from './pages/searchResult/SearchResult';

import OriginalTextLiterature from './pages/original-text/OriginalTextLiterature';
import OriginalTextBy from './pages/original-text/OriginalTextBy';

import BookOriginalTextDetail from './pages/original-text/bybook/detail/OriginalTextDetail';
import BookOriginalTextCategory from './pages/original-text/bybook/category/OriginalTextCategory';
import BookOriginalTextGwoncha from './pages/original-text/bybook/gwoncha/OriginalTextGwoncha';
import BookOriginalTextMunche from './pages/original-text/bybook/munche/OriginalTextMunche';
import BookOriginalTextTitle from './pages/original-text/bybook/title/OriginalTextTitle';

import AuthorOriginalTextDetail from './pages/original-text/byauthor/detail/OriginalTextDetail';
import AuthorOriginalTextCategory from './pages/original-text/byauthor/category/OriginalTextCategory';
import AuthorOriginalTextGwoncha from './pages/original-text/byauthor/gwoncha/OriginalTextGwoncha';
import AuthorOriginalTextMunche from './pages/original-text/byauthor/munche/OriginalTextMunche';
import AuthorOriginalTextTitle from './pages/original-text/byauthor/title/OriginalTextTitle';

import Seoji from './pages/menuExplore/seoji/Seoji';
import Gwoncha from './pages/menuExplore/gwoncha/Gwoncha';
import Munche from './pages/menuExplore/munche/Munche';
import Final from './pages/menuExplore/final/Final';
import Consonant from './pages/menuExplore/consonant/Consonant';
import TestSidebar from './components/testSidebar/TestSidebar';
import TestEachSidebar from './components/testEachSidebar/TestEachSidebar';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;
function App() {
  // 미디어쿼리 작업할 때 쓰세용
  // const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const resizeListener = () => {
  //     setInnerWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', resizeListener);
  // });

  // console.log('innerWidth: ', innerWidth);
  return (
    <Container>
      <FontStyle>
        <Routes>
          <Route
            path="/test"
            exact={true}
            element={<TestSidebar requestId="가암유고1-권차1" />}
          />
          <Route
            path="/test1"
            exact={true}
            element={
              <TestEachSidebar
                consonant="A"
                requestId="가암유고1-권차1-문체1"
              />
            }
          />
          <Route
            path="/test1/:seojiId"
            exact={true}
            element={<TestEachSidebar />}
          />
          <Route path="/" exact={true} element={<Home />} />

          {/* about page */}
          <Route path="/about" exact={true} element={<About />} />

          {/* account Page */}
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/signup" exact={true} element={<Signup />} />
          <Route path="/myaccount" exact={true} element={<PersonalInfo />} />
          <Route
            path="/myaccount/member"
            exact={true}
            element={<MemberInfo />}
          />

          {/* search-result */}
          <Route
            path="/search-result/total/:keyword"
            exact={true}
            element={<SearchResult />}
          />

          <Route
            path="/search-result/book-title/:keyword"
            exact={true}
            element={<SearchResult />}
          />

          <Route
            path="/search-result/author-name/:keyword"
            exact={true}
            element={<SearchResult />}
          />

          <Route
            path="/search-result/content/:keyword"
            exact={true}
            element={<SearchResult />}
          />
          {/* New Explore;;ㅋㅋ */}
          <Route path="/menu-explore" exact={true} element={<Consonant />} />
          

          <Route path="/server-error" element={<NotWorking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FontStyle>
    </Container>
  );
}

export default App;
