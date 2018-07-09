/*reshuffle a given array with all unique values in the way so 
that, every odd index elements should be greater than it's left and right element.*/ 
var arr=[];
var counter=0;
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
    console.log(arr);oddele();
    
}
});
}
function oddele(){
    for(var i=1;i<arr.length-1;i+=2)
    {
        if(arr[i]<arr[i-1]){
            temp=arr[i];
            arr[i]=arr[i-1];
            arr[i-1]=temp;
        }
        if(arr[i]<arr[i+1]){
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
        }
        
    }
    console.log("odd indexes elements are greater tha it's left and right element "+arr);
process.exit();
}