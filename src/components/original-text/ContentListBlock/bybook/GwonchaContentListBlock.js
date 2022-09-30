import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import '../../../shared/linkStyle.css';
import OtherListTableBlock from '../OtherListTableBlock';
import useAsync from '../../../../hooks/useAsync';
import getRightGwoncha from '../../../../api/test/rightBlock/bybook/getRightGwoncha';
import { seojiContext } from '../../../shared/ContentLayout';

const TableItem = styled.p`
  font-size: 15px;
  margin: 0;
`;

function GwonchaContentListBlock() {
  const clickSeojiContext = useContext(seojiContext);
  const [gwonchaJsonDatas] = useAsync(
    () => getRightGwoncha(clickSeojiContext),
    [clickSeojiContext.clickSeoji],
  );

  console.log('right block : gwonchaJsonDatas: ', gwonchaJsonDatas);
  if (gwonchaJsonDatas.data === null || gwonchaJsonDatas.data === undefined)
    return <div>zz</div>;
  return (
    <>
      {gwonchaJsonDatas.data.datas.map((gwoncha) => (
        <>
          <OtherListTableBlock
            icon="gwoncha"
            key={gwoncha.gwonchaId}
            clickId={gwoncha.gwonchaId}>
            <TableItem>{gwoncha.gwonchaTitle}</TableItem>
          </OtherListTableBlock>

          {gwoncha.munches.map((item) => (
            <OtherListTableBlock
              marginLeft="39px"
              icon="munche"
              key={item.muncheId}
              clickId={item.muncheId}
              parentId={gwoncha.gwonchaId}>
              <TableItem>{item.muncheTitle}</TableItem>
            </OtherListTableBlock>
          ))}
        </>
      ))}
    </>
  );
}

export default GwonchaContentListBlock;
