

// const fetchData = ()=>{
//     const promise = new promise(res,rej){
//         res("hello world")


//         return promise;
//     }
// }


const colorChanged = (newColor,timer,DoNext)=>{

    setTimeout(() => {
        
        console.log(newColor)
        DoNext()

    }, timer);
}

colorChanged("red",1000,function(){
    colorChanged('green',1000,function(){
        colorChanged('yellow',1000,function(){
            console.log("call back hell")
        })
    })
})
