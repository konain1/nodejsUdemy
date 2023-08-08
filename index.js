


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
        callback("hi")
            console.log("this is amazing")
        
    }, 1000);
}

function Fetchdata(func){
    console.log("this is old function")
    setTimeout(() => {
        func("old is gold")
    }, 1000);
}

Fetchdata(function(c){
    console.log(c)
})




// console.log(timer)
fetchData( (cb)=>{
    console.log("inside")
    setTimeout(() => {
        console.log(cb)
        }, 5000);
   
})

console.log("asyc")
// person.eat()