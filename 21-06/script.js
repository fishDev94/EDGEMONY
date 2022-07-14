(function () {
  const names = ["Luca", "Gabriele", "Roberta", "Pippo", "Pluto"];

  const indexPlusName = (element, index, array) => `${index + 1} - ${element}`;
  const indexReverse = (_, index, array) => array.length - 1 - index;
  const nameReverse = (element, index, array) => {
    return array[array.length - 1 - index];
  };
  const namesToList = names.map(indexPlusName);
  const indexToList = names.map(indexReverse);
  const nameReverted = names.map(nameReverse);

  console.log(namesToList);
  console.log(indexToList);
  console.log(nameReverted);
})();
