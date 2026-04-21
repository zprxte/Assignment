const data = [
    { fullname: "A", salary: 25000 },
    { fullname: "B", salary: 22000 },
    { fullname: "C", salary: 30000 },
    { fullname: "D", salary: 25000 }
];

//splice
data.splice(1);
data.forEach((item) => {
    console.log(item.fullname + " " + item.salary);
});

//slice
const dataSort = ["CCC", "BBB", "AAA", "DDD", "1"];
const dataSliced = dataSort.slice(1, 3);
console.log("Sliced:", dataSliced);

//sort และ reverse
dataSort.sort().reverse();
console.log("Sorted & Reversed:", dataSort);