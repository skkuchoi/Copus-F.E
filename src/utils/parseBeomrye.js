export default function parseBeomrye(beomrye) {
  beomrye = beomrye.replace('<내용>', '');
  beomrye = beomrye.replace('</내용>', '');
  const parseArr = beomrye.split('</단락>');
  parseArr.pop();

  const parseArrByBrTag = [];
  for (let i = 0; i < parseArr.length; i++) {
    let tagRemoved1 = parseArr[i].replace('<단락 align="left" indent="0">', '');
    let tagRemoved2 = tagRemoved1.replace('</단락>', '');
    parseArrByBrTag.push(tagRemoved2.split('<br/>'));
  } //변수 네이밍 극혐ㅋㅋ

  return parseArrByBrTag;
}
