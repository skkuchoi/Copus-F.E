import React, { useContext } from 'react';
import styled from 'styled-components';
import OtherListTableBlock from '../OtherListTableBlock';

import useAsync from '../../../../hooks/useAsync';
import getRightFinal from '../../../../api/explore/rightblock/getRightFinal';

import { muncheContext } from '../../../shared/ContentLayout';

import parseGwoncha from '../../../../utils/parseGwoncha';
import parseMunche from '../../../../utils/parseMunche';
import parseTitle from '../../../../utils/parseTitle';
import Loading from '../../../shared/Loading';
import { useNavigate } from 'react-router-dom';

const TableItem = styled.p`
  font-size: 15px;
  margin: 0;
`;

const FinalTitle = styled.span`
  font-size: 15px;
  margin: 0;
`;
const FinalWonju = styled.span`
  font-size: 12px;
  margin: 0;
`;

function TitleContentListBlock() {
  let numbering = 1;

  const clickMuncheContext = useContext(muncheContext);
  const [finalJsonDatas] = useAsync(
    () => getRightFinal(clickMuncheContext),
    [clickMuncheContext],
  );
  const navigate = useNavigate();
  if (finalJsonDatas.error) navigate('/server-error');
  if (
    finalJsonDatas.data === null ||
    finalJsonDatas.data === undefined ||
    finalJsonDatas.data.datas === null ||
    finalJsonDatas.data.datas === undefined
  )
    return <Loading />;

  return (
    <>
      <OtherListTableBlock
        icon="gwoncha"
        key={finalJsonDatas.data.gwonchaId}
        clickId={finalJsonDatas.data.gwonchaId}
        currentTitle={finalJsonDatas.data.gwonchaId}>
        <TableItem>{parseGwoncha(finalJsonDatas.data.gwonchaTitle)}</TableItem>
      </OtherListTableBlock>

      <OtherListTableBlock
        marginLeft="39px"
        icon="munche"
        key={finalJsonDatas.data.muncheId}
        clickId={finalJsonDatas.data.muncheId}
        currentTitle={finalJsonDatas.data.muncheId}>
        <TableItem>{parseMunche(finalJsonDatas.data.muncheTitle)}</TableItem>
      </OtherListTableBlock>

      {finalJsonDatas.data.datas.map((item) => (
        <OtherListTableBlock
          marginLeft="65px"
          icon="final"
          numbering={numbering++}
          key={item.finalId}
          clickId={item.finalId}
          currentTitle={item.finalId}>
          <TableItem>
            {parseTitle(item.finalTitle).map((el) => (
              <FinalTitle>
                &nbsp; {el.title}&nbsp;<FinalWonju>{el.wonju}</FinalWonju>
              </FinalTitle>
            ))}
          </TableItem>
        </OtherListTableBlock>
      ))}
    </>
  );
}

export default TitleContentListBlock;
