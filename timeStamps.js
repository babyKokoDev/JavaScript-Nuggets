console.log(new Date());

console.log(Date.now());

console.log(new Date().getTime());

console.log(new Date().valueOf());


// Create id's in learning apps
let people = []
people = [...people, {id : Date.now(), name : 'peter'}]

setTimeout(() => {
    people = [...people, {id : Date.now(), name : 'john'}]
    console.log(people);
}, 1000);

// Create/get dates
console.log(new Date(1695252309453));
const now = Date.now();
const futureDate = new Date(now + 1000 * 60 * 10)
console.log(futureDate);
console.log(new Date());

// Difference between dates
const firstDate = new Date()
const secondDate = new Date(2023, 8, 22)

const firstValue = firstDate.getTime()
const secondValue = secondDate.getTime()

console.log(firstValue, secondValue)

const timeDiff = secondValue - firstValue
console.log(Math.floor(timeDiff / (1000 * 60 * 60)));