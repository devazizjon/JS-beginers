// const func = new Promise((resolve, reject) => {
//     let a = 1
//     let b = 2
//     // reject(a + b)
//     resolve(a + b)
// })
// func.then((data) => {
//     let c=5
//     // console.log(data+3);
//     return data+c
// }).then((data) =>{
//     let e=2+3+2
//     // console.log(data);
//     return data/e
// }).then((data) =>{
//     console.log(data);
// })
// func.catch((e) => {
//     console.log(e);
// })

//============================================================================
// let func = new Promise((resolve, reject) => {
//     const person={
//         name:'Mohina', 
//         age:21,

//     }
//     setTimeout(()=>{
//         person.Baby=true
//         resolve(person)
//     },1000)

// })
// func.then((data)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             data.number=9999
//             resolve(data)
//         },2000)
//     })
// }).then((data)=>{
//     console.log(data);
// })
///================================================================
// setTimeout(()=>{
//     const user ={
//         name: "Mohina",
//         age:33,
//         id:44
//     }
//     setTimeout(() => {
//         user.jop='Becend'
//     },1000)
//     setTimeout(() => {
//         user.jop2='Frontend'

//     },2000)
//     setTimeout(() => {
//         user.maps='germaniya'
//         console.log(user);
//     },3000)
// })
///===================
// let prom=new Promise((resolve, reject) => {

//     // resolve()
//     reject()
// }).then(()=>{
//     console.log('malimot keldi');
// }).catch(()=>{
//     console.log('Error');
// })
//================================================================
// const p = new Promise((resolve, reject) => {
//     console.log(`malimotlar keldi`);
//     setTimeout(() => {
//         const user = {
//             name: "Mohina",
//             age: 33,
//             id: 44
//         }
//         resolve(user)
//     }, 2000)

// })
// p.then((data) => {
//     console.log(data);
//     return data.name;
// }).then((data) => {
//     console.log(data);
// })
//===============================
// const p = new Promise((resolve, reject) => {
//     console.log(`malimotlar keldi`);
//     setTimeout(() => {
//         const user = {
//             name: "Mohina",
//             age: 33,
//             id: 44
//         }
//         resolve(user)
//     }, 2000)

// })
// p.then((data) => {
//     console.log(data);

//     let  p2 = new Promise((resolve, reject) => {
//         data.nummber = 45454545
//         resolve(data.nummber)
//     })
//     p2.then((data) => {
//         console.log(data);
//     })
//     return data;
// }).then((data) => {
//     console.log(data);
// })
//==============================
const p = new Promise((resolve, reject) => {
    console.log(`malimotlar keldi`);
    setTimeout(() => {
        const user = {
            name: "Mohina",
            age: 33,
            id: 44
        }
        // resolve(user)
        reject(user)
    }, 2000)

})
p.then((data) => {


    return new Promise((resolve, reject) => {
        data.nummber = 45454545
        resolve(data.nummber)
    }).then((data) => {
        console.log(data);
    })


}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})