const udemy = 'udemy'
// console.log(Array.from(udemy));

// const items = Array.from({length: 120}, (_, index)=>{
//   return index
// })

// const itemsPerPage = 14
// const pages = Math.ceil(items.length / itemsPerPage)

// const newItems = Array.from({length:pages}, (_, index)=>{
//     const start = index * itemsPerPage
//     const tempItems = items.slice(start, start + itemsPerPage)
//     return tempItems
// })
// console.log(newItems);


const items = Array.from({length : 120}, (_, index)=>{
    return index
})
 const itemsPerPage = 10
 const page = items.length / itemsPerPage
const newItems = Array.from({length : page}, (_, index)=>{
   const start = index * itemsPerPage
   const newArray = items.slice(start, start + itemsPerPage)
   return newArray
})

console.log(newItems)
