const exercisesData = {
    1: {
        title: "ข้อที่ 1: ระบบตัดเกรด (Object & Methods)",
        execute: () => {
            const student = {
                name: "Prite",
                scores: [80, 65, 40],
                calculateAverage: function () {
                    let sum = this.scores.reduce((total, num) => total + num, 0);
                    return sum / this.scores.length;
                },
                getGrade: function () {
                    let avg = this.calculateAverage();
                    if (avg >= 80) return "A";
                    if (avg >= 70) return "B";
                    if (avg >= 60) return "C";
                    if (avg >= 50) return "D";
                    return "F";
                }
            };

            let avgScore = student.calculateAverage().toFixed(2);
            let finalGrade = student.getGrade();

            return `ชื่อนักศึกษา: ${student.name} <br>
                    คะแนนแต่ละส่วน: [${student.scores.join(", ")}] <br>
                    <strong>คะแนนเฉลี่ย: ${avgScore}</strong> <br>
                    <strong style="color: #facc15; font-size: 1.2em;">เกรดที่ได้: ${finalGrade}</strong>`;
        }
    },
    2: {
        title: "ข้อที่ 2: ปริมาตรของทรงกลม (Math & Number Format)",
        execute: () => {
            function sphereCalculator(radius) {
                let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
                return volume.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }

            let r = 15;
            return `รัศมี (Radius) = ${r} <br>
                    ปริมาตรทรงกลม = <strong>${sphereCalculator(r)}</strong> ลูกบาศก์หน่วย`;
        }
    },
    3: {
        title: "ข้อที่ 3: ระบบจัดการสต็อกสินค้า (Array of Objects)",
        execute: () => {
            const warehouse = {
                products: [
                    { name: "Laptop", price: 30000, stock: 5 },
                    { name: "Mouse", price: 500, stock: 20 }
                ],
                addItem: function (itemName, amount) {
                    let item = this.products.find(p => p.name === itemName);
                    if (item) {
                        item.stock += amount;
                        return `เพิ่ม ${itemName} จำนวน ${amount} ชิ้น (คงเหลือ ${item.stock})`;
                    } else {
                        return `<span style="color: #f87171;">ไม่พบสินค้า ${itemName}</span>`;
                    }
                },
                sellItem: function (itemName, amount) {
                    let item = this.products.find(p => p.name === itemName);
                    if (item) {
                        if (amount > item.stock) {
                            alert(`สินค้า ${itemName} ไม่พอขาย! (มีแค่ ${item.stock} ชิ้น)`);
                            return `<span style="color: #f87171;">ขายไม่ได้: สินค้า ${itemName} ไม่พอ</span>`;
                        } else {
                            item.stock -= amount;
                            return `ขาย ${itemName} จำนวน ${amount} ชิ้น (คงเหลือ ${item.stock})`;
                        }
                    }
                    return "ไม่พบสินค้า";
                },
                getTotalValue: function () {
                    let total = this.products.reduce((sum, p) => sum + (p.price * p.stock), 0);
                    return total.toLocaleString('th-TH');
                }
            };

            let log = "<strong>สถานะสินค้าเริ่มต้น:</strong><br>";
            log += warehouse.products.map(p => `- ${p.name}: ${p.stock} ชิ้น`).join("<br>") + "<br><br>";

            log += "<strong>ทดสอบการทำงาน:</strong><br>";
            log += "1. " + warehouse.addItem("Laptop", 2) + "<br>";
            log += "2. " + warehouse.sellItem("Mouse", 5) + "<br>";
            log += "3. " + warehouse.sellItem("Laptop", 10) + " (ตัวอย่างของหมด)<br><br>";

            log += `<strong style="color: #34d399;">มูลค่ารวมในคลังทั้งหมด: ${warehouse.getTotalValue()} บาท</strong>`;
            return log;
        }
    },
    4: {
        title: "ข้อที่ 4: ระบบคำนวณเบี้ยปรับการคืนหนังสือ (Date Object)",
        execute: () => {
            setTimeout(() => {
                let dueDateStr = prompt("ระบุวันที่กำหนดส่งหนังสือ (รูปแบบ YYYY-MM-DD):");

                if (!dueDateStr) {
                    alert("ยกเลิกการทำรายการ หรือไม่ได้ระบุวันที่");
                    return;
                }

                const dueDate = new Date(dueDateStr);
                const today = new Date();

                if (isNaN(dueDate.getTime())) {
                    alert("รูปแบบวันที่ไม่ถูกต้อง กรุณาระบุในรูปแบบ YYYY-MM-DD");
                    return;
                }
                dueDate.setHours(0, 0, 0, 0);
                today.setHours(0, 0, 0, 0);

                const diffTime = today - dueDate;
                const todayFormatted = today.toISOString().split('T')[0];

                let resultMsg = "";

                if (diffTime <= 0) {
                    resultMsg = "ส่งคืนภายในกำหนด ไม่ต้องเสียค่าปรับครับ";
                } else {
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    const fine = diffDays * 5;
                    resultMsg = `เลยกำหนดมาแล้ว ${diffDays} วัน ค่าปรับรวม ${fine} บาท`;
                }

                alert(`วันที่กำหนดส่ง: ${dueDateStr}\nวันปัจจุบัน: ${todayFormatted}\n\nสรุปผล: ${resultMsg}`);
            }, 100);

            return `<i>กรุณาระบุวันที่ในหน้าต่าง Pop-up...</i> <br> (หากหน้าต่างไม่ขึ้น ให้ลองกดปุ่มข้อนี้อีกครั้ง)`;
        }
    },
    5: {
        title: "ข้อที่ 5: ระบบตรวจคนเข้าเมือง (Prompt, Confirm, Alert)",
        execute: () => {
            setTimeout(() => {
                let ageInput = prompt("กรุณาระบุอายุของคุณ:");

                if (ageInput === null) return;

                let age = parseInt(ageInput);

                if (isNaN(age) || age < 0) {
                    alert("กรุณากรอกตัวเลขให้ถูกต้อง");
                    return;
                }

                if (age < 20) {
                    alert("อายุไม่ถึงเกณฑ์");
                } else {
                    let hasIDCard = confirm("พกบัตรประชาชนมาด้วยใช่หรือไม่?");
                    if (hasIDCard) {
                        alert("เชิญเข้างานได้");
                    } else {
                        alert("ไม่อนุญาตให้เข้าหากไม่มีบัตร");
                    }
                }
            }, 100);

            return `<i>กรุณาตอบคำถามในหน้าต่าง Pop-up...</i> <br> (หากหน้าต่างไม่ขึ้น ให้ลองกดปุ่มข้อนี้อีกครั้ง)`;
        }
    },
    6: {
        title: "ข้อที่ 6: โปรแกรมคำนวณราคาสุทธิพร้อมภาษี",
        execute: () => {
            setTimeout(() => {
                let priceInput = prompt("กรุณาระบุราคาสินค้า (บาท):");

                let price = parseFloat(priceInput);
                if (isNaN(price) || price < 0) {
                    alert("ข้อมูลราคาไม่ถูกต้อง");
                    return;
                }

                let hasCoupon = confirm("คุณมีคูปองส่วนลด 100 บาท ใช่หรือไม่?");
                let discount = hasCoupon ? 100 : 0;

                let priceBeforeVat = price - discount;
                if (priceBeforeVat < 0) priceBeforeVat = 0;

                let vatAmount = priceBeforeVat * 0.07;
                let netPrice = priceBeforeVat + vatAmount;

                alert(`ราคาก่อน VAT (หลังหักส่วนลด): ${priceBeforeVat.toFixed(2)} บาท\nราคาสุทธิ (รวม VAT 7%): ${netPrice.toFixed(2)} บาท`);
            }, 100);

            return `<i>กรุณาทำรายการในหน้าต่าง Pop-up...</i>`;
        }
    },
    7: {
        title: "ข้อที่ 7: ระบบสั่งกาแฟ",
        execute: () => {
            setTimeout(() => {
                let menu = prompt("กรุณาพิมพ์เมนูที่ต้องการ: 'Latte' หรือ 'Espresso'");
                if (!menu) {
                    alert("กรุณาเลือกเมนู");
                    return;
                }
                menu = menu.trim().toLowerCase();
                let basePrice = 0;
                let menuName = "";

                if (menu === "latte") {
                    basePrice = 60;
                    menuName = "Latte";
                } else if (menu === "espresso") {
                    basePrice = 50;
                    menuName = "Espresso";
                } else {
                    alert("ขออภัย เราไม่มีเมนูนั้น");
                    return;
                }

                let isCold = confirm("รับแบบเย็น (+10 บาท) หรือไม่?");
                let finalPrice = basePrice + (isCold ? 10 : 0);
                let typeStr = isCold ? "เย็น" : "ร้อน";

                alert(`สรุปรายการ: ${menuName} (${typeStr})\nราคาสุทธิ: ${finalPrice} บาท`);
            }, 100);

            return `<i>กำลังรับออเดอร์ทาง Pop-up...</i>`;
        }
    }
};

function showExercise(exerciseNumber) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const clickedButton = document.querySelector(`.btn[data-exercise="${exerciseNumber}"]`);
    if (clickedButton) clickedButton.classList.add('active');

    const exercise = exercisesData[exerciseNumber];
    const titleElement = document.getElementById('exercise-title');
    const outputElement = document.getElementById('output');

    if (exercise) {
        titleElement.innerHTML = exercise.title;
        outputElement.innerHTML = exercise.execute();
    }
}

window.onload = () => {
    showExercise(1);
};