import React, { createContext, useEffect, useState } from 'react';
import ContentLayout from '../../components/shared/ContentLayout';
import Layout from '../../components/shared/Layout';

export const authorLeftBlockDepth = createContext({
  depth: 0,
  setDepth: () => {},
});

function MenuExploreAuthor() {
  const [leftDepth, setLeftDepth] = useState(-1);
  useEffect(() => {
    console.log("author's depth가 변경되었음: ", leftDepth);
  }, [leftDepth]);
  return (
    <authorLeftBlockDepth.Provider
      value={{ depth: leftDepth, setDepth: setLeftDepth }}>
      <Layout>
        <ContentLayout filter="author" />
      </Layout>
    </authorLeftBlockDepth.Provider>
  );
}

export default MenuExploreAuthor;
