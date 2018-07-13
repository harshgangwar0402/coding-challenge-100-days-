var num,a;
var arr=[];
revarr=[];

var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter any number',function(num){
   var i=0;

    while(num!=0)
     {
         a=parseInt(num%8);
         arr[i]=a;
         num=parseInt(num/8);
         i++;
     }
  for(var j=arr.length-1;j>=0;j--)
      console.log(arr[j]);
      process.exit();
    })
