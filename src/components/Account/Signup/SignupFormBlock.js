import { useFormik } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';

const InputBlock = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const InputCategoryText = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const InputBox = styled.input`
  width: 380px;
  height: 40px;
  font-size: 15px;
  padding-left: 15px;
  border: solid 1px #dadada;
  margin-top: 15px;
  :focus {
    outline: none !important;
    border: solid 1px #4ec53d;
  }
`;
const WarningMessage = styled.span`
  font-size: 13px;
  margin-top: 3px;
  margin-bottom: 10px;
  padding-left: 5px;
  color: red;
`;

const SubmitButton = styled.button`
  width: 400px;
  height: 45px;
  margin-top: 50px;
  margin-bottom: 30px;
  font-size: 20px;
  background-color: #35644f;
  color: white;
  border-style: none;

  &:hover {
    cursor: pointer;
  }
`;
function SignupFormBlock() {
  //useFormik 훅 호출
  const studentNumberFormat = /\d{10}/;
  // 최소 8자, 하나 이상의 문자, 하나 이상의 숫자, 하나의 특수문자
  const passwordFormat =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~@$!%*#?&])[A-Za-z\d@~$!%*#?&]{8,}$/;

  const validationSchema = Yup.object({
    studentNumber: Yup.string()
      .max(10, '학번은 10자입니다.')
      .matches(studentNumberFormat, '숫자만 입력하세요.')
      .required('필수로 입력하세요.'),
    password: Yup.string()
      .min(8, '최소 8자 이상이어야 합니다.')
      .max(15, '최대 15자까지 가능합니다.')
      .matches(passwordFormat, '조건: 하나 이상의 문자, 숫자, 특수문자')
      .required('필수로 입력하세요.'),
    email: Yup.string()
      .email('올바른 이메일 형식이 아닙니다.')
      .required('필수로 입력하세요.'),
  });
  const formik = useFormik({
    //파라미터 1: initialValue: form의 value값
    initialValues: {
      studentNumber: '',
      password: '',
      email: '',
    },
    //유효성 검사 using validationSchema & yup
    validationSchema,
    //파라미터 2: submit할 때 호출되는 함수
    onSubmit: (values) => {
      const infoCheckMsg = ` 학번: ${values.studentNumber}\n\n 비밀번호: ${values.password}\n\n 이메일: ${values.email}\n\n 위의 정보가 맞습니까?`;
      const guideMsg =
        '회원가입은 관리자 계정의 승인을 받아야 완료됩니다. 작성하신 이메일로 승인 완료 메일이 전송될 예정입니다.';
      if (window.confirm(infoCheckMsg)) {
        if (window.confirm(guideMsg)) {
          //axios post 보내기
          //그리고 홈페이지로 이동
          document.location.href = '/';
        }
      }
    },
  });

  return (
    //form의 submit함수: formik.handleSubmit
    <InputBlock onSubmit={formik.handleSubmit}>
      {/* //inputBox의 value: formik.values.xx
    //inputBox의 onChange: formik.handleChange 
    //...formik.getFieldProps('studentNumber') 로 쓸 수 있음*/}
      <InputBox
        type="text"
        id="studentNumber"
        name="studentNumber"
        placeholder="학번을 입력해주세요."
        // value={formik.values.studentNumber}
        // onChange={formik.handleChange}
        {...formik.getFieldProps('studentNumber')}
      />

      {/* 유효성 메시지 */}
      {/* // formik.tounched: 방문한 필드만 추적함 */}
      {formik.touched.studentNumber && formik.errors.studentNumber ? (
        <WarningMessage>{formik.errors.studentNumber}</WarningMessage>
      ) : null}

      <InputBox
        type="text"
        id="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        // value={formik.values.studentNumber}
        // onChange={formik.handleChange}
        {...formik.getFieldProps('password')}
      />
      {formik.touched.password && formik.errors.password ? (
        <WarningMessage>{formik.errors.password}</WarningMessage>
      ) : null}

      <InputBox
        type="text"
        id="email"
        name="email"
        placeholder="이메일을 입력해주세요."
        // value={formik.values.studentNumber}
        // onChange={formik.handleChange}
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <WarningMessage>{formik.errors.email}</WarningMessage>
      ) : null}
      <SubmitButton type="submit">가입하기</SubmitButton>
    </InputBlock>
  );
}

export default SignupFormBlock;
