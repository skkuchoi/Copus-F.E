import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterPositioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  padding: 60px 150px;
  background-color: #ededed;

  @media screen and (max-width: 800px) {
    padding: 60px 40px;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const Information = styled.div`
  font-style: normal;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Copyright = styled.div`
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 13px;
  letter-spacing: -0.025em;
  margin-top: 60px;
  margin-bottom: 5px;
`;

const ContactBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TEL = styled.div`
  font-style: normal;

  font-size: 14px;
  line-height: 14px;
`;

const PhoneNumber = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  margin-left: 10px;
  letter-spacing: -0.025em;
`;

const Email = styled.div`
  font-style: normal;

  font-size: 14px;
  line-height: 14px;
  margin-left: 20px;
`;

const EmailAdress = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.025em;
  margin-left: 10px;
`;

const BoxBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const Card = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 7px 10px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  font-size: 15px;
  margin-right: 10px;
`;

const Anchor = styled.a`
  list-style: none;
  text-decoration-line: none;
  color: black;
`;

function Footer() {
  return (
    <FooterPositioner>
      <BoxBlock>
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
      </BoxBlock>
      <TextBlock>
        <Information>
          성균관대학교 한문학과 | (03063) 서울특별시 종로구 성균관로 25-2 호암관
        </Information>

        <ContactBlock>
          <TEL>TEL</TEL>
          <PhoneNumber>010-7270-6075</PhoneNumber>
          <Email>EMAIL</Email>
          <EmailAdress>2sseul2yoo@gmail.com</EmailAdress>
        </ContactBlock>

        <Copyright>
          COPYRIGHT ⓒ 2022 SUNGKYUNKWAN UNIVERSITY ALL RIGHTS RESERVED.
        </Copyright>
      </TextBlock>
    </FooterPositioner>
  );
}

export default Footer;
