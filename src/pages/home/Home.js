import React from 'react';
import HomeHeader from '../../components/home/header/HomeHeader';
import HomeCard from '../../components/home/Card/HomeCard';
import Footer from '../../components/basic/Footer/Footer';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #f3f3f3;
`;
function Home() {
  return (
    <Container>
      <HomeHeader />
      <HomeCard />
      <Footer />
    </Container>
  );
}

export default Home;
