const name = document.getElementById("name");
const age = document.getElementById("age");
const grade = document.getElementById("grade");
const student_id = document.getElementById("id");

const request_type = document.getElementById("request_type");
const fetch_btn = document.getElementById("fetch");
const output = document.getElementById("output");

fetch_btn.addEventListener("click", (e) => {
    // get all students
    if (request_type.value === "GET") {
        fetch("http://localhost:8080/students")
            .then((res) => res.json())
            .then((data) => {
                data.students.map((student) => {
                    console.log(student);
                });
            });
    }

    // post new student
    if (request_type.value === "POST") {
        console.log(name.value, age.value, grade.value, student_id.value);
        fetch("http://localhost:8080/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.value,
                age: age.value,
                grade: grade.value,
                student_id: student_id.value,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    // get student by id
    if (request_type.value === "GET-ID") {
        fetch(`http://localhost:8080/students/${student_id.value}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }

    // update student
    if (request_type.value === "UPDATE") {
        fetch(`http://localhost:8080/students/${student_id.value}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.value,
                age: age.value,
                grade: grade.value,
                student_id: student_id.value,
            }),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }

    // delete student
    if (request_type.value === "DELETE") {
        fetch(`http://localhost:8080/students/${student_id.value}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    }
});