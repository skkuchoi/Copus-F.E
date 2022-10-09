export default function parseTitle(finalTitle) {
  // 페이지 태그는 1개만 OK
  if (finalTitle.includes('페이지')) {
    //console.log(finalTitle.indexOf("<페이지"));
    let before = finalTitle.substring(0, finalTitle.indexOf('<페'));
    let after = finalTitle
      .substring(finalTitle.indexOf('<페'))
      .substring(
        finalTitle.substring(finalTitle.indexOf('<페')).indexOf('/>') + 2,
      );
    finalTitle = before.concat(after);
  }

  // line은 여러개 OK
  while (finalTitle.includes('line')) {
    finalTitle = finalTitle.replace('<line/>', '');
  }

  // 문자효과 월고집 한정 1개 OK
  if (finalTitle.includes('문자효과')) {
    let before = finalTitle.substring(0, finalTitle.indexOf('<문자'));
    let after =
      ' ' +
      finalTitle
        .substring(finalTitle.indexOf('<문자'))
        .substring(
          finalTitle.substring(finalTitle.indexOf('<문자')).indexOf('/>') + 2,
        );
    finalTitle = before.concat(after);
  }

  //주석은 월고집 한정 1개만 ( 원주 처리 후 잡는게 낫겠다 )
  // 주석은 그냥 삭제하고, 원주 hover시 annotation data를 보여준다.
  if (finalTitle.includes('주석')) {
    const annotationStartEnd = finalTitle
      .substring(finalTitle.indexOf('<주석'))
      .indexOf('>');

    finalTitle = finalTitle.replace(
      finalTitle.substr(finalTitle.indexOf('<주석'), annotationStartEnd + 1),
      '',
    );
    finalTitle = finalTitle.replace('</주석>', '');
  }

  let titleArray = [];
  while (finalTitle.includes('원주')) {
    const wonjuStart = finalTitle.indexOf('<원주>');
    const wonjuEnd = finalTitle.indexOf('</원주>');
    if (finalTitle.substr(wonjuEnd + 5)[0] === '。') {
      console.log('。');
      titleArray.push({
        title: finalTitle.substr(0, wonjuStart),
        wonju: finalTitle
          .substr(wonjuStart + 4, wonjuEnd - (wonjuStart + 4))
          .concat(finalTitle.substr(wonjuEnd + 5)[0]),
      });
      finalTitle = finalTitle.substring(wonjuEnd + 6);
    } else if (finalTitle.substr(wonjuEnd + 5)[0] === '，') {
      titleArray.push({
        title: finalTitle
          .substr(0, wonjuStart)
          .concat(finalTitle.substr(wonjuEnd + 5)[0]),
        wonju: finalTitle.substr(wonjuStart + 4, wonjuEnd - (wonjuStart + 4)),
      });
      finalTitle = finalTitle.substring(wonjuEnd + 6);
    } else {
      titleArray.push({
        title: finalTitle.substr(0, wonjuStart),
        wonju: finalTitle.substr(wonjuStart + 4, wonjuEnd - (wonjuStart + 4)),
      });
      finalTitle = finalTitle.substring(wonjuEnd + 5);
    }
  }

  //원주 파싱이 끝나면 원주가 없는 타이틀은 array 들어가지 못하므로 넣어줌.
  titleArray.push({
    title: finalTitle,
    wonju: '',
  });

  console.log(titleArray);

  return titleArray;
}
