//hàm và kiểu trả về tham số
function greet(name:string):string{
    return `Hello ${name}`
}

const mess=greet("Chung")
console.log("Câu nói: ",mess);
//2. hàm kiểu void (hàm không định kiểu, hàm không trả về giá trị)
function logMessage(message:string):void{
    console.log("Log: ",message);
}
console.log("Log: ",logMessage);
//3. hàm kiểu never 



//4. hàm mạc danh /  arrow function
