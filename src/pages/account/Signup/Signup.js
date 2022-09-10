import React from 'react';

import AccountBlockPositioner from '../../../components/Account/AccountBlockPositioner';
import SignupFormBlock from '../../../components/Account/Signup/SignupFormBlock';

function Signup() {
  return (
    <AccountBlockPositioner>
      <SignupFormBlock />
    </AccountBlockPositioner>
  );
}

export default Signup;
