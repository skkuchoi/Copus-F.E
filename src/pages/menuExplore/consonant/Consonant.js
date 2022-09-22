import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ContentLayout from '../../../components/shared/ContentLayout';
import BookTableRowBlock from '../../../components/original-text/ContentListBlock/BookTableRowBlock';
import BookContentListBlock from '../../../components/original-text/ContentListBlock/bybook/BookContentListBlock';

import useAsync from '../../../hooks/useAsync';
import getBookList from '../../../api/Explore/bybook/getBookList';
import Layout from '../../../components/shared/Layout';
import ContentListTitleBlock from '../../../components/original-text/ContentListBlock/ContentListTitleBlock';
import {
  selectedConsonant,
  selectedFilter,
} from '../../../components/original-text/SortBlock/SortBlock';
import getRightDepth1List from '../../../api/explore1/sidebar/right/getRightDepth1List';

function Consonant() {
  const consonant = useContext(selectedConsonant);
  const filter = useContext(selectedFilter);

  // send Get API
  const [seojiListData] = useAsync(
    () => getRightDepth1List( filter, consonant),
    [filter, consonant],
  );
  return (
    <Layout>
      <ContentLayout depth={1}>
        <ContentListTitleBlock title={1}>
          <BookTableRowBlock />
          <BookContentListBlock />
        </ContentListTitleBlock>
      </ContentLayout>
    </Layout>
  );
}

export default Consonant;
