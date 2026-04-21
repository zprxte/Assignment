//array
const data = ["ไก่", "เป็ด", "ปลา"];
data[2] = "กุ้ง";
console.log("ลำดับ 0:", data[0]);
console.log("ลำดับ 1:", data[1]);
console.log("ลำดับ 2:", data[2]);

//from
const result = Array.from("JavaScript");
console.log("ผลการทำงาน:", result);

//รวมข้อมูล 2 ชุด
let data1 = ["ไก่", "เป็ด", "หมู"];
let data2 = ["หอย", "กุ้ง", "ปลา"];
let newdata = [...data1, ...data2];
console.log("newdata: ", newdata);