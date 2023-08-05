//object declare
var student = {
    id: 100,
    name: "Rox",
    class: 10,
    gpa: 5
}

var info = student.id;
var info2 = student['class'];

var propertyName = 'gpa';
var propertyValue = student[propertyName];
console.log(propertyName, propertyValue);

var properties = Object.keys(student);
var propertiesValues = Object.values(student);

// console.log(properties);
// console.log(propertiesValues);

// set property value
student.id = 200;
student['id'] = 300;
console.log(student);