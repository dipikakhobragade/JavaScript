const array = [2,3,4,[5,6]];
console.log(array);
const newArray = array.flat();
console.log(newArray);


const aa = [2,[3,4,[50,4],[4,5,[9,4]]]];
 const bb = aa.flat();
 console.log(bb);
 console.log(`=====with custom logig that is depth= 2=====`);

 const cc= aa.flat(3);
 console.log(cc);


 //ass === flatMap()