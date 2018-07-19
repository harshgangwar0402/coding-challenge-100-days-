var pusharray=[];var arr=[];
var newarr=[];
var counter=0;
var elecounter=0;
var ntemp;
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
    newarr=arr;
    consecutivearray();
    
}

});
}
function consecutivearray(){
    
    for(i=0;i<arr.length;i++){
 for(j=0;j<arr.length;j++){
if(arr[i]<arr[j]){
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}
console.log(arr);

 }
}
pusharray.push(arr[0]);
 for(var k=1;k<arr.length;k++){
     
      if(arr[k]-arr[k-1]==1)
      {
          pusharray.push(arr[k]);      }
 }
 if(arr[k+1]-arr[k]==1)
      {
       
       pusharray.push(arr[k+1]);   
      }
console.log(pusharray);
}