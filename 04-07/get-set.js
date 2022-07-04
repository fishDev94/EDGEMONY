console.clear();

(function () {
  console.clear();

  const student = {
    course: 'Edgemony',
    firstName: 'Mario',
    lastName: 'Rossi',
    chicchiRicchi: function () {
      // console.log(this.firstName);
      return `Di fantasia`;
    },
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) { // "Luca Pagliaro"
      console.log(`setting fullName to: "${value}"`);

      if (typeof value !== 'string') {
        return console.error('Errore: un fullName deve essere una stringa');
      }

      if (!value.includes(' ')) {
        return console.error('Errore: un fullName deve avere uno spazio');
      }

      // const splittedNames = value.split(' ');
      // this.firstName = splittedNames[0];
      // this.lastName = splittedNames[1];

      const [firstName = 'Mario', lastName = 'Rossi'] = value.split(' '); // ["Luca", "Pagliaro"];
      this.firstName = firstName;
      this.lastName = lastName;
    },
    set nome(name) {
      this.firstName = name;
    }
  };

  // console.log(student.chicchiRicchi());

  student.fullName = 'Ciao';
  console.log('Full name:', student.fullName);

  student.nome = 'Caso';
  console.log('student.nome', student.nome);
  console.log('student.firstName', student.firstName);

  student.fullName = "Luca Pagliaro";
  console.log('this.firstName', student.firstName)
  console.log('this.lastName', student.lastName)


  /**
   *
   * Spread:
   *
   * 1)
   * scrivere una funzione che unisce le proprietà di due oggetti
   * obj1 + obj2 = { foo: 'bar', name: 'Mio nome' }
   *
   * 2) Opzionale
   * Miglioriamo la funzione ed aggiungiamo una proprietà di nostra scelta. Il tutto deve essere un one-line
   *
   * Destructoring:
   * 1) Usiamo il filter per prendere solo le stringe >= 10 caratteri da un array, usando il destructoring per prendere la length
   *
   * Get/Set
   * creiamo un oggetto shop come sotto, in cui avere una prop con get/set e:
   * - leggere _products nel getter
   * - sovrascrivere _products nel setter
   * - contestualmente quando usiamo il setter mostriamo tutti i prodotti nell'innerHTML di body
   *
   * shop.products = [{id: 1, name: 'TV', price: 40}, {id: 2, name: 'PC', price: 30}]
   * -> deve mettere dentro il body: <li>TV - 40€</li><li>PC - 30€</li>
   *
   * **/
  const obj1 = {foo: 'bar'};
  const obj2 = {name: 'Mio nome'};
  const shop = {
    _products: [],
    get products(){

    },
    set products(val){

    }
  }



})();
