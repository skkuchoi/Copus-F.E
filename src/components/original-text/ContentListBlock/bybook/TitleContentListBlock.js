import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import OtherListTableBlock from '../OtherListTableBlock';
import useAsync from '../../../../hooks/useAsync';
import getRightFinal from '../../../../api/test/rightBlock/bybook/getRightFinal';
import { muncheContext } from '../../../shared/ContentLayout';

const TableItem = styled.p`
  font-size: 15px;
  margin: 0;
`;

function TitleContentListBlock() {
  let numbering = 1;

  const clickMuncheContext = useContext(muncheContext);
  const [finalJsonDatas] = useAsync(
    () => getRightFinal(clickMuncheContext),
    [clickMuncheContext],
  );

  console.log(finalJsonDatas);
  if (finalJsonDatas.data === null || finalJsonDatas.data === undefined)
    return <div>zz</div>;
  return (
    <>
      <OtherListTableBlock
        icon="gwoncha"
        key={finalJsonDatas.data.gwonchaId}
        clickId={finalJsonDatas.data.gwonchaId}
        currentTitle={finalJsonDatas.data.gwonchaTitle}>
        <TableItem>{finalJsonDatas.data.gwonchaTitle}</TableItem>
      </OtherListTableBlock>

      <OtherListTableBlock
        marginLeft="39px"
        icon="munche"
        key={finalJsonDatas.data.muncheId}
        clickId={finalJsonDatas.data.muncheId}
        currentTitle={finalJsonDatas.data.muncheTitle}>
        <TableItem>{finalJsonDatas.data.muncheTitle}</TableItem>
      </OtherListTableBlock>

      {finalJsonDatas.data.finals.map((item) => (
        <OtherListTableBlock
          marginLeft="65px"
          icon="final"
          numbering={numbering++}
          key={item.finalId}
          clickId={item.finalId}
          currentTitle={item.finalTitle}>
          <TableItem>{item.finalTitle}</TableItem>
        </OtherListTableBlock>
      ))}
    </>
  );
}

export default TitleContentListBlock;
