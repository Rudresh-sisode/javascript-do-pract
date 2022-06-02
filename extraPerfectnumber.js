const extraPerfect = n => [...Array(n + 1).keys()].filter(cur => cur % 2);
console.log(extraPerfect(28))