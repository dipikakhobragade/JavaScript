

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

const developer = {

    firstName: "Gajanan",

    age: 32,

    isMarried: true

}

 

const newDeveloper = Object.assign({}, developer)

newDeveloper.firstName = "Jenny";

console.log(newDeveloper);

console.log(developer);

 

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