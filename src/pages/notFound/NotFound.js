import React from 'react';
import Error from '../../components/error/Error';

export default function NotFound() {
  return (
    <Error
      guideTitle="페이지를 찾을 수 없습니다."
      guideText1="페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다."
      guideText2="입력하신 주소가 정확한지 다시 한번 확인해주시기 바랍니다."
      errorNum="Error 400"
    />
  );
}
