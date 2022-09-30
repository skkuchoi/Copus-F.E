import React, { createContext, useState } from 'react';

import ContentLayout from '../../../components/shared/ContentLayout';

import Layout from '../../../components/shared/Layout';

export const leftBlockDepth = createContext({
  depth: 0,
  setDepth: () => {},
});

function Consonant() {
  const [leftDepth, setLeftDepth] = useState(0);

  return (
    <leftBlockDepth.Provider
      value={{ depth: leftDepth, setDepth: setLeftDepth }}>
      <Layout>
        <ContentLayout />
      </Layout>
    </leftBlockDepth.Provider>
  );
}

export default Consonant;
