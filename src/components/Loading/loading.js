import React from 'react';
import { Background, LoadingText } from './Styles';
import Spinner from './Spinner.gif';

export default () => {
  return (
    <Background>
      <img src={Spinner} alt="로딩중" width="10%" />
    </Background>
  );
};
