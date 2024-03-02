 //Global - no window

 //__dirname - path to current directory
 //__filename - file name
 //require - function to use module
 //module - info about current module
 //process - infpr about env where the program is being executed
 
 console.log(__dirname);
 console.log( __filename);
 console.log(require);
 console.log(module);
 console.log(process);
 setInterval(() =>{
    console.log(new Date());
 },1000)