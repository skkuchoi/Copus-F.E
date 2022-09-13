import React from 'react';
import Header from '../basic/header/Header';
import Footer from '../basic/Footer/Footer';
import TopBarBlock from '../basic/TopBarBlock/TopBarBlock';

function Layout({ children }) {
  return (
    <>
      <TopBarBlock />
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
