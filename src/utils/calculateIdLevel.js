export default function calculateIdLevel(id) {
  const splitByUnderbar = id.split('_');
  return splitByUnderbar.length;
}
