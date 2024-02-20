


function isPrime(num){
for (let index = 2; index < num; index++) {
   if (num%index == 0) {
    return false;
    
   }

}

return true;
}
let result = isPrime(7);
console.log(`7 is prime num ${result}`);
let result1 = isPrime(4);
console.log(`4 is prime num ${result1}`);
console.log(`11 is prime num ${isPrime(11)}`);
