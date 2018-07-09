var arr=[];
var counter=0;
var a,b;
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
    console.log('largest pair of elements are');
    largestpair();
    
}
});
}
function largestpair(){
    a=arr[0];b=arr[1];
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
              if(arr[i]*arr[j]>a*b)
              {a=arr[i];
               b=arr[j];  
               
              }
    }

}
console.log('{'+a+','+b+'}');
}