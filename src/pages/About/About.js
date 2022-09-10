import React from 'react';
import HeaderBlock from '../../components/home/header/HeaderBlock/HeaderBlock';
import Introduction from '../../components/About/Introduction';
import Footer from '../../components/basic/Footer/Footer'
import WhatWeDo from '../../components/About/WhatWeDo';
function About() {
    return (
        <>
        <HeaderBlock />
        <Introduction />
        <WhatWeDo/>
        <Footer />
        </>
    )
};

export default About;