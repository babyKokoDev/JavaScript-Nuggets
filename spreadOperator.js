const udemy = 'udemy'
const letters = [...udemy]
console.log(letters)
const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna']

const bestFriend = 'arnold'

const friends = [...boys, ...girls, bestFriend]
console.log(friends)

const newFriends = [...friends]
newFriends[0] = 'nancy'
console.log(newFriends)

const person = {name : 'john', job : 'developer'}
const newPerson = {...person, name : 'Elijah', job : 'senior developer'}
console.log(person)
console.log(newPerson)