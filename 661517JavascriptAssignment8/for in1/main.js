const data = { fullname: "AAA-3A", Address: "BK", age: 25 };
let result = "";
for (let i in data) {
    result += data[i] + "\n";
}
console.log(result);