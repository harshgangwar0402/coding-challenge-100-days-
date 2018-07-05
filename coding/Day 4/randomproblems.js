/*program to generate random addition and subtraction problems*/

var x,y,sum,diff;
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
function getrange(){
prompts.question('enter minimum and maximum range for generating random numbers',function(min){
    prompts.question('',function(max){
        min=Math.ceil(min);
        max=Math.floor(max);
    getrandom(min,max);
    });
});
}
  function getrandom(min,max){     
x=Math.floor(Math.random()*(max-min+1))+min;
    y=Math.floor(Math.random()*(max-min+1))+min;
    sum=x+y;
    diff=x-y;
   console.log('sum of two random generated number is'+sum);
   
   console.log('difference of two random generated number is'+ diff);
   prompts.question('Enter the value of any number',function(val){
       if(val==x||val==y){
           console.log('your answer is correct');
      
           sleep(5000).then(()=> {
               console.log('................');
            getrandom(min,max);
          })  ;
       }
       else{
           console.log('Your answer is wrong');
          sleep(5000).then(()=> {
               console.log('.........');
            getrandom(min,max);
          })  ;
           
       }
   });
}

function sleep(time){
    return new Promise((resolve)=> setTimeout(resolve,time));
}
  

getrange();