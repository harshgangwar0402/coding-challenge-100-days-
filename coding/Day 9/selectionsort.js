var arr=[];
var counter=0;
var min;
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter size of array',function(size){
    console.log('Enter elements in array');
    readarray(size);

});
function readarray(size){
prompts.question('',function(ele){
ele=parseInt(ele);
arr.push(ele); 
if(counter<size-1){
       
    counter++;
    readarray(size);
}
else{
    console.log(arr);
    sort();    
}
});
}
function sort(){
for(var i=0;i<arr.length-1;i++){
    min=i;
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j;
        }
    }
    temp=arr[min];
    arr[min]=arr[i];
    arr[i]=temp;
}
console.log('array after sorting is'+arr);
}