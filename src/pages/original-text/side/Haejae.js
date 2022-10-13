import React from 'react';
import { useLocation } from 'react-router-dom';
import getHaejae from '../../../api/explore/bugaInformation/getHaejae';
import SideTopBarBlock from '../../../components/basic/TopBarBlock/TopBarBlock';
import useAsync from '../../../hooks/useAsync';

function Haejae() {
  const { pathname } = useLocation();
  const lv1Id = pathname.split('/')[2].toString();

  const [haejaeJsonDatas] = useAsync(() => getHaejae(lv1Id), []);
  return (
    <div>
      <SideTopBarBlock />
      <h1>해제입니다.</h1>
    </div>
  );
}

export default Haejae;
