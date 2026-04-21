const data = [
    { fullname: "A", salary: 25000 },
    { fullname: "B", salary: 22000 },
    { fullname: "C", salary: 30000 },
    { fullname: "D", salary: 25000 }
];

//push
data.push({ fullname: "E", salary: 40000 });
data.forEach((item) => {
    console.log(item.fullname + " " + item.salary);
});