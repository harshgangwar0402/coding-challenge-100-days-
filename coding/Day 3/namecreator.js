/*prgram to find your name in a given string*/
var counter=0;
var str='sjhsnmnsrmjllhlsaklhjnnlnllnsa';
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question("enter your name ",function(name){
for(var i=0;i<name.length;i++){
    for(var j=0;j<str.length;j++){
        if(name[i]==str[j])
        {
        counter++;
      break;
        }   
    }
}
if(counter==name.length)
console.log(name+' can be crated from the given string i.e.'+ str);
else
console.log('name cannot be created');
process.exit();
});