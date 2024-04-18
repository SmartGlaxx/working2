require("dotenv").config()
const express = require("express")
const PORT = process.env.PORT || 5000
const app = express()
const routerRoutes = require("./routes.js")
const mongoose = require("mongoose")
const cors = require("cors")

app.use(cors())
app.use(express.json())
app.use("/", routerRoutes)
app.get("/",(req, res)=>{
    res.send("WORIKIGN")
})


const runServer = async()=>{
    try{
        await mongoose.connect("mongodb+srv://segbuchulem5:segbuchulem12345@cluster0.zqdkzpd.mongodb.net/csis-3380-exam-db?retryWrites=true&w=majority")
        app.listen(PORT, ()=>{
            console.log(`App running on port ${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

runServer()
