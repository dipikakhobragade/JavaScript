

const array = ['jenny','elon','stew','bill'];
array.reverse();
console.log(array);

const array1 = ['jenny','elon','stew','bill'];
//ascending order
array1.sort();
console.log(array1);
//descending order
array1.reverse();
console.log(array1);


const arrNum = [20,1,50,9,79,8]
arrNum.sort((a,b)=>{
    return a>b ?1:-1;
});
console.log(arrNum)

arrNum.sort((a,b)=>{
    return a>b ?-1:1;
});
console.log(arrNum);
