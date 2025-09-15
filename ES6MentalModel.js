function highlight(strings, ...values) {
  return strings[0] + values.map(v => `**${v}**`).join('');
}
const name = 'Alice';
console.log(highlight`Hello ${name}, welcome!`); // Hello **Alice**, welcome!
