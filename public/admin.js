let students = [];

function showMenu(menuId) {
    document.getElementById('resultMenu').style.display = 'none';
    document.getElementById('entryMenu').style.display = 'none';
    document.getElementById(menuId).style.display = 'block';
}

function hideMenus() {
    document.getElementById('resultMenu').style.display = 'none';
    document.getElementById('entryMenu').style.display = 'none';
    document.getElementById('outputContent').innerHTML = '';
}

function addOrUpdateStudent() {
    const rollno = parseInt(document.getElementById('rollno').value);
    const name = document.getElementById('name').value;
    const p_marks = parseInt(document.getElementById('p_marks').value);
    const c_marks = parseInt(document.getElementById('c_marks').value);
    const m_marks = parseInt(document.getElementById('m_marks').value);
    const e_marks = parseInt(document.getElementById('e_marks').value);
    const cs_marks = parseInt(document.getElementById('cs_marks').value);

    const per = (p_marks + c_marks + m_marks + e_marks + cs_marks) / 5.0;
    const grade = per >= 60 ? 'A' : per >= 50 ? 'B' : per >= 33 ? 'C' : 'F';

    const studentIndex = students.findIndex(st => st.rollno === rollno);

    if (studentIndex === -1) {
        students.push({ rollno, name, p_marks, c_marks, m_marks, e_marks, cs_marks, per, grade });
        alert("Student added!");
    } else {
        students[studentIndex] = { rollno, name, p_marks, c_marks, m_marks, e_marks, cs_marks, per, grade };
        alert("Student updated!");
    }
    document.getElementById('studentForm').reset();
}

function displayAllStudents() {
    if (students.length === 0) {
        document.getElementById('outputContent').innerHTML = "No student records found.";
        return;
    }
    let output = "<table border='1'><tr><th>Roll No</th><th>Name</th><th>Physics</th><th>Chemistry</th><th>Maths</th><th>English</th><th>CS</th><th>%</th><th>Grade</th></tr>";
    students.forEach(st => {
        output += `<tr><td>${st.rollno}</td><td>${st.name}</td><td>${st.p_marks}</td><td>${st.c_marks}</td><td>${st.m_marks}</td><td>${st.e_marks}</td><td>${st.cs_marks}</td><td>${st.per.toFixed(2)}</td><td>${st.grade}</td></tr>`;
    });
    output += "</table>";
    document.getElementById('outputContent').innerHTML = output;
}

function displayStudent() {
    const rollno = parseInt(document.getElementById('searchRollNo').value);
    const student = students.find(st => st.rollno === rollno);

    if (!student) {
        document.getElementById('outputContent').innerHTML = "Record not found.";
        return;
    }
    const output = `<h3>Report Card</h3><p>Roll Number: ${student.rollno}</p><p>Name: ${student.name}</p><p>Physics: ${student.p_marks}</p><p>Chemistry: ${student.c_marks}</p><p>Maths: ${student.m_marks}</p><p>English: ${student.e_marks}</p><p>Computer Science: ${student.cs_marks}</p><p>Percentage: ${student.per.toFixed(2)}%</p><p>Grade: ${student.grade}</p>`;
    document.getElementById('outputContent').innerHTML = output;
}

function deleteStudent() {
    const rollno = parseInt(document.getElementById('deleteRollNo').value);
    const index = students.findIndex(st => st.rollno === rollno);

    if (index === -1) {
        alert("Record not found.");
        return;
    }

    students.splice(index, 1);
    alert("Record deleted.");
    displayAllStudents();
}

