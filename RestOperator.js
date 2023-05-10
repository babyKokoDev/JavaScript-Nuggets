const fruits = ['apple', 'orange', 'lemon', 'banana']
const [first, ...rest] = fruits
console.log(first, rest)

const person = {name : 'john', lastName : 'smith', job : 'developer'}

const {name} = person
console.log(name)