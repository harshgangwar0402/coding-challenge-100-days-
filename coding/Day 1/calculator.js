var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question("ENTER first number",function(a){
prompts.question("Enter another number",function(b){
     prompts.question("Enter what kind of operation you want to perform on numbers(+,-,/,%,*)",function(op){
         a=parseInt(a);//for coneverting string into integer
         b=parseInt(b);
         switch(op){
             case '*': console.log('multiplication of '+a+' and '+b+'is'+a*b);
             break;
             case '+':console.log(a+b);
             break;
             case '/':console.log(a/b);
             break;
             case '%': console.log(a%b);
             break;
             case '-':console.log(a-b);
             break;
             default: console.log('Wrong choice');
         }
     
     });
    

});
});