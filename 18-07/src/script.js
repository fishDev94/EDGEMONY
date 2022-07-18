// const min = require ('lodash/min');

const _ = require('lodash');

const array = [2, 3, 4, 5, 6];

console.log(_.min(array));

const name = "Marco";

if (_.isString(name)) {
    console.log(name)
}
else {
    console.log("not name");
}