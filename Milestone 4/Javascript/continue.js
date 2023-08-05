var numbers = [5, 3, 9, 2, 7, 10, 1];

for(var i=0; i<numbers.length; i++){
    var num = numbers[i];
    if(num>6){
        continue;
    }
    console.log(num);
}