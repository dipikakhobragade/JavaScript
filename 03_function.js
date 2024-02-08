

function square(num){
    console.log('given value is', num);
    var result = num*num;
    console.log('result is', result);

}

square(5);
square(11);


function mul(num1, num2){
    console.log('given numbers are', num1, num2);
    var result = num1*num2;
    return result;

}
var returnValue = mul(20, 20);
console.log(returnValue);

var returnValue = mul(20,24);
console.log(returnValue);

function swap(n1, n2) {
    console.log('before swap', n1 , n2);
    var temp = n1;
    n1= n2;
    n2= temp;
    console.log('after swap', n1, n2);
    
}
swap(1000,2000);
swap('Dipu', 'Riddu')