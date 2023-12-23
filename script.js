// const users = [
//     {
//         id:1,
//         username: 'rasif',
//         age : 56,
//         info: {
//             city : 'Baku',
//             street : 'Nizami',
//             country : 'AZE',
//         }
//     },

//     {
//         id:2,
//         username: 'nihad',
//         age : 21,
//         info: {
//             city : 'Baku',
//             street : 'Nizami',
//             country : 'AZE',
//         }
//     },
//     {
//         id:3,
//         username: 'rafig',
//         age : 12,
//         info: {
//             city : 'Baku',
//             street : 'Nizami',
//             country : 'AZE',
//         }
//     },
//     {
//         id:4,
//         username: 'yusif',
//         age : 5,
//         info: {
//             city : 'Baku',
//             street : 'Beshir seferoglu',
//             country : 'AZE',
//         }
//     },

//     {
//         id:5,
//         username: 'rasif',
//         age : 15,
//         info: {
//             city : 'Baku',
//             street : 'Nizami',
//             country : 'AZE',
//         }
//     },

//     {
//         id:6,
//         username: 'heydar',
//         age : 56,
//         info: {
//             city : 'Baku',
//             street : 'Nizami',
//             country : 'AZE',
//         }
//     },

//     {
//         id:7,
//         username: 'nazim',
//         age : 21,
//         info: {
//             city : 'Baku',
//             street : 'hezi aslaaniv',
//             country : 'AZE',
//         }
//     },
//     {
//         id:8,
//         username: 'messi',
//         age : 12,
//         info: {
//             city : 'Baku',
//             street : 'Islam safarli',
//             country : 'AZE',
//         }
//     },
//     {
//         id:9,
//         username: 'ronaldo',
//         age : 5,
//         info: {
//             city : 'Baku',
//             street : 'abbas sehet',
//             country : 'AZE',
//         }
//     },

//     {
//         id:10,
//         username: 'maga',
//         age : 15,
//         info: {
//             city : 'Baku',
//             street : 'Nizami',
//             country : 'AZE',
//         }
//     }

// ]

// const result = users.reduce((acc,item,index) => acc + index, 0)
// console.log(result);

// //2
// const result2 = users.sort((a,b) => a.age-b.age)
// console.log(result2);
// const result3 = users.sort((a,b) => a.info.street.localeCompare(b.info.street))
// console.log(result3);

// //
// const cavab1 = users.reverse()
// console.log(cavab1);
// //
// const cavab2 = users.filter((item,index) => item.username.length >= 6)
// console.log(cavab2);
// //
// const netice = users.find((item,index) => item.age >25)
// console.log(netice);
// //
// const netice1 = users.map((item => item.age + ' this is my age'))
// console.log(netice1);
// //


// let adlar = 'rafig mammadzada'

// const result55 = adlar.slice(0,1).toUpperCase() + adlar.slice(1,6).toLowerCase() +adlar.slice(6,7).toUpperCase() + adlar.slice(7)
// console.log(result55);
// const result68 = adlar.slice(0,5).toLowerCase() + adlar.slice(5).toUpperCase()
// console.log(result68);

////
let user = 'Rafig Mammadzada'
const user1 = user.split(' ')
console.log(user1);
const user2 = user.split('')
console.log(user2);
const user3 = user.split('a')
console.log(user3);
const user4 = user.split(',')
console.log(user4);



///
const studentarr = ['rafig', 'nicat','mehemmed','heydar' , 'abbas']

 console.log((item) => `username: ${studentarr}`);

const studentsText = studentarr.join(' ')
console.log(studentsText);
