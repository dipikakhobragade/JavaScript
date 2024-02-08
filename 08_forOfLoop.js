
let array= [11,22,33,44,55,66,77]

for (const element of array) {

    console.log(element);
    
}


let arrayN = [2,3,4,5,6,7,8];
console.log(`======================================`);

let sum = 0;
for (const element of arrayN) {
    console.log(element);
    sum = sum+element;
    
}
console.log(`sum of element ${sum} `);

console.log(`==================vowel count===============`);

const str = 'Developer UI and Backend';
const vowels = 'aeiou';
let count = 0;
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
        count++;
        
    }
    
}
console.log(`vowels count is ===${count}`);



let arrayOfFriends = ['Jenny','Elon','Bill'];
const result = arrayOfFriends.join(',')
console.log(result);
console.log(typeof result);
arrayOfFriends.reverse();
console.log(arrayOfFriends);



const word = 'Developer UI and Backend';
let arrayOfWords = word.split(' ');
console.log(arrayOfWords.length);

// let splitWord = word.split('');
// let reverseArray = splitWord.reverse();
// console.log(reverseArray.join(''));
let reverseStr = word.split('').reverse().join('');
console.log(reverseStr);



const string = 'Developer UI and Backend Angular';
let resultStr = string.split(' ');
console.log(resultStr);
console.log(`===============`);
let arrayChar = string.split('').reverse()
console.log(arrayChar);
let resultArray = arrayChar.join('');
console.log(resultArray);



