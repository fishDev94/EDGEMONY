const studentBase = {
    course: 'Edgemony'
  };
  
  console.log(studentBase.name);
  
  const names = ['Marco', 'Eleonora', 'Martina', 'Federica'];
  
  const students = names.map(function (name) {
    const newStudent = Object.create(studentBase);
    newStudent.name = name;
  
    return newStudent;
  });
  
  console.clear();