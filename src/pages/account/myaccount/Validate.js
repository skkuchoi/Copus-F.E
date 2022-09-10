import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';
// 최소 8자, 하나 이상의 문자, 하나 이상의 숫자, 하나의 특수문자
const passwordFormat =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~@$!%*#?&])[A-Za-z\d@~$!%*#?&]{8,}$/;

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, '최소 8자 이상이어야 합니다.')
    .max(15, '최대 15자까지 가능합니다.')
    .matches(passwordFormat, '조건: 하나 이상의 문자, 숫자, 특수문자')
    .required('필수로 입력하세요.'),
});

export function Validate() {
  const formik = useFormik({
    //파라미터 1: initialValue: form의 value값
    initialValues: {
      password: '',
    },
    //유효성 검사 using validationSchema & yup
    validationSchema,
    //파라미터 2: submit할 때 호출되는 함수
    onSubmit: (values) => {
      const infoCheckMsg = ` 비밀번호를 \n\n${values.password}\n\n 로 변경하시겠습니까?`;
      if (window.confirm(infoCheckMsg)) {
        // axios post 보내기
      }
    },
  });
  return formik;
}
