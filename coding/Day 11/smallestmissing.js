var arr=[];
var counter=0;
var i;
var readline=require('readline');
var prompts=readline.createInterface(process.stdin,process.stdout);
prompts.question('Enter size of array',function(size){
    console.log('Enter elements in array in ascending order just miss a single element like (0,1,2,4,5,6)');
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
    missing();  
}
});
}

function missing(){
    for(i=0;i<arr.length;i++){
     if(arr[i]!=i){
         break;
     }
        
    }
    if(i==arr.length-1){
        console.log(++i +' is the smallest number which is missing');
    }
    else{
console.log(i +' is the smallest number which is missing');
process.exit();
    }
}