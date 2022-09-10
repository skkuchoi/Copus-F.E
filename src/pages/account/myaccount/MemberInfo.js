import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../../components/shared/Layout';
import MenuListBlock from '../../../components/Account/MyAccount/MenuListBlock';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Update } from '@mui/icons-material';

const BlockPositioner = styled.div`
  display: flex;
  flex-direction: row;
  height: 65vh;
`;
const MenuPositioner = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  border-right: 1px solid #d9d9d9;
`;

const ContentPositioner = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  align-items: center;
`;

const ContentTitle = styled.span`
  font-size: 25px;
  font-weight: bold;
  margin: 0;
`;

const ContentSubTitle = styled.span`
  font-size: 14px;
  margin: 0;
`;

const ContentCardPositioner = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const ContentCard = styled.div`
  border: 1px solid #dadce0;
  border-radius: 15px;
  margin: 15px 15px;
  width: 300px;
  text-align: center;
  padding: 20px 5px;

  &:hover {
    background-color: #f1f3f4;
    cursor: pointer;
  }
`;

const CardTitle = styled.h2`
  font-size: 25px;
  margin-top: 0;
  margin-bottom: 5px;
`;

const CardExplanation = styled.span`
  font-size: 14px;
`;

const DetailCardPositioner = styled.div`
  margin-top: 20px;
  border: 1px solid #dadce0;
  border-radius: 15px;
  margin: 15px 15px;
  width: 640px;
  padding: 20px 5px;
  display: ${(props) => (props.display ? 'block' : 'none')};
`;

const DetailCardTitle = styled.h2`
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 5px;
  padding-left: 15px;
`;

const PersonalInfoPositioner = styled.div`
  margin-top: 10px;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`;

const PersonalInfoRow = styled.div`
  display: grid;
  //체크, 학번 , 비번, 이메일
  grid-template-columns: 10% 30% 30% 30%;
  width: 98%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dadce0;
  text-align: center;
`;

const CheckBox = styled.input`
  color: black;
`;
const PersonalInfoTitle = styled.span`
  font-size: 15px;
`;

const PersonalInfoContent = styled.span`
  font-size: 15px;
`;

const UpdatePasswordFormBlock = styled.form``;
const UpdatePasswordRow = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  width: 98%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dadce0;
`;
const PasswordInput = styled.input`
  height: 20px;
  width: 170px;

  font-size: 15px;
  padding-left: 3px;
  border: solid 1px gray;

  :focus {
    outline: none !important;
    border: solid 1px #4ec53d;
  }
`;

const ValidationMessage = styled.span`
  font-size: 13px;
  margin-left: 10px;
  margin-top: 3px;
  width: 220px;
  color: red;
`;

const UpdateButtonBlock = styled.div`
  display: flex;
  justify-content: right;
  padding-right: 15px;
`;
const UpdateButton = styled.button`
  background-color: transparent;
  border-radius: 15px;
  border: 0.5px solid gray;
  margin-top: 20px;

  width: fit-content;
  padding: 3px 8px;

  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
`;

function MemberInfo() {
  const firstMenu = useRef();
  const secondMenu = useRef();

  const [firstMenuOpen, setfirstMenuOpen] = useState(true);
  const [secondMenuOpen, setSecondMenuOpen] = useState(false);

  // 안먹힘
  const [inputValue, setInputValue] = useState('');

  const onClickMenu = (element) => {
    switch (element.current.innerText) {
      case '회원 승인':
        setfirstMenuOpen(!firstMenuOpen);
        setInputValue('');
        if (secondMenuOpen) setSecondMenuOpen(!secondMenuOpen);
        break;
      case '회원 관리':
        setSecondMenuOpen(!secondMenuOpen);
        setInputValue('');
        if (firstMenuOpen) setfirstMenuOpen(!firstMenuOpen);
        break;
      default:
        break;
    }
    console.log(element.current.innerText);
  };

  return (
    <Layout>
      <BlockPositioner>
        <MenuPositioner>
          <MenuListBlock />
        </MenuPositioner>

        <ContentPositioner>
          <ContentTitle>회원 관리</ContentTitle>
          <ContentSubTitle>
            회원 승인 및 관리를 위한 정보입니다.
          </ContentSubTitle>

          <ContentCardPositioner>
            <ContentCard
              onClick={() => {
                onClickMenu(firstMenu);
              }}>
              <CardTitle ref={firstMenu}>회원 승인</CardTitle>
              <CardExplanation>
                회원 정보를 확인한 후 승인합니다.
              </CardExplanation>
            </ContentCard>

            <ContentCard
              onClick={() => {
                onClickMenu(secondMenu);
              }}>
              <CardTitle ref={secondMenu}>회원 관리</CardTitle>
              <CardExplanation>
                등록된 회원 리스트를 관리합니다.
              </CardExplanation>
            </ContentCard>
          </ContentCardPositioner>

          <DetailCardPositioner display={firstMenuOpen}>
            <DetailCardTitle>회원 승인</DetailCardTitle>
            <PersonalInfoPositioner>
              <PersonalInfoRow>
                <span></span>
                <PersonalInfoTitle>학번</PersonalInfoTitle>
                <PersonalInfoTitle>비밀번호</PersonalInfoTitle>
                <PersonalInfoTitle>이메일</PersonalInfoTitle>
              </PersonalInfoRow>

              {/* // axios get으로 가져와야함. */}
              <PersonalInfoRow>
                <CheckBox type="checkbox" />

                <PersonalInfoContent>2019312080</PersonalInfoContent>
                <PersonalInfoTitle>학번</PersonalInfoTitle>
                <PersonalInfoTitle>학번</PersonalInfoTitle>
              </PersonalInfoRow>
            </PersonalInfoPositioner>
            <UpdateButtonBlock>
              <UpdateButton>승인하기</UpdateButton>
            </UpdateButtonBlock>
          </DetailCardPositioner>
        </ContentPositioner>
      </BlockPositioner>
    </Layout>
  );
}

export default MemberInfo;
