//array vs object
var bagItems = ['books', 'pen', 'notebook', 'scale', 'watch'];

var bag = {
    books: 10,
    pen: 5,
    notebook: 3,
    scale: 1,
    watch: 2
}

const keys = Object.keys(bag);
console.log(keys);
const value = Object.values(bag);
console.log(value);

//looping
for (var i=0; i<keys.length;i++){
    var itemName = keys[i];
    var itemValue = value[i];
    // console.log(itemName, itemValue);
}

//for in loop
for( var itemName in bag){
    console.log(itemName, itemValue);
}