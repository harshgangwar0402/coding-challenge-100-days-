var i;
var arr=[];
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter any number',function(num){
i=0;
while(num>0){
    arr[i]=num%2;
    num=num/2;
    num=parseInt(num);
    i++;
}
for(var j=arr.length-1;j>=0;j--)
console.log(arr[j]);
});
