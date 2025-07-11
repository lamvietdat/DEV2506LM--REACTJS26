// kieeur number
var age = 21;
var PI = 3.14;
console.log("Age:", age);
console.log("PI:", PI);
//kieu chuoi
var name = "Dat";
var mess = "Xin chao, ".concat(name);
console.log("Name: ", name);
console.log("Mess: ", mess);
//kieu boolean
var isStudent = true;
var hasGraduated = false;
console.log("isStudent: ", isStudent);
console.log("hasGraduated: ", hasGraduated);
//kieu null va undefined
var u = undefined;
var n = null;
console.log("u: ", undefined);
console.log("n: ", null);
//kieu any:kieu bat ky ít dùng
var ranVal = 10;
console.log("Random value: ", ranVal);
ranVal = "Dat Dat";
console.log("Random value: ", ranVal);
ranVal = true;
console.log("Random value: ", ranVal);
//kieu unknow giống kiểu any nhưng an toàn hơn
var notStore = 10;
console.log("notStore: ", notStore);
notStore = "hello";
console.log("notStore: ", notStore);
if (typeof notStore === "string") {
    console.log("notStore", notStore.toUpperCase());
}
//kiểu mảng
var scores = [10, 15, 20, 21];
var names = ["a", "b", "c"];
console.log("scores: ", scores);
console.log("names: ", names);
var flags = [true, false, true, true];
console.log("flags: ", flags);
//kiểu tuple bộ dữ liểu cố định
var student = ["Dat", 21];
console.log("student: ", student);
//kiểu object đối tượng
var person = {
    name: "Dat",
    age: 21,
    email: "lamvietdat@gmail.com"
};
console.log("Person: ", person);
console.log("Name: ", person.name);
//kiểu function
function great(name, age) {
    return "Welcome to " + name + " Age " + age;
}
console.log(great("Dat", 21));
var func_great = function (name, age) {
    return "Welcome to ".concat(name, " age ").concat(age);
};
console.log(func_great("Dat", 21));
