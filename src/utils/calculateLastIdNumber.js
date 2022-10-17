export default function calculateLastIdNumber(id) {
  if (id !== null) {
    const splitByUnderbar = id.split('_');
    return Number(splitByUnderbar.pop());
  }
  return 0;
}
