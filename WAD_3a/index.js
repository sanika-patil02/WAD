//1)Create package.json file(cmd)
//2)Download express
// 3)create index.js file in same folder(wad_3a)
// 4)import express in index.js file
// 5)create folder "public" in same wad 3a
// 6)create index.html in public folder

const express=require('express'); //Express module importes in this project
const app=express(); //calling express function

// 7)To open index.html on server follow these steps:
// by using this variable app we will serve index.html on server
// First give path of index.html,then give port no
app.use(express.static('public'))

//here,1st parameter is port no & 
    // 2nd is callback function to check whether server is started or not
app.listen(4000,()=>{  
    console.log("Server is Started");
})

// Before running any js file,1st run this command on cmd
// node index.js

// On browser type-localhost:4000

