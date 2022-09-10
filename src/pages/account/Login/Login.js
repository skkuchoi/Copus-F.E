import React from 'react';

import AccountBlockPositioner from '../../../components/Account/AccountBlockPositioner';
import LoginFormBlock from '../../../components/Account/Login/LoginFormBlock';

function Login() {
  return (
    <AccountBlockPositioner>
      <LoginFormBlock />
    </AccountBlockPositioner>
  );
}

export default Login;
