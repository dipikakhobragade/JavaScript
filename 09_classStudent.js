

class Student{
    //data member or properties/ attributes
    id
    name
    city
    marks
    //constructor
    constructor(id,name,city,marks){
        this.id = id;
        this.name = name;
        this.city = city;
        this.marks = marks;
    }
    //member function or methods
    getDetails(){
        console.log(`ID : ${this.id}, name: ${this.name},city: ${this.city}, marks: ${this.marks} `);
    }
    

}

const jenny = new Student(11,'Jenny','Pune',70);
console.log(jenny.name);
jenny.getDetails();

const bill = new Student(22,'Bill','LA',80);
//console.log(bill);
bill.getDetails();
const elon = new Student(44,'Elon', 'Mumbai', 60)

console.log(`traversing array object`);
const arrayStudent = [jenny,bill,elon];

for (const element of arrayStudent) {
    element.getDetails();
}

//wap to log the details of students having marks greater than equal 80

for (const student of arrayStudent) {
    if (student.marks>=80) {
        student.getDetails()
    }
}


class User{

}

//instanceof operator
console.log(jenny instanceof Student);