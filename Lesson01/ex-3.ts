// kieeur number
let age:number =21
let PI:number=3.14

console.log("Age:",age);
console.log("PI:",PI);

//kieu chuoi
let name: string = "Dat";
let mess: string = `Xin chao, ${name}`;
console.log("Name: ",name);
console.log("Mess: ",mess);


//kieu boolean
let isStudent: boolean=true;
let hasGraduated: boolean=false;
console.log("isStudent: ",isStudent);
console.log("hasGraduated: ",hasGraduated);

//kieu null va undefined
let u: undefined=undefined;
let n: null=null;
console.log("u: ",undefined);
console.log("n: ",null);

//kieu any:kieu bat ky ít dùng
let ranVal: any=10
console.log("Random value: ",ranVal);
ranVal="Dat Dat"
console.log("Random value: ", ranVal);
ranVal=true
console.log("Random value: ",ranVal);

//kieu unknow giống kiểu any nhưng an toàn hơn
let notStore: unknown=10
console.log("notStore: ",notStore);
notStore="hello"
console.log("notStore: ",notStore);
if(typeof notStore ==="string"){
    console.log("notStore",notStore.toUpperCase());
}

//kiểu mảng
let scores:number[]=[10,15,20,21]
let names:string []=["a","b","c"]
console.log("scores: ",scores);
console.log("names: ",names);
let flags:Array<boolean>=[true,false,true,true]
console.log("flags: ",flags);

//kiểu tuple bộ dữ liểu cố định
let student:[String, number]=["Dat",21]
console.log("student: ",student);

//kiểu object đối tượng

let person:{name:string; age:number; email:string}={
    name:"Dat",
    age:21,
    email:"lamvietdat@gmail.com"
};

console.log("Person: ",person);
console.log("Name: ",person.name);

//kiểu function
function great(name:string, age:number){
    return "Welcome to " + name + " Age " + age  
}
console.log(great("Dat",21));

const func_great=(name:string, age:number)=>{
    return `Welcome to ${name} age ${age}`
}
console.log(func_great("Dat",21));





