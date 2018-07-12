var arr=[];
var counter=0;
Var flag=1;
var temp;
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
    for(var i=0;i<arr.length &&flag;i++){
        Flag=0;
        for(var j=0;j<arr.length;j++)
        {
            if(arr[j]>arr[j+1]){
                Flag=1;
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                
            }
        }
    }
    console.log(arr);
}
