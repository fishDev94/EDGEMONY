(function () {
    const studentBase = {
      course: "Edgemony", // valore
      bootCampID: 4, // valore
      teachers: [
        // questo viene copiato per referenza
        {
          name: "Casimiro"
        }
      ]
    };
  
    console.log(studentBase.name);
  
    const names = ["Marco", "Eleonora", "Martina", "Federica"];
  
    const students = names.map(function (name) {
      // copia tutto quello che trovi dentro studentBase e mettigli la variabile name
      const newStudent = {...studentBase, name};
  
      // const newStudent = JSON.parse(JSON.stringify(studentBase));
      // newStudent.name = name;
  
      // for (let prop in studentBase) {
      //   newStudent[prop] = studentBase[prop];
      // }
  
      // const newStudent = { ...studentBase}; // copia i valori di studentBase
      // newStudent.name = name; // aggiungi prop name
  
      newStudent.name = name;
  
      return newStudent;
    });
  
    console.log(students);
  
    // console.clear();
  
    // Spread/Rest
    const obj = {...studentBase};
    console.log({obj});
  
    const array = [1, 2, 3, 4, 5];
    const newArr = [...array, 6, 7, 8];
    console.log({array, newArr});
  
    // console.log(window);
    // console.log(globalThis);
    return null;
  })()
  
  (function () {
    /**
     * It takes any number of arguments and logs them to the console
     * @param values - ['Marco', 'Eleonora', 'Martina', 'Federica']
     * @returns null
     */
    const logAll = function (...values) {
      console.log(values); // values è un array ['Marco', 'Eleonora', 'Martina', 'Federica']
      values.forEach(value => console.log(value));
  
      console.log(...values); // passare una lista di parametri al log con lo spread
  
      // for(let arg of arguments){
      //   // console.log(arg)
      //   console.log(arg);
      // }
  
      return null;
    }
  
    logAll('Marco', 'Eleonora', 'Martina', 'Federica');
    logAll(...['Marco', 'Eleonora', 'Martina', 'Federica']);
    logAll(...names);
  
  
  // Copiare array
    const classe1 = ['Richard', 'Lucia', 'Lorena'];
    const classe2 = ['Dalila', 'Gianpaolo', 'Claudio'];
  
    const arrayConcat = classe1.concat(classe2);
    const allStudents = ['Docente', ...classe1, 'Bidello', ...classe2];
  
    console.clear();
    console.log({arrayConcat, allStudents})
  
  /// Destructuring
  
    console.clear();
    const [firstName, ...others] = ['Richard', 'Lucia', 'Lorena'];
  
    console.log({firstName, others});
  
    const numbersAbove = [1, 4, 6, 61, 90].filter((number) => {
      return number > 50
    });
  
    // const firstAbove = numbersAbove[0];
    // const secondAbove = numbersAbove[1];
  
    const [firstAbove, secondAbove] = numbersAbove;
    console.log({numbersAbove, firstAbove, secondAbove});
  
  // const {length} = numbersAbove;
  // console.log({length})
    return null;
  })()