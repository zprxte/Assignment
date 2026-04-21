class Customer {
    constructor(_id, _fullname) {
        this.id = _id;
        this.fullname = _fullname;
    }
}
let c1 = new Customer(1001, "สายน้ำ เรืองรัตน์");
let c2 = new Customer(1002, "สายธาร แสงโรจน์");
console.log("รหัส : " + c1.id + "\nซื่อ-สกุล :" + c1.fullname);