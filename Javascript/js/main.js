// 1. การคำนวณราคา: ฟังก์ชัน Arrow Function คำนวณราคาสินค้ารวม VAT (Default VAT 7%)
const calculatePrice = (price, vat = 0.07) => {
    return price + (price * vat);
};

// 2. การจัดการข้อมูล: ฟังก์ชันที่จะถูกเรียกเมื่อผู้ใช้คลิกปุ่ม
const showOrderDetails = () => {
    // ตัวแปรค่าคงที่ (const) เก็บชื่อและรายการสินค้า
    const customer = "ธนวัฒน์";
    const products = ["เลย์", "โค้ก", "ขนมปัง", "น้ำมันพืช", "มาม่า", "สบู่", "ยาสีฟัน"];

    // ฟังก์ชันซ้อนข้างใน รับชื่อลูกค้าและรายการสินค้าด้วย Rest Parameter
    const formatMessage = (customerName, ...items) => {
        const assumedPrice = 1000;
        const net = 0.1;
        const netPrice = calculatePrice(assumedPrice, net);

        // ใช้ Template Literals เพื่อสร้างข้อความสรุปผล
        return `เรียนคุณ ${customerName},<br>คุณได้ทำการสั่งซื้อสินค้าจำนวนทั้งหมด ${items.length} รายการ<br>ยอดชำระสุทธิ (รวมภาษีมูลค่าเพิ่ม 10%) คือ ${netPrice} บาท`;
    };

    // 3. การแสดงผล: เรียกใช้ formatMessage และนำไปแสดงใน HTML (id = "output")
    const message = formatMessage(customer, ...products);
    document.getElementById("output").innerHTML = message;
};