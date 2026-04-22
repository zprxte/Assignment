const exercisesData = {
    0: {
        title: "กดปุ่มเพื่อดูผลลัพธ์ของแต่ละข้อ",
        execute: () => {
            return "<p class='placeholder'>กดปุ่มด้านบนเพื่อเริ่มต้น...</p>";
        }
    },
    1: {
        title: "ข้อที่ 1: การจัดการข้อมูลพื้นฐานใน Array",
        execute: () => {
            let fruits = ["ส้ม", "มะม่วง", "ลำไย"];
            fruits.push("แตงโม");
            fruits.unshift("แอปเปิ้ล");
            console.log(fruits);
            return `รายการผลไม้ปัจจุบัน: <br><span style="color: #fff;">[ ${fruits.join(", ")} ]</span>`;
        }
    },
    2: {
        title: "ข้อที่ 2: การกรอง (Filter) และการอ่านข้อมูล (Map)",
        execute: () => {
            const employees = [
                { name: "กรภัทร์", role: "นักบิน", salary: 150000 },
                { name: "จารวี", role: "มัณฑนากร", salary: 55000 },
                { name: "นารีรัตน์", role: "นักวิเคราะห์ระบบ", salary: 45000 },
                { name: "ภริตา", role: "พยาบาล", salary: 35000 },
                { name: "รลิตา", role: "แพทย์", salary: 75000 }
            ];
            const highSalaryNames = employees
                .filter(emp => emp.salary >= 50000)
                .map(emp => emp.name);
            console.log(highSalaryNames);
            return `รายชื่อพนักงานที่เงินเดือนตั้งแต่ 50,000 บาทขึ้นไป: <br><span style="color: #fff;">[ '${highSalaryNames.join("', '")}' ]</span>`;
        }
    },
    3: {
        title: "ข้อที่ 3: การแก้ไขและถอดข้อมูลด้วย Splice",
        execute: () => {
            let data = ["Avocado", "Banana", "Coconut", "Durian", "Kiwi"];
            data.splice(1, 2, "Lemon");
            console.log(data);
            return `ผลลัพธ์หลังใช้ splice(): <br><span style="color: #fff;">[ '${data.join("', '")}' ]</span>`;
        }
    },
    4: {
        title: "ข้อที่ 4: การวนลูปและการตรวจสอบเงื่อนไข (Loop & If-else)",
        execute: () => {
            const scores = [70, 5, 75, 10, 80, 95, 25, 30, 15, 45];
            let resultHTML = "";
            for (let score of scores) {
                let status = score >= 50 ? "<span style='color: #54ff4bff;'>ผ่าน</span>" : "<span style='color: #ff3232ff;'>ไม่ผ่าน</span>";
                resultHTML += `คะแนน ${score} : ${status}<br>`;
            }
            console.log(scores);
            return resultHTML;
        }
    },
    5: {
        title: "ข้อที่ 5: การเขียนโปรแกรมเชิงวัตถุ (OOP) เบื้องต้น",
        execute: () => {
            class Student {
                constructor(stdID, stdName, dept, fac) {
                    this.stdID = stdID;
                    this.stdName = stdName;
                    this.dept = dept;
                    this.fac = fac;
                }
                study() {
                    return `นักศึกษา <strong>${this.stdName}</strong> รหัส ${this.stdID}<br>คณะ${this.fac} สาขา${this.dept} <br><span style="color: #facc15;">=> กำลังเรียนอยู่...</span>`;
                }
            }
            const student1 = new Student("660001", "กิตติ", "วิทยาการคอมพิวเตอร์", "วิทยาศาสตร์และเทคโนโลยี");
            console.log(student1);
            return student1.study();
        }
    }
};

function showExercise(exerciseNumber) {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const clickedButton = document.querySelector(`.btn[data-exercise="${exerciseNumber}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }

    const exercise = exercisesData[exerciseNumber];
    const titleElement = document.getElementById('exercise-title');
    const outputElement = document.getElementById('output');

    if (exercise) {
        titleElement.innerHTML = exercise.title;
        outputElement.innerHTML = exercise.execute();
    } else {
        titleElement.innerHTML = "เกิดข้อผิดพลาด";
        outputElement.innerHTML = "<p class='placeholder'>เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง</p>";
    }
}

window.onload = () => {
    showExercise(0);
};