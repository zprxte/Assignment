//array
const data = [
    { fullname: "A", salary: 25000 },
    { fullname: "B", salary: 22000 },
    { fullname: "C", salary: 30000 },
    { fullname: "D", salary: 25000 }
];

//filter
const filtered = data.filter((item) => { return item.salary >= 25000; });
console.log("Filter:", filtered);

//map
const mapped = data.map((item) => { return item.fullname; });
console.log("Map:", mapped);

//forEach
data.forEach((item) => {
    console.log("forEach:", item.fullname);
});

//find
const found = data.find((item) => { return item.fullname === "B"; });
console.log("Find:", found);