var counter=1;
var counter1=1; //for counting number of 1's in array
var counter0=1; //for counting number of 0's in array
var arr=[];
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('ENter size of array',function(size){
getarray(size);
});
function getarray(size){
    prompts.question('ENter elements in array(only 1 or 0)',function(ele){
        if(ele==1||ele==0){
            ele=parseInt(ele);
            arr.push(ele);
            counter++;
        }
        if(counter<=size){
         getarray(size);
        }
        else if(counter>size){
         sortarray();
          
        }
    });
}
function sortarray(){
for(var i=0;i<arr.length;i++){
    if(arr[i]==1)
    counter1++;
    else
    counter0++;
}
for(var j=0;j<arr.length;j++){
    if(j<counter0-1)
    arr[j]=0;
    else
    arr[j]=1;
}
printarray();
}
function printarray(){
    console.log('Array after sorting is '+ arr);
}