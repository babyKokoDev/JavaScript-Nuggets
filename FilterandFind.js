// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on consitions
// Find - returns single instance (object), returns first match, if no match - undefined



const people = [
    { name : 'bob', age : 20, position : 'developer'},
    { name : 'peter', age : 25, position : 'designer'},
    { name : 'susy', age : 30, position : 'the boss'},
    { name : 'anna', age : 35, position : 'intern'},
]

const youngPeople = people.filter((person)=>{
    // if (person.age < 30){
    //     return true
    // }
    return person.age < 30
})

console.log(youngPeople)

const developer = people.filter((person)=> person.position === 'developer')
console.log(developer)

