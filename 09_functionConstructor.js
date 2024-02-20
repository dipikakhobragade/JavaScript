


function Student(id,name,marks){

    this.id = id;
    this.name = name;
    this.marks = marks;

    this.display = function(){
        console.log(`inside display() methods`);
        console.log(`${this.id}, ${this.name},${this.marks}`);

    }
}
const stew = new Student(11,'Dip',88);
console.table(stew);
console.log(stew.marks);// only for marks

const jenny = new Student(22,'Rid',77);
console.log(jenny);
jenny.display();
stew.display();


const elon = new Student(33,'elon',60);
Student.prototype.country = 'india';
console.log(elon.name);
console.log(elon.country);
console.log(jenny.country);