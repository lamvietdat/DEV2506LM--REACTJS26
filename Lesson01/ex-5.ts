//các kiểu dữ liệu nâng cao
//Union type
let value:string | number
value="Dat dzai"
console.log("String: ",value);
value=21
console.log("Number: ",value);
//value=true => error

// Alias- bí danh(định danh kiểu)
type UserId=string | number
let id1:UserId="abc123"
let id2:UserId=2004
console.log("ID1: ",id1);
console.log("ID2: ",id2);

//interface
interface person{
    name: string,
    age:number,
    email?:string// thuộc tính tùy chọn
}
let user1:person = {
    name:"Dat",
    age:21
} 
let user2:person = {
    name:"Dat",
    age:21,
    email:"lamvietdat@gmail.com"
}
console.log("user1: ",user1);
console.log("user2: ",user2);

