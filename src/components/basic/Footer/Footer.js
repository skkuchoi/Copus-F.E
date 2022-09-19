import React from 'react';
import styled from 'styled-components';

const FooterPositioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  padding: 60px 150px;
  background-color: #ededed;

  @media screen and (max-width: 800px) {
    padding: 60px 40px;
  }
`;

const CardPositioner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 8px;
`;

const Anchor = styled.a`
  list-style: none;
  text-decoration-line: none;
  color: black;
`;

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 7px 10px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;

const TextPositioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Location = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const ContactPositioner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ContactTitle = styled.div`
  font-size: 14px;
  line-height: 14px;
  margin-left: 10px;
`;

const ContactDetail = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  margin-left: 6px;
  letter-spacing: -0.025em;
`;

const Copyright = styled.div`
  font-weight: 900;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: -0.025em;
  margin-top: 40px;
  margin-bottom: 5px;
`;

function Footer() {
  return (
    <FooterPositioner>
      <CardPositioner>
        <Anchor href="https://www.skku.edu/skku/etc/private.do" target="_blank">
          <Card>개인정보처리방침</Card>
        </Anchor>
        <Anchor href="https://www.skku.edu/skku/etc/netizen.do" target="_blank">
          <Card>네티즌윤리규약</Card>
        </Anchor>
        <Anchor
          href="https://www.skku.edu/skku/etc/pop_email.do"
          target="_blank">
          <Card>이메일무단수집거부</Card>
        </Anchor>
      </CardPositioner>
      <TextPositioner>
        <Location>
          성균관대학교 한문학과 | (03063) 서울특별시 종로구 성균관로 25-2 호암관
        </Location>

        <ContactPositioner>
          <ContactTitle>TEL |</ContactTitle>
          <ContactDetail>010-7270-6075</ContactDetail>
          <ContactTitle>EMAIL |</ContactTitle>
          <ContactDetail>2sseul2yoo@gmail.com</ContactDetail>
        </ContactPositioner>

        <Copyright>
          COPYRIGHT ⓒ 2022 SUNGKYUNKWAN UNIVERSITY ALL RIGHTS RESERVED
        </Copyright>
      </TextPositioner>
    </FooterPositioner>
  );
}

export default Footer;
