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
// let user = 'Rafig Mammadzada'
// const user1 = user.split(' ')
// console.log(user1);
// const user2 = user.split('')
// console.log(user2);
// const user3 = user.split('a')
// console.log(user3);
// const user4 = user.split(',')
// console.log(user4);



// ///
// const studentarr = ['rafig', 'nicat','mehemmed','heydar' , 'abbas']

//  console.log((item) => `username: ${studentarr}`);

// const studentsText = studentarr.join(' ')
// console.log(studentsText);

// let age = 17
//     age > 22
//     ? console.log('1')
//     : console.log('2');

// //



//     let user = 'Rafig'
//     user.toLowerCase().startsWith('r')
//     ? console.log('1')
//    : console.log('2');
//    //
// user.endsWith('g')
// ? console.log('1')
// : console.log('2');


// //

//     function sumNum() {
//        let a =8
//        let b =9
//         console.log(a + b);
//     }
//     sumNum()

//     function sumNum1() {
//         return 8 + 9
        
//     }
//     console.log(sumNum1());

// //

// function multNum() {
//     a =19 
//     b =59
//     c = 9
//     console.log(a * b * c);
// }
// multNum()

// function multNum1() {
//     return 19 * 59 * 9
// }
// console.log(multNum1());
// //

// const arr = [1,2,3,4,5,6,7]
// function getavg(anyarray) {
// let sum6 = 0
// anyarray.map((age) => sum6 += age)
// return Math.round(sum6 / anyarray.length)
// }
// console.log(getavg(arr));


// //
// function getusers () {
// const result = studentarr.filter(name => name.startsWith('r'));
// return result;
// }
// console.log(getusers(studentarr));


// //


// function getusers1 () {
//     const result1 = studentarr.filter(name => name.length > 5);
//     return result1;
//     }
//     console.log(getusers1(studentarr));


// for (let i = 0; i <21;i++) {
//     console.log(i);
// }

// let myname = 'rafig'
// for (let i = 0; i < myname.length; i++){
//     console.log(myname[i]);
// }

// for (let i = 0; i <20 ; i++){
//     if (i % 2)
//     console.log(i);
// }
// for (let a = 0; a <20 ; a++){
//     if (a % 2 == 0)
//     console.log(a);
// }
















