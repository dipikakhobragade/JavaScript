

const arrayNum = [2,4,6,8]
console.log(arrayNum);
console.log(`total element in array is ${arrayNum.length}`);
console.log(`Array  type is ${typeof arrayNum}`);

console.log(`========read or access value=====`);

const elementIndex2 = arrayNum[2];
console.log(`index 2 element is ${elementIndex2}`);



// read one by one or traversing

for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element);
    
}

//sum of array 
let sum = 0;

for (let index = 0; index < arrayNum.length; index++) {
    
    sum = sum + arrayNum[index]
}
console.log(`sum of array ${sum}`);



// find index of an element

const indexOf6 = arrayNum.indexOf(6);
console.log(`index of 6th element ${indexOf6}`);

const indexOf10 = arrayNum.indexOf(10);
console.log(`index of 10th element ${indexOf10}`);



let array = ['Jenny', 'Menny', 'Bill'];
//adding element at the end

array.push('Dippi');
console.log(array);

//adding element at the beginning

array.unshift('Narayan');
console.log(array);


//remove 1st element
let arrayNumber = [11,22,33,44,55];
arrayNumber.shift();
console.log(arrayNumber);

//remove last element

arrayNumber.pop();
console.log(arrayNumber);


console.log(`====selecting multiple elements=====`);

let arrayNums = [11,22,33,44,55,66,77];
let element = arrayNums.slice(2);
console.log(element);
const elementsMiddle = arrayNums.slice(1,5);
console.log(elementsMiddle);

console.log(`===removing or deleting elements=======`);
const removeElements = arrayNums.splice(3);
console.log(`removeElements ${removeElements}`);
console.log(`original array ${arrayNums}`);


console.log(`===removing or deleting elements using start index and count=======`);
let arrayNu = [11,22,33,44,55,66,77];
const removed = arrayNu.splice(2,3);
console.log(`Deleted element ${removed}`);
console.log(`Original array ${arrayNu}`);

let arrayNu1 = [11,22,33,44,55,66,77];
const remove1 = arrayNu1.splice(3,1)
console.log(remove1);

console.log(`=========insert an elements in the middle========`);
let arrayN = [11,22,33,44,55,66,77];
 arrayN.splice(3,0,99)
console.log(arrayN);

//replacing an element in the middle
let arrayN2 = [11,22,33,44,55,66,77];
console.log(arrayN2);
arrayN2.splice(2,1,100);
console.log(arrayN2);

arrayN2.splice(4,2,78,90);
console.log(arrayN2);




              