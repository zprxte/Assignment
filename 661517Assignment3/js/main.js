const exercisesData = {
    0: {
        title: "หน้าหลัก",
        execute: () => {
            setTimeout(() => {
                console.log("=== หน้าหลัก ===");
                document.getElementById('output').innerHTML = `
                <h2>Welcome to JavaScript Assignment 3</h2>
                <p>ระบบตัดเกรด, ปริมาตรทรงกลม, สต็อกสินค้า, ค่าปรับหนังสือ, ตรวจคนเข้าเมือง, คำนวณภาษี, ระบบสั่งกาแฟ</p>
                <p>กรุณาเลือกแบบฝึกหัดจากเมนูด้านบน</p>
            `;
            }, 100);
        }
    },
    1: {
        title: "ข้อที่ 1: ระบบตัดเกรด (Prompt & Alert)",
        execute: () => {
            setTimeout(() => {
                console.log("=== ข้อที่ 1: ระบบตัดเกรด ===");

                let name = prompt("กรุณาระบุชื่อนักศึกษา:");
                if (!name || name.trim() === "") {
                    alert("ยกเลิก หรือไม่ได้ระบุชื่อ");
                    console.log("ผู้ใช้ยกเลิก หรือไม่ได้ระบุชื่อ");
                    return;
                }
                name = name.trim();
                console.log("ชื่อนักศึกษา:", name);

                let scoresInput = prompt("กรุณาระบุคะแนน 3 วิชา คั่นด้วยเครื่องหมายจุลภาค (,)\nตัวอย่าง: 80, 65, 40");
                if (!scoresInput) {
                    alert("ยกเลิก หรือไม่ได้ระบุคะแนน");
                    console.log("ผู้ใช้ยกเลิก หรือไม่ได้ระบุคะแนน");
                    return;
                }

                let scores = scoresInput.split(",").map(s => parseFloat(s.trim()));
                console.log("คะแนนดิบที่รับมา:", scoresInput);
                console.log("คะแนนหลัง parse:", scores);

                if (scores.some(s => isNaN(s))) {
                    alert("รูปแบบคะแนนไม่ถูกต้อง กรุณาใส่ตัวเลขคั่นด้วยเครื่องหมายจุลภาค");
                    console.log("Error: คะแนนไม่ถูกต้อง");
                    return;
                }

                const student = {
                    name: name,
                    scores: scores,
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

                console.log("คะแนนเฉลี่ย:", avgScore);
                console.log("เกรดที่ได้:", finalGrade);

                alert(`ผลการตัดเกรด\n\nชื่อ: ${student.name}\nคะแนน: [${student.scores.join(", ")}]\nคะแนนเฉลี่ย: ${avgScore}\nเกรด: ${finalGrade}`);

                document.getElementById('output').innerHTML = `
                    ชื่อนักศึกษา: ${student.name} <br>
                    คะแนนแต่ละส่วน: [${student.scores.join(", ")}] <br>
                    <strong>คะแนนเฉลี่ย: ${avgScore}</strong> <br>
                    <strong style="color: #facc15; font-size: 1.2em;">เกรดที่ได้: ${finalGrade}</strong>`;
            }, 100);

            return `<i>กรุณาระบุข้อมูลในหน้าต่าง Pop-up...</i> <br> (หากหน้าต่างไม่ขึ้น ให้ลองกดปุ่มข้อนี้อีกครั้ง)`;
        }
    },
    2: {
        title: "ข้อที่ 2: ปริมาตรของทรงกลม (Prompt & Alert)",
        execute: () => {
            setTimeout(() => {
                console.log("=== ข้อที่ 2: ปริมาตรของทรงกลม ===");

                let radiusInput = prompt("กรุณาระบุค่ารัศมีของทรงกลม (หน่วย):");
                if (radiusInput === null) {
                    alert("ยกเลิกการคำนวณ");
                    console.log("ผู้ใช้ยกเลิกการคำนวณ");
                    return;
                }

                let r = parseFloat(radiusInput);
                console.log("ค่ารัศมีดิบที่รับมา:", radiusInput);
                console.log("ค่ารัศมีหลัง parse:", r);

                if (isNaN(r) || r <= 0) {
                    alert("ค่ารัศมีไม่ถูกต้อง กรุณาระบุตัวเลขที่มากกว่า 0");
                    console.log("Error: ค่ารัศมีไม่ถูกต้อง");
                    return;
                }

                function sphereCalculator(radius) {
                    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
                    return volume;
                }

                let volume = sphereCalculator(r);
                let volumeFormatted = volume.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

                console.log("ค่า PI:", Math.PI);
                console.log("ปริมาตร (ดิบ):", volume);
                console.log("ปริมาตร (จัดรูปแบบ):", volumeFormatted);

                alert(`ผลการคำนวณปริมาตรทรงกลม\n\nรัศมี: ${r} หน่วย\nปริมาตร: ${volumeFormatted} ลูกบาศก์หน่วย`);

                document.getElementById('output').innerHTML = `
                    รัศมี (Radius) = ${r} <br>
                    ปริมาตรทรงกลม = <strong>${volumeFormatted}</strong> ลูกบาศก์หน่วย`;
            }, 100);

            return `<i>กรุณาระบุค่ารัศมีในหน้าต่าง Pop-up...</i> <br> (หากหน้าต่างไม่ขึ้น ให้ลองกดปุ่มข้อนี้อีกครั้ง)`;
        }
    },
    3: {
        title: "ข้อที่ 3: ระบบจัดการสต็อกสินค้า (Prompt & Alert)",
        execute: () => {
            setTimeout(() => {
                console.log("=== ข้อที่ 3: ระบบจัดการสต็อกสินค้า ===");

                const warehouse = {
                    products: [
                        { name: "Laptop", price: 30000, stock: 5 },
                        { name: "Mouse", price: 500, stock: 20 }
                    ],
                    addItem: function (itemName, amount) {
                        let item = this.products.find(p => p.name.toLowerCase() === itemName.toLowerCase());
                        if (item) {
                            item.stock += amount;
                            console.log(`เพิ่ม ${item.name} จำนวน ${amount} ชิ้น (คงเหลือ ${item.stock})`);
                            return `เพิ่ม ${item.name} จำนวน ${amount} ชิ้น (คงเหลือ ${item.stock})`;
                        } else {
                            console.log(`ไม่พบสินค้า ${itemName}`);
                            return `ไม่พบสินค้า ${itemName}`;
                        }
                    },
                    sellItem: function (itemName, amount) {
                        let item = this.products.find(p => p.name.toLowerCase() === itemName.toLowerCase());
                        if (item) {
                            if (amount > item.stock) {
                                console.log(`สินค้า ${item.name} ไม่พอขาย (มีแค่ ${item.stock} ชิ้น)`);
                                alert(`สินค้า ${item.name} ไม่พอขาย! (มีแค่ ${item.stock} ชิ้น)`);
                                return `ขายไม่ได้: สินค้า ${item.name} ไม่พอ`;
                            } else {
                                item.stock -= amount;
                                console.log(`ขาย ${item.name} จำนวน ${amount} ชิ้น (คงเหลือ ${item.stock})`);
                                return `ขาย ${item.name} จำนวน ${amount} ชิ้น (คงเหลือ ${item.stock})`;
                            }
                        }
                        console.log(`ไม่พบสินค้า ${itemName}`);
                        return `ไม่พบสินค้า ${itemName}`;
                    },
                    getTotalValue: function () {
                        let total = this.products.reduce((sum, p) => sum + (p.price * p.stock), 0);
                        return total.toLocaleString('th-TH');
                    }
                };

                console.log("สินค้าเริ่มต้น:", JSON.stringify(warehouse.products));

                let action = prompt("เลือกการดำเนินการ:\n1 = เพิ่มสินค้า\n2 = ขายสินค้า\n3 = ดูสต็อกทั้งหมด\n\nพิมพ์ 1, 2 หรือ 3:");
                if (action === null) {
                    alert("ยกเลิกการทำรายการ");
                    console.log("ผู้ใช้ยกเลิกการทำรายการ");
                    return;
                }

                console.log("ผู้ใช้เลือกการดำเนินการ:", action);
                let resultMsg = "";

                if (action === "1") {
                    let itemName = prompt("ชื่อสินค้าที่ต้องการเพิ่ม (Laptop หรือ Mouse):");
                    if (!itemName) { alert("ยกเลิก"); return; }
                    let amountInput = prompt(`จำนวนที่ต้องการเพิ่ม ${itemName}:`);
                    let amount = parseInt(amountInput);
                    if (isNaN(amount) || amount <= 0) {
                        alert("จำนวนไม่ถูกต้อง");
                        console.log("Error: จำนวนไม่ถูกต้อง:", amountInput);
                        return;
                    }
                    resultMsg = warehouse.addItem(itemName, amount);
                    alert(resultMsg);

                } else if (action === "2") {
                    let itemName = prompt("ชื่อสินค้าที่ต้องการขาย (Laptop หรือ Mouse):");
                    if (!itemName) { alert("ยกเลิก"); return; }
                    let amountInput = prompt(`จำนวนที่ต้องการขาย ${itemName}:`);
                    let amount = parseInt(amountInput);
                    if (isNaN(amount) || amount <= 0) {
                        alert("จำนวนไม่ถูกต้อง");
                        console.log("Error: จำนวนไม่ถูกต้อง:", amountInput);
                        return;
                    }
                    resultMsg = warehouse.sellItem(itemName, amount);
                    alert(resultMsg);

                } else if (action === "3") {
                    resultMsg = "ดูสต็อกทั้งหมด";
                } else {
                    alert("ตัวเลือกไม่ถูกต้อง กรุณาพิมพ์ 1, 2 หรือ 3");
                    console.log("Error: ตัวเลือกไม่ถูกต้อง");
                    return;
                }

                let totalValue = warehouse.getTotalValue();
                console.log("สินค้าหลังดำเนินการ:", JSON.stringify(warehouse.products));
                console.log("มูลค่ารวม:", totalValue);

                let stockList = warehouse.products.map(p => `- ${p.name}: ${p.stock} ชิ้น (ราคา ${p.price.toLocaleString('th-TH')} บาท)`).join("\n");
                alert(`สต็อกปัจจุบัน:\n${stockList}\n\nมูลค่ารวม: ${totalValue} บาท`);

                document.getElementById('output').innerHTML = `
                    <strong>ผลการดำเนินการ:</strong> ${resultMsg}<br><br>
                    <strong>สต็อกปัจจุบัน:</strong><br>
                    ${warehouse.products.map(p => `- ${p.name}: ${p.stock} ชิ้น (${p.price.toLocaleString('th-TH')} บาท)`).join("<br>")}<br><br>
                    <strong style="color: #34d399;">มูลค่ารวมในคลังทั้งหมด: ${totalValue} บาท</strong>`;
            }, 100);

            return `<i>กรุณาเลือกการดำเนินการในหน้าต่าง Pop-up...</i> <br> (หากหน้าต่างไม่ขึ้น ให้ลองกดปุ่มข้อนี้อีกครั้ง)`;
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
                console.log("วันที่กำหนดส่ง: " + dueDate);
                console.log("วันปัจจุบัน: " + today);
                const diffTime = today - dueDate;
                const todayFormatted = today.toISOString().split('T')[0];

                let resultMsg = "";

                if (diffTime <= 0) {
                    resultMsg = "ส่งคืนภายในกำหนด ไม่ต้องเสียค่าปรับครับ";
                    console.log(resultMsg);
                } else {
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    const fine = diffDays * 5;
                    resultMsg = `เลยกำหนดมาแล้ว ${diffDays} วัน ค่าปรับรวม ${fine} บาท`;
                    console.log(resultMsg);

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
                console.log("=== ข้อที่ 5: ระบบตรวจคนเข้าเมือง ===");

                let ageInput = prompt("กรุณาระบุอายุของคุณ:");

                if (ageInput === null) {
                    console.log("ผู้ใช้กด Cancel");
                    return;
                }

                let age = parseInt(ageInput);
                console.log("อายุที่รับมา:", ageInput, "-> parseInt:", age);

                if (isNaN(age) || age < 0) {
                    alert("กรุณากรอกตัวเลขให้ถูกต้อง");
                    console.log("Error: อายุไม่ถูกต้อง");
                    return;
                }

                if (age < 20) {
                    alert("อายุไม่ถึงเกณฑ์");
                    console.log("ผลลัพธ์: อายุ", age, "ปี — ไม่ถึงเกณฑ์ (ต้อง >= 20)");
                } else {
                    console.log("ผลลัพธ์: อายุ", age, "ปี — ผ่านเกณฑ์อายุ");
                    let hasIDCard = confirm("พกบัตรประชาชนมาด้วยใช่หรือไม่?");
                    console.log("มีบัตรประชาชน:", hasIDCard);
                    if (hasIDCard) {
                        alert("เชิญเข้างานได้");
                        console.log("ผลลัพธ์สุดท้าย: อนุญาตให้เข้างาน");
                    } else {
                        alert("ไม่อนุญาตให้เข้าหากไม่มีบัตร");
                        console.log("ผลลัพธ์สุดท้าย: ไม่อนุญาต — ไม่มีบัตร");
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
                console.log("=== ข้อที่ 6: คำนวณราคาสุทธิพร้อมภาษี ===");

                let priceInput = prompt("กรุณาระบุราคาสินค้า (บาท):");
                console.log("ราคาที่รับมา:", priceInput);

                let price = parseFloat(priceInput);
                if (isNaN(price) || price < 0) {
                    alert("ข้อมูลราคาไม่ถูกต้อง");
                    console.log("Error: ราคาไม่ถูกต้อง");
                    return;
                }
                console.log("ราคาสินค้า:", price);

                let hasCoupon = confirm("คุณมีคูปองส่วนลด 100 บาท ใช่หรือไม่?");
                let discount = hasCoupon ? 100 : 0;
                console.log("มีคูปอง:", hasCoupon, "-> ส่วนลด:", discount, "บาท");

                let priceBeforeVat = price - discount;
                if (priceBeforeVat < 0) priceBeforeVat = 0;
                console.log("ราคาก่อน VAT (หลังหักส่วนลด):", priceBeforeVat.toFixed(2));

                let vatAmount = priceBeforeVat * 0.07;
                let netPrice = priceBeforeVat + vatAmount;
                console.log("VAT 7%:", vatAmount.toFixed(2));
                console.log("ราคาสุทธิ:", netPrice.toFixed(2));

                alert(`ราคาก่อน VAT (หลังหักส่วนลด): ${priceBeforeVat.toFixed(2)} บาท\nราคาสุทธิ (รวม VAT 7%): ${netPrice.toFixed(2)} บาท`);
            }, 100);

            return `<i>กรุณาทำรายการในหน้าต่าง Pop-up...</i>`;
        }
    },
    7: {
        title: "ข้อที่ 7: ระบบสั่งกาแฟ",
        execute: () => {
            setTimeout(() => {
                console.log("=== ข้อที่ 7: ระบบสั่งกาแฟ ===");

                let menu = prompt("กรุณาพิมพ์เมนูที่ต้องการ: 'Latte' หรือ 'Espresso'");
                if (!menu) {
                    alert("กรุณาเลือกเมนู");
                    console.log("ผู้ใช้ยกเลิก หรือไม่ได้ระบุเมนู");
                    return;
                }
                console.log("เมนูที่รับมา:", menu);
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
                    console.log("Error: ไม่พบเมนู", menu);
                    return;
                }
                console.log("เมนูที่เลือก:", menuName, "ราคาฐาน:", basePrice);

                let isCold = confirm("รับแบบเย็น (+10 บาท) หรือไม่?");
                let finalPrice = basePrice + (isCold ? 10 : 0);
                let typeStr = isCold ? "เย็น" : "ร้อน";
                console.log("ประเภท:", typeStr, "เพิ่มเงิน:", isCold ? 10 : 0);
                console.log("ราคาสุทธิ:", finalPrice, "บาท");

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
    showExercise(0);
};