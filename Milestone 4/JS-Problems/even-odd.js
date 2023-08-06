function isEven(num){
    const reminder = num % 2;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}

const Number = isEven(20);
console.log(Number);
