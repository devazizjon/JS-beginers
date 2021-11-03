// console.log(1); //Sinxron
// setTimeout(() => {
//     console.log(2); //Assinxron
// }, 0)
// console.log(3); //Sinxron

const user = {
    name: 'Mohina',
    surname: 'Jo`rayeva',
    age: 21,
    jop: 'Doctor'
}
const friends = [{
        name: 'Sarvarjon',
        surname: 'Xayrullayev',
        age: 20,
        jop: 'Doctor'
    },
    {
        name: 'Sardor',
        surname: 'Rashidov',
        age: 21,
        jop: 'taxi'
    },
    {
        name: 'Azizjon',
        surname: 'Mavlonov',
        age: 21,
        jop: 'Military'

    }
]
const getUser = (ms) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(user)
        }, ms)
    })

}
getUser(1000).then((data) => {
    console.log(`User keldi`, data);
})
const getFrindes = (ms) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(friends)
        }, ms)
    })

}
getFrindes(2000).then((data) => {
    console.log(`Frindes keldi`, data);
})

////================================================================Pading error
// const getUser = (ms) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(user)
//         }, ms)
//     })

// }

// const getFrindes = (ms) => {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(friends)
//         }, ms)
//     })

// }
// function name(getFrindes,getUser) {
//     console.log(getFrindes(1000),getUser(1000));
// }
// name(getFrindes,getUser)
// async function name(getFrindes,getUser) {
//     let frindes =await getFrindes(1000)
//     let user =await getUser(1000)
//     console.log(user,frindes);
// }
// name(getFrindes,getUser)