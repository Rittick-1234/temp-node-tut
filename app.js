// console.log(__dirname);
// setInterval(()=>{
//     console.log('Hello World');
// },1000)

//Modules - encapsulate code (only share minimum)
// CommonJs, every file is a module (by default)

const names=require('./1-names');
const sayHi=require('./2-utils');
const data=require('./3-alternative-flavours')

// console.log(data);
// console.log(names);
// require('./4-mind-grenade')

// sayHi('susan');
// sayHi(names.John)
// sayHi(names.Mary);


const _=require('lodash')

const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items);
console.log(newItems);