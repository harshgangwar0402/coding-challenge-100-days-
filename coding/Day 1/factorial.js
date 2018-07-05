var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter any number',function(a){
var fact=1;
    for(var i=1;i<=a;i++){
    fact=fact*i;
}
console.log(fact);
});