import React from 'react';

const sliceArrayByLimit = (totalContent, limitPage) => {
  const totalPageArray = Array(totalContent)
    .fill()
    .map((_, i) => i);
  return Array(Math.ceil(totalContent / limitPage))
    .fill()
    .map(() => totalPageArray.splice(0, limitPage));
};

export default sliceArrayByLimit;
