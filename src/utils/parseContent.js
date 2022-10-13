export default function parseContent(content) {
  if (content !== null) {
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

    // 원주
    while (content.includes('<원주>')) {
      content = content.replace('<원주>', ' ');
    }
    // 원주
    while (content.includes('</원주>')) {
      content = content.replace('</원주>', ' ');
    }

    //단락
    if (content.includes('단락')) {
      if (content.indexOf('</단락') >= 0)
        content = content.substring(29, content.indexOf('</단락'));
      else content = content.substring(29);
    }

    return content;
  }
}
