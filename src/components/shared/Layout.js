import React from 'react';
import Header from '../basic/header/Header';
import Footer from '../basic/Footer/Footer';
import TopBarBlock from '../basic/TopBarBlock/TopBarBlock';

function Layout({ children, footerSwitch = true }) {
  return (
    <>
      <TopBarBlock />
      <Header />
      {children}
      {footerSwitch && <Footer />}
    </>
  );
}

export default Layout;
