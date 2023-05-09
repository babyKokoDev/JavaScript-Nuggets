const bob = {
    first : 'bob',
    last : 'sanders',
    city: 'chicago',
    siblings : {
        sister: 'jane'
    }
}

const {siblings : {sister}} = bob

console.log(sister)