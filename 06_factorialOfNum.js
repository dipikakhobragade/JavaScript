let num = 4;
let result = 1;
for (let index = 1; index <= num; index++) {
    result = result*index;
    
}
console.log(result);

let factorial = function(num){
    if (num == 0 || num==1) {
        return 1;
        
    }
    if (num<0) {
        return `Invalid input`
        
    }
    let result = 1;
    for (let index = 1; index <= num; index++) {
        result = result*index;
        
    }
    return result;
}

let resultVal = factorial(5);
console.log(resultVal);