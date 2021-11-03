// let promise = new Promise((resolve, reject) => {
//     const person = {
//         id: 'adsa7878as787ds7d878d7s8s7d87sd87d87',
//         name: 'Mohina',
//         age: '20',
//         budget: '12000000$'
//     }
//     let url = "https://twitter.com"
//     if (url == 'https://twitter.com') {
//         setTimeout(() => {
//             resolve(person)

//         }, 1000)
//     }else{
//         reject(`Interal err server:500`)
//     }
// })
// promise.then((data) => {
//     console.log(data);
// })
//============================================================================
// let promise = new Promise((resolve, reject) => {
//     const person = {
//         id: 'adsa7878as787ds7d878d7s8s7d87sd87d87',
//         name: 'Mohina',
//         age: '20',
//         budget: '12000000$'
//     }
//     let url = "https://twitter.com"
//     if (url == 'https://twitter.com') {
//         setTimeout(() => {
//             resolve(person)

//         }, 1000)
//     } else {
//         reject(`Interal err server:500`)
//     }
// })
// promise.then((data) => {
//     data.surname = 'Jo`rayeva'
//     data.sitiy = 'Almalik'
//     // console.log(data);
//     return `${data.surname}  ${data.name} ${data.sitiy}`
//     // return data

// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })


//================================================================sleep


const sleep = (ms) => {
    console.log(`bazadan malumot keldi`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}
// sleep(1000).then(() => {
//     console.log('1 sekundda chiqdi')
// })
// sleep(2000).then(() => {
//     console.log('2 sekundda chiqdi')
// })
// sleep(3000).then(() => {
//     console.log('3 sekundda chiqdi')
// })
// sleep(4000).then(() => {
//     console.log(`4sekundda chiqdi`);
// })


Promise.all([sleep(1000), sleep(2000), sleep(3000), sleep(4000), ])
    .then((data) => {
        console.log('all ishladi');
    })
Promise.race([sleep(1000), sleep(2000), sleep(3000), sleep(4000), ])
    .then((data) => {
        console.log('race ishladi');
    })