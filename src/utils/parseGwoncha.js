export default function parseGwoncha(gwonchaTitle) {
  if (gwonchaTitle.includes('페이지')) {
    const before = gwonchaTitle.substring(0, gwonchaTitle.indexOf('<페'));
    const after = gwonchaTitle
      .substring(gwonchaTitle.indexOf('<페'))
      .substring(
        gwonchaTitle.substring(gwonchaTitle.indexOf('<페')).indexOf('/>') + 2,
      );
    gwonchaTitle = before.concat(after);
  }
  return gwonchaTitle;
}
