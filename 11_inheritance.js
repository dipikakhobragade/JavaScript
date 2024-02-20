

class MotherCat{
    constructor(color,totalLegs,){
        this.color = color;
        this.totalLegs = totalLegs;

    }
    meowing(){
        console.log(`cat is meowing`);
        console.log(`Eye Color : ${this.eyeColor} and legs ${this.totalLegs}`);
    }
}

class BabyCat extends MotherCat{
    constructor(bodyColor,name,eyeColor,legs){
        super(eyeColor,legs);
        this.bodyColor = bodyColor;
        this.name =name;

    }
    meowing(){ // method overriding which runtime polymorphism
        console.log(`cat is meowing and asking for milk`);
        console.log(`Eye Color : ${this.eyeColor} and legs ${this.totalLegs}`);
        console.log(`boby Color : ${this.bodyColor} and name ${this.name}`);
    }

}
const snow = new BabyCat('Brown', 'snow','Black',4);
console.log(snow);
snow.meowing(); 