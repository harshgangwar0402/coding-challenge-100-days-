/*program to count the number of occurence of characters in a string*/

var count=0;
counter=0;
var arr=[];
var newarr=[];
var i=0;
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter any string',function(str){
   str= str.split('').sort().join('');
    console.log(str);
for(i=0;i<str.length;i++){
    for(j= 0;j<str.length;j++){

        if(str[i]==str[j]){
            count++;
        }
       
        
    }

    
        arr.push(str[i]);
    arr.push(count);
    count=0;
    counter=0;
    }

console.log('occurence of '+arr[0]+' is '+arr[1]);
i=2;
while(i<arr.length){
     if(arr[i]!=arr[i-2])
{
    console.log('occurence of '+arr[i]+' is '+arr[i+1]);
}
i=i+2;
}
});



