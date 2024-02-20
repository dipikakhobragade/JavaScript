

class Student{

    constructor(rollNo,name){
        this.rollNo =rollNo;
        this.name = name;
    }

    marks(maths, physics){
        //console.log(`${maths} , ${physics}`);
        console.log(arguments);
        console.log(typeof arguments);
        console.log(this);
        if (arguments.length==2) {
            console.log(`Addition of ${maths+physics}`);
            
        }
        if (arguments.length==1 ||physics==undefined) {
            console.log(`Addition of ${maths+0}`);
        }
        console.log(`===================`);

    }
}

const dipika = new Student ( 11, 'dipika');
console.log(dipika);
dipika.marks( 78, 93)
dipika.marks(50);