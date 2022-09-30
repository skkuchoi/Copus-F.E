import React, { createContext, useEffect, useState } from 'react';
import ContentLayout from '../../components/shared/ContentLayout';
import Layout from '../../components/shared/Layout';

export const leftBlockDepth = createContext({
  depth: 0,
  setDepth: () => {},
});

function MenuExploreBook({ filter }) {
  const [leftDepth, setLeftDepth] = useState(filter === 'book' ? 0 : -1);
  // useEffect(() => {
  //   console.log('book\'s depth가 변경되었음: ', leftDepth);
  // }, [leftDepth]);
  return (
    <leftBlockDepth.Provider
      value={{ depth: leftDepth, setDepth: setLeftDepth }}>
      <Layout>
        <ContentLayout filter={filter} />
      </Layout>
    </leftBlockDepth.Provider>
  );
}

export default MenuExploreBook;
