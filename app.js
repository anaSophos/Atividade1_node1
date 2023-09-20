//import _ from 'lodash'
const _ = require('lodash');

const num = [9, 5, 3, 2, 3]

const ordenados = _.sortBy(num)
console.log(ordenados)

const removduplicados = _.uniqBy(num)
console.log(removduplicados)

const numePar = _.filter(num, (n) => n % 2 === 0)
console.log(numePar)

const numDobro = _.map(num, (n) => n * 2);
console.log(numDobro)

const soma = _.sum(num)
console.log(soma)
