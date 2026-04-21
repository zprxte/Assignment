const data = [
    { fullname: "A", salary: 25000 },
    { fullname: "B", salary: 22000 },
    { fullname: "C", salary: 30000 },
    { fullname: "D", salary: 25000 }
];

let newdata = { fullname: "E", salary: 40000 };
data.splice(1, 2, newdata);

data.forEach((item) => {
    console.log(item.fullname + " " + item.salary);
});