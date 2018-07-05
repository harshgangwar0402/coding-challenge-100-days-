/*program to print table of any number*/
var r1=require('readline');
var prompts=r1.createInterface(process.stdin,process.stdout);
prompts.question("Enter Any number",function(num){
    console.log('table of'+ num +'is :')

for(var i=1;i<=10;i++)
{
    console.log(num+'*'+i+'='+num*i);
}
});
