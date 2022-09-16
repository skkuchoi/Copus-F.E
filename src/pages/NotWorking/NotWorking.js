import React from 'react';
import Error from '../../components/error/Error';

export default function NotWorking() {
  return (
    <Error
      guideTitle="페이지를 표시할 수 없습니다."
      guideText1="시스템 서버 에러가 발생하여 페이지를 표시할 수 없습니다."
      guideText2="관리자에게 문의하거나 잠시 후 다시 시도해주시기 바랍니다."
      errorNum="Error 500"
    />
  );
}
