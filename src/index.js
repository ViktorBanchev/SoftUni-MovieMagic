import express from "express"

const app = express();

app.listen(5000, () => {
    console.log("Listening to https://localhost:5000")
    
})

console.log("It works!");


