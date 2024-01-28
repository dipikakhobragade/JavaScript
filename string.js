

var greet = 'Good Morning';
console.log(greet.length);

 var charAtIndex5 = greet.charAt(5);

 console.log(charAtIndex5); 
 console.log(typeof charAtIndex5);

 var str = 'hi  ';
 var str1 ='Riddu';
 var resultStr = str.concat(str1);
 console.log(resultStr);

 var indexOfD = greet.indexOf('d');
 console.log(indexOfD);

 var indexOfMor = greet.indexOf('Mor');
 console.log(indexOfMor);

 console.log(greet.lastIndexOf('o'));

 var myName = 'Dipika Khobragade';

 var result = myName.replace('Khobragade','Bhele');
 console.log(result);

 var city = '  pune  ';
 console.log(city.length);

 var resultTrim = city.trim();
 console.log(resultTrim.length);

 var num = 15;
 var result = num.toString();
 console.log(`Number is ${num},type of ${typeof result}, type of ${typeof num}`);


 var greet = "Good Morning";
 var isAvailable =greet.includes('ing');
 console.log(isAvailable);

 var result = greet.slice(5,8);
console.log(`${result}`);

var word = greet.split(' ');
console.log(word, typeof word, word.length);