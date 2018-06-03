function getReport(studentGrades) {
  // only code here..
  }

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', failed: [ 'Siti', 'Aaron' ], passed: [ 'John' ] },
  { classCode: 'B', failed: [ 'Mike', 'Osass' ], passed: [] },
  { classCode: 'C', failed: [ 'Arthur' ], passed: [ 'Budi', 'Yolo' ] },
]
*/
