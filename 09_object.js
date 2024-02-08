
let person =

{

    firstName : 'Dipika',
    age : 37,
    isMarried : true

}

console.log(person);
console.log(`dot Notation`);
console.log(person.age);
console.log(`square bracket notation`);
console.log(person['firstName']);

//add property
person.city = 'Pune';
console.log(person);

//update property
person.age = 40;
console.log(person);

person.isMarried= false;
console.log(person);

//delete the property
delete person.city;
console.log(person);

console.log(`Empty object...`);
let address = 
{ 

}

address.city = 'Mumbai';
console.log(address);

let user = {
    userName :'Jenny',
    country: 'India',
    address:{
        pin: 12345,
        street: 'Gandhi Bag',
        getAddress : function(){

            console.log(`Complete address === ${this.street}, ${this.city},${this.pin}`);

        }



    },
    show : function (){
        console.log(`Inside Function`);

    }        

}

console.log(user);
let country1 = user.country;
console.log(country1);
user.show();

console.log(user.address.pin);

user.address.flatNo = 123;
console.log(user.address);

user.address.getAddress();


//traversing

let developer ={
    firstName: 'Dipika',
    age: 37,
    isMarried: true,
    skills:['C','Cpp','Core Java', 'Javascript']

}
for (const key in developer) {
    if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(element);
        
    }
}


developer.skills.push('HTML')
console.log(developer.skills);

developer.skills.shift();
console.log(developer.skills);


const keys = Object.keys(developer);
console.log(keys);

const values = Object.values(developer);
console.log(values);

console.log(`Is values array ===> ${Array.isArray(values)}`);

for (const element of values) {
    console.log(element);
}

const entries = Object.entries(developer);
console.log(entries);
console.log(`object entries.....`);
for (const element of entries) {
    console.log(element);
}
console.log(`accessing nested array...using double []   []   bracket `);
console.log(entries[0][0]);
console.log(entries[0][1]);
// const entry = entries[0];
// console.log(entry);

// const entry1 = entries[entries.length-1];
// console.log(entry1);

// for (const element of entry1) {
//     console.log(element);
    
// }

// //or 

console.log(`---------in operator----`);

const isAgeAvailable = 'age' in developer;
console.log(isAgeAvailable);