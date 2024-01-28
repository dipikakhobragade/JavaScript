

var isEvenOrOdd = function(num){
    if (num%2==0) {
        return 'Even'
        
    } else {
        return 'Odd'
    }

}
var resultValue = isEvenOrOdd(5);
console.log(resultValue);

var resultValue = isEvenOrOdd(24);
console.log(resultValue);

console.log(`========2nd step================`);

var voteEligibility = function(age){
    
    if (age>=18) {
        console.log(`Eligible for vote`);
        
    } else {
        console.log(`not Eligible`);
    }
}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

console.log('===============step 3==================');

var string = function(str){
    var lng = str.length;
    if (lng>=10) {
        console.log(`string char more than 10 char`);

    } else {
        console.log(`char less than 10`);
    }
}
string('JavaScript-ES6');
string('Java');

console.log(`=========step 4==============`);

var checkString = function(word){

    if (word.startsWith('Java')) {
        console.log(`given word start with 'Java`);
        
    } else {
        console.log(`given word not start with 'Java`);
    }
}
checkString('Javascript Language')