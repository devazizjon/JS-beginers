// let num
// try{
//     num=7
//     if(num>8){
//          throw Error(`Error`)
//     }else{
//         console.log('namtija keldi');
//     }
   
// }catch(e){
//     num=num +3
//     console.log(e);
// } 
// console.log(num);


try {
    let a = 4
    let b = 0

    if (b == 0) {
        throw Error(`Mahrajda nol bolishi mumkin emas`)
    } else {
        console.log(a / b);
    }
} catch (e) {
    console.log(e.message);
}