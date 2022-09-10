import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../../components/shared/Layout';
import MenuListBlock from '../../../components/Account/MyAccount/MenuListBlock';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BlockPositioner = styled.div`
  display: flex;
  flex-direction: row;
  height: 65vh;
`;
const MenuPositioner = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:left;
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
  grid-template-columns: 30% 60% 10%;
  width: 98%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dadce0;
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

function PersonalInfo() {
  const firstMenu = useRef();
  const secondMenu = useRef();

  const [firstMenuOpen, setfirstMenuOpen] = useState(true);
  const [secondMenuOpen, setSecondMenuOpen] = useState(false);

  // 안먹힘
  const [inputValue, setInputValue] = useState('');

  const onClickMenu = (element) => {
    switch (element.current.innerText) {
      case '계정 정보 확인':
        setfirstMenuOpen(!firstMenuOpen);
        setInputValue('');
        if (secondMenuOpen) setSecondMenuOpen(!secondMenuOpen);
        break;
      case '비밀번호 변경':
        setSecondMenuOpen(!secondMenuOpen);
        setInputValue('');
        if (firstMenuOpen) setfirstMenuOpen(!firstMenuOpen);
        break;
      default:
        break;
    }
    console.log(element.current.innerText);
  };
  // 최소 8자, 하나 이상의 문자, 하나 이상의 숫자, 하나의 특수문자
  const passwordFormat =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~@$!%*#?&])[A-Za-z\d@~$!%*#?&]{8,}$/;

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, '최소 8자 이상이어야 합니다.')
      .max(15, '최대 15자까지 가능합니다.')
      .matches(passwordFormat, '조건: 하나 이상의 문자, 숫자, 특수문자')
      .required('필수로 입력하세요.'),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
      .required('필수로 입력하세요.'),
  });
  const formik = useFormik({
    //파라미터 1: initialValue: form의 value값
    initialValues: {
      password: '',
      passwordConfirm: '',
    },
    //유효성 검사 using validationSchema & yup
    validationSchema,
    //파라미터 2: submit할 때 호출되는 함수
    onSubmit: (values) => {
      const infoCheckMsg = ` 비밀번호를   \n\n${values.password}\n\n 로 변경하시겠습니까?`;
      if (window.confirm(infoCheckMsg)) {
        // axios post 보내기
      }
    },
  });

  return (
    <Layout>
      <BlockPositioner>
        <MenuPositioner>
          <MenuListBlock />
        </MenuPositioner>

        <ContentPositioner>
          <ContentTitle>보안 설정</ContentTitle>
          <ContentSubTitle>
            나의 정보 및 환경설정에 관한 정보입니다.
          </ContentSubTitle>

          <ContentCardPositioner>
            <ContentCard
              onClick={() => {
                onClickMenu(firstMenu);
              }}>
              <CardTitle ref={firstMenu}>계정 정보 확인</CardTitle>
              <CardExplanation>
                아이디 등 계정 정보를 확인합니다.
              </CardExplanation>
            </ContentCard>

            <ContentCard
              onClick={() => {
                onClickMenu(secondMenu);
              }}>
              <CardTitle ref={secondMenu}>비밀번호 변경</CardTitle>
              <CardExplanation>비밀번호를 변경합니다.</CardExplanation>
            </ContentCard>
          </ContentCardPositioner>

          <DetailCardPositioner display={firstMenuOpen}>
            <DetailCardTitle>기본 정보</DetailCardTitle>
            <PersonalInfoPositioner>
              <PersonalInfoRow>
                <PersonalInfoTitle>학번</PersonalInfoTitle>
                <PersonalInfoContent>2019312080</PersonalInfoContent>
              </PersonalInfoRow>
              <PersonalInfoRow>
                <PersonalInfoTitle>비밀번호</PersonalInfoTitle>
                <PersonalInfoContent>password1!</PersonalInfoContent>
              </PersonalInfoRow>
              <PersonalInfoRow>
                <PersonalInfoTitle>이메일</PersonalInfoTitle>
                <PersonalInfoContent>2sseul2yoo@gmail.com</PersonalInfoContent>
              </PersonalInfoRow>
            </PersonalInfoPositioner>
          </DetailCardPositioner>

          <DetailCardPositioner display={secondMenuOpen}>
            <DetailCardTitle>비밀번호 변경</DetailCardTitle>
            <PersonalInfoPositioner>
              <UpdatePasswordFormBlock onSubmit={formik.handleSubmit}>
                <UpdatePasswordRow>
                  <PersonalInfoTitle>새 비밀번호</PersonalInfoTitle>
                  <PasswordInput
                    type="text"
                    id="password"
                    name="password"
                    {...formik.getFieldProps('password')}
                  />

                  {formik.touched.password && formik.errors.password ? (
                    <ValidationMessage>
                      {formik.errors.password}
                    </ValidationMessage>
                  ) : null}
                </UpdatePasswordRow>
                <UpdatePasswordRow>
                  <PersonalInfoTitle>새 비밀번호 확인</PersonalInfoTitle>
                  <PasswordInput
                    type="text"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    {...formik.getFieldProps('passwordConfirm')}
                  />
                  {formik.touched.passwordConfirm &&
                  formik.errors.passwordConfirm ? (
                    <ValidationMessage>
                      {formik.errors.passwordConfirm}
                    </ValidationMessage>
                  ) : null}
                </UpdatePasswordRow>
                <UpdateButtonBlock>
                  <UpdateButton type="submit">변경하기</UpdateButton>
                </UpdateButtonBlock>
              </UpdatePasswordFormBlock>
            </PersonalInfoPositioner>
          </DetailCardPositioner>
        </ContentPositioner>
      </BlockPositioner>
    </Layout>
  );
}

export default PersonalInfo;
