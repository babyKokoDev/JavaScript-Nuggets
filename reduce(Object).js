// Reduce Objects

// Cart Example
const cart = [
    {
        title : 'Samsung Galaxy S7',
        price : 99.99,
        amount: 1

    },
    {
        title : 'google pixel',
        price : 499.99,
        amount: 2

    },
    {
        title : 'Xiaomi Redmi Note 2',
        price : 699.99,
        amount: 4

    },
    {
        title : 'Xiaomi Redmi Note 5',
        price : 399.99,
        amount: 3

    },

]

const total = cart.reduce((total, item)=>{
    const {amount, price} = item
    total.totalAmount += amount
    total.totalPrice += price
    return total
}, {totalAmount : 0, totalPrice : 0})

console.log(total)

// github repos example

const url = 'https://api.github.com/users/john-smilga/repos?per_page=100'