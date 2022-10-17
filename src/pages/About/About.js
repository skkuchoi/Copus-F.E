import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderBlock from '../../components/home/header/HeaderBlock/HeaderBlock';
import Introduction from '../../components/About/Introduction';
import Footer from '../../components/basic/Footer/Footer';
import WhatWeExpect from '../../components/About/WhatIsCopus/WhatWeExpect';
import WhatIsCopus from '../../components/About/WhatIsCopus/WhatIsCopus';
import CopusDestination from '../../components/About/WhatIsCopus/CopusDestination';
import ConstructionProcess from '../../components/About/ConstructionProcess/ConstructionProcess';

const ButtonStyle = styled.div`
  margin: 0px 10%;
  display: flex;
  flex-direction: row;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 180px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: ${(props) => props.color};
  &:hover {
    cursor: pointer;
  }
`;

const WholeContainer = styled.div`
  margin: 0px 10%;
  border-style: solid;
  border-color: lightgray;
  border-width: 2px;
  padding-bottom: 60px;
`;

function About() {
  const [menu, setMenu] = useState('first');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {menu === 'first' && (
        <>
          <HeaderBlock />
          <Introduction />
          <ButtonStyle>
            <Button
              color={'rgba(188, 248, 183, 0.4)'}
              onClick={() => setMenu('first')}>
              성균코퍼스 프로젝트란?
            </Button>
            <Button color={'lightgray'} onClick={() => setMenu('second')}>
              성균코퍼스 구축과정
            </Button>
          </ButtonStyle>
          <WholeContainer>
            <WhatIsCopus />
            <CopusDestination />
            <WhatWeExpect />
          </WholeContainer>
          <Footer />
        </>
      )}
      {menu === 'second' && (
        <>
          <HeaderBlock />
          <Introduction />
          <ButtonStyle>
            <Button color={'lightgray'} onClick={() => setMenu('first')}>
              성균코퍼스 프로젝트란?
            </Button>
            <Button
              color={'rgba(188, 248, 183, 0.4)'}
              onClick={() => setMenu('second')}>
              성균코퍼스 구축과정
            </Button>
          </ButtonStyle>
          <WholeContainer>
            <ConstructionProcess />
          </WholeContainer>
          <Footer />
        </>
      )}
    </>
  );
}

export default About;
