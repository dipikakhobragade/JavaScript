

const productJSON =`{

    "id": 1,

    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",

    "price": 109.95,

    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",

    "category": "men's clothing",

    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",

    "rating": {

    "rate": 3.9,

    "count": 120

    }
}`

console.log(typeof productJSON);
const product =JSON.parse(productJSON)
//after conversion 
console.log(product);
console.log(typeof product);
console.log(product.title);


let developer ={
    firstName: 'Dipika',
    age: 37,
    isMarried: true,
    skills:['C','Cpp','Core Java', 'Javascript']

}
const jsonStrDev = JSON.stringify(developer);
console.log(typeof jsonStrDev);
console.log(jsonStrDev);
