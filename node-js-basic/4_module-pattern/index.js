// require시 내장 모듈을 사용할 경우 경로를 지정하지 않음.
const Myvar = require('./myvar');   // myvar.js가져옴

const setVar = new Myvar();
console.log(setVar.name);   // my instance