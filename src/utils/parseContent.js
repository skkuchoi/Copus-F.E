export default function parseContent(content, annotation) {
  // 부모태그인 내용 삭제
  if (content.includes('내용')) {
    content = content.replace('<내용>', '');
    content = content.replace('</내용>', '');
  }

  // 공백 모두 삭제
  while (content.includes(' ')) {
    content = content.replace(' ', '');
  }

  // \r 모두 삭제
  while (content.includes('\r')) {
    content = content.replace('\r', '');
  }

  // \n 모두 삭제
  while (content.includes('\n')) {
    content = content.replace('\n', '');
  }

  // 페이지 태그는 1개 이상일수도 있다.
  while (content.includes('페이지')) {
    let before = content.substring(0, content.indexOf('<페'));
    let after = content
      .substring(content.indexOf('<페'))
      .substring(content.substring(content.indexOf('<페')).indexOf('/>') + 2);
    content = before.concat(after);
  }

  // line은 여러개
  while (content.includes('line')) {
    content = content.replace('<line/>', '');
  }
  // 단락 및 단락 제목 매핑 시작!!!!!!
  let paraArray = [];
  let titleArray = [];

  function MappingPara(Splited, IsTitle) {
    // align 시작.
    const align_before = Splited.substring(0, Splited.indexOf('"') + 1);
    let curSplited = Splited.replace(align_before, '');
    const align = curSplited.substring(0, curSplited.indexOf('"')); // indent값 추출
    curSplited = curSplited.replace(
      curSplited.substring(0, curSplited.indexOf('indent')),
      '',
    ); // align 내용 삭제.
    //console.log('curSplited align: ' + curSplited);
    // align 끝

    // indent 시작.
    const indent_before = curSplited.substring(0, curSplited.indexOf('"') + 1);
    curSplited = curSplited.replace(indent_before, '');
    const indent = curSplited.substring(0, curSplited.indexOf('"'));
    curSplited = curSplited.replace(
      curSplited.substring(0, curSplited.indexOf('>') + 1),
      '',
    );
    // indent 끝.

    // paraArray's content 시작
    let paraContent = curSplited.substring(0, curSplited.indexOf('</단락'));

    // paraContent에서 원주 추출
    let curParaContentNWonju = [];
    while (paraContent.includes('<원주>')) {
      const wonjuStart = paraContent.indexOf('<원주>');
      const wonjuEnd = paraContent.indexOf('</원주>');
      if (paraContent.substr(wonjuEnd + 5)[0] === '。') {
        console.log('。');
        titleArray.push({
          title: paraContent.substr(0, wonjuStart),
          wonju: paraContent
            .substr(wonjuStart + 4, wonjuEnd - (wonjuStart + 4))
            .concat(paraContent.substr(wonjuEnd + 5)[0]),
        });
        paraContent = paraContent.substring(wonjuEnd + 6);
      } else if (paraContent.substr(wonjuEnd + 5)[0] === '，') {
        titleArray.push({
          title: paraContent
            .substr(0, wonjuStart)
            .concat(paraContent.substr(wonjuEnd + 5)[0]),
          wonju: paraContent.substr(
            wonjuStart + 4,
            wonjuEnd - (wonjuStart + 4),
          ),
        });
        paraContent = paraContent.substring(wonjuEnd + 6);
      } else {
        titleArray.push({
          title: paraContent.substr(0, wonjuStart),
          wonju: paraContent.substr(
            wonjuStart + 4,
            wonjuEnd - (wonjuStart + 4),
          ),
        });
        paraContent = paraContent.substring(wonjuEnd + 5);
      }
      curParaContentNWonju.push({
        content: titleArray[titleArray.length - 1].title,
        wonju: titleArray[titleArray.length - 1].wonju,
      });
    }
    // paracontent에서 원주 추출 끝
    // paraArray's content 끝

    if (curParaContentNWonju.length === 0) {
      curParaContentNWonju.push({
        content: paraContent,
        wonju: '',
      });
    }
    // paraArray에 담기 시작
    if (IsTitle === 1) {
      paraArray.push({
        indent: indent,
        align: align,
        contents: curParaContentNWonju,
      });
      //console.log(paraArray);
    } else if (IsTitle === 0) {
      paraArray.push({
        indent: indent,
        align: align,
        itle: curParaContentNWonju,
      });
    }

    // paraArray에 담기 끝
    if (curSplited.includes('</단락>')) {
      curSplited = curSplited.replace('</단락>', '');
    } else if (curSplited.includes('</단락제목>')) {
      curSplited = curSplited.replace('</단락제목>', '');
    }
    while (curSplited.includes('<원주>')) {
      curSplited = curSplited.replace('<원주>', '');
      curSplited = curSplited.replace('</원주>', '');
    }
    return curSplited;
  }

  const parseSplited = content.split('<단락');
  let tempcontent = '';
  if (content.includes('단락')) {
    for (const i in parseSplited) {
      const Splited = parseSplited[i];
      if (parseSplited[i] === '') {
        continue;
      } else if (Splited.includes('</단락>')) {
        tempcontent += MappingPara(Splited, 1);
      } else if (Splited.includes('</단락제목>')) {
        tempcontent += MappingPara(Splited, 0);
      }
    }
  }
  console.log('tempcontent값: ' + tempcontent);
  console.log('paraArray: ', paraArray);
  content = tempcontent;

  // 단락 & 단락제목 끝!!!!!!!
  return paraArray;
}
