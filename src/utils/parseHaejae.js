export default function parseHaejae(haejae) {
  let parsing = haejae;
  const parsing1 = parsing.replace('<내용>', '');
  const parsing2 = parsing1.replace('<단락 align="left" indent="0">', '');
  const parsing3 = parsing2.replace('</내용>', '');
  const parsing4 = parsing3.replace('</단락>', '');

  return parsing4;
}
