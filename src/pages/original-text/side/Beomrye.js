import React from 'react';
import SideTopBarBlock from '../../../components/basic/TopBarBlock/SideTopBarBlock';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import useAsync from '../../../hooks/useAsync';
import getBeomrye from '../../../api/explore/bugaInformation/getBeomrye';
import parseBeomrye from '../../../utils/parseBeomrye';

const Container = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const TitleFont = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 30px;
`;

const PersonFont = styled.div`
  font-size: 15px;
  //margin-left: 20px;
`;

const NumberFont = styled.div`
  font-size: 15px;
  //margin-left: 20px;
  margin-top: 40px;
`;

const FirstParagraphFont = styled.div`
  font-size: 15px;
  //margin-top: 40px;
  line-height: 1.8em;
`;

const SecondParagraphFont = styled.div`
  font-size: 15px;

  line-height: 1.8em;
`;
function Beomrye() {
  const { pathname } = useLocation();
  const lv1Id = pathname.split('/')[2].toString();

  const [beomryeJsonDatas] = useAsync(() => getBeomrye(lv1Id), []);
  console.log(beomryeJsonDatas);
  if (beomryeJsonDatas.data === null || beomryeJsonDatas.data === undefined)
    return <div>로딩</div>;
  return (
    <>
      <SideTopBarBlock />
      <Container>
        <TitleFont>{beomryeJsonDatas.data.seojiTitle}</TitleFont>
        {parseBeomrye(beomryeJsonDatas.data.beomrye)[0].map((item) => (
          <FirstParagraphFont>{item}</FirstParagraphFont>
        ))}

        {parseBeomrye(beomryeJsonDatas.data.beomrye)[1].map((item) => (
          <SecondParagraphFont>{item}</SecondParagraphFont>
        ))}
      </Container>
    </>
  );
}

export default Beomrye;
