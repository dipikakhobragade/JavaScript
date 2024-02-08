let array = [11,22,33,44,55,66,77];
// traversing an array using for in loop 'key' means index
for (const index in array) {
    console.log(array[index]);
    
}


let sum = 0;

for (const index in array) {
    console.log(array[index]);
    sum = sum + array[index];
    
}
console.log(`Sum of element ${sum}`);

let sum1 = 0
for (const index in array) {
   if (array[index]%2 == 0) {

    console.log(array[index]);
    sum1 = sum1 + array[index]
   }
  
}
console.log(`even element sum ${sum1}`);

// imp point reversing is not possible using for in loop, traversing for an array only


//using for of loop

for (const element of array) {
    console.log(element);
    
}

console.log(`-------------------------`);
let arr = [1,3,4,6,7,8,9]

 let sum2 = 0
for (const index in arr) {

    if (arr[index]%2==0) {
        console.log(arr[index]);
        sum2 = sum2+arr[index];
        
    }
    

}
console.log(sum2);


const string = 'code';

for (const index in string) {
    console.log(string[index]);
    
}

for (const element of arr) {
    console.log(element);
    
}

console.log(`===========================`);
const string1 = 'I am UI developer';
const vowel = 'aeiou';
let count = 0;
for (const chr of string1) {
    console.log(chr);
    if (vowel.includes(chr.toLowerCase())) {
        count++
        
    }
    
}
console.log(`count is ====${count}`);






