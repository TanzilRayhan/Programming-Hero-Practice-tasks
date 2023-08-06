function isLeapYear(year){
    const reminder = year % 4;
    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}

const inputYear = isLeapYear(2000);
console.log('Leap Year:', inputYear);

