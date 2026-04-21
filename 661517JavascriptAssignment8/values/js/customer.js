class Customer {
    constructor(_id, _fullname) {
        this.id = _id;
        this.fullname = _fullname;
    }
    walk() {
        console.log("ลูกค้ากำลังเดิน");
    }
}
let c = new Customer(1001, "สายน้ำ เรืองรัตน์");
console.log(Object.values(c));