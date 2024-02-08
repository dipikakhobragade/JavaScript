





console.log('=== Reading string char by char====');

let str = "Developer";

for (let index = 0; index < str.length; index++) {

    console.log(str.charAt(index)); 

}

 

let word = "Developer";

let result = "";

for (let index = word.length-1; index >=0; index--) {

     result = result + word.charAt(index); 

     // or we can write result = result.concat(word.charAt(index));

}

console.log(`Reverse string is: ${result}`);



///vowels

let s1 = 'Developer UI';
let vowelCount =0;
for (let index = 0; index < s1.length; index++) {
   let chr = s1.charAt(index).toLowerCase();
   if (chr == 'a' || chr == 'e' || chr == 'i'|| chr== 'o' || chr =='u') {
    vowelCount = vowelCount+1;
    
   }
    
}

console.log(`vowel count is ${vowelCount}`);