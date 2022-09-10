import { useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import LinkToSignupBlock from './LinkToSignupBlock';

const InputBlock = styled.form`
  display: flex;
  flex-direction: column;
  //padding-bottom : 5px;
  //margin-top: 10px;
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
  margin-bottom: 10px;
  font-size: 20px;
  background-color: #35644f;
  color: white;
  border-style: none;

  &:hover {
    cursor: pointer;
  }
`;
function LoginFormBlock() {
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
      //axios post 보내기
      // axios.post('url', null,{
      //   params:{
      //     'id':inputId,
      //     'pw':inputPw,
      //   }
      // }).then(res=> console.log(res))

      // id가 일치하지 않는 경우
      // id는 있지만 pw가 다른 경우
      // 모두 일치하는 경우
      sessionStorage.setItem('id', values.studentNumber);
      //-> 이걸 이용해서 home header에서 마이페이지 이동을 만든다.
      document.location.href = '/';
    },
  });

  return (
    <>
      {/* //form의 submit함수: formik.handleSubmit */}
      <InputBlock onSubmit={formik.handleSubmit}>
        {/* //inputBox의 value: formik.values.xx
    //inputBox의 onChange: formik.handleChange 
    //...formik.getFieldProps('studentNumber') 로 쓸 수 있음*/}
        <InputBox
          type="text"
          id="studentNumber"
          name="studentNumber"
          placeholder="아이디를 입력해주세요."
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
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          // value={formik.values.studentNumber}
          // onChange={formik.handleChange}
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <WarningMessage>{formik.errors.password}</WarningMessage>
        ) : null}

        <SubmitButton type="submit">로그인</SubmitButton>
      </InputBlock>
      <LinkToSignupBlock />
    </>
  );
}

export default LoginFormBlock;
