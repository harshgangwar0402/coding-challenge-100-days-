
var express=require('express');
var app=express();

app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('index');
})
app.get('/show',function(req,res){
    res.send("name is "+req.query.name+" and age is "+req.query.age);
    
}) 
app.listen(3000,function(err){
    if(err)
    throw err;
});
console.log("Express running");