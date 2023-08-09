

// const fetchData = ()=>{
//     const promise = new promise(res,rej){
//         res("hello world")


//         return promise;
//     }
// }


// const colorChanged = (newColor,timer,DoNext)=>{

//     setTimeout(() => {
        
//         console.log(newColor)
//         DoNext()

//     }, timer);
// }

// colorChanged("red",1000,function(){
//     colorChanged('green',1000,function(){
//         colorChanged('yellow',1000,function(){
//             console.log("call back hell")
//         })
//     })
// })


function tatkalTicket(price,booked,failed){
    const delay = Math.floor(Math.random() *10)

    setTimeout(() => {

        if(delay > 4){
            failed("try again")
        }else{
            booked("happy journey")
        }
        
    }, delay*100);

}

    


   



tatkalTicket("firtsTry",function(msg){

console.log(msg)

tatkalTicket("2ndTry",function(secMsg){
    console.log("2nd time "+secMsg)
},function(errMsg){
    console.log("2nd time not able to make ticket"+errMsg)
})

},function(msg){
    console.log(msg)
})