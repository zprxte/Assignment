const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

const categoriesData = [
    {
        title: "Assignment 2: Basic HTML",
        desc: "โครงสร้างพื้นฐานของ HTML และการใช้ Elements เบื้องต้น",
        folder: "Ass2",
        items: [
            { id: "Home.html", title: "Home Page", desc: "หน้าเว็บหลัก" },
            { id: "List.html", title: "HTML List", desc: "การใช้งาน List ต่างๆ" },
            { id: "webvideo.html", title: "Web Video", desc: "การแทรกวิดีโอ" }
        ]
    },
    {
        title: "Assignment 3: HTML Link & Styles",
        desc: "การสร้างลิงก์เชื่อมโยงหน้าที่แตกต่างกัน",
        folder: "Ass3",
        items: [
            { id: "Index.html", title: "Index Template", desc: "หน้าแรก" },
            { id: "Home.html", title: "Home Page", desc: "ส่วนหน้าแรกของโปรเจกต์" },
            { id: "661517MyWebSite.html", title: "My Website", desc: "หน้าสร้างข้อมูลส่วนตัว" },
            { id: "661517home.html", title: "My Home", desc: "หน้า Home ส่วนตัว" },
            { id: "661517study.html", title: "Study Page", desc: "หน้าการศึกษา" },
            { id: "testTable.html", title: "HTML Table", desc: "การสร้างตาราง" },
            { id: "webvideo.html", title: "Web Video", desc: "การแทรกวิดีโอบนเว็บไซต์" }
        ]
    },
    {
        title: "Assignment 4 Part 1: Layout & Table",
        desc: "การจัด Layout ของเนื้อหาและการใช้งานตาราง HTML",
        folder: "Ass4",
        items: [
            { id: "HTMLLayout.html", title: "HTML Layout", desc: "การจัดการจัดวาง Layout" },
            { id: "index.html", title: "Main Index", desc: "หน้า Index หลัก" },
            { id: "home.html", title: "Home Page", desc: "หน้าแรกแบบแยกโฟลเดอร์" },
            { id: "list.html", title: "List Styling", desc: "รายการลิสต์เนื้อหา" },
            { id: "testTable.html", title: "Table Advanced", desc: "ข้อกำหนดของตารางขั้นสูง" },
            { id: "webvideo.html", title: "Web Video Layout", desc: "วิดีโอใน Layout" },
            { id: "661517Ass4.html", title: "Assignment 4 Result", desc: "แบบฝึกหัด Assignment 4 รวม" },
            { id: "661517MyWebSite.html", title: "My Website V2", desc: "เว็บไซต์ส่วนตัว (แบบใหม่)" },
            { id: "661517home.html", title: "My Home", desc: "หน้า Home ส่วนตัว" },
            { id: "661517study.html", title: "Study Page V2", desc: "หมวดการศึกษาแบบปรับแต่ง" }
        ]
    },
    {
        title: "Assignment 4 Part 2: CSS Box Model",
        desc: "ความเข้าใจและใช้งาน CSS Properties หลากหลายที่เกี่ยวกับโครงสร้างส่วนต่างๆ (Box Model)",
        folder: "Ass4Part2",
        items: [
            { id: "Border1.html", title: "Border 1", desc: "การจัดการเส้นขอบ" },
            { id: "Border2.html", title: "Border 2", desc: "การจัดการเส้นขอบเพิ่มเติม" },
            { id: "Display1.html", title: "Display 1", desc: "การจัดเลย์เอาต์ด้วย Display" },
            { id: "Document1.html", title: "Document 1", desc: "หน้า Document ส่วนที่ 1" },
            { id: "Document2.html", title: "Document 2", desc: "หน้า Document ส่วนที่ 2" },
            { id: "Icon1.html", title: "Icons Customization", desc: "การนำ Icons มาแสดงผล" },
            { id: "Margin1.html", title: "Margins", desc: "การขยายขอบเขตด้วย Margin" },
            { id: "Padding1.html", title: "Padding", desc: "การห่างขอบเขตภายใน Padding" },
            { id: "Text1.html", title: "Text Styling 1", desc: "การตกแต่งข้อความอักษร" },
            { id: "Text2.html", title: "Text Styling 2", desc: "รูปแบบตัวอักษรขั้นสูง" },
            { id: "bg.html", title: "Background Styling", desc: "ตกแต่งพื้นหลังของเว็บไซต์" }
        ]
    },
    {
        title: "Assignment 4: Layout & CSS Styling",
        desc: "โปรเจกต์จัดวาง Layout พร้อม CSS ตกแต่ง",
        folder: "661517Ass4",
        items: [
            { id: "661517Ass4.html", title: "Assignment 4 Result", desc: "แบบฝึกหัด Assignment 4 รวมผล" },
            { id: "661517MyWebSite.html", title: "My Website", desc: "เว็บไซต์ส่วนตัวแนะนำตนเอง" },
            { id: "661517home.html", title: "My Home", desc: "หน้า Home ส่วนตัว" },
            { id: "661517study.html", title: "Study Page", desc: "หน้าหมวดการศึกษา" },
            { id: "HTMLLayout.html", title: "HTML Layout", desc: "การจัดวาง Layout ด้วย HTML" },
            { id: "index.html", title: "Main Index", desc: "หน้า Index หลัก" },
            { id: "home.html", title: "Home Page", desc: "หน้าแรกแบบแยกโฟลเดอร์" },
            { id: "list.html", title: "List Styling", desc: "รายการลิสต์เนื้อหา" },
            { id: "testTable.html", title: "Table Advanced", desc: "ตารางขั้นสูงแบบปรับแต่ง" },
            { id: "webvideo.html", title: "Web Video", desc: "การแทรกวิดีโอในเว็บไซต์" }
        ]
    },
    {
        title: "Assignment 5: Bootstrap UI Form",
        desc: "การสร้าง Form ตรวจสอบการใช้งานจากช่อง Input เบื้องต้น และ UI ด้วย Bootstrap 5",
        folder: "Assignment5",
        items: [
            { id: "HTMLForm.html", title: "Basic HTML Form", desc: "การสร้างฟอร์มกรอกข้อมูลทั่วไป" },
            { id: "FloatingLabel.html", title: "Floating Labels", desc: "Label ที่ลอยข้างบน" },
            { id: "FormControl1.html", title: "Form Control 1", desc: "จัดการ Input มาตรฐาน" },
            { id: "FormControl2.html", title: "Form Control 2", desc: "จัดการ Input มาตรฐาน (เพิ่ม)" },
            { id: "FormControl3.html", title: "Form Control 3", desc: "จัดการ Input มาตรฐาน (เพิ่ม)" },
            { id: "FormCheckBox.html", title: "Checkbox Form", desc: "ตัวเลือกเช็คบ็อกซ์" },
            { id: "FormCheckInline.html", title: "Inline Checkbox", desc: "ตัวเลือกเช็คบ็อกซ์แบบเรียงแถว" },
            { id: "FormRadio1.html", title: "Radio Buttons", desc: "ปุ่มเลือกแบบเรดิโอ" },
            { id: "FormRadio2.html", title: "Radio Buttons 2", desc: "ปุ่มเรดิโอตัวเลือกอีกแบบ" },
            { id: "FormSelect1.html", title: "Select Element 1", desc: "แบบฟอร์ม Select พื้นฐาน" },
            { id: "FormSelect2.html", title: "Select Element 2", desc: "แบบฟอร์ม เลือกและค้นหา" },
            { id: "FormSelect3.html", title: "Select Element 3", desc: "แก้ไขขนาดของ Select" },
            { id: "FormSwitch.html", title: "Toggle Switch Form", desc: "สวิตซ์เปิด-ปิด ในฟอร์ม" },
            { id: "InputGroup1.html", title: "Input Group 1", desc: "จัดกลุ่มช่องกรอกข้อมูลเข้าด้วยกัน" },
            { id: "InputGroup2.html", title: "Input Group 2", desc: "แทรกปุ่มเข้ากับ Input Group" },
            { id: "InputGroup3.html", title: "Input Group 3", desc: "เพิ่มขนาดของ Input Group" },
            { id: "InputGroup4.html", title: "Input Group 4", desc: "ช่องตัวเลือกร่วมกับ Input Group" },
            { id: "ButtonGroup.html", title: "Button Group", desc: "การผูกกลุ่มปุ่มเข้าด้วยกัน" }
        ]
    },
    {
        title: "Assignment 6: Bootstrap Elements",
        desc: "เพิ่มเติมเกี่ยวกับ Bootstrap 5 Elements เล็กๆ",
        folder: "Ass5BS2",
        items: [
            { id: "Button1.html", title: "Button Styling", desc: "ประเภทต่างๆ ของปุ่ม Bootstrap" },
            { id: "ButtonGroup1.html", title: "Button Groups", desc: "จับกลุ่มปุ่มเมนู" }
        ]
    },
    {
        title: "Assignment 7: Bootstrap Flexbox",
        desc: "การใช้คลาส Flexbox สำเร็จรูปของ Bootstrap 5 เพื่อจัดระเบียบ เลย์เอาต์ ได้สะดวกยิ่งขึ้น",
        folder: "BS5-4",
        items: [
            { id: "align-content-column.html", title: "Align Content Column", desc: "การจัดแนวเนื้อหาแนวตั้งแบบแกนตั้ง" },
            { id: "align-content-row.html", title: "Align Content Row", desc: "การจัดแนวเนื้อหาแบบแนวขวาง" },
            { id: "align-items-column.html", title: "Align Items Column", desc: "จัดไอเทมแกน Y ด้วย Column" },
            { id: "align-items-row.html", title: "Align Items Row", desc: "จัดไอเทมแกน X ด้วย Row" },
            { id: "align-self.html", title: "Align Self", desc: "จัดวาง Alignment แบบอิสระเจาะจง" },
            { id: "d-flex.html", title: "Display Flex", desc: "การเปิดการใช้งาน Flexbox" },
            { id: "flex-direction.html", title: "Flex Direction", desc: "เปลี่ยนทิศทางการแสดงผล Flex" },
            { id: "flex-grow.html", title: "Flex Grow", desc: "การเพิ่มขนาดขยายตารางเต็ม" },
            { id: "flex-wrap.html", title: "Flex Wrap", desc: "จำกัดหรือขึ้นบรรทัดใหม่ด้วย Wrap" },
            { id: "justify-content-column.html", title: "Justify Column", desc: "จัดตำแหน่งช่องว่างระหว่างเนื้อหาแนวแกนตั้ง" },
            { id: "justify-content-row.html", title: "Justify Row", desc: "จัดตำแหน่งช่องว่างระหว่างเนื้อหาแนวแกนนอน" }
        ]
    },
    {
        title: "Assignment 7: Bootstrap Form Survey",
        desc: "แบบสำรวจความต้องการฝึกงานด้วย Bootstrap 5 Form ขั้นสูง พร้อม Dynamic Select",
        folder: "Assignment7",
        items: [
            { id: "Assignment7.html", title: "Internship Survey Form", desc: "แบบสำรวจความต้องการไปฝึกงาน (Bootstrap)" }
        ]
    },
    {
        title: "Assignment 8-1: Bootstrap Grid & Responsive",
        desc: "จัดการหน้า Responsive เบื้องต้นของคอนเทนต์ทั้งหมดโดย Grid Style ขั้นสูงของ Bootstrap 5",
        folder: "BS5Ass7",
        items: [
            { id: "Breakpoint1.html", title: "Breakpoint 1", desc: "ทดสอบหน้าจอขาดต่างๆ (XS)" },
            { id: "Breakpoint2.html", title: "Breakpoint 2", desc: "Breakpoints แบบเฉพาะตัว 2" },
            { id: "Breakpoint3.html", title: "Breakpoint 3", desc: "Breakpoints แบบเฉพาะตัว 3" },
            { id: "Breakpoint4.html", title: "Breakpoint 4", desc: "Breakpoints แบบเฉพาะตัว 4" },
            { id: "Breakpoint5.html", title: "Breakpoint 5", desc: "Breakpoints แบบเฉพาะตัว 5" },
            { id: "Breakpoint6.html", title: "Breakpoint 6", desc: "Breakpoints แบบเฉพาะตัว 6" },
            { id: "Breakpoint7.html", title: "Breakpoint 7", desc: "Breakpoints แบบเฉพาะตัว 7" },
            { id: "Breakpoint8.html", title: "Breakpoint 8", desc: "Breakpoints แบบเฉพาะตัว 8" },
            { id: "Grid1.html", title: "Grid System 1", desc: "ใช้งานหน้าจอด้วย Grid System" },
            { id: "Grid2.html", title: "Grid System 2", desc: "ปรับความกว้างอัตโนมัติ" },
            { id: "Grid3.html", title: "Grid System 3", desc: "จัดการ Col และ Row ให้ซ้อนกันได้" },
            { id: "Gutter1.html", title: "Grid Gutter 1", desc: "ระยะห่างระหว่าง Grid Columns" },
            { id: "Gutter2.html", title: "Grid Gutter 2", desc: "ตกแต่งระยะห่าง G ขั้นสูงขึ้น" },
            { id: "Responsive1.html", title: "Responsive Media 1", desc: "ออกแบบโปรเจค Responsive" },
            { id: "Responsive2.html", title: "Responsive Layout 2", desc: "Layout สัดส่วนตาราง" },
            { id: "Responsive3.html", title: "Responsive Utilities", desc: "ซ่อนและแสดงตามขนาดจอ" },
            { id: "Responsive4.html", title: "Responsive Mixed", desc: "หน้าเว็บแบบสมบูรณ์" }
        ]
    },
    {
        title: "Assignment 8-2: JavaScript Basic",
        desc: "รวมผลงานและแบบฝึกหัด JavaScript พื้นฐาน Loop, Array, เงื่อนไข Conditionals",
        folder: "661517JavascriptAssignment8",
        items: [
            { id: "Arrayjs", title: "Array.js", desc: "การทำงานพื้นฐานกับ Array" },
            { id: "FilterMapForEachFind", title: "Filter Map ForEach...", desc: "ฟังก์ชันจัดการอาร์เรย์ (Methods)" },
            { id: "Reverse", title: "Reverse Function", desc: "การกลับลำดับข้อมูลอาร์เรย์" },
            { id: "Sort", title: "Sort Data", desc: "การเรียงลำดับข้อมูลอาร์เรย์" },
            { id: "customer1", title: "Customer 1", desc: "แบบฝึกหัด Customer ตอนที่ 1" },
            { id: "customer2", title: "Customer 2", desc: "แบบฝึกหัด Customer ตอนที่ 2" },
            { id: "customer3", title: "Customer 3", desc: "แบบฝึกหัด Customer ตอนที่ 3" },
            { id: "do while1", title: "Do While Loop 1", desc: "การใช้งาน Do While Loop 1" },
            { id: "do while2", title: "Do While Loop 2", desc: "การใช้งาน Do While Loop 2" },
            { id: "entries", title: "Array Entries", desc: "การใช้งานคลาส Entries" },
            { id: "for", title: "For Loop Basic", desc: "การวนรอบมาตรฐาน For Loop" },
            { id: "for in1", title: "For In Loop 1", desc: "การใช้งาน For In ตอนที่ 1" },
            { id: "for in2", title: "For In Loop 2", desc: "การใช้งาน For In ตอนที่ 2" },
            { id: "for of1", title: "For Of Loop 1", desc: "การใช้งาน For Of ตอนที่ 1" },
            { id: "for of2", title: "For Of Loop 2", desc: "การใช้งาน For Of ตอนที่ 2" },
            { id: "if1", title: "If Condition 1", desc: "เงื่อนไข If Condition ตอนที่ 1" },
            { id: "if2", title: "If Condition 2", desc: "เงื่อนไข If Condition ตอนที่ 2" },
            { id: "if3", title: "If Condition 3", desc: "เงื่อนไข If Condition ตอนที่ 3" },
            { id: "include1", title: "Includes Method 1", desc: "การใช้งาน Includes ตอนที่ 1" },
            { id: "include2", title: "Includes Method 2", desc: "การใช้งาน Includes ตอนที่ 2" },
            { id: "pop", title: "Array Pop", desc: "ลบสมาชิกตัวสุดท้ายของอาร์เรย์" },
            { id: "push", title: "Array Push", desc: "เพิ่มสมาชิกท้ายสุดเข้าอาร์เรย์" },
            { id: "shift", title: "Array Shift", desc: "ลบสมาชิกตัวแรกออกของอาร์เรย์" },
            { id: "slice1", title: "Array Slice 1", desc: "การตัดแบ่งอาร์เรย์ (Slice) 1" },
            { id: "slice2", title: "Array Slice 2", desc: "การตัดแบ่งอาร์เรย์ (Slice) 2" },
            { id: "slice3", title: "Array Slice 3", desc: "การตัดแบ่งอาร์เรย์ (Slice) 3" },
            { id: "splice1", title: "Array Splice 1", desc: "การแก้ไขอาร์เรย์ด้วย Splice 1" },
            { id: "splice2", title: "Array Splice 2", desc: "การแก้ไขอาร์เรย์ด้วย Splice 2" },
            { id: "splice3", title: "Array Splice 3", desc: "การแก้ไขอาร์เรย์ด้วย Splice 3" },
            { id: "switch", title: "Switch Case Basic", desc: "การใช้เงื่อนไข Switch Case" },
            { id: "unshift", title: "Array Unshift", desc: "แทรกตัวแปรแรกเข้าอาร์เรย์" },
            { id: "values", title: "Array Values", desc: "การดึงค่า Values จากตัวแปร" },
            { id: "while", title: "While Loop", desc: "การวนรอบเงื่อนไข While Loop" }
        ]
    },
    {
        title: "Form: Bootstrap Survey Form",
        desc: "แบบฟอร์มสำรวจข้อมูลด้วย Bootstrap 5 รวม Input, Select, Checkbox, Switch และอื่นๆ",
        folder: "Form",
        items: [
            { id: "Form.html", title: "Survey Form", desc: "แบบสำรวจความต้องการไปฝึกงาน (Full Form)" }
        ]
    },
    {
        title: "JavaScript: Order Summary",
        desc: "แบบฝึกหัด JavaScript สรุปการสั่งซื้อสินค้าด้วยฟังก์ชัน",
        folder: "Javascript",
        items: [
            { id: "index.html", title: "Order Summary System", desc: "ระบบสรุปการสั่งซื้อด้วย JavaScript" }
        ]
    },
    {
        title: "NakhonPathom: Province Info",
        desc: "เว็บไซต์ข้อมูลจังหวัดนครปฐม ประวัติศาสตร์ สถานที่ท่องเที่ยว และของดีประจำจังหวัด",
        folder: "NakhonPathom",
        items: [
            { id: "index.html", title: "Nakhon Pathom Main", desc: "หน้าหลักข้อมูลจังหวัดนครปฐม" },
            { id: "one.html", title: "Tourist Attractions", desc: "สถานที่สำคัญและแหล่งท่องเที่ยว" },
            { id: "two.html", title: "Local Products", desc: "ของดีประจำจังหวัดนครปฐม" }
        ]
    },
    {
        title: "Travel: Central Thailand Tourism",
        desc: "เว็บไซต์สถานที่ท่องเที่ยวภาคกลาง ออกแบบด้วย Bootstrap 5 พร้อม Modal แสดงรายละเอียด",
        folder: "Travel",
        items: [
            { id: "Travel.html", title: "Central Thailand Travel", desc: "สถานที่ท่องเที่ยวในภาคกลางของประเทศไทย" }
        ]
    },
    {
        title: "WebDev: JavaScript Assignment 2",
        desc: "แบบฝึกหัด JavaScript ขั้นสูง Array, Filter, Map, Splice, Loop, OOP",
        folder: "WebDev",
        items: [
            { id: "index.html", title: "JS Exercise Dashboard", desc: "แดชบอร์ดแบบฝึกหัด JavaScript 5 หมวด" }
        ]
    },
    {
        title: "WebDev: JavaScript Assignment 3",
        desc: "แบบฝึกหัด JavaScript ขั้นสูง Array, Object, Confirm, Alert, Prompt",
        folder: "661517Assignment3",
        items: [
            { id: "index.html", title: "JS Exercise Dashboard 2", desc: "แดชบอร์ดแบบฝึกหัด JavaScript" }
        ]
    }

];

const container = document.getElementById('categories-container');

if (container) {
    categoriesData.forEach(category => {
        const section = document.createElement('div');
        section.className = 'category-section';

        const header = document.createElement('div');
        header.className = 'category-header';
        header.innerHTML = `
            <div>
                <h2 class="category-title">${category.title}</h2>
                <p class="category-desc">${category.desc}</p>
            </div>
        `;
        section.appendChild(header);

        const grid = document.createElement('div');
        grid.className = 'projects-grid';

        category.items.forEach((project, index) => {
            const card = document.createElement('a');

            if (category.folder === "661517JavascriptAssignment8") {
                card.href = `${category.folder}/${project.id}/index.html`;
            } else {
                card.href = `${category.folder}/${project.id}`;
            }

            card.className = 'project-card';
            card.style.animationDelay = `${(index * 0.05)}s`;

            card.innerHTML = `
                <div class="project-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.desc}</p>
                <div class="project-footer">
                    <span>ติตตามผลงาน</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
            `;
            grid.appendChild(card);
        });

        section.appendChild(grid);
        container.appendChild(section);
    });
}

const backToTopBtn = document.createElement('a');
backToTopBtn.href = "#";
backToTopBtn.className = "back-to-top";
backToTopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';

if (container) {
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });


    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}