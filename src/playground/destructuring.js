// const person = {
//     name: 'Andrew',
//     age: 21,
//     location:{
//         city: 'new york',
//         temp: 90
//     }
//   }
  
// console.log({...person,name: 'Aditya'})


const book = {
    name:'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name:'Penguin'
    }
}

// const {name:publisherName = 'Selfpublished'} = book.publisher
// console.log(publisherName)

const arr = ["new york", "manhatten", "6th Street", "creepary"]
const [a,b, ...rest] = arr
console.log(a,b)
console.log(rest)
