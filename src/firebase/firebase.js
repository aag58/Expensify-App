import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_API_KEY
  };

firebase.initializeApp(config); 

const database = firebase.database()

export {firebase, database as default}

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())   
// })
// // child changed
// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())   
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())   
// })

// database.ref('expenses').push({
//     description: 'phone bill',
//     note:'',
//     amount:'45325',
//     createdAt:'9876354647635'
// })


// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses=[]

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses=[]

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
//   })





//--------------------------------------------------------------------------------------------------------------------
// database.ref('notes/-LHeHVGvg1tHnhO83URo').remove()

// const onValueChange = database.ref().on('value', (snapshot)=>{
//     let ss = snapshot.val()
//     console.log(`${ss.name} is working at ${ss.job.company}`)
// }, (e)=>{
//     console.log('error fetching data', e)
// })

// setTimeout(()=>{
//     database.ref('job/company').set('Google')
// }, 3500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot)=>{
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e)=>{
//         console.log('error fetch the data', e);
//     })


// database.ref().set({
//     name: 'Aditya Desai',
//     age: 27,
//     stressLevel: 5,
//     job:{
//         title : 'software Developer',
//         company: 'Google'
//     },
//     location:{
//         country: 'United states',
//         city: 'Montain View'

//     }
// })


// database.ref().update({
//     stressLevel: 9,
//     'job/company' : 'Amazon',
//     'location/city': 'Seattle'
// })