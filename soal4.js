function getReport(studentGrades) {
  // only code here..
  var newArr = [];
  var result = [];

  for (var i = 0; i < studentGrades.length; i++) {
    if (newArr.includes(studentGrades[i].classCode) === false) {
      newArr.push(studentGrades[i].classCode);
    }
  }

  for (var j = 0; j < newArr.length; j++) {
    var objScore = {};
    var passed = [];
    var failed = [];
    for (var k = 0; k < studentGrades.length; k++) {
      if (newArr[j] === studentGrades[k].classCode && studentGrades[k].score < 70) {
        failed.push(studentGrades[k].name);
      } else {
        if (newArr[j] === studentGrades[k].classCode && studentGrades[k].score >= 70) {
          passed.push(studentGrades[k].name);
        }
      }
    }

    objScore.classCode = newArr[j];
    objScore.passed = passed;
    objScore.failed = failed;
    result.push(objScore);
    // result.push({
    //   classCode: newArr[j],
    //   passed: passed,
    //   failed: failed
    // });
  }

  return result;
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
