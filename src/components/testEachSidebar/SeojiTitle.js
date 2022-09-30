import React, { memo, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import getGwoncha from '../../api/test/getGwoncha';
import getMunche from '../../api/test/getMunche';
import useAsync from '../../hooks/useAsync';

const Li = styled.li`
  font-size: 15px;
  cursor: pointer;
`;

const GwonchaLi = styled.li`
  font-size: 15px;
  text-indent: 15px;
  cursor: pointer;
`;

const MuncheLi = styled.li`
  font-size: 15px;
  text-indent: 30px;
`;

function SeojiTitle({ id, title }) {
  // 권차
  const [clickSeojiTitle, setClickSeojiTitle] = useState('');
  const [depth, setDepth] = useState(0);
  const [currentId, setCurrentId] = useState(id);
  const gwonchaDatas = useMemo(() => {
    getGwoncha(depth, currentId);
  }, [clickSeojiTitle]);

  const onClickSeojiTitle = (e) => {
    setClickSeojiTitle(e.target.innerHTML);
  };

  console.log(gwonchaDatas);
  return (
    <>
      <Li onClick={onClickSeojiTitle}>{title}</Li>
      {gwonchaDatas !== null && (
        <>
          {gwonchaDatas.datas.map((gwoncha) => (
            <>
              {gwoncha.childId.includes(id) && (
                <>
                  <GwonchaLi>{gwoncha.childId}</GwonchaLi>
                </>
              )}
            </>
          ))}
        </>
      )}
    </>
  );
}

// props인 title이 바뀌지 않는 한 재렌더링 되지 않는다.
export default memo(SeojiTitle);
