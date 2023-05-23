const fruits = ['apple', 'orange', 'lemon', 'banana']
const [first, ...restOfFruits] = fruits
console.log(first, restOfFruits)
const specificFruits = restOfFruits.find((fruit)=>fruit === "lemon")
console.log(specificFruits)
const person = {name : 'john', lastName : 'smith', job : 'developer'}

const {name, ...rest} = person
console.log(name, rest)

const getAverage = (name, ...scores) => {
    console.log(name)
    const average = scores.reduce((total, item)=>{
        total += item/scores.length
        return total
    }, 0)
    console.log(average)
}
const total = [89,76,81,100]
getAverage("Bimpe", ...total)