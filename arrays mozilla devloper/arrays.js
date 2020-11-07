var fruits = ['Apple', 'Banana'];

console.log(fruits.length);
var first = fruits[0];
//alert(first);
fruits.push('Orange');
fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });
  fruits.pop();
  fruits.forEach(function(item, index, array) {
    console.log(item, index);
  });
//proprieté
  var promise = {
    'var' : 'text',
    'array': [1, 2, 3, 4]
  };
  
  console.log(promise['var']);
  console.log(promise['array'][0]);
  // deuxieme fruts tableau
fruits = [];  
fruits.push("banane", "pomme", "pêche");  
      
console.log(fruits.length);
//fruits[5] = "mangue";  
//console.log(fruits[5]);  // "mangue"
console.log(Object.keys(fruits)); // ['0', '1', '2', '5'] 
console.log(fruits.length); // 6 
console.log(Array.from('foo'));
console.log(Array.from([1, 2, 3], y => y + y));
function f() {
    return Array.from(arguments);
  }
  
  console.log(f(1, 2, 3)); 
var iterator1 = fruits.entries();
iterator1.index
  
  
  console.log(iterator1.next().value);
  console.log(iterator1.next().value);
  console.log(iterator1.next().value);
 // Parcourir un tableau avec ses index et éléments
 const arr = ["a", "b", "c"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
// 0 "a"
// 1 "b"
// 2 "c"
//Boucle for...of
var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']


var  use0  = { 
    name: "hatem",
    age : 50, 
    adresse : {
        zip: 6140,
        rue :"1 med 5 ",
        ville : "Tunis"
    },
    lienFb :  "/profile/64568867"
};

