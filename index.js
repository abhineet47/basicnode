
const app = require("express")();
const PORT = 5000;

app.get("/",(req,res)=>{

    res.send({message:"Working fine2"});

})
app.listen(PORT,function(){
    console.log(`server started at port ${PORT}`)
});


