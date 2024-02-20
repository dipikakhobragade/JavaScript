

class MotherCat{
    constructor(eyeColor,totalLegs){
        this.eyeColor =eyeColor;
        this.totalLegs = totalLegs
    }
    meowing (){
        console.log(`cat is meowing `);
        console.log(`${this.eyeColor} and ${this.totalLegs}`);
      
        
    }

}

class BabyCat extends MotherCat{
    
    constructor (bodyColor, name, colorOfEye,legs){// we can write any name of eye color n for legs
        super(colorOfEye,legs);
        this.bodyColor = bodyColor;
        this.name =name;
    }

    meowing (){ // method overriding which is run time polymorphism
        console.log(`cat is meowing and she want Milk`);
        console.log(`${this.eyeColor} and ${this.totalLegs}`);
        console.log(`${this.bodyColor} and ${this.name}`);
        
    }



}

const kitty = new BabyCat('Brown', 'Kitty','Black',4);
console.log(kitty);
kitty.meowing();
