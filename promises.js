

// const fetchData = ()=>{
//     const promise = new promise(res,rej){
//         res("hello world")

const { promises } = require("dns");


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

    


   



// tatkalTicket("firtsTry",function(msg){

// console.log(msg)

// tatkalTicket("2ndTry",function(secMsg){
//     console.log("2nd time "+secMsg)
// },function(errMsg){
//     console.log("2nd time not able to make ticket"+errMsg)
// })

// },function(msg){
//     console.log(msg)
// })

function fakePromise(url){
    return new Promise((res,rej)=>{
        const delay = Math.floor(Math.random() *10) *100;

        setTimeout(() => {
            if(delay< 300){
                res()
            }
            else{
                rej()
            }

        }, delay);
    });
}


const request = fakePromise("mommnetoo")

request.then(()=>{
    console.log("it worked")
}).catch(()=>{
    console.log("oh No")
})