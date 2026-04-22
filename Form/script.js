// ฐานข้อมูล: จับคู่ Value ของคณะ (1-13) กับ รายชื่อสาขา
const majorsData = {
    "1": ["หลักสูตรพยาบาลศาสตรบัณฑิต"],
    "2": ["หลักสูตรสังคมสงเคราะห์ศาสตรบัณฑิต"],
    "3": ["ภาษาอังกฤษ", "ภาษาอังกฤษและภาษาจีน", "การสื่อสารภาษาไทยเป็นภาษาที่สอง"],
    "4": ["หลักสูตรบัญชีบัณฑิต", "หลักสูตรบริหารธุรกิจบัณฑิต", "การจัดการโลจิสติกส์และโซ่อุปทาน", "ธุรกิจจีน"],
    "5": ["วิทยาการคอมพิวเตอร์", "วิทยาศาสตร์การแพทย์", "ปัญญาประดิษฐ์", "วิทยาการหุ่นยนต์สุขภาพ (หลักสูตรนานาชาติ)"],
    "6": ["หลักสูตรเภสัชศาสตรบัณฑิต"],
    "7": ["นิติศาสตร์"],
    "8": ["เทคนิคการแพทย์"],
    "9": ["อาชีวอนามัยและความปลอดภัย", "การจัดการเวชระเบียนและเวชสถิติโรงพยาบาล", "สาธารณสุขชุมชน", "การบริการทางการแพทย์", "การจัดการและบรรเทาสาธารณภัย"],
    "10": ["กายภาพบำบัด"],
    "11": ["การแพทย์แผนจีน"],
    "12": ["หลักสูตรนิเทศศาสตบัณฑิต"],
    "13": ["ภาษาจีนธุรกิจ", "ภาษาและวัฒนธรรมจีน", "จีนศึกษา"]
};

// เมื่อมีการเปลี่ยนคณะ
document.getElementById('s1').addEventListener('change', function () {
    const facultyId = this.value;
    const majorContainer = document.getElementById('majorContainer');
    const majorSelect = document.getElementById('s3');

    majorSelect.innerHTML = '<option value="0" selected disabled hidden>-- กรุณาเลือกสาขาวิชา --</option>';

    if (majorsData[facultyId]) {
        majorsData[facultyId].forEach(function (major) {
            const option = document.createElement('option');
            option.value = major;
            option.textContent = major;
            majorSelect.appendChild(option);
        });
        majorContainer.style.display = 'block';
    } else {
        majorContainer.style.display = 'none';
    }
});

// แก้ไข Enter ให้ไปช่องถัดไป
document.querySelector('form').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        if (e.target.type !== 'submit' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            const focusableElements = 'input, select, textarea, button';
            const elements = Array.from(this.querySelectorAll(focusableElements))
                .filter(el => !el.disabled && el.style.display !== 'none');

            const index = elements.indexOf(e.target);
            if (index > -1 && index < elements.length - 1) {
                elements[index + 1].focus();
            }
        }
    }
});