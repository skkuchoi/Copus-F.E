import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Layout from '../../../components/shared/Layout';
import MenuListBlock from './MenuListBlock';

const BlockPositioner = styled.div`
  display: flex;
  flex-direction: row;
  height: 75vh;
`;

const MenuPositioner = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: yellow;
`;

const ContentPositioner = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 30px 30px;
  align-items: center;
`;

function MyAccountBlock() {
  return (
    <Layout>
      <BlockPositioner>
        <MenuPositioner>
          <MenuListBlock />
        </MenuPositioner>

        <ContentPositioner></ContentPositioner>
      </BlockPositioner>
    </Layout>
  );
}

export default MyAccountBlock;
