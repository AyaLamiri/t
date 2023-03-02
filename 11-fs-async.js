
const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log(result)
        const second = result;
        writeFile('./content/result-async.txt',`here is the result of the async : ${first}, ${second}`,(err,result)=>{
            if(err){
                console.log(err)
                console.log("error")
                return
            }
            console.log("thre result is",result)
        })
    })
})
