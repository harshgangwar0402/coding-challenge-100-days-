var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter temperatur in degree celsius',function(temp){
temp=temp*1.800+32.00;
console.log('temperature in fahrenheit is '+ temp);
prompts.question('Enter temperatur in fahrenheit',function( tem){
    tem=(tem-32)/1.8000;
    console.log('temperature in celsius is '+ tem);
});
});