// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on consitions
// Find - returns single instance (object), returns first match, if no match - undefined



const people = [
    { name : 'bob', age : 20, position : 'developer'},
    { name : 'peter', age : 25, position : 'designer'},
    { name : 'susy', age : 30, position : 'the boss'},
    { name : 'anna', age : 35, position : 'intern'},
]

const fruits = ['orange', 'pear', 'lemon']

const youngPeople = people.filter((person)=>{
    // if (person.age < 30){
    //     return true
    // }
    return person.age < 30
})

console.log(youngPeople)

const developer = people.filter((person)=> person.position === 'developer')
console.log(developer)


// No match
const seniorDevs = people.filter((person)=> person.position === 'senior devs')
console.log(seniorDevs)

// Find
const fruit = fruits.find(fruit=> fruit === 'lemon')
console.log(fruit)

const oldPerson = people.find((person)=> person.age > 35)
console.log(oldPerson)

// Multiple matches - first match
const randomPerson = people.find((person)=> person.age < 30)
console.log(randomPerson)

const anna = people.filter((person)=> person.name === 'anna')
console.log(anna[0].position)


