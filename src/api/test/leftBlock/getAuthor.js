import axios from 'axios';

function getAuthor(filter, depth, currentId) {
  //console.log('getAuthor:::: ,', filter, depth, currentId);
  const response = axios({
    url: `/category/${filter}/${depth}/${currentId}/`,
    method: 'get',
  });
  const byauthor1 = {
    datas: [
      {
        childId: '강규환',
        childTitle: '강규환(姜奎煥)',
      },
      {
        childId: '강대수',
        childTitle: '강대수(姜大遂)',
      },
      {
        childId: '강명규',
        childTitle: '강명규(姜命奎)',
      },
      {
        childId: '강박',
        childTitle: '강박(姜樸)',
      },
      {
        childId: '강백년',
        childTitle: '강백년(姜栢年)',
      },
      {
        childId: '강규환',
        childTitle: '강규환(姜奎煥)',
      },
      {
        childId: '강대수',
        childTitle: '강대수(姜大遂)',
      },
      {
        childId: '강명규',
        childTitle: '강명규(姜命奎)',
      },
      {
        childId: '강박',
        childTitle: '강박(姜樸)',
      },
      {
        childId: '강백년',
        childTitle: '강백년(姜栢年)',
      },
      {
        childId: '강규환',
        childTitle: '강규환(姜奎煥)',
      },
      {
        childId: '강대수',
        childTitle: '강대수(姜大遂)',
      },
      {
        childId: '강명규',
        childTitle: '강명규(姜命奎)',
      },
      {
        childId: '강박',
        childTitle: '강박(姜樸)',
      },
      {
        childId: '강백년',
        childTitle: '강백년(姜栢年)',
      },
    ],
  };
  const byauthor2 = {
    datas: [
      {
        childId: '나규환',
        childTitle: '나규환(姜奎煥)',
      },
      {
        childId: '나대수',
        childTitle: '나대수(姜大遂)',
      },
      {
        childId: '나명규',
        childTitle: '나명규(姜命奎)',
      },
      {
        childId: '나박',
        childTitle: '나박(姜樸)',
      },
      {
        childId: '나백년',
        childTitle: '나백년(姜栢年)',
      },
      {
        childId: '나규환',
        childTitle: '나규환(姜奎煥)',
      },
      {
        childId: '나대수',
        childTitle: '나대수(姜大遂)',
      },
      {
        childId: '나명규',
        childTitle: '나명규(姜命奎)',
      },
      {
        childId: '나박',
        childTitle: '나박(姜樸)',
      },
      {
        childId: '나백년',
        childTitle: '나백년(姜栢年)',
      },
      {
        childId: '나규환',
        childTitle: '나규환(姜奎煥)',
      },
      {
        childId: '나대수',
        childTitle: '나대수(姜大遂)',
      },
      {
        childId: '나명규',
        childTitle: '나명규(姜命奎)',
      },
      {
        childId: '나박',
        childTitle: '나박(姜樸)',
      },
      {
        childId: '나백년',
        childTitle: '나백년(姜栢年)',
      },
    ],
  };

  const byauthorAll = {
    datas: [
      {
        childId: '강규환',
        childTitle: '강규환(姜奎煥)',
      },
      {
        childId: '강대수',
        childTitle: '강대수(姜大遂)',
      },
      {
        childId: '강명규',
        childTitle: '강명규(姜命奎)',
      },
      {
        childId: '강박',
        childTitle: '강박(姜樸)',
      },
      {
        childId: '강백년',
        childTitle: '강백년(姜栢年)',
      },
      {
        childId: '강규환',
        childTitle: '강규환(姜奎煥)',
      },
      {
        childId: '강대수',
        childTitle: '강대수(姜大遂)',
      },
      {
        childId: '강명규',
        childTitle: '강명규(姜命奎)',
      },
      {
        childId: '강박',
        childTitle: '강박(姜樸)',
      },
      {
        childId: '강백년',
        childTitle: '강백년(姜栢年)',
      },
      {
        childId: '강규환',
        childTitle: '강규환(姜奎煥)',
      },
      {
        childId: '강대수',
        childTitle: '강대수(姜大遂)',
      },
      {
        childId: '강명규',
        childTitle: '강명규(姜命奎)',
      },
      {
        childId: '강박',
        childTitle: '강박(姜樸)',
      },
      {
        childId: '강백년',
        childTitle: '강백년(姜栢年)',
      },
      {
        childId: '나규환',
        childTitle: '나규환(姜奎煥)',
      },
      {
        childId: '나대수',
        childTitle: '나대수(姜大遂)',
      },
      {
        childId: '나명규',
        childTitle: '나명규(姜命奎)',
      },
      {
        childId: '나박',
        childTitle: '나박(姜樸)',
      },
      {
        childId: '나백년',
        childTitle: '나백년(姜栢年)',
      },
      {
        childId: '나규환',
        childTitle: '나규환(姜奎煥)',
      },
      {
        childId: '나대수',
        childTitle: '나대수(姜大遂)',
      },
      {
        childId: '나명규',
        childTitle: '나명규(姜命奎)',
      },
      {
        childId: '나박',
        childTitle: '나박(姜樸)',
      },
      {
        childId: '나백년',
        childTitle: '나백년(姜栢年)',
      },
      {
        childId: '나규환',
        childTitle: '나규환(姜奎煥)',
      },
      {
        childId: '나대수',
        childTitle: '나대수(姜大遂)',
      },
      {
        childId: '나명규',
        childTitle: '나명규(姜命奎)',
      },
      {
        childId: '나박',
        childTitle: '나박(姜樸)',
      },
      {
        childId: '나백년',
        childTitle: '나백년(姜栢年)',
      },
    ],
  };

  if (currentId === 'A') {
    return JSON.parse(JSON.stringify(byauthor1));
  } else if (currentId === 'B') {
    return JSON.parse(JSON.stringify(byauthor2));
  } else if (currentId === 'all') {
    return JSON.parse(JSON.stringify(byauthorAll));
  }
}

export default getAuthor;
