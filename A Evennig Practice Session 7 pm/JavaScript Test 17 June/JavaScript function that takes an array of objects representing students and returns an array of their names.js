function getStudentNames(students) {
    return students.map(student => student.name);
  }
  
  // Example usage
  const students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Sam', age: 19 }
  ];
  
  console.log(getStudentNames(students)); // Output: ['John', 'Jane', 'Sam']
  