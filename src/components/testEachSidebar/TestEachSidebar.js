import React, { useState } from 'react';
import getGwoncha from '../../api/test/getGwoncha';
import getSeoji from '../../api/test/getSeoji';
import useAsync from '../../hooks/useAsync';
import GwonchaTitle from './GwonchaTitle';
import SeojiTitle from './SeojiTitle';

function TestEachSidebar() {
  const [seojiDatas] = useAsync(() => getSeoji(), []);
  const [gwonchaDatas] = useAsync(() => getGwoncha(), []);
  const [gwonchaListData, setGwonchaListData] = useState({
    exist: false,
    data: {},
  });
  console.log(gwonchaListData);
  //   const onClickSeojiTitle = (id, childData) => {
  //     setGwonchaListData((prevGwonchaListData) => ({
  //       ...prevGwonchaListData,
  //       [id].exist: !prevGwonchaListData[id].exist,
  //       [id].data: childData,
  //     }));
  //   };

  if (seojiDatas.data === null || gwonchaDatas.data === null)
    return <div>zz</div>;
  return (
    <>
      {seojiDatas.data.datas.map((seoji) => (
        <>
          <SeojiTitle id={seoji.childId} title={seoji.childTitle} />

          {gwonchaDatas.data.datas.map((seoji) => (
            <GwonchaTitle id={seoji.childId} title={seoji.childTitle} />
          ))}
        </>
      ))}
    </>
  );
}

export default TestEachSidebar;
