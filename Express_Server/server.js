const express = require("express")
const app = express()

app.get("/", function(request, response){
    response.send("Sup!!")
})
app.get("/contact", function(request, response){
    response.send("Contact me at subodh@gmail.com")
})
app.get("/about",function(request, response){
    response.send("Lorem ipsum dolor sit amet.")
})

app.listen(3000, function(){
    console.log("Server started.")
})
