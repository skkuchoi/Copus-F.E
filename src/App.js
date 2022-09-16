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
            path="/search-result/:searchCategory/:keyword"
            exact={true}
            element={<SearchResult />}
          />

          {/* Original - Text */}
          <Route
            path="/original-text/:literature"
            exact={true}
            element={<OriginalTextLiterature />}
          />

          {/* OriginalText / bybook */}
          <Route
            path="/original-text/:literature/bybook"
            exact={true}
            element={<OriginalTextBy />}
          />

          <Route
            path="/original-text/:literature/bybook/:consonant"
            exact={true}
            element={<BookOriginalTextCategory />}
          />

          <Route
            path="/original-text/:literature/bybook/:consonant/:bookname"
            exact={true}
            element={<BookOriginalTextGwoncha />}
          />

          <Route
            path="/original-text/:literature/bybook/:consonant/:bookname/:gwoncha"
            exact={true}
            element={<BookOriginalTextMunche />}
          />

          <Route
            path="/original-text/:literature/bybook/:consonant/:bookname/:gwoncha/:munche"
            exact={true}
            element={<BookOriginalTextTitle />}
          />

          <Route
            path="/original-text/:literature/bybook/:consonant/:bookname/:gwoncha/:munche/:title"
            exact={true}
            element={<BookOriginalTextDetail />}
          />

          {/* OriginalText / byauthor */}
          <Route
            path="/original-text/:literature/byauthor"
            exact={true}
            element={<OriginalTextBy />}
          />

          <Route
            path="/original-text/:literature/byauthor/:consonant"
            exact={true}
            element={<AuthorOriginalTextCategory />}
          />

          <Route
            path="/original-text/:literature/byauthor/:consonant/:authorname/:bookname"
            exact={true}
            element={<AuthorOriginalTextGwoncha />}
          />

          <Route
            path="/original-text/:literature/byauthor/:consonant/:authorname/:bookname/:gwoncha"
            exact={true}
            element={<AuthorOriginalTextMunche />}
          />

          <Route
            path="/original-text/:literature/byauthor/:consonant/:authorname/:bookname/:gwoncha/:munche"
            exact={true}
            element={<AuthorOriginalTextTitle />}
          />

          <Route
            path="/original-text/:literature/byauthor/:consonant/:authorname/:bookname/:gwoncha/:munche/:title"
            exact={true}
            element={<AuthorOriginalTextDetail />}
          />

          <Route path="/server-error" element={<NotWorking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FontStyle>
    </Container>
  );
}

export default App;
