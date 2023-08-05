var fruits = ['apple', 'mango', 'lichi', 'blueberry','dragon'];

for(var i=0; i<fruits.length; i++){
    var item = fruits[i];
    if(item=='blueberry'){
        break;
    }
    console.log(item);
}