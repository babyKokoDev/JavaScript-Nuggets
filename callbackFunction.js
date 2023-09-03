function makeUpperCase(value) {
    console.log(value.toUpperCase());
}

// makeUpperCase('peter')

function reverseString(value){
    console.log(value.split('').reverse().join(''));
}

function handleName(name, cb){
    const fullName = `${name} smith`
    cb(fullName)
}

// handleName('Elijah', makeUpperCase)
// handleName('Elijah', reverseString)

handleName('Elijah', (value) => console.log(value))