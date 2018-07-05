var revstr='';
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question("ENter string\n",function(str){
    for(var i=str.length-1;i>=0;i--){
        revstr+=str[i];
    }
    console.log(revstr);
});
