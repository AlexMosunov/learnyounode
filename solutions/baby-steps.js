


let result = process.argv.slice(2).reduce((acc, cur) => {
  return acc + Number(cur);
}, 0);
console.log(result);