import React, { useContext } from 'react';
import styled from 'styled-components';
import '../../../shared/linkStyle.css';
import OtherListTableBlock from '../OtherListTableBlock';

import useAsync from '../../../../hooks/useAsync';
import getRightMunche from '../../../../api/explore/rightblock/getRightMunche';

import { gwonchaContext } from '../../../shared/ContentLayout';
import parseGwoncha from '../../../../utils/parseGwoncha';
import parseMunche from '../../../../utils/parseMunche';

const TableItem = styled.p`
  font-size: 15px;
  margin: 0;
`;

function MuncheContentListBlock() {
  let numbering = 1;
  const clickGwonchaContext = useContext(gwonchaContext);
  const [muncheJsonDatas] = useAsync(
    () => getRightMunche(clickGwonchaContext),
    [clickGwonchaContext],
  );

  if (muncheJsonDatas.data === null || muncheJsonDatas.data === undefined)
    return <div>로딩</div>;
  return (
    <>
      {muncheJsonDatas.data.datas.map((item) => (
        <>
          <OtherListTableBlock
            icon="gwoncha"
            key={item.gwonchaId}
            clickId={item.gwonchaId}
            currentTitle={parseGwoncha(item.gwonchaTitle)}>
            <TableItem>{parseGwoncha(item.gwonchaTitle)}</TableItem>
          </OtherListTableBlock>

          {item.munches.map((item) => (
            <OtherListTableBlock
              marginLeft="39px"
              icon="munche"
              numbering={numbering++}
              key={item.muncheId}
              clickId={item.muncheId}
              currentTitle={parseMunche(item.muncheTitle)}>
              <TableItem>{parseMunche(item.muncheTitle)}</TableItem>
            </OtherListTableBlock>
          ))}
        </>
      ))}
    </>
  );
}

export default MuncheContentListBlock;
