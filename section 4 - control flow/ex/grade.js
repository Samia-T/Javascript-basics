const marks = [80, 80, 50];
//avg = 70

//1-59: F...
//90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const avg = calculateAverage(marks);
    if (avg < 60) return 'F';
    else if (avg < 70) return 'D';
    else if (avg < 80) return 'C';
    else if (avg < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;
    for (let i of array)
        sum += i;
    return sum/array.length;
}