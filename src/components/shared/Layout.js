import React from 'react';
import Header from '../basic/header/Header';
import Footer from '../basic/Footer/Footer';
import styled from 'styled-components';
import TopBarBlock from '../basic/TopBarBlock/TopBarBlock';

const LayoutBlock = styled.div`
  overflow: hidden;
`;

function Layout({ children }) {
  return (
    <LayoutBlock>
      <TopBarBlock />
      <Header />
      {children}
      <Footer />
    </LayoutBlock>
  );
}

export default Layout;
