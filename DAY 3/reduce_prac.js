const grades = [54,90,95,77,34];

const highestGrade = grades.reduce((prev, next) => {
    return Math.max(prev, next);
})

console.log(highestGrade);