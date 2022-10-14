import React from 'react';
import { useLocation } from 'react-router-dom';
import getHaejae from '../../../api/explore/bugaInformation/getHaejae';
import SideTopBarBlock from '../../../components/basic/TopBarBlock/TopBarBlock';
import useAsync from '../../../hooks/useAsync';
import parseHaejae from '../../../utils/parseHaejae';

function Haejae() {
  const { pathname } = useLocation();
  const lv1Id = pathname.split('/')[2].toString();

  const [haejaeJsonDatas] = useAsync(() => getHaejae(lv1Id), []);
  if (haejaeJsonDatas.data === null || haejaeJsonDatas.data === undefined)
    return <div>로딩</div>;
  return (
    <div>
      <SideTopBarBlock />
      <h1>{haejaeJsonDatas.data.seojiTitle}</h1>
      <p>{parseHaejae(haejaeJsonDatas.data.haejae)}</p>
    </div>
  );
}

export default Haejae;
