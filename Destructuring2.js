const bob = {
    first : 'bob',
    last : 'sanders',
    city: 'chicago',
    siblings : {
        sister: 'jane'
    }
}


const {first, last, city, siblings :{sister}} = bob
console.log(first, last, city, sister)