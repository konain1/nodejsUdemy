

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

 const fakePromise =(url)=>{
    return new Promise((res,rej)=>{
        const delay = Math.floor(Math.random() *10) *100;

        setTimeout(() => {
            if(delay< 300){
                res("resolve")
            }
            else{
                rej("rejected")
            }

        }, delay);
    });
}



// Nested promise

// const request = fakePromise("mommnetoo")

// request.then(()=>{
//     console.log("it worked")
//     fakePromise("second").then(()=>{
//         console.log("again worked")
//     }).catch(()=>{
//         console.log("agin not worked")
//     })
    
// }).catch(()=>{   
//     console.log("oh No")
// })


// better Approach Promise

fakePromise("konain7.com").then(function(){
    console.log("firstTime worked")
    return fakePromise("ko9.com")
}).then(function(){
    console.log("second time worked");
    return fakePromise("kaif7.com")
}).then(function(){
    console.log("third time also worked")
}).catch(()=>{
    console.log("Errr!!!!")
})  