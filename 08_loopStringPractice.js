
///sum of number 1 to 10

let sum = 0;
for (let index = 40; index <= 50; index++) {
    
    sum = sum + index;
   
    
}

console.log(sum);


//mul from 1 to 5

let mul = 1;
for (let index = 1; index <=5; index++) {

    mul = mul*index;
    
}
console.log(mul);


// for string print
let str = 'I am good UI Developer';

let char = '';
for (let index = 0; index <= str.length; index++) {
   
    char = char + str.charAt(index);
    
}
console.log(char);

let str1 = 'I am good UI Developer';

let ch = '';
for (let index = str1.length-1; index>= 0; index--) {
    
    ch = ch+str1.charAt(index)
    
}
console.log(ch);


let str2 = 'I am good UI Developer';
let vowel = 0;
for (let index = 0; index <= str2.length; index++) {
      let chr =  str2.charAt(index).toLowerCase();
     

      if (chr == 'a'|| chr =='e'||chr =='i'||chr=='o'||chr=='u') {

        vowel = vowel+1;
        
      }

     
    
}
console.log(vowel);



