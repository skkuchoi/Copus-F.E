export default function parseChapter(chapterzz) {
  let parsing = chapterzz; // 여따가 목차 1326줄? 넣어주세요:)

  const parsing1 = parsing.replace('<목차정보>', '');
  const parsing2 = parsing1.replace('</목차정보>', '');
  const parsing3 = parsing2.split('<목차>').join('');
  const parsing4 = parsing3.split('</목차>').join('');
  const parsing5 = parsing4.split('\n').join('');
  const parsing6 = parsing5.split(' ').join('');
  let parseArr = parsing6.split('</목차제목>'); //잔잔바리들 적출

  parseArr.shift(); //젤 앞에 OPT 태그 붙은 目錄 떼어버렸습니다.

  //sequence
  let gwonchaCount = 0;
  let muncheCount = 0;
  let finalCount = 0;

  //메인 객체
  let chapter = { gwoncha: [] };

  //한줄씩 순회하면서 레벨별 객체 생성
  for (let i = 0; i < parseArr.length; i++) {
    let elem = parseArr[i];
    const parsedPage = elem.substr(elem.indexOf('페') + 5, 9);
    let parsedContent = elem.substr(elem.indexOf('>') + 1);

    /*
    lv4 최종정보&원주:
    최종정보와 원주의 경우 별도의 배열로 구성하지 않고
    ['최종정보']
    ['최종정보*원주']
    ['최종정보*원주','최종정보']
    ['최종정보*원주','최종정보*원주']
    
    위와 같은 형태의 배열로 저장하였음 => '*'으로 split 해서 사용해야함!
    */
    if (elem.includes('type="TITLE"')) {
      let finalparse1 = parsedContent.split('<원주>').join('*');
      let finalparse2 = finalparse1.split('</원주>').join('&');
      let finalparseArr = finalparse2.split('&');
      const finalInfoArr = finalparseArr.filter(Boolean);
      let final = {
        final_id: finalCount + 1,
        final_content: finalInfoArr,
        final_page: parsedPage,
      };
      finalCount += 1;
      chapter.gwoncha[gwonchaCount].munche[muncheCount].final[finalCount] =
        final;

      //lv3 문체
    } else if (elem.includes('type="OPT"')) {
      let munche = {
        munche_id: muncheCount + 1,
        munche_content: parsedContent,
        munche_page: parsedPage,
        final: [],
      };
      muncheCount += 1;
      finalCount = 0; //최종정보 아이디 초기화
      chapter.gwoncha[gwonchaCount].munche[muncheCount] = munche;

      //lv2 권차
    } else if (elem.includes('type="VOLUMETITLE"')) {
      let gwoncha = {
        gwoncha_id: gwonchaCount + 1,
        gwoncha_content: parsedContent,
        gwoncha_page: parsedPage,
        munche: [],
      };
      gwonchaCount += 1;
      muncheCount = 0; //문체, 최종정보 아이디 초기화
      finalCount = 0;
      chapter.gwoncha[gwonchaCount] = gwoncha;
    }
  }
  console.log(chapter);
}
