function formatString(string, maxLength = 40) {
  const stringLength = string.split('');

  if (stringLength.length <= maxLength) {
    return string;
  } else if (stringLength.length > maxLength) {
    return (string = `${string.slice(0, maxLength)}...`);
  }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'

console.log(
  formatString(
    'Nunc sed turpis.Curabitur a felis in nunc fringilla tristique.',
  ),
);
