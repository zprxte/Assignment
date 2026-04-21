const data = [
    { fullname: "A", salary: 25000 },
    { fullname: "B", salary: 22000 },
    { fullname: "C", salary: 30000 },
    { fullname: "D", salary: 25000 }
];

//pop
data.pop();
data.forEach((item) => {
    console.log(item.fullname + " " + item.salary);
});
