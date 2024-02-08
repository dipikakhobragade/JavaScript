

const map = new Map();
map.set ('height','6ft');
map.set('weight', 56);
map.set('name', ' Dipika');
map.set('city','pune');
console.log(map);

console.log(map.get('name'));

//adding duplicate element

map.set('name','dipika bhele');
console.log(map);

map.set('country', 'India');
console.log(map.size);

map.delete('height');
console.log(map);

//available or not

console.log(`Available or not ${map.has('name')}`)
console.log(map.keys());
console.log(map.values());

//traversing

const keys = map.keys();

for (const key of keys) {
    console.log(`${key} and ${map.get(key)}`);
    
}
