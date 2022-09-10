import React from 'react';
import styled from 'styled-components';

const FooterBlock = styled.div`
  padding-top: 15px;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 70px;
`;

const GuideText = styled.span`
  margin-bottom: 7px;
  margin-right: 5px;
  font-size: 13px;
  color: #7c7c7c;
`;

const ContentText = styled.span`
  font-size: 13px;
  color: #005eb5;
`;


function Footer() {
  return (
    <FooterBlock>
      <ContactText>
        <GuideText>
          TEL <ContentText>010-7270-6075</ContentText>
        </GuideText>

        <GuideText>
          Email <ContentText>2sseul2yoo@gmail.com</ContentText>
        </GuideText>
      </ContactText>
      <GuideText>
        COPYRIGHT ⓒ SUNGKYUNKWAN UNIVERSITY ALL RIGHTS RESERVED.
      </GuideText>
    </FooterBlock>
  );
}

export default Footer;
