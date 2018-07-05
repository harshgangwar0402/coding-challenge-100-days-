var str=1;
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question("Enter any number whose factor you want to calculate",function(num){
for(var i=2;i<=num;i++)
{
    if(num%i==0)
       str +=','+i;S 
}
console.log('factors of '+num +' is '+str);

});