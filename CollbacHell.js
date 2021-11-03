// let calc = (son, collback) => {
//     let sum = son + 3
//     collback(sum)
// }
// calc(7, (data) => {
//     console.log(data);
//     calc(5, (data) => {
//         console.log(data);
//         //     calc(7, (data) => {3
//         //         console.log(data);
//         //         calc(13,(data)=>{
//         //             console.log(data);
//         //         })
//         //     })
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


/////////////////////////////////////Promise oxshash
const call=(callback) => {
    const person={
        name:'Mohina', 
        age:21
    }
    callback(person)
}
call((data)=>{
    setTimeout(()=>{
        console.log('Bazadan malumot keldi');
        data.baby=true;
        return func (data);
    },2000) 
})

let func=(data)=>{
    console.log(data);

}