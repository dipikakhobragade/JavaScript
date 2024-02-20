

const developer = {

     firstName : 'Ridvika',
     age: 37,
     isMarried: true
}

console.log(developer);

developer.age = 34;
console.log(developer);

//not allowed
// developer ={

//}
console.log(`=============object freezing============`);
Object.freeze(developer);
developer.isMarried = false;
developer.firstName = 'Dipika'
console.log(developer);

// const array
const array = [2,3,4,5];
array.push(7)
array[0]= 25
console.log(array);
//array = [99,77,99]   not allowed

//freezing an array
Object.freeze(array);
array[1] = 56;
console.log(array);

const developer1 = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

 

const newDeveloper = Object.assign({}, developer1)

newDeveloper.firstName = "Jenny";

console.log(newDeveloper);

console.log(developer1);

 

console.log(`====== Object merge ===========`);

const user = {

    name: "Bill",

    designation: "CEO"

}

const address = {

    city: "LA",

    country: "USA",

    pin: 112233

}

 

const mergeObj = Object.assign({}, user, address );

console.log(user);

console.log(address);

console.log(mergeObj);

console.log(`----------------practice ---------------`);

const dev = {

    firstName : 'Ridvika',
    age: 37,
    isMarried: true
}

dev.age=56;
console.log(dev);

// dev ={  not allowed

// }

Object.freeze(dev);
dev.isMarried = false;
console.log(dev);


const arr =[ 1,2,3,4,5];
arr[0] = 100;
console.log(arr);
//arr = [55,88,99]---not allowed
Object.freeze(arr);
arr[1]= 44
console.log(arr);


