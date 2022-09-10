import React from 'react';
import styled from 'styled-components';
import cardBg1 from './cardBg1.PNG';
import cardBg2 from './cardBg2.PNG';
const IntroBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 13%;
`;

const CardBlock1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 20px;
`;

const CardBlock2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 90px;
`;

const Card = styled.div`
  height: 250px;
  width: 230px;
  background-image: url(${cardBg1});
  background-size: 100% 100%;
`;

const FontBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

const TitleFontStyle = styled.div`
  font-size: 15px;
  color: gray;
  margin-bottom: 5px;
`;

const SubTitleFontStyle = styled.div`
  font-size: 20px;
`;

const TextFontStyle = styled.div`
  font-size: 15px;
  margin-top: 20px;
`;
function Introduction() {
  return (
    <IntroBlock>
      <CardBlock1>
        <Card />
        <Card />
      </CardBlock1>
      <CardBlock2>
        <Card />
        <Card />
      </CardBlock2>

      <FontBlock>
        <TitleFontStyle>인사말</TitleFontStyle>
        <SubTitleFontStyle>
          성균한문고전코퍼스를 방문해 주신 여러분을 환영합니다!
        </SubTitleFontStyle>
        <TextFontStyle>
          성균관대학교는 전통 교육과 학문을 현대의 학문과 교육을 계승하여
          세계적인 연국 성과를 산출하고 있는 우리 사회의 자랑스러운 대학입니다.
          한문학과는 이와 같은 성균관대학교의 설 정신을 가장 잘 구현하고 있는
          학과라고 말할 수 있습니다. 우리 성균한문고전코퍼스는 동아시아의 한문
          고전을 체계적으로 발굴하고 정리하는 문헌학, 한문 고전을 정확하고
          아름다운 우리 말로 옮기는 번역학, 동아시아 유교경전 의 학술 전통을
          연구하는 경학,한문 글쓰기를 연구하는 한문학 등 한문고전을 체계적으로
          연국하고 오늘날 인류 사회 의 문화 자산으로 활용하기 위한 교육과 연구를
          수행하고 있습니다.
          <br />
          <br />
          과학과 기술이 아무리 현란하게 발전하더라도, 인간 사회의 중대한 사안을
          판단하고 결단하는 것은 결국 인문학적 질문으로 회귀할 수 밖에 없고,
          인문학은 또한 고전학으로 수렴됩니다. 그러한 점에서 고전학의 가치는
          아무리 강조해도 지나치지 않을 것입니다.
          <br />
          <br />
          성균관대학교 한문고전코퍼스와의 한문 고전 연구와 교육에 많은 성원과
          관심을 부탁드립니다.
          <br />
          <br />
          감사합니다.
          <br />
        </TextFontStyle>
      </FontBlock>
    </IntroBlock>
  );
}

export default Introduction;
