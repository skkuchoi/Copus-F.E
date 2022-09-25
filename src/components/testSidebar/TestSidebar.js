import React, { useEffect, useState } from 'react';

function TestSidebar({ requestId }) {
  const test2Datas = {
    seoji: [
      {
        childId: '가암유고1',
        childTitle: '가암유고1',
      },
      {
        childId: '가암유고2',
        childTitle: '가암유고2',
      },
      {
        childId: '가암유고3',
        childTitle: '가암유고3',
      },
      {
        childId: '가암유고4',
        childTitle: '가암유고4',
      },
      {
        childId: '가암유고5',
        childTitle: '가암유고5',
      },
    ],
    gwoncha: [
      {
        parentId: '가암유고1',
        children: [
          { childId: '가암유고1-권차1', childTitle: '가암유고1-권차1' },
          { childId: '가암유고1-권차2', childTitle: '가암유고1-권차2' },
        ],
      },
      {
        parentId: '가암유고2',
        children: [
          { childId: '가암유고2-권차1', childTitle: '가암유고2-권차1' },
          { childId: '가암유고2-권차2', childTitle: '가암유고2-권차2' },
        ],
      },
      {
        parentId: '가암유고3',
        children: [
          { childId: '가암유고3-권차1', childTitle: '가암유고3-권차1' },
          { childId: '가암유고3-권차2', childTitle: '가암유고3-권차2' },
        ],
      },
      {
        parentId: '가암유고4',
        children: [
          { childId: '가암유고4-권차1', childTitle: '가암유고4-권차1' },
          { childId: '가암유고4-권차2', childTitle: '가암유고4-권차2' },
        ],
      },
      {
        parentId: '가암유고5',
        children: [
          { childId: '가암유고5-권차1', childTitle: '가암유고5-권차1' },
          { childId: '가암유고5-권차2', childTitle: '가암유고5-권차2' },
        ],
      },
    ],
    munche: [
      {
        parentId: '가암유고1-권차1',
        children: [
          {
            childId: '가암유고1-권차1-문체1',
            childTitle: '가암유고1-권차1-문체1',
          },
          {
            childId: '가암유고1-권차1-문체2',
            childTitle: '가암유고1-권차1-문체2',
          },
        ],
      },
      {
        parentId: '가암유고1-권차2',
        children: [
          {
            childId: '가암유고1-권차2-문체1',
            childTitle: '가암유고1-권차2-문체1',
          },
          {
            childId: '가암유고1-권차2-문체2',
            childTitle: '가암유고1-권차2-문체2',
          },
        ],
      },
      {
        parentId: '가암유고2-권차1',
        children: [
          {
            childId: '가암유고2-권차1-문체1',
            childTitle: '가암유고2-권차1-문체1',
          },
          {
            childId: '가암유고2-권차1-문체2',
            childTitle: '가암유고2-권차1-문체2',
          },
        ],
      },
      {
        parentId: '가암유고2-권차2',
        children: [
          {
            childId: '가암유고2-권차2-문체1',
            childTitle: '가암유고2-권차2-문체1',
          },
          {
            childId: '가암유고2-권차2-문체2',
            childTitle: '가암유고2-권차2-문체2',
          },
        ],
      },
    ],
  };
  const allDatas = {
    seoji: [
      {
        childId: '가암유고1',
        childTitle: '가암유고1',
      },
      {
        childId: '가암유고2',
        childTitle: '가암유고2',
      },
      {
        childId: '가암유고3',
        childTitle: '가암유고3',
      },
      {
        childId: '가암유고4',
        childTitle: '가암유고4',
      },
      {
        childId: '가암유고5',
        childTitle: '가암유고5',
      },
      {
        childId: '가암유고6',
        childTitle: '가암유고6',
      },
      {
        childId: '가암유고7',
        childTitle: '가암유고7',
      },
      {
        childId: '가암유고8',
        childTitle: '가암유고8',
      },
      {
        childId: '가암유고9',
        childTitle: '가암유고9',
      },
      {
        childId: '가암유고10',
        childTitle: '가암유고10',
      },
      {
        childId: '가암유고11',
        childTitle: '가암유고11',
      },
      {
        childId: '가암유고12',
        childTitle: '가암유고12',
      },
      {
        childId: '가암유고13',
        childTitle: '가암유고13',
      },
      {
        childId: '가암유고14',
        childTitle: '가암유고14',
      },
      {
        childId: '가암유고15',
        childTitle: '가암유고15',
      },
      {
        childId: '가암유고16',
        childTitle: '가암유고16',
      },
      {
        childId: '가암유고17',
        childTitle: '가암유고17',
      },
      {
        childId: '가암유고18',
        childTitle: '가암유고18',
      },
      {
        childId: '가암유고19',
        childTitle: '가암유고19',
      },
      {
        childId: '가암유고20',
        childTitle: '가암유고20',
      },
      {
        childId: '가암유고21',
        childTitle: '가암유고21',
      },
    ],
    gwoncha: [
      {
        parentId: '가암유고1',
        children: [
          { childId: '가암유고1-권차1', childTitle: '가암유고1-권차1' },
          { childId: '가암유고1-권차2', childTitle: '가암유고1-권차2' },
        ],
      },
      {
        parentId: '가암유고2',
        childId: '가암유고2-권차1',
        childTitle: '가암유고2-권차1',
      },
      {
        parentId: '가암유고3',
        childId: '가암유고3',
        childTitle: '가암유고3',
      },
      {
        parentId: '가암유고4',
        childId: '가암유고4',
        childTitle: '가암유고4',
      },
      {
        parentId: '가암유고5',
        childId: '가암유고5',
        childTitle: '가암유고5',
      },
      {
        parentId: '가암유고6',
        childId: '가암유고6',
        childTitle: '가암유고6',
      },
      {
        parentId: '가암유고7',
        childId: '가암유고7',
        childTitle: '가암유고7',
      },
      {
        parentId: '가암유고8',
        childId: '가암유고8',
        childTitle: '가암유고8',
      },
      {
        childId: '가암유고9',
        childTitle: '가암유고9',
      },
      {
        childId: '가암유고10',
        childTitle: '가암유고10',
      },
      {
        childId: '가암유고11',
        childTitle: '가암유고11',
      },
      {
        childId: '가암유고12',
        childTitle: '가암유고12',
      },
      {
        childId: '가암유고13',
        childTitle: '가암유고13',
      },
      {
        childId: '가암유고14',
        childTitle: '가암유고14',
      },
      {
        childId: '가암유고15',
        childTitle: '가암유고15',
      },
      {
        childId: '가암유고16',
        childTitle: '가암유고16',
      },
      {
        childId: '가암유고17',
        childTitle: '가암유고17',
      },
      {
        childId: '가암유고18',
        childTitle: '가암유고18',
      },
      {
        childId: '가암유고19',
        childTitle: '가암유고19',
      },
      {
        childId: '가암유고20',
        childTitle: '가암유고20',
      },
      {
        childId: '가암유고21',
        childTitle: '가암유고21',
      },
    ],
  };

  const [gwonchaListData, setGwonchaListData] = useState({});
  const onClickSeojiTitle = (id) => {
    setGwonchaListData((prevGwonchaListData) => ({
      ...prevGwonchaListData,
      [id]: !prevGwonchaListData[id],
    }));
  };

  const [muncheListData, setMuncheListData] = useState({});
  const onClickGwonchaTitle = (id) => {
    setMuncheListData((prevMuncheListData) => ({
      ...prevMuncheListData,
      [id]: !prevMuncheListData[id],
    }));
  };

  useEffect(() => {
    onClickSeojiTitle(requestId.substr(0, 5));
    onClickGwonchaTitle(requestId.substr(0, 9));
  }, []);

  return (
    <>
      {test2Datas.seoji.map((seoji) => (
        <>
          <li
            style={{ cursor: 'pointer' }}
            onClick={() => onClickSeojiTitle(seoji.childId)}>
            {seoji.childTitle}
          </li>
          {test2Datas.gwoncha.map((gwoncha) => (
            <>
              {seoji.childId === gwoncha.parentId &&
                gwonchaListData[seoji.childId] &&
                gwoncha.children.map((child) => (
                  <>
                    <li
                      style={{ textIndent: '15px', cursor: 'pointer' }}
                      onClick={() => onClickGwonchaTitle(child.childId)}>
                      {child.childTitle}
                    </li>
                    {test2Datas.munche.map((munche) => (
                      <>
                        {child.childId === munche.parentId &&
                          muncheListData[child.childId] &&
                          munche.children.map((child) => (
                            <li
                              style={{ textIndent: '30px', cursor: 'pointer' }}>
                              {child.childTitle}
                            </li>
                          ))}
                      </>
                    ))}
                  </>
                ))}
            </>
          ))}
        </>
      ))}
    </>
  );
}

export default TestSidebar;
