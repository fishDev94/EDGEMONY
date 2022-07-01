(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  actionFn = (element, index, array) => console.log(element);
  showEvenNumbers = (element, index, array) => element % 2 === 0;

  const elementList = array.forEach(actionFn);
  const evenNumbers = array.filter(showEvenNumbers);

  elementList;
  console.log(evenNumbers);
})();

(function () {
  const array = [10, 1, 2, 5, 6];
  const secondArray = [1, 2, 3, 4, 5, 6, 7, 8];

  sameNumber = (element, index, array) => secondArray.includes(element);
  //   sameNumber = (element, index, array) => secondArray.indexOf(element) > -1;

  console.log(array.filter(sameNumber));
})();

(function () {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  const futureFn = (element, index) => {
    setTimeout(() => {
      console.log(`Dopo ${index}s: ${element}`);
    }, 1000 * index);
  };

  array.forEach(futureFn);
})();
