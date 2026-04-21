//array
const data = [
    { fullname: "A", salary: 25000 },
    { fullname: "B", salary: 22000 },
    { fullname: "C", salary: 30000 },
    { fullname: "D", salary: 25000 }
];
let newdata = data.slice(1, 3);
console.log("-------data-------");
data.forEach((item) => {
    console.log(item.fullname + " " + item.salary);
});
console.log("-------newdata-------");
newdata.forEach((item) => {
    console.log(item.fullname + " " + item.salary);
});