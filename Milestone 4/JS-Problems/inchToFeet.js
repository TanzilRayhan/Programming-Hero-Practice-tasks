// convert inches to feet
function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const heightInches = 160;
const heightFeet = inchToFeet(heightInches);
console.log(heightFeet);
