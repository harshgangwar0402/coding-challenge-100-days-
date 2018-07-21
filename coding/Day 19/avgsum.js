/*program to calculate sum and average of elements of arrays*/
var arr=[];
var counter=0;
var sum=0,avg=0;
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
    average();    
}
});
}
function average(){
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
        }
        avg=sum/(arr.length-1);
console.log("sum is "+sum);
console.log("average is "+avg);
process.exit();
    }