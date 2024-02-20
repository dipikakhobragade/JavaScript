

const show = ()=>{
    console.log(`inside arrow fun with no arg and no return value`);

}
show();

// const show = ()=>
//     console.log(`inside arrow fun with no arg and no return value`);
//     show();

const add = (n1,n2)=>{
    console.log(`${n1+n2}`);
}
add(10,40);

// const add = (n1,n2)=>
//     console.log(`${n1+n2}`);
// add(10,40);


const mul = (n1, n2)=>{

    const res = n1*n2;
    return res;
}
const returnRes = mul(5,5);
console.log(returnRes);



const count = (inputValue)=>{
    
    return inputValue.length;

}
const totalChar = count('Javascript');
console.log(`total char ${totalChar}`);
