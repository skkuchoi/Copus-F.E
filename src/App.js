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

import MenuExploreAuthor from './pages/menuExplore/MenuExploreAuthor';
import MenuExploreBook from './pages/menuExplore/MenuExploreBook';

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

          <Route
            path="/menu-explore/book/:consonant"
            exact={true}
            element={<MenuExploreBook filter="book" />}
          />
          <Route
            path="/menu-explore/author/:consonant"
            exact={true}
            element={<MenuExploreBook filter="author" />}
          />

          <Route path="/server-error" element={<NotWorking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FontStyle>
    </Container>
  );
}

export default App;
