export default function parseMunche(muncheTitle) {
  if (muncheTitle !== null) {
    if (muncheTitle.includes('페이지')) {
      const before = muncheTitle.substring(0, muncheTitle.indexOf('<페'));
      const after = muncheTitle
        .substring(muncheTitle.indexOf('<페'))
        .substring(
          muncheTitle.substring(muncheTitle.indexOf('<페')).indexOf('/>') + 2,
        );
      muncheTitle = before.concat(after);
    }
    return muncheTitle;
  }
}
