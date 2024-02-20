

let student = [{name : 'Dipika', id : 123},
{name : 'Ridvika', id : 345},
{name : 'Bhushan', id : 567}];

for (const element of student) {
    console.log(element);
}

// for (const key in student) {
//     if (Object.hasOwnProperty.call(student, key)) {
//         const element = student[key];
//         console.log(element);
        
//     }
// }

for (const element of student) {
    if (element.name.startsWith('D')) {
        console.log(element.name);
        
    }
    
}