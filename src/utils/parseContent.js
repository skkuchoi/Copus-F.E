function MappingPara(Splited, IsTitle) {
  let paraArray = [];

  // indent 시작.
  const indent_before = Splited.substring(0, Splited.indexOf('"') + 1);
  let curSplited = Splited.replace(indent_before, '');
  const indent = curSplited.substring(0, curSplited.indexOf('"')); // indent값 추출
  curSplited = curSplited.replace(
    curSplited.substring(0, curSplited.indexOf(' ')),
    '',
  ); // indent관련 내용 삭제.
  // indent 끝

  // align 시작.
  const align_before = curSplited.substring(0, curSplited.indexOf('"') + 1);
  curSplited = curSplited.replace(align_before, '');
  const align = curSplited.substring(0, curSplited.indexOf('"'));
  curSplited = curSplited.replace(
    curSplited.substring(0, curSplited.indexOf('>') + 1),
    '',
  );
  // align 끝.

  // paraArray's content 시작
  const paraContent = curSplited.substring(0, curSplited.indexOf('</단락'));

  // paraArray's content 끝

  // paraArray에 담기 시작
  if (IsTitle === 1) {
    paraArray.push({
      indent: indent,
      align: align,
      content: paraContent,
    });
    // console.log(paraArray);
  } else if (IsTitle === 0) {
    paraArray.push({
      indent: indent,
      align: align,
      title: paraContent,
    });
  }

  // paraArray에 담기 끝
  if (curSplited.includes('</단락>')) {
    curSplited = curSplited.replace('</단락>', '');
  } else if (curSplited.includes('</단락제목>')) {
    curSplited = curSplited.replace('</단락제목>', '');
  }
  console.log(curSplited);
  return curSplited;
}

export default function parseContent(content) {
  // 부모태그인 내용 삭제
  if (content.includes('내용')) {
    content = content.replace('<내용>', '');
    content = content.replace('</내용>', '');
  }

  // 공백 모두 삭제
  while (content.includes(' ')) {
    content = content.replace(' ', '');
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
  content = tempcontent;
  console.log(content);
  return content;
}
