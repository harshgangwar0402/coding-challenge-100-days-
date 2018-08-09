/* whether the year is leap year or not*/
var x;
const readline=require('readline');
const prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter year',function(year){
    x=(year % 100===0)?(year%400===0):(year%4===0);
    console.log(x);

})