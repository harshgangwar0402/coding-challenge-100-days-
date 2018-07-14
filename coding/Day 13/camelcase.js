var i;
var newstr=[];
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter any sentence',function(str){
i=0;
while(i<str.length){
   if(i==0){
   newstr[i]=str[i].toUpperCase();
      }
   else 
     if(str[i]==' '){
         newstr[i]=' ';
       newstr[i+1]=str[i+1].toUpperCase();
   
       i++;
    }
   else
   {newstr[i]=str[i].toLowerCase();
    
}
i++;
}

console.log(' string is'+newstr);
    
});