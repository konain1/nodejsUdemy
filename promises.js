

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

    


   



tatkalTicket(700,function(msg){

console.log(msg)

},function(msg){
    console.log(msg)
})