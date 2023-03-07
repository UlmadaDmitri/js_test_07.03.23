var students = [
    {name: "Ion", grades: [10, 6, 9, 8]},
    {name: "Маrin", grades: [6, 6, 5, 6]},
    {name: "Victor", grades: [9, 9, 9, 10]},
    {name: "Dunitru", grades: [5, 5, 5, 5]},
    {name: "Nicolae", grades: [5, 5, 3, 5]}
];

function getAverageGrade(student) {
    var sum = 0;
    for (var i = 0; i < student.grades.length; i++) {
        sum += student.grades[i];
    }
    return sum / student.grades.length;
}

function displayStudentGrades() {
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var averageGrade = getAverageGrade(student);
        console.log(student.name + ": " + averageGrade);
    }
}

function displayStudentsWithLowGrades() {
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var averageGrade = getAverageGrade(student);
        if (averageGrade < 5) {
            console.log(student.name);
        }
    }
}

function getClassAverageGrade() {
    var sum = 0;
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        sum += getAverageGrade(student);
    }
    return sum / students.length;
}

function displayStudentsAboveClassAverage() {
    var classAverageGrade = getClassAverageGrade();
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
        var averageGrade = getAverageGrade(student);
        if (averageGrade > classAverageGrade) {
            console.log(student.name);
        }
    }
}

displayStudentGrades();
displayStudentsWithLowGrades();
displayStudentsAboveClassAverage();