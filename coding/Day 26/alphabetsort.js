/*sorting alphabet of a word if the first alphabet is in uppercaset then it has the highest priority*/
const readline=require('readline');
const prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter word',function(str){
   console.log (str.split("").sort().join(""));  
})