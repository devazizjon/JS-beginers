// let array = ['assalomalekum', 'salom', 'salomalekum', 'valekum assalom']
// for (let index = 0; index < array.length; index++) {
//     let item = array[index];
//     alert(`${item}======${index}======${array} `); //s
// }




// let array = ['assalomalekum', 'salom', 'salomalekum', 'valekum assalom']
// array.forEach(function (item, index, array) {
//     alert(`${item}======${index}======${array} `); //
// })


// let array = ['assalomalekum', 'salom', 'salomalekum', 'valekum assalom']
// array.map(function (item, index, array) {
//     alert(`${item}======${index}======${array} `); //
//=============================================================massiv
// const array = [{
//         name: 'anna',
//         age: 21
//     },
//     {
//         name: 'Dildora',
//         age: 21
//     }
// ]
// for(let index=0;index<=array.length-1;index++) {
//     console.log(array[index].age);
// }
// array.forEach(function (item, index,array){
//     console.log(index,item,array);
// })

// array.map(function (item, index, array) {
//             console.log(index,item);
//         })

// =====================================================================Object1
// const person = {
//     name: 'Mohina',
//     age: 21,
//     jops: true,
//     obj: {
//         num: 44,
//         srt: 'Dildora'
//     }
// }
// const {
//     name,
//     age,
//     jops,
//     obj
// } = person
// obj.phone = 232323
// console.log(obj);

//==================Object 2=========================
// const object = {
//     name:'Mohina', 
//     age: 21,
//     number:998966
// }
// const obj = {
//     name1:'Dildora', 
//     age2: 20,
//     number3:998966
// }
// console.log({...object}.name);
// console.log({...object},{...obj});
// console.log({...object,...obj});
// const object2 = {
//     name1: 'Dildora',
//     name: 'Mohina',
//     age2: 20,
//     fer: 'liliy',
//     res: true
// }
// const {
//     name1,
//     name,
//     ...srr
// } = object2
// console.log(object2);



/////================================funcsiya
// let culc=(a,b)=>{
//     return a+b
// }
// console.log(culc(12,3));

// let culc=(a,b)=>a+b
// console.log(culc(6,4));


// let son =a=>console.log(a);
// son(4)
//======================Collbac hel

// let calc = (son, collback) => {
//     let sum = son + 3
//     collback(sum)
// }
// calc(7, (data) => {
//     console.log(data);
//     calc(5, (data) => {
//         console.log(data);
//         calc(7, (data) => {
//             console.log(data);
//             calc(13,(data)=>{
//                 console.log(data);
//             })
//         })
//     })
// })

// let son = (a,b)=>{
//     let sum = a +5
//     b(sum)
// }
// son(3,(data)=>{
//     console.log(data);
// })
// son(7,(data)=>{
//     console.log(data);
// })
// son(5,(data)=>{
//     console.log(data);
// })



// const call=(callback) => {
//     const person={
//         name:'Mohina', 
//         age:21
//     }
//     callback(person)
// }
// call((data)=>{
//     setTimeout(()=>{
//         console.log('Bazadan malumot keldi');
//         data.baby=true;
//         return func (data);
//     },2000) 
// })

// let func=(data)=>{
//     console.log(data);

// }











////////////////////////////////////////////////////////////////Assinxron Sinxron Function
// console.log(1); //Sinxron
// setTimeout(() => {
//     console.log(2); //Assinxron
// }, 0)
// console.log(3); //Sinxron

///========================================================Promiss
// const func = new Promise((resolve, reject) => {
//     let a = 1
//     let b = 2
//     reject(a + b)
// })
// func.then((data) => {
//     console.log(data);
// })
// func.catch((e) => {
//     console.log(e);
// })

// let func = new Promise((resolve, reject) => {
//     const person={
//         name:'Mohina', 
//         age:21,

//     }
//     setTimeout(()=>{
//         person.Baby=true
//         resolve(person)
//     },2000)

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




// =====================================================================Massiv1
// const arr = ['Mohina', 21, 'Sevara', 11, 'Dildora', 22, '']
// const [name1, name2, name3, name4] = arr
// console.log(name1);


// =====================================================================Massiv2
// const arr = ['Mohina', 21, 'Sevara', 11, 'Dildora', 22, '']

// arr.map(function (item, index, array) {
//     console.log(index, item);
// })
// console.log(...arr);//stringify


// const arr = ['sadlk','asd','ads','adsads']
// const arry = ['sa','asd','sadd','fdf','fdf']
// const all=[...arr,...arry]
// console.log(all);//massiv
// console.log(...all);//string

// const arr = ['sadlk','asd','ads','adsads','jj','sddf','sdfsf','sdffsd','sdffs']

// const [name1,name2,name3,...res]=arr
// console.log(arr)

// const number = [2,2,7,7,4,5]
// let sum =(a,b,...res)=>{
//     console.log(res);
//     return a+b
// }
// console.log(sum(...number));
// =============================================================setTimeout
// setTimeout(() => {
//     console.log(2);  
// }, 5000)
// setInterval(() => {
//     console.log(2);
// }, 1000)

// let person =setInterval(() => {
//     console.log(55);
// },5000)


// let func=()=>{
//     console.log(12);
// }
// let aol=setInterval(func,2000)

///================================================================
// let num=5
// try{
//     num=7
//     throw(num>8)
// }catch(e){
//     num=num +3
//     console.log(e);
// } 
// console.log(num);


// try {
//     let a = 4

//     let b = 0
//     if (b == 0) {
//         throw Error(`Mahrajda nol bolishi mumkin emas`)
//     } else {
//         console.log(a / b);
//     }
// } catch (e) {
//     console.log(e.message);
// }












//===============================#######################################################################?V
// setTimeout(()=>{
//     const user ={
//         name: "Mohina",
//         age:33,
//         id:44
//     }
//     setTimeout(() => {
//         user.jop='Becend'
//     })
//     setTimeout(() => {
//         user.jop2='Frontend'

//     })
//     setTimeout(() => {
//         user.maps='germaniya'
//         console.log(user);
//     })
// })
// let prom=new Promise((resolve, reject) => {
//     // resolve()
//     reject()
// }).then(()=>{
//     console.log('malimot keldi');
// }).catch(()=>{
//     console.log('Error');
// })

//================================================================UNikall
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
//     return data.name;
// }).then((data) => {
//     console.log(data);
// })
//========================================================================================
// const p = new Promise((resolve, reject) => {
//     console.log(`malimotlar keldi`);
//     setTimeout(() => {
//         const user = {
//             name: "Mohina",
//             age: 33,
//             id: 44
//         }
//         // resolve(user)
//         reject(user)
//     }, 2000)

// })
// p.then((data) => {


//     return new Promise((resolve, reject) => {
//         data.nummber = 45454545
//         resolve(data.nummber)
//     })


// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })