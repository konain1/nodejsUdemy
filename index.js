


const fs = require('fs')


fs.writeFileSync('hello.txt',"hello from nodejs");

const person = {

    cat:'doora',

    eat:()=>{
        console.log(this.cat)
    }
    
}
let i = 0
const stopIt = setInterval(() => {
    i++
    console.log(i)
    if( i == 10){
        clearInterval(stopIt)
    }
       
},1000);







const fetchData = (callback)=>{
    setTimeout(() => {
        callback("hello world")
    }, 1000);
}




// console.log(timer)
fetchData( (cb)=>{
    console.log("inside")
    setTimeout(() => {
        console.log(cb)
    }, 5000);
   
})

console.log("asyc")
// person.eat()