/*program to reverse the binary representation of any number*/


var num,a;
var arr=[];


var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter any number',function(num){
   var i=0;

    while(num!=0)
     {
         a=parseInt(num%2);
         arr[i]=a;
         num=parseInt(num/2);
         i++;
     }
     console.log(arr);
    });

