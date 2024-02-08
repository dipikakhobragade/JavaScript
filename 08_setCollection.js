

const array = [44,22,33,44,55,66,77];
console.log(array);
//set means collection or groups ---for unique collection use set

const setOfRollNum = new Set();
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(33);
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(66);
setOfRollNum.add(77);
console.log(setOfRollNum);
console.log(`size is ${setOfRollNum.size}`);
setOfRollNum.delete(66);
console.log(`delete 66 ${setOfRollNum}`);
console.log(setOfRollNum);

console.log(`is element available`);
console.log(setOfRollNum.has(22));

//traversing set....

for (const element of setOfRollNum) {
    console.log(element);
    
}

///remove duplicate element from array using for loop chk on google

let array1 = [44,22,33,44,22,66,77]
console.log(array1);
//const set = new set (array1)--collect in array
const set = [...new Set(array1)]; 
console.log(set);
