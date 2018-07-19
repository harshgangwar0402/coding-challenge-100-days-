var empty=require('is-empty');

var fs=require('fs');
var student={};


var csv=require('fast-csv');
var ws=fs.createWriteStream('my.csv',{'flags':'a'});
var readline=require('readline');
fs.createReadStream('my.csv')
.pipe(csv())
.on('data',function(data){
    
    if(empty(data)){
        csv.write([['name','registration','physics','chemistry','maths','percentage','course']
    ],{headers:true}).pipe(ws);
    fs.appendFile('my.csv','\n',function(err){
    
    });
        
    }
}) 
.on('end',function(data){
   
    if(empty(data)){
        csv.write([['name','registration','physics','chemistry','maths','percentage','course']
    ],{headers:true}).pipe(ws);
    fs.appendFile('my.csv','\n',function(err){
    
    });
}  
    

});



var prompts=readline.createInterface(process.stdin,process.stdout);
console.log('Enter student record');

writefile();


function writefile(){
    
   
prompts.question('Enter student name' ,function(name){
    prompts.question('Enter registration number ',function(num){
        prompts.question('Enter marks of physics ',function(phy){
            prompts.question('Enter marks of chemistry ',function(chem){
                prompts.question('Enter marks of maths ',function(math){
                   prompts.question('Enter your percentage of 12th standard',function(perc){
                       prompts.question('Enter course opted',function(course){
                       
                       csv.writeToStream(fs.createWriteStream("my.csv",{flags:'a'}),
                           [[name,num,phy,chem,math,perc,course]],{headers:true});
                           fs.appendFile('my.csv','\n',function(err){

                        });
                       
                       prompts.question('Want to enter more records(y/n)',function(choice){
                         if(choice=='y'){
                            
                         writefile();  }
                         else
                         fetchdata();
                       })
                             
                       })

                   })
                })
            })
        })
    })
    
})

    
}
function fetchdata(){
fs.createReadStream('my.csv')
.pipe(csv())
.on('data',function(data){
    console.log(data);
}) 
.on('end',function(data){
    console.log('done');
});
}