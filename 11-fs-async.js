const { log } = require('console');
const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf-8',(err,result) => {
    if(err){
        console.log("Error: "+ err);
        return;
    }
    const first = result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/result-async.txt',`
        ${first}\n\n${second}`,
        (err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log(result);
            
        })
    })
})
