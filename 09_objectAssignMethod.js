
const developer ={

    fname: 'Dipika',
    age : 34,
    city : 'Pune'
}

const newDeveloper = Object.assign({},developer); // deep clone
newDeveloper.fname = 'Riddu'
console.log(newDeveloper);
console.log(developer);

const user = {

    name :'bill',
    des :'CEO'
}

const address ={
    city : 'LA',
    country: 'USA',
    pin : 12345

}

Object.assign(user,address);
console.log(user);
console.log(address);

Object.assign(address,user);
console.log(address);

const mergeObj = Object.assign({}, user,address);
console.log(mergeObj);

for (const key in mergeObj) {
    if (Object.hasOwnProperty.call(mergeObj, key)) {
        const element = mergeObj[key];
        console.log(`${key} === ${mergeObj[key]}`);
        
    }
}