export default function parseAuthor(authorName) {
  if (authorName.includes('(')) {
    return authorName.substring(0, authorName.indexOf('('));
  }
  return authorName;
}
