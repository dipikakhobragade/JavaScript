

function squareOfWordLength(word){
    var length =word.length;
    var result = length*length;
    return result;


}
var resultValue = squareOfWordLength('Javascript');
console.log(resultValue);

var resultValue = squareOfWordLength('Google Chrome');
console.log(resultValue);



function  string (){

    var givenString = 'I am Angular Developer';
    var lg = givenString.length;
    var wordCount = givenString.split(' ');
    console.log(lg,wordCount);
    var wordCountResult = wordCount.length
    var result = lg/wordCountResult;
    console.log(`Result is ${result}`);
    var mulResult = lg*wordCountResult;
    console.log(`Multiplication is ${mulResult}`);

}
string();

