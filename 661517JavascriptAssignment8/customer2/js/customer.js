class Customer {
    constructor(_id, _fullname) {
        this.id = _id;
        this.fullname = _fullname;
    }
    walk() {
        console.log("ลูกค้ากำลังเดิน");
    }
}
let c1 = new Customer(1001, "สายน้ำ เรืองรัตน์");
c1.walk();
let c2 = new Customer(1002, "สายธาร แสงโรจน์");